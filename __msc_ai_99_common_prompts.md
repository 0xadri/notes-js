


---

# Skills Flow For New Feature

- doc-create-spec
- doc-review-spec
  - use skill `.claude/skills/doc-review-spec/SKILL.md` to review `SPEC_DOC`
- doc-create-plan
- doc-review-plan
  - use skill `.claude/skills/doc-review-plan/SKILL.md` to review `PLAN_DOC`
- exe-implement-plan
- exe-review-implementation
  - use skill `.claude/skills/exe-review-implementation/SKILL.md` to review `PLAN_DOC`

---

# orchestrator skill ??

When creating a new feature for my web app, I run these skills sequentially

- doc-create-spec
- doc-review-spec
- doc-create-plan
- doc-review-plan
- exe-implement-plan
- exe-review-implementation

Is there a way to make this somehow harmonious? or improve the flow somehow?
maybe we could package them so that the flow feels more natural
maybe you have ideas on how to improve this?
maybe you have ideas on how it could be used by a fully autonomous agent as well?
maybe you have other ideas on how this could be used?

no changes. just answer


TLDR: The best approach might be: create an orchestrator skill that internally uses your templates, with both interactive and autonomous modes. One skill call, flexible behavior, repeatable standard.                                                                                                         

---






# Common Prompts

---

*This page is ever-evolving, drafty and sometimes messy. But it has some nuggets.* FYI: It's mostly for personal use.

---

Destructive DB commands need confirmation: this does NOT matter for now, evrything is local.
Apply 2 to 5




---

# Create/Improve `.claude/CLAUDE.md` 

This is for project-wide rules, conventions, and architecture decisions to follow

- Ask me clarification questions on using `AskUserQuestion` refine this file

- Any other important improvements that can be made (rate importance 1-to-10)?        # ask several times

- What other guardrails do you think are necessary (rate criticality 1-to-10)?        # ask several times

---

# Create/Improve Nested CLAUDE.md per package

Is this is for package-specific rules, conventions, and architecture decisions to follow ?

- Ask me clarification questions on using `AskUserQuestion` refine this file

- Any other important improvements that can be made (rate importance 1-to-10)?        # ask several times

- What other guardrails do you think are necessary (rate criticality 1-to-10)?        # ask several times

---

# Create/Improve A Claude Skill

Given the existing skill: [PATH_TO_SKILL]

Interview me using `AskUserQuestion` tool to ask clarifications to refine this skill.

- Any other important improvements that can be made for this skill (rate importance 1-to-10)?      # ask several times

- What other guardrails do you think are necessary (rate criticality 1-to-10)?          # ask several times

- Regarding the flow of this skill, can you check everything looks fine ?      # ask several times 

- Read the doc https://code.claude.com/docs/en/skills , any other yaml metadata we could/should use for this skill?              # ask one times

---

# Create Claude Project Wide Configuration

I want to have Claude Project Wide Configuration: [DESCRIPTION_WHY_WHAT_WHEN_HOW]

- How do you usually do this in Claude? Is there a built-in feature for project-wide rules and configurations?

- Ask me clarification questions on using `AskUserQuestion` refine these rules and configurations.

- Any other important improvements that can be made (rate importance 1-to-10)?        # ask several times

- What other guardrails do you think are necessary (rate criticality 1-to-10)?        # ask several times

- Any other setting you recommed to add apart from model, permissions , and the others we already have?        # ask several times

---





---

# After EACH Code Changes

---

## Update Relevant Documentation

It can be in these folders (relative to project root directory):
./specs_n_plans
./docs

---

## Check Type and ESLint Errors

Run these two steps sequentially. If errors come up, fix them before move on to the next step.
1. Type errors: `npm run typecheck`
2. ESLint errors: `npm run lint`
   - Auto-Fix ESLint errors if needed: `npm run lint:fix`

---

## Check Tests Errors

Run sequentially. If errors come up, halt and ask for approval before fixing them. Do not move on until I reply.

- *Run frontend and backend first if needed:* `pnpm dev`

- FE Tests: `pnpm test:frontend --run`

- BE cURL Tests: `cd packages/backend/tests/curl && ./test-all.sh`

- BE Unit Tests: `pnpm test:backend:unit`

- BE Integration Tests: `pnpm test:backend:integration`

- BE Unit+Integration Tests: `pnpm test:backend` - and with coverage use `pnpm test:backend:coverage`

- FE Test + BE Unit+Integration Tests: `pnpm test`

---

## Check Build Errors

`pnpm build`

---

## If DB Changes

Recreate DB and Squash Migration now.

Why?
- Local database(s) have no data, or almost none.
- Everything is local: project not deployed in production or any other environment yet.
- There is only one developer.

So we can delete the current DB, and recreate it.

