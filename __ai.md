
# AI: Models, Prompting, Rules, Agents, Tools, etc

---

## AI Prompting

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
- Context Window - keep it tight

Too much `context` will make any model hallucinate. Breaking tasks down to the bare minimum complexity and version control are indispensable.

`Context` in Cursor: https://docs.cursor.com/en/context/@-symbols/overview

---

## Dynamic Content in Prompts

### Cursor

Dynamically include external data using @-commands for files, code, terminal output, and even documentation through features like @Files or @Docs.

That's kinda what is meant by `context` in Cursor.

### Claude: Prompt Templates and Variables

Help save you time, test out different inputs, and get more consistent answers.

https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/prompt-templates-and-variables

https://www.reddit.com/r/ClaudeAI/comments/1gmcvxv/pro_tip_using_variables_in_prompts_made_claude/

---

## AI Prompt Examples

### Add UID To AI Results

From this point forward, always:
- add a simple private identifier to each answer you give me - i.e. two digits valid for the current conversation

### AI For Docs

For the previous response, use format:
From this point forward, always use format:
- Raw Markdown
- Remove all the emojis
- Do not add bold (double asterisc) in the titles that already start with one or several dashes (#)

### AI Refactor Requirements

I want to refactor the requirements. Here are the improvements needed:
 - Some features are mentioned several times: remove redundant features in the doc
 - For each feature: prioritize it from 0 to 10 (10 being the most important), add this estimation in the feature title
 - Create one file for essential features and another one for the rest of features (advanced features)
 - For each feature: rate if mostly Frontend Feature or mostly Backend Feature, , add this in the feature title
 - For each feature: rate implementation difficulty from 0 to 10 (10 being the most important), add this estimation in the feature title

### Vistoso.ai User Dashboard

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

Rules provide system-level instructions to Agent and Inline Edit. 

Think of rules as persistent context, preferences, or workflows for your projects.

### Basic Examples

Be concise in your responses,
Use fewer comments

### Docs

https://docs.cursor.com/en/context/rules

---

## AI Tools and Projects

Cursor:
- https://cursor.com/
- https://docs.cursor.com/

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

Cursor's Context Engineering
- intro vid https://www.youtube.com/watch?v=QgA55EnmUp4
- docs/prompts https://docs.google.com/document/d/1IGyUjicRSl2niGbL5tHRWzTZo1rL-oLOfjOdMilDtEk/edit?tab=t.0


Task Master - Taskmaster: A task management system for AI-driven development, AI agnostic. 
 - intro vid https://www.youtube.com/watch?v=UtkPb9UevBM
 - https://github.com/eyaltoledano/claude-task-master
 
Rules in Cursor
 - https://www.youtube.com/watch?v=IsXrCBlAshg
 - https://github.com/PatrickJS/awesome-cursorrules?tab=readme-ov-file
 
 