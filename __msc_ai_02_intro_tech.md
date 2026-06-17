
# AI: Intro For Techies

---

# What AI Does

AI does “best guesses”, it can do that BECAUSE it is non-deterministic (creative).

AI started with text prediction, for coding that meant "fancy code autocomplete".

---

# AI must be configured

By default AI does “best guesses”, it can do that BECAUSE it is non-deterministic (creative), so sometimes it goes off rails.

Hence AI must be "configured", guided.

Different possible config points:
 - in rules (permanent)
 - in commands/skills (occasional)
 - in the prompt itself (one off)

---

# Context Engineering: Best Practices

Remember: the AI "has amnesia" between chats. You must "refresh its memory" to make it work well, in Cursor that means using "permanent context" such as rules, and "current context" such as files relevant to the current task.

- Use a popular stack.
- Format prompt i.e. with markdown.
- Commit often. Commit every time you made a change you like.
- Use Cursor Checkpoint if you need to roll back.
- Write end-to-end tests. Unit tests can too easily be passed. Also test the feature manually if possible (i.e. the feature in the web app).
- Make Cursor write a plan if what you are asking is fairly ambitious. Tell it NOT to write any code while you are making the plan, as this conversation can take several back-and-forth.
- When making plans, create visual aids such as schemas, diagrams, and wireframes.
- Start new chats often - so context does not bloat.
- Keep context tight - be specific.
- Use Rules.

---

# Plan Mode vs Agent Mode

Plan Mode is just Agent Mode with "just answer. no changes." appended at the end of every prompt - it's a READ ONLY agent.

---

# Tools

Agents use tools to do specific things. Tools can be permissioned (enabled/disabled).

Ask user questions tool —> great for planning, i.e. when drafting specs and plans

---

# AGENTS.md vs CLAUDE.md vs copilot-instructions.md

`AGENTS.md` as the team handbook - self-sufficient, context-rich onboarding guide specifically optimized for machines rather than humans.

`copilot-instructions.md` is often just the same. You may want to simply reference `AGENTS.md`

Contains:
- Project overviews
- build and testing commands
- code style guidelines
- security guardrails
- constraints.

---

# SDD aka Spec Driver Development

AI-driven SWE practice typically involving three steps: create specs document, then a plan document, and finally implement. 

Catch mistakes as early as you can
- The plan doc depends on the specs doc, so every mistake or omission you make in the specs doc trickles down to the plan doc.
- Similarly, implementation depends on the plan doc so every mistake or omission you make in the plan doc trickles down to the implementation.

If the change is small enough, you may put specs and plan in a single document.

Recommended maximum total time from drafting specs doc to finished implementation: 6 hours. If longer, your change might be too big.

---

# Does context get full by the number of words, or complexity of words, or a combination of both, or something else?

All modern LLMs track context size using tokens.

What’s a token?
- A token is a chunk of text. Roughly: 1 token ≈ 3–4 characters in English

What doesn’t matter
- ❌ “Complexity” of ideas
- ❌ How advanced the vocabulary is
- ❌ Whether the code or text is logically dense

---

# Mental Model: Prompts vs Scripts

Two ways to automate something either scripting or AI prompting. 

A small prompt is kind of a small script, except it “costs” a lot more.

Prompts are to autonomous agents what scripts are to software: plugging small scripts into one another creates an entire software , plugging small prompts into one another creates autonomous agents

---

# Prompting

TODO: Look further into guardrails
TODO: Look further into scope

Prevent drift: continuously double check spec/plan is fully aligned, fully in sync with codebase, etc.

Prompt with as many constraints as possible.

Resolve questions before code starts: that’s when decisions are cheap.

Before executing prompt, ask if there are conflicting instructions?

You can build instructions and so on in chat mode by doing back-n-forth, and then switch to agent mode once you want to move the content to actual files.

PRD : Project Requirements Document

- Format the prompt well whether using markdown, xml or json.
- Models - strongest influencing parameter.
- Purpose - brief outline of the goal.
- Instructions - as many as needed, get AI help to break up the problem into a todo list.
  - Tasks - must have priority (low, mid, high), dependencies, difficulty
- Examples (sample outputs, data samples, wireframes, designs, etc).
- Variables ?
- Context - keep it tight

---

# Close The Loop

Close The Loop = Close The Feedback Loop = Code Quality Check = Code Quality Gate = Gate

Validate, test and review code. 

All tasks typically done prior to committing: 
- `lint`
- `typecheck`
- `unit tests`, `integration tests`, and `e2e tests`
- `build`

This phase is usually automated and optimised. This is done using skills/commands and subagents.

This phase is often mystified. Don't over think it. Just try to build you own gate on a small project.

---

# Skills

A simple, open format for giving agents new capabilities and expertise.

Specialized folders of instructions and resources.

Gives agents access to procedural knowledge and company-, team-, and user-specific context they can load on demand.

Goal: reduce repetitive detailed prompts, give context needed to reliably do work.

https://agentskills.io/

---

# Retrieval-Augmented Generation (RAG) 

RAG is an AI technique that enhances Large Language Models (LLMs) by connecting them to external knowledge bases.

It allows them to pull in up-to-date, domain-specific information before generating answers.

It makes responses more accurate, relevant, and factual, and reducing "hallucinations" without needing costly model retraining. 

It works by retrieving relevant data (like internal documents, databases, or web pages) based on a user's query, then augmenting the prompt with that data, and finally having the LLM use this enriched context to generate a grounded response, often with citations

Common use cases:
- Internal knowledge base Q&A
- Customer support bots
- Legal / medical / policy assistants
- Codebase or API documentation search
- Enterprise chat over company files

---

# MCP (Model Context Protocol) 

MCP is an open-source standard for connecting AI applications to external systems.

https://modelcontextprotocol.io/

---

# Prompting: Context

Context Window - keep it tight.

Too much `context` will make any model hallucinate.

Using `@-commands` to build `context` in Cursor and other AI IDEs

Issues With Larger Context:
- Hallucination risks increase with the context size
- More context means more expensive and more mistakes

Best Practices:
- Clear context regularly to maintain focused conversations.
- Break down tasks to the bare minimum complexity and version control are indispensable.

---

# My Workflow And Setup

Cursor with Claude.

Feels like doing pair programming, which is nice.

For specs and reqs: AI tends to mix up many topics tho, so I prefer to rewrite them most of the time, and use the AI generated content for inspiration, and ask AI to review my writings (provide tips, watch out for red flags, etc).

For coding: I never do "big asks" as I noticed it easily gets carried away and hallucinates, I never let it "think and code" the goal I ask to reach for more than 2-3min. This makes sure 1/ my prompt, goal(s), context, rules, and guardrails are well-defined and 2/ the scope of the task is well-limited, and 3/ I can catch mistakes/omissions and review the code in a reasonable amount of time.

For Quality: overall, it definitely helps to find potential improvements, find potential critical issues, improve web app performances, and more.

---

# TODO

Add scripts to skills to avoid AI when possible (i.e. bc date issue) and to reduce token usage.

Chars = Tokens -> so write docs as succint as possible, and use readable abbreviations as often as possible.

Does TOC help LLMs to jump straight to the part of the docs that is relevant ? or do they read everything no matter what?

Docs frontmatter: add filesize in tokens ?

Claude has built in tools. Is it possible to create tools ?