I have just reset the 2 local DB using:
`cd packages/backend/`
`pnpm migrate:reset --force`
`NODE_ENV=test pnpm migrate:reset --force`

You can go ahead with the rest.

---

# Recreate DB and Squash Migration - in details (DRAFT)

**1. Delete Old Migrations**

**2. Reset Database(s)**

`cd packages/backend/`
`pnpm migrate:reset --force`
`NODE_ENV=test pnpm migrate:reset --force`

The above resets may need to be run manually.

**3. Regenerate the Prisma Client (to match latest schema)**

`npm run prisma:generate`

Regenerates the TypeScript/JavaScript client under `node_modules/@prisma/client`.
Runs any additional generators (e.g., NestJS, Zod schemas, GraphQL types).

**4. Create New Single Migration (Squash database migrations)**

`pnpm --filter @kitecrew/backend migrate`

**5. Apply to Test Database**

`NODE_ENV=test pnpm --filter @kitecrew/backend migrate:deploy`

---

# Seed Databases

Run sequentially. If errors come up, halt and ask for approval before fixing them. Do not move on until I reply.

1. Regenerate reference data

`cd packages/backend && npm run generate:reference-data`    # Regenerates 4 files containing reference data - the `cd` is from project root

`cd packages/shared && pnpm build`   # rebuild the shared package so the seed script picks up the updated reference data - the `cd` is from project root

2. Seed DB

`cd packages/backend` # all the below commands from that directory - the `cd` is from project root

`pnpm db:clear`   # Clear databases only (no seeding)

`pnpm db:push`    # Sync database schema with Prisma schema

`pnpm db:seed:reference`   # Seed only reference data

`pnpm db:seed:dev`    # Seed only dev data (aka factory data)

`pnpm db:seed`    # Seed both reference and dev data (default)

---




---

# Specs Metadata: Add Frontmatter, aka frontmatter metadata

Only add frontmatter. Do not modify anything else in the doc. 
If no file is referenced in the prompt. Ask me to provide at least one. Do not move on until I provide one.

If there is something important, related to the frontmatter, that you think I should change. Warn me in the chat.

**Add Frontmatter with fields:** 
last_updated,
first_created,
author (Adri), 
status, 
version, 
scope_size,
type, 
tags (as an inline YAML array: [tag1, tag2, ...]), 
priority, 
related (as an array of objects with path property)

**Examples Of Possible Values (non exclusive)**

last_updated: "2026-01-27"
first_created: "2026-01-26"
status: "draft" | "complete" | "review" | "archived" | "active"
scope_size: "tiny/task" | "small/story" | "medium/feature" | "large/epic"
type: "spec" | "plan" | "analysis" | "guide" | "api" | "design"
category: "backend" | "frontend" | "architecture" | "planning"
tags: ["authentication", "api", "security"]
priority: "high" | "medium" | "low"
risk: "high" | "medium" | "low"
urgency: "high" | "medium" | "low"
tags: ["docs", "frontend", "backend", "api", "trip", "kitesurfing", "car-sharing", "peer-to-peer"]
related:
  - path: "docs/related.md"
  - path: "packages/frontend/src/pages/Trip/Trip.tsx"


**Recommended minimal set**

---
title: "Document Title"
date: "2026-01-26"
author: "Your Name"
status: "complete"
type: "spec"
tags: ["relevant", "tags"]
---

**Essential metadata**

---
title: "Document Title"
description: "Brief summary of the document"
author: "Author Name"
date: "2026-01-26"
last_updated: "2026-01-26"
version: "1.0.0"
status: "draft" | "complete" | "review" | "archived" | "active"
---

**Document classification**

---
type: "spec" | "plan" | "analysis" | "guide" | "api" | "design"
category: "backend" | "frontend" | "architecture" | "planning"
tags: ["authentication", "api", "security"]
priority: "high" | "medium" | "low"
risk: "high" | "medium" | "low"
urgency: "high" | "medium" | "low"
---

**Related documents**

---
related:
  - title: "Related Document"
    path: "docs/related.md"
  - title: "PRD"
    path: "_bmad-output/planning-artifacts/prd.md"
dependencies:
  - "docs/project-overview.md"
  - "docs/architecture.md"
---

**SEO and Discovery**

---
keywords: ["kitesurfing", "car-sharing", "peer-to-peer"]
summary: "One-line description for search/discovery"
---

---






---

# Specs Metadata: Add Prompts

**If prompts were exceptional/extremely useful:**

Add Prompts That Were Used to the docs.

**If prompts need cleaning up from docs:**

Find and remove "common prompts" that might not be special and/or insightful.

---

Update location-autocomplete's destination expansion spec + add plan






# REVIEWING

---

# Review Spec

Using instructions in `.claude/skills/doc-create-spec/SKILL.md`

