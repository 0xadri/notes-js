
# AGENTS.md and CLAUDE.md



# AGENTS.md superior to CLAUDE.md

AGENTS.md is the default for most/all CLIs.

Best to simply create a symlink from CLAUDE.md to AGENTS.md if you're using Claude Code.


## User-Level And Project-Level AGENTS.md

AGENTS.md get loaded at **every single new session**.

So keep them short.

Rule of thumb:
- User-level AGENTS.md should be under 60 lines
- Project-Level AGENTS.md should be under 200 lines
- Together less than 300 lines


## User-Level AGENTS.md

Typical rules:

- When writing commit messages, NEVER auto-add your agent name as co-author.
- When writing or substantially editing long Markdown files, put each full sentence on its own Line.
Preserve normal Markdown structure, but avoid wrapping multiple sentences onto one physical line.
- When making technical decisions, do not give much weight to development cost.
Instead, prefer quality, simplicity, robustness, scalability, and long term maintainability.
- When doing bug fixes, always start with reproducing the bug in an EZE setting as closely aligned with how an end use
This makes sure you find the real problem so your fix will actually solve it.


## Does it make sense to use tools like Caveman to reduce the number of words in AGENTS.md ?

TLDR: yes, on non-sensitive parts.

Best use case:
- Files read often by agent
- Repetitive guidance
- Stable rules, low ambiguity
- Token budget matters across long sessions

Bad use case:
- **Safety rules**
- **Anything needing nuance or exact interpretation**
- Rarely read files
- Onboarding docs for humans

For `AGENTS.md` specifically:
- Good candidate for compression if file bloated with repeated style guidance
- Bad candidate if compression makes constraints ambiguous or easier to misread
- Highest-risk sections: destructive-action rules, git policy, security boundaries, project hard stops

Practical rule:
- Compress style/tone/process sections
- Keep safety/architecture/contract rules explicit
- Prefer “short and precise” over “cryptic”

Good pattern:
1. Keep canonical human-readable version
2. Compress duplicated wording
3. Preserve exact do/don't rules
4. Test in real sessions: did behavior stay same?

So: yes, but selective compression beats full caveman-ization. If you want, I can review your `AGENTS.md` and tell you which sections safe to compress and which should stay verbose.


