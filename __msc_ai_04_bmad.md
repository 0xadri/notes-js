
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