We just drafted the spec `[PATH_TO_SPEC]` 

Can you review the spec?

---

# Review Plan

Given the spec `[PATH_TO_SPEC]`

And using instructions in `.claude/skills/doc-create-plan/SKILL.md`

We just drafted the plan `[PATH_TO_PLAN]`

Can you review this plan?

---

# Review Implementation

Given the plan `docs/plans/location-autocomplete-destination-expansion_plan.md`

And using instructions in `.claude/skills/exe-implement-plan/SKILL.md`

The implementation has been done but not yet committed. You can easily spot by doing a git diff with the lastest commit.

Can you review these changes against the plan?







---

# Spec: Create Doc

Goal:
`[XYZ]`

What:
Create specs doc `./docs/plans/[featurename]_spec.md` with all the info.

You Try:
Give me the typical specs for `[XYZ]`.
Preferably in a setting similar to ours: `[DETAILS]`.

Guidelines:
- follow best practices and established design patterns
- follow know principles such as: YAGNI (You Aren't Gonna Need It), KISS (Keep It Simple), DRY (Don't Repeat Yourself)
- if UX involved: follow UX patterns and current design trends
- if frontend involved: break out the page/component in sub-components to improve maintainability, code quality and readability.
- if in doubt, explain several potential solutions along with tradeoffs.

IMPORTANT: in this very chat ask clarifying questions needed to refine the spec
- Interview me in detail using the `AskUserQuestion` tool.
- Questions may include tradeoffs, concerns, inconsistencies in project, risks, common cases, happy paths, unhappy paths, edge cases, technical implementation, UI/UX. 
- Dig into the hard parts I might not have considered.

[backandforth...]

Any additional clarifying questions to refine the specs further ?
- Interview me in detail using the `AskUserQuestion` tool.
- Questions may include tradeoffs, concerns, inconsistencies in project, risks, common cases, happy paths, unhappy paths, edge cases, technical implementation, UI/UX. 
- Dig into the hard parts I might not have considered.

[backandforth...]

Is this plan fully aligned current implementation (existing code base if any)? 
Or are there some inconsistencies? if so, which ones?
Update to spec and/or code base may be needed.

[backandforth...]

When you are done writing the specs, use the relevant skills to:
- Add/Update YAML frontmatter
- Add/Update implementation status
- Add/Update a linked Table of Contents
- Add/Update reading time

---

Try With Claude:

I want to build [brief description]. Interview me in detail using the `AskUserQuestion` tool.
Ask about technical implementation, UI/UX, edge cases, concerns, and tradeoffs. Don't ask obvious questions, dig into the hard parts I might not have considered.
Keep interviewing until we've covered everything, then write a complete spec to SPEC.md.

https://code.claude.com/docs/en/settings#tools-available-to-claude

---

## Spec: Question Only

`[QUESTION]` ? 
Do not do any changes. Just answer the question.

[answer]

Great. Update the specs accordingly

---

## Plan: Create Plan Doc From Specs

Create plan `./docs/plans/[featurename]_plan.md` to implement the specs doc you created in `./docs/plans/[featurename]_spec.md`.

Make the plan in a way that the plan order matches the implementation order.
If it includes backend and/or shared packages changes, include the backend plan first, then shared package, then frontend.

IMPORTANT: in this very chat ask clarifying questions needed to refine the plan
- Interview me in detail using the `AskUserQuestion` tool.
- Questions may include tradeoffs, concerns, inconsistencies in project, risks, common cases, happy paths, unhappy paths, edge cases, technical implementation, UI/UX. 
- Dig into the hard parts I might not have considered.

[backandforth...]

Any additional clarifying questions to refine the plan further ?
- Interview me in detail using the `AskUserQuestion` tool.
- Questions may include tradeoffs, concerns, inconsistencies in project, risks, common cases, happy paths, unhappy paths, edge cases, technical implementation, UI/UX. 
- Dig into the hard parts I might not have considered.

[backandforth...]

Is this plan fully aligned with the specs and current implementation (existing code base if any)? 
Or are there some inconsistencies? if so, which ones?
Update to specs, and/or plan, and/or code base may be needed.

[backandforth...]

When you are done writing the plan, use the relevant skills to:
- Add/Update YAML frontmatter
- Add/Update implementation status
- Add/Update a linked Table of Contents
- Add/Update reading time

---

# Plan: Note on "Backward Compatibility" sections

- Local database(s) have no data, or almost none.
- Everything is local: project not deployed in production or any other environment yet.
- There is only one developer.

Can that make these sections simpler?

---

## Implement

Implement: `[PHASE_TITLE]`

---

... after all the changes are done and polished

Update the specs and plan to reflect the changes.






---

## FE Solution Switcher

