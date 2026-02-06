
# AI: Intro For Techies

---


# AI must be configured

AI must be configured - before being used else it goes off rails.

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

# Does context get full by the number of words, or complexity of words, or a combination of both, or something else?

All modern LLMs track context size using tokens.

What’s a token?
- A token is a chunk of text. Roughly: 1 token ≈ 3–4 characters in English

What doesn’t matter
- ❌ “Complexity” of ideas
- ❌ How advanced the vocabulary is
- ❌ Whether the code or text is logically dense

---

# Prompting

TODO: Look further into guardrails
TODO: Look further into scope

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



