

# Vocab

structured output = structured machine-readable output 

---

# AXI

---

What's AXI ? Explain like im 5
What are the 10 most important things to know about it?
Why would anyone use this over other existing tools?
What is the learning curve for someone starting with using AI assisted software development practices?
https://github.com/kunchenguid/axi


AXI not single app. AXI is set of design rules for building tools that AI agents can use better.

Like I'm 5:

AXI is like making special kid-sized tools for robot helpers.

Normal tools:
- made for humans
- talk too much
- hide important stuff
- waste turns

AXI tools:
- speak short and clear
- show most useful info first
- avoid extra chatter
- help AI finish task with fewer mistakes


**10 Important Things**
 1. AXI means Agent eXperience Interface.
 2. It is design standard/paradigm, not one standalone product.
 3. Goal: make command-line tools easier for AI agents, not humans first.
 4. Main claim: better accuracy with lower token cost than MCP or regular CLI tools.
 5. Big idea: token budget matters. Shorter output can make AI cheaper and more reliable.
 6. AXI prefers compact output format called TOON instead of verbose JSON.
 7. AXI tools should return minimal schemas, not giant objects with many fields.
 8. AXI tools should truncate large content by default and offer --full when needed.
 9. AXI tools should include summaries, counts, and next steps so agent needs fewer follow-up calls.
10. AXI ecosystem already has examples like gh-axi for GitHub and chrome-devtools-axi for browser automation.


**Why Use This Over Existing Tools**

Main reason: existing tools were not designed for AI.

Compared with regular CLI:
- regular CLI often optimized for humans reading terminal
- output can be noisy, inconsistent, or spread across many commands
- AI may need extra turns to ask follow-up questions

Compared with MCP:
- MCP gives structured tools, but payloads can be verbose
- tool schemas can be large
- more back-and-forth can mean more cost and latency

Why people pick AXI:
- fewer tokens
- fewer turns
- lower cost
- simpler outputs
- better default behavior for agents
- more deterministic, non-interactive workflows

Repo’s own benchmark claims:
- gh-axi beat plain gh and GitHub MCP on success and cost in tested tasks
- chrome-devtools-axi matched or beat MCP browser setups on cost/turns

Important caveat:
- benchmarks are published by project authors
- useful signal, but still treat as project-owned evaluation, not independent standard


**Learning Curve**

For someone starting AI-assisted software development:

Low to medium.

If you already know:
- terminal basics
- CLI tools
- how AI coding agents work

Then AXI should feel pretty approachable.

Rough curve:
1. Beginner to AI-assisted dev: 2-6 weeks to get comfortable with prompting, review habits, and tool workflows.
2. Adding AXI on top: 1-3 days to understand concept, maybe 1 week to use it naturally.
3. Building your own AXI-compliant tool: medium effort, because you must learn its 10 principles and design for agents intentionally.

Hard part usually not AXI itself. Hard part is learning good AI-dev habits:
- give clear tasks
- inspect outputs
- verify changes
- manage context
- know when to ask for more detail vs less

**Short Version**

AXI is “tool design for AI agents.”  
Use it when you want AI to work with software tools more cheaply, with less noise, and with fewer mistakes.

If you want, I can also give:
1. `AXI vs MCP vs normal CLI` table
2. `how to start using AXI in real workflow`
3. `plain-English summary of all 10 principles`' | pbcopy



---

# no-mistakes

---

## no-mistakes use a "git proxy remote" , what is that?

`git proxy remote` means fake local Git remote placed in front of real remote.

In `no-mistakes` flow:

1. `no-mistakes init` creates remote named `no-mistakes`
2. That remote points to local bare repo on your machine, not GitHub directly
3. When you run `git push no-mistakes`, push goes into local proxy first
4. Tool spins disposable worktree, runs checks/fixes/review pipeline
5. Only if gate passes, tool forwards branch to real remote like `origin` or your fork
6. Then it opens PR

So `no-mistakes` remote acts like checkpoint/proxy, not destination of record.

