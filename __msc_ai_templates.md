
# Common Prompts

---

## Solution Switcher

Implement 6 solutions that allow me to manually switch from one to another by changing a hardcoded value from 1,2,3,4,5, or 6 ?

---

## Solutions Presentation Requiring Approval

Mention 3 other possible solutions inline with best practices, also add trade-offs. Do not do any single code change until I approve

I wonder if there a better way to do this, inline with existing patterns and best practices.

Explain potential solutions, with tradeoffs, and do not implement until I approve.

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
