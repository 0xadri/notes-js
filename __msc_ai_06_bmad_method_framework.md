
---

# BMAD Intro

Golden Rules:
- Create new chats (clear context) as often as possible. Why? Less hallucinations, less tokens used, faster answers.
- Do not trim down the files created by BMAD ??? they are tailored for the agents using them 

BMM: BMad Method = BMad Managing → the default mode kind of thing
BMB: BMad Builder

---

# BMAD Favorites

**document-project** workflow: scans project w effort of your liking (quick/deep), creates docs

---

# Workflows: Overview

This is for V6.

Added estimations of time required for any workflow needing over 30min.

## Common/Core Workflows
- **brainstorming** - Interactive brainstorming sessions using creative techniques
- **party-mode** - Multi-agent group discussions

## BMAD Builder (BMB) Workflows
- **agent** - Create, edit, and validate BMAD Core compliant agents
- **module** - Create BMAD modules (Brief + Create + Edit + Validate)
- **workflow** - Create structured standalone workflows

## BMAD Manager (BMM) Workflows

### Phase 1: Analysis
- **create-product-brief** - 1-2 hours - Create product briefs through collaborative discovery
- **research** - 2-4 hours - Research across multiple domains (Market, Technical, Domain)

### Phase 2: Planning
- **create-ux-design** - 2-3 hours - Plan UX patterns, look and feel
- **prd** - 3-5 hours - Create, validate, or edit PRDs

### Phase 3: Solutioning
- **check-implementation-readiness** - 1-2 hours - Validate PRD, Architecture, and Epics & Stories
- **create-architecture** - 2-3 hours - Architectural decision facilitation
- **create-epics-and-stories** - 2-3 hours - Transform PRD and Architecture into epics and user stories

### Phase 4: Implementation
- **code-review** - Adversarial senior developer code review
- **correct-course** - Navigate significant changes during sprint execution
- **create-story** - Create the next user story from epics
- **dev-story** - Execute a story by implementing tasks/subtasks
- **retrospective** - 1-2 hours - Review after epic completion
- **sprint-planning** - Generate and manage sprint status tracking
- **sprint-status** - Summarize sprint status and surface risks

### Quick Flow
- **quick-dev** - Flexible development with optional planning
- **quick-spec** - 1-2 hours - Conversational spec engineering

### Documentation & Diagrams
- **document-project** - Document brownfield projects
- **create-excalidraw-dataflow** - Create data flow diagrams
- **create-excalidraw-diagram** - Create system architecture diagrams, ERDs, UML
- **create-excalidraw-flowchart** - Create flowchart visualizations
- **create-excalidraw-wireframe** - Create website/app wireframes
- **generate-project-context** - Create project-context.md with critical rules

### Testing Architecture (TestArch)
- **testarch-atdd** - Generate failing acceptance tests
- **testarch-automate** - Expand test automation coverage
- **testarch-ci** - Scaffold CI/CD quality pipeline
- **testarch-framework** - Initialize test framework architecture
- **testarch-nfr** - Assess non-functional requirements
- **testarch-test-design** - System-level testability review or epic-level test planning
- **testarch-test-review** - Review test quality
- **testarch-trace** - Generate requirements-to-tests traceability matrix

### Workflow Management
- **workflow-init** - Initialize a new BMM project
- **workflow-status** - Lightweight status checker

**Total: 38 workflows** organized across 4 phases of development (Analysis → Planning → Solutioning → Implementation) plus supporting workflows for documentation, testing, and project management.

---

# BMAD Workflows: Time Needed

This is for V6.

| Category           | Workflows | Avg Steps | Avg Questions | Avg Time           |
| ------------------ | --------: | --------: | -------------: | ------------------ |
| **Analysis**       |         2 |      6-7  |         12-18  | 1.5-3 hours        |
| **Planning**       |         2 |    14-15  |         27-35  | 2.5-4 hours        |
| **Solutioning**    |         3 |        6  |         15-20  | 1.5-2.5 hours      |
| **Implementation** |         7 |    7-10   |          2-5  | Variable           |
| **Quick Flow**     |         2 |        5  |          6-9  | 1-2 hours          |
| **Testing**        |         8 |    8-15   |          2-4  | 20-60 min          |
| **Diagrams**       |         4 |     ~5    |          2-3  | 15-30 min          |
| **Documentation**  |         2 |    3-var  |          4-6  | 30 min - 3 hours   |
| **Meta**           |         1 | Variable  |          1-2  | 5-10 min           |