I wonder if there is a better way to do this:
- Implement 6 solutions that allow me to manually switch from one to another by changing a hardcoded value from 1,2... or 6
- Follow existing ux patterns, current design trends and best practices
- Use creative solutions, this may involve using 3rd party libraries
- In doubt, do not hesitate to ask me !

---

## BE Solutions Explained

I wonder if there a better way to do this:
- follow best practices and famous design patterns
- follow YAGNI (You Aren't Gonna Need It), KISS (Keep It Simple), DRY (Don't Repeat Yourself)
- explain several potential solutions along with tradeoffs
- do not implement until I approve

---

## BE Improvements Explained

I wonder if there are further improvements we could do on [XYZ]:
- follow best practices and famous design patterns
- follow YAGNI (You Aren't Gonna Need It), KISS (Keep It Simple), DRY (Don't Repeat Yourself)
- explain several potential solutions along with tradeoffs
- Use critical thinking and advanced reasoning
- do not implement until I approve

---

## Field Consistency Across Layers

We want consistent type definitions AND consistent string formats across layers (Database, Shared Types, API Input, Mapper Output, Frontend Mocks, Test Factories, Unit Tests, Integration Tests, cUrl Tests, Service Layer, etc).

Is it the case for [fieldName] ?

---







---

# FE Only with MSW

I want to run the frontend alone and see if things work.
Activate MSW.

---

# FE+BE, without MSW

I want to run the frontend and backend REST API together, and see if things work.
De-Activate MSW.

---










---

# Database Dropped and Recreated

**Development**
drop db:
`cd kitecrew/packages/backend && pnpm prisma migrate reset --force`
generate Prisma client:
`cd kitecrew/packages/backend && pnpm prisma:generate`

**Testing**
drop db:
`cd kitecrew/packages/backend && NODE_ENV=test PRISMA_USER_CONSENT_FOR_DANGEROUS_AI_ACTION="Yes" pnpm prisma migrate reset --force`
p.s. The Prisma Client was already generated (shared for both environments)

---

## Field Immutability vs Mutability, And Rules

Check which if these fields are mutable and what's enforced:
x
y
z

Is there any enforcements of that has the database level?

---

# Lines Of Code In Project

Excluded files (automatically generated):
- node_modules
- .pnpm-store
- pnpm-lock.yaml
- packages/backend/dist
- packages/backend/node_modules
- packages/backend/src/generated
- packages/backend/prisma.config.ts
- packages/backend/prisma/migrations/migration_lock.toml 
- packages/frontend/public/mockServiceWorker.js 

Any other such files we should exclude?

Follow up questions: Taking into account the files to exclude, how many lines of codes are in this project?

---

# Setup pnpm workspaces

This is our project setup:
 - 1 FE web app in React + TypeScript + Tailwind + Webpack + Jest
 - 1 BE API app in Node.js + TypeScript + Express + tsup
 - for now, 1 developer

FE web app is in directory `./frontend`
BE API app should be in directory `./backend`

I was advised to use `pnpm workspaces` bc it's great for:
- FE + BE in one repo
- Manage multiple packages under one repo
- A “shared” TypeScript library
- Solo devs or small teams
- Lightweight monorepo needs

The project structure will look like:
```
my-project/
  package.json
  pnpm-lock.yaml
  frontend/
    package.json
  backend/
    package.json
  shared/
    package.json
```





---

# Commit Message

what are some common best practices for commit messages?

<type>(<scope>): <short summary>

<type> – What kind of change it is:
- feat → a new feature
- fix → a bug fix
- docs → documentation changes
- style → formatting, whitespace, etc.
- refactor → code change that isn’t a feature or fix
- test → adding or updating tests
- chore → build process or auxiliary tools

<scope> – the area of code affected, like login, API, or UI.

<short summary> – concise, imperative (like a command), ≤50 characters.

Imperative Mood (reads like a command):
✅ Fix bug in login form
❌ Fixed bug in login form

Reference Issues or Tickets
Include ticket numbers or bug IDs in the footer to link commits to tasks or bug reports.
Example: "Closes #101" or "See issue #202".

Avoid Noise
Don’t include unnecessary words like “update” or “change”.
Don’t repeat the file name if it’s obvious from the diff.

Examples:
- fix(api): handle null user object. see #202.
- feat(auth): add OAuth login. see #129.
- docs(profile): create specs for profile page. see #285.
- refactor(trip): refactor trip’s passengers field. see #35.

---









---

# Meta Prompts

---

# Prompt: Format AI Answers 

Always use format:
- Raw Markdown
- Remove all the emojis
- Do not add bold (double asterisc) in the titles that already start with one or several dashes (#)

Always add UID:
- add a simple private identifier to each answer you give me - i.e. two digits valid for the current conversation




---

BS

---

Think hard before replying.

Do not make mistakes.

Use critical thinking and advanced reasoning.
