
# AI: Docs, Plans, Specs

---


# SDD Flows

Feature >> User Stories >> Tasks

Feature >> User Stories >> Tests >> Code

FR

NFR

---

# SDD: Docs Setup

By default, put new specs and plans to ‘spec_prog’.

Mark doc as completed. Move it to a separate ‘spec_done’ directory?

---

## Docs Formatting

Always use format:
- Raw Markdown
- Remove all the emojis
- Do not add bold (double asterisc) in the titles that already start with one or several dashes (#)

---

## Frontmatter

author: ai-generated
generated_by: adri
reviewed_by_human: “yes 100%” | “50%” | “20%”

Doc_granularity: epic | feature | story | task
filesize: i.e. 1k tokens
Feature_size
Effort size
Scope level
Work item level
Work granularity
Granularity level


Epic: Broad Objective
Feature: Specific Functionality
Story: User Need
Task: Action Item


- what is the right level of granularity? depends on what parameters (doc size, complexity, ...) ?

---

## AI Refactor Requirements

I want to refactor the requirements. Here are the improvements needed:
 - Some features are mentioned several times: remove redundant features in the doc
 - For each feature: prioritize it from 0 to 10 (10 being the most important), add this estimation in the feature title
 - Create one file for essential features and another one for the rest of features (advanced features)
 - For each feature: rate if mostly Frontend Feature or mostly Backend Feature, , add this in the feature title
 - For each feature: rate implementation difficulty from 0 to 10 (10 being the most important), add this estimation in the feature title

---

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




