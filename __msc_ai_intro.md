
# AI: Models, Prompting, Rules, Agents, Tools, etc

---

## Why AI

Claude Code, Cursor and other AI solutions augments your entire software product development lifecycle

1. Discover
- Explore codebase and history
- Search documentation
- Onboard & learn

2. Design
- Plan project
- Develop tech specs
- Define architecture

3. Build
- Implement code
- Write and execute tests
- Create commits and PRs

4. Deploy
- Automate CI/CD
- Configure environments
- Manage deployments

5. Support & Scale
- Debug errors
- Large-scale refactor
- Monitor usage & performance

Using and mastering CLI tools such as git, docker, bq.

---

## How I Use AI

Cursor with Claude.

The productivity gains are good. The quality gains are good too. Feels like doing pair programming, which is nice.

For specs and reqs: AI tends to mix up many topics tho, so I prefer to rewrite them most of the time, and use the AI generated content for inspiration, and ask AI to review my writings (provide tips, watch out for red flags, etc).

For coding: I never do "big asks" as I noticed it easily gets carried away and hallucinates, I never let it "think and code" the goal I ask to reach for more than 2-3min. This makes sure 1/ my prompt, goal(s), context, rules, and guardrails are well-defined and 2/ the scope of the task is well-limited, and 3/ I can catch mistakes/omissions and review the code in a reasonable amount of time.

For Quality: overall, it definitely helps to find potential improvements, find potential critical issues, improve web app performances, and more.

---

## How I Tell I Use AI

Cursor with Claude.

Great gains in both quality and quantity/productivity.

I mostly used it these phases: discover/onboard/learn, design/plan, code/test.

AI does make many mistakes though, so I remain a skeptic optimist user.

---

## Prompting

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

### Good Practices

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

### Prompting: Context

Context Window - keep it tight.

Too much `context` will make any model hallucinate. Breaking tasks down to the bare minimum complexity and version control are indispensable.

Using `@-commands` to build `context` in Cursor: https://docs.cursor.com/en/context/@-symbols/overview

**Clear context regularly** to maintain focused conversations.

---

### Prompting: Dynamic Content in Prompts

#### Cursor

Dynamically include external data using `@-commands` for files, code, terminal output, and even documentation through features like @Files or @Docs.

That's kinda what is meant by `context` in Cursor.

#### Claude: Prompt Templates and Variables

Help save you time, test out different inputs, and get more consistent answers.

https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/prompt-templates-and-variables

https://www.reddit.com/r/ClaudeAI/comments/1gmcvxv/pro_tip_using_variables_in_prompts_made_claude/

---

### Prompting: Cursor Layered Prompt

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

### Prompting: Examples

#### Add UID To AI Results

From this point forward, always:
- add a simple private identifier to each answer you give me - i.e. two digits valid for the current conversation

#### AI For Docs