From README:
> "`no-mistakes` puts a local git proxy in front of your real remote."

Practical effect:
- `origin` = actual GitHub repo
- `no-mistakes` = local gatekeeper remote
- push to `no-mistakes`, not `origin`, when you want pipeline enforcement



## Why is this needed? Couldnt we simply run the CI locally on what is about to be pushed to true remote?

Yes, could run checks locally without proxy. Proxy exists for stronger Git workflow guarantees.

Why proxy useful:

1. `git push` integration
Git already knows push means “send branch somewhere”. `no-mistakes` hooks into that exact moment by making `no-mistakes` remote push target. No separate “run tool, then maybe push” step to forget.

2. Gated forwarding
Proxy can say: branch does not reach real remote until all gates pass. Local CI alone usually only tells you pass/fail; it does not own forwarding step unless you build extra wrapper logic around push.

3. Isolated disposable worktree
Pipeline runs in separate worktree, not your active checkout. That matters because `no-mistakes` may:
- apply safe auto-fixes
- create commits
- inspect/clean generated files
- retry steps
- prepare PR state

Doing this in your live worktree risks messing with in-progress files.

4. Atomic behavior
Model becomes:
- push to proxy
- proxy snapshots branch
- pipeline runs on snapshot
- if green, forward exact validated result to real remote

That tighter than “run local CI on current branch, then push later”, because branch might change between check and push.

5. Works for TUI/agent flows too
Same gate can handle:
- committed branch via `git push no-mistakes`
- uncommitted work via `no-mistakes`
- agent-driven flow via `/no-mistakes`

Proxy gives one backend mechanism for all three.

6. Clean PR automation
Because proxy owns forwarding, it can also:
- push validated branch to real remote
- open PR
- watch CI
- apply follow-up fixes

Without proxy, tool becomes more like “local checker”, not “safe delivery pipeline”.

So short answer:

Local CI check is possible.
Proxy remote exists because `no-mistakes` wants delivery control, isolation, and guarantee that only validated branch reaches true remote.



# This flies a bit over my head. If I understand correctly, the main point is to isolate the branch being worked on to 1/ run checks on it, 2/ run fixes on it, and if some fixes were applied then it does not impact the original branch. Is that correct?

Yes. That core point.

More exact:

1. Take branch snapshot
2. Run checks on snapshot in separate worktree
3. Apply safe fixes there if needed
4. Only forward validated result to real remote if all passes
5. Keep your current working tree untouched while all this happens

Why isolation matters:
- your branch may have uncommitted work
- tool may rewrite files or create commits
- tool may need multiple attempts
- failed run should not dirty current checkout

So your summary is right, with one extra important piece:
Isolation not only avoids impacting original branch, it also lets tool guarantee exact validated version is what gets pushed onward.

Think:
- your checkout = workshop
- proxy/worktree = test lab
- real remote = shipping dock

Only item that passed lab gets shipped.



# no-mistakes use a "resident daemon" , what is that?

Yes. Here `resident daemon` means long-running background `no-mistakes` process stays alive between commands.

In `no-mistakes`, daemon does this:
- waits for pushes from gate repo
- creates disposable worktrees
- runs pipeline steps
- tracks run state in SQLite
- streams status to TUI / AXI
- survives after CLI command exits

Why they use daemon:

1. `git push` cannot stay attached
Push finishes fast after writing into local gate repo. Actual validation may take minutes. Daemon continues work after push command returns.

2. Multiple clients can attach later
You can push now, then run `no-mistakes` later to inspect run. That needs persistent process holding state and events.

3. Long-running orchestration
Pipeline includes review, tests, docs, lint, push, PR, CI watching. Too much for short one-shot hook process.

4. Crash/restart handling
Daemon owns run bookkeeping, cleanup, cancellation, recovery.

5. Branch serialization
If you push same branch again, daemon can cancel old run and start new one cleanly.

So compared to your earlier model:

