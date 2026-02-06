
---

# Cursor: Pending Qs

- Can cursor's terminal commands allowlist be saved as an md file ?

---

## Cursor: Features

1. Commands aka Slash Commmands --> for anything you copy/paste too often in your prompt window
2. Skills
3. MCP
4. Rules & Memories

---

### Cursor: Rules

1. persistent, reusable context at the prompt level.
2. system-level instructions to Agent.
3. bundle prompts, scripts, and more.

Hierarchy
1. Agent instructions
2. User Rules
3. Project Rules

When applied, rule contents are included at the start of the model context.

---

### Cursor: Commands aka Slash Commmands 

TODO

---

### Cursor: AGENT.md

TODO

---

### Cursor: Layered Prompt

Cursor builds prompts by orchestrating various pieces of dynamic content, including:
- System instructions: Core rules and guidelines for the AI's behavior. 
- User message: The most recent input or question from the user. 
- File context: The content of the current file or referenced files. 
- Code snippets: User-highlighted code or referenced symbols within the codebase. 
- Terminal output: Results from commands executed in the integrated terminal. 
- Cursor position: The exact location of the cursor in the code. 
- Team rules: Persistent instructions or settings shared within a team. 
- Tool schemas: Definitions for tools the AI can use, such as APIs or other functions. 

Also whatever was added to `context` using @-commands: https://docs.cursor.com/en/context/@-symbols/overview

---

# Cursor: Prompting: Dynamic Content in Prompts

Dynamically include external data using `@-commands` for files, code, terminal output, and even documentation through features like @Files or @Docs.

That's kinda what is meant by `context` in Cursor.

---

## Cursor: Rules 

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

### Cursor: Rules Docs

You can also directly ask in Cursor Chat: 
- What are the top 15 most common rules cursor users use for React/TS/xyz?

https://docs.cursor.com/en/context/rules

https://cursor.directory/rules

---

## Cursor: Guardrails

Regular mode can have guardrails such as:
- Automatic backups before modifications (i.e. git add . && git commit)
- Folders (and subfolders) to never be changed or deleted

`YOLO`/`autorun` mode MUST have strong guardrails such as:
- Max % of code to be deleted/changed before approval
- Max tokens to be used before approval
- Max run time before approval
- Folders (and subfolders) to never be deleted or changed  
- Automatic backups before modifications
- Audit trail of all operations
- All operations must be reversible

https://github.com/jikyu/cursor-guardrails

https://forum.cursor.com/t/guardrails-against-large-scale-feature-removal/40374/

---

## Cursor: Learning Resources

Cursor Getting Started: tab autocompletion, inline mode, full file mode, rules, context, and more.
- https://www.youtube.com/watch?v=5zR1ZE5aqho&t=193s

Cursor's Context Engineering
- intro vid https://www.youtube.com/watch?v=QgA55EnmUp4
- docs/prompts https://docs.google.com/document/d/1IGyUjicRSl2niGbL5tHRWzTZo1rL-oLOfjOdMilDtEk/edit?tab=t.0
 
Rules in Cursor
 - https://www.youtube.com/watch?v=IsXrCBlAshg
 - https://github.com/PatrickJS/awesome-cursorrules?tab=readme-ov-file

---

## Cursor: Official Links

- https://cursor.com/

- https://docs.cursor.com/

- https://cursor.directory/

- https://forum.cursor.com

- https://cursor.directory/