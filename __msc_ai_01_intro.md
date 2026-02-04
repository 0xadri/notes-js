
# AI: Models, Prompting, Rules, Agents, Tools, etc

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

# Why AI

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

# How I Use AI

Cursor with Claude.

The productivity gains are good. The quality gains are good too. Feels like doing pair programming, which is nice.

For specs and reqs: AI tends to mix up many topics tho, so I prefer to rewrite them most of the time, and use the AI generated content for inspiration, and ask AI to review my writings (provide tips, watch out for red flags, etc).

For coding: I never do "big asks" as I noticed it easily gets carried away and hallucinates, I never let it "think and code" the goal I ask to reach for more than 2-3min. This makes sure 1/ my prompt, goal(s), context, rules, and guardrails are well-defined and 2/ the scope of the task is well-limited, and 3/ I can catch mistakes/omissions and review the code in a reasonable amount of time.

For Quality: overall, it definitely helps to find potential improvements, find potential critical issues, improve web app performances, and more.

---

# How I Tell I Use AI

AI is to coders what Electric Bicycles are to cyclists: it helps everyone from total beginners to elite coders.

AI however, is like riding a wild horse: you must learn to tame it, to control its insane power otherwise it'll create garbage.

Great gains in both quality and quantity/productivity.

I mostly used it these phases: discover/onboard/learn, design/plan, code/test.

Cursor with Claude Opus or any other LLM.

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

# Reasoning

"Reasoning" is the text shown by the AI when thinking.

---

# Close The Loop

Close The Loop = Close The Feedback Loop 

Validate, test and review code. 

All tasks typically done prior to committing: lint, typecheck, unit tests, integration tests, e2e tests.

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

# Prompting: Examples

## Add UID To AI Results

From this point forward, always:
- add a simple private identifier to each answer you give me - i.e. two digits valid for the current conversation

## AI For Docs

For the previous response, use format:
From this point forward, always use format:
- Raw Markdown
- Remove all the emojis
- Do not add bold (double asterisc) in the titles that already start with one or several dashes (#)

## AI Refactor Requirements

I want to refactor the requirements. Here are the improvements needed:
 - Some features are mentioned several times: remove redundant features in the doc
 - For each feature: prioritize it from 0 to 10 (10 being the most important), add this estimation in the feature title
 - Create one file for essential features and another one for the rest of features (advanced features)
 - For each feature: rate if mostly Frontend Feature or mostly Backend Feature, , add this in the feature title
 - For each feature: rate implementation difficulty from 0 to 10 (10 being the most important), add this estimation in the feature title

## Vistoso.ai User Dashboard

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

# AI Tools and Projects

MCP related
- https://www.lmsystems.ai/ - MCP marketplace
- https://smithery.ai/ - MCP marketplace
- https://glama.ai/ - MCP Directory

Skills related
- https://github.com/anthropics/skills - Anthropic Official public repository for Skills
- https://agentskills.io/ - skills open standard by Anthropic 
- https://skillsmp.com/
- https://smithery.ai/skills
- https://mcpmarket.com/tools/skills
- https://www.skillsdirectory.com/
- https://mcpservers.org/claude-skills
- https://github.com/travisvn/awesome-claude-skills

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

# Learning Resources

Task Master - Taskmaster: A task management system for AI-driven development, AI agnostic. 
 - intro vid https://www.youtube.com/watch?v=UtkPb9UevBM
 - https://github.com/eyaltoledano/claude-task-master

Course:
- https://github.com/DataTalksClub/ai-dev-tools-zoomcamp

---

# AI Conferences For Engineers

AI Engineer Summit (Oct, SF) - Production deployment focus. Less "SOTA on benchmark X", more "scaled this to 10M users." 
 - https://www.youtube.com/@aiDotEngineer

Ray Summit (Sep, SF) - Distributed ML systems. Infrastructure and scaling. 

---

Highly Regarded Devs:
- Dex Horthy
- Ralph Wiggum
- Steve Yegge 
- Gergely Orosz
  - https://substack.com/@pragmaticengineer
  - https://youtube.com/@pragmaticengineer 
- Martin Fowler

