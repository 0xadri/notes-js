
---

# Claude: Pending Qs

- none

---

# Claude: Features

1. Skills (formerly Custom Commands) --> for anything you copy/paste too often in your prompt window
2. CLAUDE.md
3. MCP
4. Rules & Memories

---

# Claude: Built-In Commands

Outside session
- `claude --continue`    # Resume latest session
- `claude --resume`      # Select from sessions

Inside session
- `/clear`	          # Clears conversation history and context - equiv to starting a new chat EXCEPT you lose the convo history !
- `/copy`               # Copy Claude's last response to clipboard as markdown
- `/rewind`              # Restore the code and/or conversation to a previous point                                                                             
- `/context`          # Visualize current context usage
- `/init`            # generate a starter CLAUDE.md file based on your current project structure, then refine over time.
- "Undo that"         # Have Claude revert its changes.

---

# Claude: Built-In Tools

`AskUserQuestion`	     # Asks multiple-choice questions to gather requirements or clarify ambiguity
`Skill`	                # Executes a skill within the main conversation
`Task`	                # Runs a sub-agent to handle complex, multi-step tasks

https://code.claude.com/docs/en/settings#tools-available-to-claude

---

# CLAUDE.md

**Populate it automatically using `/init`:**
- Generates a starter CLAUDE.md file.
- Analyzes codebase to detect build systems, test frameworks, and code patterns, 
- Gives a solid foundation to refine.


https://code.claude.com/docs/en/best-practices#write-an-effective-claude-md

---

# Claude: Skills (formerly Slash Commmands)

Must always have frontmatter with name and description:
```
---
name: fix-issue
description: Fix a GitHub issue
---

# Fix Issue

## When to use this skill
Use this skill when the user types 'Fix Github Issue'...

## How to fix issue
...
```

Other possible fields:

- `disable-model-invocation: true` if you want to make it behave like a command:
  - Prevents Claude from automatically loading or using the skill (for skills you only want to trigger yourself)
  - Reduces context cost to zero (skill descriptions won't load at session start)
  - The skill only activates when you explicitly call it (i.e. no unwanted deployment)

- `model` to specify model
  - `model: opus` 
  - `model: haiku` 

- `user-invocable: false` so only Claude can invoke the skill

https://code.claude.com/docs/en/skills

---

# Claude: Built-in Agents

explore agentYes, it's one of the built-in agent types available through the Task tool:

| Agent Type         | Purpose                                              |
|--------------------|------------------------------------------------------|
| `Explore`          | Fast codebase exploration - find files, search code  |
| `Plan`             | Design implementation plans, identify critical files |
| `Bash`             | Command execution (git, npm, etc.)                   |
| `general-purpose`  | Multi-step research tasks                            |
| `claude-code-guide`| Questions about Claude Code itself                   |

When Claude calls the Task tool, it specifies which agent type to use:

```
Task(subagent_type="Explore", prompt="Summarize docs/ directory...")
```

Why the explore agen is cool:

Runs in its own context, does the reading/searching, and returns just the summary. The main conversation stays lightweight.

---

# Claude: Layered Prompt

TODO

---

# Claude: Prompting: Dynamic Content in Prompts

Use Templates and Variables

Help save you time, test out different inputs, and get more consistent answers.

https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/prompt-templates-and-variables

https://www.reddit.com/r/ClaudeAI/comments/1gmcvxv/pro_tip_using_variables_in_prompts_made_claude/

---

# Claude: Rules

Rules provide system-level instructions to `Agent` and `Inline Edit`. 

Think of rules as **persistent** `context`, `preferences`, or `workflows`.

Rules can be applied to different scopes: `user` scope, `project` scope, and `folder` scope.

### Basic Examples

```markdown
# Questions and Responses
- Be concise in your responses
- If the task is unclear, ask clarifying questions
- Explain technical decisions in plain English
- Generate concise, actionable responses that minimize disruption to the developer’s workflow

# Languages and Frameworks
- Always use Tailwind v4 syntax and refer to the docs for v4. Never use v3
- Use TypeScript over JavaScript for any React or Next.js projects

# TypeScript
- Fix type errors immediately rather than working around them
- Never use 'any' type unless absolutely necessary with documented justification
- Do not ignore or suppress TypeScript errors – focus on clean, passing code

# Code Style
- Follow existing project structure and coding conventions
- Clean up unused code instead of leaving it "just in case"
- If something looks confusing, add a comment explaining why you did it that way
- Eliminate any redundant or speculative elements
- Identify potential issues in the code and suggest actionable fixes
- Always strive to produce high-quality, production-ready code that adheres to modern development principles
- Follow best practices and design patterns appropriate for the language, framework and project
- Prioritize clean, efficient, and maintainable code
- Write self-documenting code with descriptive naming
- Prioritize readability and developer experience
- Rigorously apply DRY and KISS principles in all code
- Deliver optimal, production-grade code with zero technical debt

# Testing
- Write tests for all new functions
- Use descriptive test names
- Aim for 80% code coverage

# Coding pattern preferences
– Always prefer simple solutions.
– Avoid duplication of code whenever possible, which means checking for other areas of the codebase that might already have similar code and functionality  
– Write code that takes into account the different environments: dev, test, and prod  
– You are careful to only make changes that are requested or you are confident are well understood and related to the change being requested  
– When fixing an issue or bug, do not introduce a new pattern or technology without first exhausting all options for the existing implementation. And if you finally do this, make sure to remove the old implementation afterwards so we don’t have duplicate logic.  
– Keep the codebase very clean and organized  
– Avoid writing scripts in files if possible, especially if the script is likely only to be run once  
– Avoid having files over 200–300 lines of code. Refactor at that point.  
– Mocking data is only needed for tests, never mock data for dev or prod  
– Never add stubbing or fake data patterns to code that affects the dev or prod environments  
– Never overwrite my .env file without first asking and confirming

$ Technical Stack
- TypeScript for the backend
- TypeScript, React.js, Tailwind for the frontend
- Separate databases for dev, test and prod

```

---

# Code Indexing

Double Check.

Claude code doesn't index the code at all. You need to do it yourself.

You run your code base through an embedding model to build a vector, graph, or vector graph database. https://github.com/vitali87/code-graph-rag


---

## Claude: Learning Resources

- https://anthropic.skilljar.com/claude-code-in-action/301614

---

## Claude: Official Links

- https://code.claude.com/docs/

- https://www.anthropic.com

- https://docs.anthropic.com/en/home