---

# BMAD Workflows: How To Use

BMAD workflows **do NOT follow** a "personas → steps → questions" structure.

BMAD workflows **do follow** a "workflow → steps/instructions → embedded questions" structure.

Workflows are persona-agnostic, they can be executed by any persona, or even without a persona (raw LLM execution).

```
Raw LLM -or- Agent/Persona
    │
    └──> Workflow (orchestration)
            │
            ├──> Steps (execution instructions)
            │       │
            │       ├──> Questions/Prompts (embedded)
            │       ├──> Menus (embedded)
            │       └──> Actions (embedded)
            │
            ├──> Templates (output structure)
            └──> Checklists (validation)
```

When a workflow is executed with an agent persona:

```
Agent Persona (from agent file)
    +
Workflow Role (from workflow.md "Your Role" section)
    =
Merged Execution Context
```

---

# BMAD: Prompts

## Time Estimates For Workflows

For the all the BMAD workflows (installed in our project):

Indicate how many steps are involved
For each step indicate how many questions are asked to the user (me)
Given the 2 previous points, estimate the time necessary to go thru each entire workflow
Indicate if other crucial parameter(s) is/are to take into account Create a matrix table to summarize the findings.

---

# BMAD Polluting docs Directory

When using document-project workflow. It puts all the docs under docs directory. This directory is then used by subsequent workflow calls i.e. create-prd, tech-spec, create-architecture.

Is it a problem if I move these docs created by BMAD method into a docs_bmad directory instead? Or would the subsequent workflow calls work just fine ?

GPT says it breaks everything.

https://www.reddit.com/r/BMAD_Method/comments/1qq6n0x/custom_docs_bmad_directory_for_docs_created_by/ 

---

# BMAD Meta Prompts

By far the best way to learn how to use BMAD.

---

## BMAD Workflows Broken Down

BMAD workflows seem to always be broken down in steps, then questions. Is that correct ?

Can I use the workflows using “raw LLMs” or do I have to first load personas?

---

## BMAD Workflows Time Estimates

This is a very insightful prompt, you will like to read the detailed answer if you try it (in short, that BMAD workflow takes ~3H to go thru):

*For the all the BMAD workflows (installed in our project):
1. Indicate how many steps are involved
3. For each step indicate how many questions are asked to the user (me)
4. Given the 2 previous points, estimate the time necessary to go thru each entire workflow
5. Indicate if other crucial parameter(s) is/are to take into account
Create a matrix table to summarize the findings.*

---

# BMAD Cheatsheet

PRD = product-level planning = product vision, functional requirements, non-functional requirements
Architecture = system-level design = system design
Epics+Stories = created AFTER architecture is complete

| Command                     | Agent      | Purpose                               |
|----------------------------|------------|----------------------------------------|
| `*workflow-init`           | Analyst    | Initialize a new project              |
| `*workflow-status`         | Any        | Check progress and next steps         |
| `*prd`                     | PM         | Create Product Requirements Document  |
| `*create-architecture`     | Architect  | Create architecture document          |
| `*create-epics-and-stories`| PM         | Break down PRD into epics             |
| `*implementation-readiness`| Architect  | Validate planning cohesion            |
| `*sprint-planning`         | SM         | Initialize sprint tracking            |
| `*create-story`            | SM         | Create a story file                   |
| `*dev-story`               | DEV        | Implement a story                     |
| `*code-review`             | DEV        | Review implemented code               |

| Term                   | Definition                                                                                                                                                     |
|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Agent                  | Specialized AI persona with specific expertise (PM, Architect, SM, DEV, TEA) that guides users through workflows and creates deliverables.                     |
| Workflow               | Multi-step guided process that orchestrates AI agent activities to produce specific deliverables. Workflows are interactive and adapt to user context.          |
| Scale-Adaptive System  | Intelligent workflow orchestration that adjusts planning depth and documentation requirements based on project needs through three planning tracks.            |
| BMM                    | BMad Method Module — core orchestration system providing comprehensive lifecycle management through specialized agents and workflows.                           |
| BMad Method            | Complete methodology for AI-assisted software development, encompassing planning, architecture, implementation, and quality assurance workflows that adapt to project complexity. |
| BMad                   | Breakthrough Method of Agile AI Driven Development — AI-driven agile framework with specialized agents, guided workflows, and scale-adaptive intelligence.     |