- isolated worktree = where checks/fixes happen
- resident daemon = manager that keeps whole system running and coordinated

Very short:
Worktree is lab.
Daemon is lab manager staying on duty.




---
---
---


# Treehouse

> Explain in details a typical workflow if I work with 3 tasks, when to create what branch, when to call treehouse, when to commit, when to push, when/how to merge worktree changes back and with which branch, etc. step by step 
https://github.com/kunchenguid/treehouse

### Setup: 3 Parallel Tasks (A, B, C)

Scenario has 3 tasks: `feat/task-a`, `feat/task-b`, and `feat/task-c`.
Base branch is `main`.

---

### Step 1: Prep main repo

Open terminal in main repo root.
Run `git fetch origin main`.
Ensure working tree is clean.

---

### Step 2: Acquire worktrees (3 terminal windows or tabs)

Open 3 terminal tabs.

In Tab 1:
Run `treehouse`.
Subshell opens in worktree 1 on detached HEAD at latest `main`.

In Tab 2:
Run `treehouse`.
Subshell opens in worktree 2 on detached HEAD at latest `main`.

In Tab 3:
Run `treehouse`.
Subshell opens in worktree 3 on detached HEAD at latest `main`.

*(Alternative without subshells: run `path=$(treehouse get --lease)` in scripts or background agents).*

---

### Step 3: Create feature branches inside each worktree

Repo policy forbids committing directly on detached HEAD or `main`.
Create feature branch immediately after entering worktree.

Tab 1:
Run `git checkout -b feat/task-a`.

Tab 2:
Run `git checkout -b feat/task-b`.

Tab 3:
Run `git checkout -b feat/task-c`.

---

### Step 4: Run agents & work concurrently

Start agent or coding in each tab.

Tab 1 works on Task A.
Tab 2 works on Task B.
Tab 3 works on Task C.

**Crucial OutKrew project caution:**
Worktrees share PostgreSQL database and network ports if running live backend servers or integration tests.
Run frontend tests and backend unit tests independently per worktree.
Do NOT run backend integration tests simultaneously across worktrees against same test DB.

---

### Step 5: Verify, commit, and push in each worktree

When task finishes in a tab, verify changes first.
Run typecheck, lint, and relevant unit tests.
Stage files and commit on the feature branch.
Run `git push -u origin feat/task-a` (or `task-b`, `task-c`).

---

### Step 6: Merge changes back

Do NOT merge branches directly inside the temporary worktree.
Merge happens through remote pull request or git merge into `main`.

Open GitHub PR for each pushed branch.
Review and merge PR into `main` on GitHub.

If merging locally instead of GitHub PR:
Switch back to main repo terminal.
Run `git checkout main && git pull origin main`.
Run `git merge --no-ff feat/task-a`.
Push updated `main` to remote.

---

### Step 7: Clean up and return worktree to pool

Once branch is pushed to remote, worktree job is done.

In each tab:
Type `exit`.
Treehouse terminates lingering background processes automatically.
Treehouse resets worktree and returns slot back to pool for next tasks.
Unmerged work alert triggers if uncommitted changes remain.

If leased via `--lease`:
Run `treehouse return <worktree-path>`.

---

### Step 8: Update main repo for next round

Return to main checkout terminal.
Run `git checkout main && git pull origin main`.
Optionally delete local feature branches (`git branch -d feat/task-a`).
Pool worktrees are now cached, pre-built, and ready for next batch.


---

> Just seems like the same as when working with regular branches. Isnt it?

Git branch flow same, file system reality completely different.

With regular branches:
Only one branch checked out in folder at a time.
Switching branches rewrites files on disk.
Three agents in same folder overwrite each other's active files.
Uncommitted edits block branch switches unless stashed.

With Treehouse worktrees:
Three separate directories on disk at same time.
All three share same .git history without extra clones.
Three agents edit, build, and test simultaneously without collision.
node_modules and build caches preserved across pool reuse.

Short version:
Branches organize commits.
Worktrees give parallel physical folders for concurrent agents.