For the previous response, use format:
From this point forward, always use format:
- Raw Markdown
- Remove all the emojis
- Do not add bold (double asterisc) in the titles that already start with one or several dashes (#)

#### AI Refactor Requirements

I want to refactor the requirements. Here are the improvements needed:
 - Some features are mentioned several times: remove redundant features in the doc
 - For each feature: prioritize it from 0 to 10 (10 being the most important), add this estimation in the feature title
 - Create one file for essential features and another one for the rest of features (advanced features)
 - For each feature: rate if mostly Frontend Feature or mostly Backend Feature, , add this in the feature title
 - For each feature: rate implementation difficulty from 0 to 10 (10 being the most important), add this estimation in the feature title

#### Vistoso.ai User Dashboard

   ```markdown
    # Vistoso.ai User Dashboard - Technical Requirements

    ## 1. Non-Technical Introduction

    You can think of the `user dashboard` as a mini-app.

    The `user dashboard` provides authenticated users with a comprehensive view of all their content. This logically and intuitively organized by shop domains and products. 

    ## 3. 🖥️ UX Architecture

    ### 3.1 Vocab
    - **Original Images**: Images that are provided by the user - most likely real photos of the product.
    - **AI Images**: Images that are AI generated.
    - **AI Videos**: Videos that are AI generated.

    ### 3.2 View Definition
    A **"View"** is may be shown differently on a `mobile` vs `laptop`. All views are implemented as components and can be displayed as a:
    - `page`
    - `page section`
    - `tab`
    - `modal`
    - or other formats

    ### 3.3 List Display Options
    **"List of XYZ"** means "Many items of type XYZ":
    - **How they are displayed can vary:**
    - `Grid with thumbnails` **[Priority: 10]**
    - `List with thumbnails`
    - `Compact list without thumbnails`
    
    ### Dashboard View
    The view we are working on right now.

    ### 3.5 UX Inspirations
    - **Spotify UX** - Clean, intuitive interface design with seamless/transparent hierarchical navigation

    ## 4. Data Architecture

    All data processing, filtering, and organization occurs client-side for optimal performance and user experience.

    ## 5. Sample Data

    [Sample data shown here](docs/features/user-dashboard/sample_data.json) is what we need to process and display.

    ## 6. **Mobile-First Responsive Design**
    - **Requirements**:
    - Use responsive breakpoints that are already in use on the rest of the project.
    - 44px minimum touch targets.
    - Thumb-zone optimized controls.

    ## 7. **Dashboard View**
    - As a user, I land on this view when I click on the "Dashboard" button in the menu.
    - **URL:** `/app/dashboard/`.
    - **Requirements**:
    - Implement using ShadCN https://ui.shadcn.com/; Integrate ShadCN with existing color code of the project.
    - Search Bar at the top.
    - Show stats data: all-time metrics such as: total products, original images, ai images, and ai videos.
    - Show list of shops.
    - UX: responsive card layout.
    - Wireframe: use the design in file docs/features/user-dashboard/dashboard_view_00_-_vistoso.ai.png to guide you
    - Dashboard page has a been started under `frontend/src/pages/AppSite/DashboardPage.tsx`, carry on the work started.

    IMPORTANT: if you create new files, always add the prefix "Dashboard" to the file name. For instance, `Card.tsx` becomes `DashboardCard.tsx`.
    ```

---

## Cursor Rules 

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

### Rules Docs

You can also directly ask in Cursor Chat: 
- What are the top 15 most common rules cursor users use for React/TS/xyz?

https://docs.cursor.com/en/context/rules

https://cursor.directory/rules

---

## Guardrails

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

## AI Tools and Projects

Cursor:
- https://cursor.com/
- https://docs.cursor.com/
- https://cursor.directory/
- https://forum.cursor.com

Claude / Anthtopic:
- https://www.anthropic.com
- https://docs.anthropic.com/en/home
 
Edgar Recommendations:
- https://www.jointakeoff.com/ 
- AI Code Editor https://www.cursor.com/ 

Bogdan Recommendations:
- Builder.io 
- CEO Steve of Builder.io - on youtube

Paul Recommendations:
- replit - for basic prototype/mvp
- heroui.com - for ui (Paul has not tried it yet tho)

Summarize Articles
 - https://www.reddit.com/r/ChatGPT/comments/16db0zp/best_ai_for_summarizing_articleslong_reddit_posts/
 - getrecall.ai 
 
OpenMind - AI open source project

---

## Learning Resources

Cursor Getting Started: tab autocompletion, inline mode, full file mode, rules, context, and more.
- https://www.youtube.com/watch?v=5zR1ZE5aqho&t=193s

Cursor's Context Engineering
- intro vid https://www.youtube.com/watch?v=QgA55EnmUp4
- docs/prompts https://docs.google.com/document/d/1IGyUjicRSl2niGbL5tHRWzTZo1rL-oLOfjOdMilDtEk/edit?tab=t.0

Task Master - Taskmaster: A task management system for AI-driven development, AI agnostic. 
 - intro vid https://www.youtube.com/watch?v=UtkPb9UevBM
 - https://github.com/eyaltoledano/claude-task-master
 
Rules in Cursor
 - https://www.youtube.com/watch?v=IsXrCBlAshg
 - https://github.com/PatrickJS/awesome-cursorrules?tab=readme-ov-file

 