| TRACKS - Scale and Complexity                                                                                                        |
|-------------------------|----------------------------------------------------------------------------------------------------------------------|
| Quick Flow Track        | Lightweight planning using a tech spec only. Intended for small changes, fixes, or clearly scoped work (about 1–15 stories). |
| BMad Method Track       | Full planning with PRD, architecture, and UX. Used for products or complex features that need system-level design (about 10–50+ stories). |
| Enterprise Method Track | Extended planning for enterprise needs, adding security, DevOps, and test strategy. Used for large or regulated systems (30+ stories). |
| Planning Track          | The planning approach selected based on complexity and requirements, not just story count.                          |

| Planning Docs                                                                                                                                                            |
|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| PRD               | Product Requirements Document for BMad Method/Enterprise tracks containing vision, goals, functional and non‑functional requirements, and success criteria.           |
| Product Brief     | Optional strategic document created in Phase 1 to capture product vision, market context, user needs, and high‑level requirements before detailed planning.            |

| Planning Docs                                                                                                                                                             |
|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Tech‑Spec         | Quick Flow planning document containing the technical plan with problem statement, solution approach, file‑level changes, and testing strategy.                        |
| Architecture Doc  | System‑wide design document for BMad Method/Enterprise tracks defining structure, components, data models, integration patterns, security, and deployment.            |
| Epics             | High‑level feature groupings containing multiple related stories. Typically 5–15 stories each and representing cohesive functionality.                                    |

| Workflow and Phases                                                                                                                                                    |
|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Phase 0: Documentation | Conditional prerequisite phase creating codebase documentation before planning if existing docs are insufficient.                                               |
| Phase 1: Analysis      | Discovery phase including brainstorming, research, and product brief creation. Optional for Quick Flow and recommended for other tracks.                        |
| Phase 2: Planning      | Required phase creating formal requirements. Routes to tech‑spec (Quick Flow) or PRD (BMad Method/Enterprise) based on track.                                   |
| Phase 3: Solutioning   | Architecture design phase including creation, validation, and gate checks. Required for BMad Method and Enterprise tracks.                                      |
| Phase 4: Implementation| Required sprint‑based development through story‑by‑story iteration using sprint‑planning, create‑story, dev‑story, and code‑review workflows.                   |
| Quick Spec Flow        | Fast‑track workflow for Quick Flow projects going straight from idea to tech‑spec to implementation.                                                           |
| Workflow Init          | Initialization workflow that creates `bmm‑workflow‑status.yaml`, detects project type, and determines planning track.                                           |
| Workflow Status        | Universal entry point checking for existing status file, displaying current progress, and recommending next action.                                           |

More on https://docs.bmad-method.org/reference/glossary/

---

# BMAD Install Annex

? JohnDoe directory: 
/Users/JohnDoe/workspaceJohnDoe/myapp-monorepo/

Resolved installation path: /Users/JohnDoe/workspaceJohnDoe/myapp-monorepo/
Directory exists and contains 12 item(s)
? Install to this directory? Yes
? Select tools to configure: GitHub Copilot ⭐
? Will you be installing any official BMad modules (BMad Method, BMad Builder, 
Creative Innovation Suite)? Yes
? Select modules to install: 
BMB: BMad Builder - Agent, Workflow and Module Builder, 
BMM: BMad Method Agile-AI Driven-Development
? Would you like to install a local custom module (this includes custom agents 
and workflows also)? No

? BMad™  Core Configuration
? What shall the agents call you (TIP: Use a team name if using with a group)? 
JohnDoe
? Preferred chat language/style? (English, Mandarin, English Pirate, etc...) 
English
? Preferred document output language? English
? Where should default output files be saved unless specified in other modules?
_bmad-output

? BMad Optimized Builder (BoMB) Module Configuration
? Accept Defaults (no to customize)? Yes

? BMad Method™: Breakthrough Method of Agile-Ai Driven-Dev
? Accept Defaults (no to customize)? Yes


✔ Core installed
✔ Dependencies resolved
✔ Module installed: bmb
✔ Module installed: bmm
✔ Module configurations generated
✔ Manifests generated: 37 workflows, 13 agents, 4 tasks, 0 tools, 54 files
✔ Configured: github-copilot
✔ Module-specific installers completed

✨ BMAD is ready to use!
Installed to: /Users/JohnDoe/workspaceJohnDoe/workspaceJohnDoe/myapp-monorepo/_bmad
Modules: bmb, bmm
