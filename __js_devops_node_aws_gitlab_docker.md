     
-------------------------------------------------------

# `npm` Docs

`npm` Docs https://docs.npmjs.com/

`npm` CLI https://docs.npmjs.com/cli/

`npm` Web https://www.npmjs.com/

-------------------------------------------------------

# `npm` Cheatsheet

`npm init`

`npm install` -or- `npm i`

`npm run <alias>`

For each, create an alias under `scripts` in `package.json`:

`webpack serve --mode development --open`

`jest`

`cypress run`

`kill-port -p 3000`

Tests on specific files:

`npm test -- path/to/file.cy.ts`

`npm run start & wait-on tcp:3000 && cypress run --spec path/to/file.cy.ts && npm run server:kill`

-------------------------------------------------------

# `npm ci` vs `npm i`

`npm ci` installs exact dependencies from lockfile, `package-lock.json`

| Feature                  | `npm install` (`npm i`) | `npm ci` (Clean Install)                     |
| ------------------------ | ----------------------- | -------------------------------------------- |
| Purpose                  | Install dependencies    | Install **exact** dependencies from lockfile |
| Uses `package.json`      | ✅ Yes                   | ✅ Yes                                        |
| Uses `package-lock.json` | ✅ (optional)            | ✅ **Required**                               |
| Can update lockfile      | ✅ Yes                   | ❌ Never                                      |
| Deletes `node_modules`   | ❌ No                    | ✅ Always                                     |
| Speed (in CI/CD)         | 🐢 Slower               | 🚀 Faster and consistent                     |
| Ideal use case           | Dev environment         | CI/CD pipelines and reproducible builds      |

`npm ci` preferred in CI because:

 - faster

 - reliable (uses exact versions from package-lock.json)

 - fails on mismatch, which helps catch dependency problems early

 - deterministic

What `npm install` Does:

 - Installs dependencies listed in `package.json`

 - If `package-lock.json` exists: tries to honor it, but may update it if out of sync

 - Creates or updates `node_modules`/ and `package-lock.json`

 - May produce slightly different results depending on the environment

 - ✅ Good for local dev
 
 - ⛔️ Not ideal for CI/CD — can be non-deterministic

What `npm ci` Does:

 - Requires a valid `package-lock.json` file

 - Completely removes `node_modules/`

 - Installs exact versions specified in `package-lock.json`

 - Fails if there’s any mismatch between `package.json` and `package-lock.json`

 - ✅ Perfect for CI/CD pipelines

 - ✅ Ensures deterministic, reproducible builds

 - ✅ Typically faster

-------------------------------------------------------

# What does it mean "`npm ci` has deterministic builds" ?

A deterministic build means: Given the same input, the output is always the same.

What makes `npm ci` deterministic:

 - It strictly uses `package-lock.json`: no dependency resolution is done.

 - It installs the exact versions (and sub-dependencies) listed in the lockfile.

 - It deletes `node_modules/` before installing: Prevents leftover or mismatched packages from previous installs.

 - It fails on mismatch: If `package.json` and `package-lock.json` are out of sync, `npm ci` throws an error. This guarantees the lockfile reflects reality.

-------------------------------------------------------

# What is Node LTS ?

Node LTS = Node.js Long-Term Support.

LTS versions of Node.js are officially supported and maintained for a longer period (typically 30 months).

They are considered more stable and reliable for use in production environments.

-------------------------------------------------------

# npm vs nvm ?

Node Package Manager vs Node Version Manager.

nvm = Easily switch between different versions of Node.js (and their bundled npm) on your system.

nvm = ONLY for Node.js versions - not for versions of any other program.

-------------------------------------------------------

# Example of `package-lock.json` and brief overview of how it works?

Given this `package.json`:

{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "lodash": "^4.17.0"
  }
}

When running `npm install`, it creates a `package-lock.json` like this:

{
  "name": "my-app",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "dependencies": {
        "lodash": "^4.17.0"
      }
    },
    "node_modules/lodash": {
      "version": "4.17.21",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
      "integrity": "sha512-...=="
    }
  },
  "dependencies": {
    "lodash": {
      "version": "4.17.21",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
      "integrity": "sha512-...=="
    }
  }
}

Anyone who runs `npm ci` or` npm install` with this lockfile will get `lodash@4.17.21`

### Summary

 - `package-lock.json` locks down exact dependency versions, down to sub-dependencies.

 - It prevents unexpected updates or regressions

 - It's a critical part of any reliable Node.js project, especially in CI/CD and teams

### How It Works in Practice

1. First install

`npm install` reads package.json

Resolves dependencies (using ^ or ~ ranges)

Generates or updates `package-lock.json`

2. Subsequent installs

`npm ci` or `npm install` will use the exact versions in the lockfile

3. CI/CD

Use `npm ci` to ensure that the exact same dependency tree is installed, every time

-------------------------------------------------------

# `npm` and 3rd Party Packages

`npm` = node package manager

Differentiate between dependencies environments:
 - `--save` for Development and Production, this is the default option if you add none
 - `--save-dev` for Development
 - `-g` for Global

-------------------------------------------------------

# `npm` in short

The largest software registry in the world.

More than two million packages. Used by more than 17 million developers.

Free Registry. At the center of JavaScript code sharing.

`npm Pro` gives features like private packages.

-------------------------------------------------------

# `npm` and `node.js`

`npm` is the default package manager for the JavaScript runtime environment `Node.js`

The `Node.js` installer includes `npm`.

-------------------------------------------------------

# `npm`, Isaac Schlueter and `GitHub`

In 2009 Isaac Schlueter created `npm`. 

In 2014, he launched a company around it called `npm, Inc.`.

In 2020, he sold `npm, Inc.` to `GitHub`.

https://github.com/isaacs

-------------------------------------------------------

# Versioning in `package.json`

We refer to the standard `npm` version annotations.

 - `~version` : only accepts new `patch` versions. Patch releases add "Backward compatible bug fixes" and "Increment the third digit".

 - `^version` : accepts new `minor` and `patch` versions. Minor releases add "Backward compatible new features" and "Increment the middle digit and reset last digit to zero".

 - `version` : must match exact version

https://stackoverflow.com/a/25861938

-------------------------------------------------------

# Project Initialization

1. Initialize project with npm

`npm init`

or

`npm init -y`   // instantly initialize project w default values

2. `package.json` was created, add this line

>     "scripts": {
>         "start": "node app.js"
>     }

3. Create file `app.js`

-------------------------------------------------------

# `package.json` file

Makes it easy for others to manage and install your project.

A package.json file:
- lists the packages your project depends on
- specifies versions of a package that your project can use using semantic versioning rules
- makes your build reproducible, and therefore easier to share with other developers

https://docs.npmjs.com/creating-a-package-json-file

-------------------------------------------------------

# Mismatches Between Packages Versions

Very common issue in the JavaScript ecosystem... there is a lot of package fatigue, versions change often and sometimes there in no backwards compatibility.

Try solving:

 - Google Search for exact same issue, include packages and versions in search. For instance: package version mismatch issue "apollo-server-express": "^3.11.1" with "express": "^4.17.1"
 
 - Find exact fix i.e. correct versions to use together, migration instruction, and docs i.e. https://github.com/oven-sh/bun/issues/4947#issuecomment-3049438137
 
 - If migration is difficult, feed answer to AI along with modules that need upgrading

Try solving with different approaches such as:

 1. Reading the f*ing manual (official doc)

 2. Look for a command line installation wizard i.e. `npx eslint --init` is great

 3. Google Search

 4. Stackoverflow Search

 5. ChatGPT/DeepSeek - AI has a very hard time solving them also though because of the training data(older versions are over represented and weight more)

If nothing works, fall back to:

 - Start with a major version of the main package aka React - so stick to React 18 and run `npm upgrade` for all the other dependencies to get the latest version that matches that.

 - `npm upgrade --all`
 
 - Update the code to match any changes (this can take hours as you might have to rewrite whole components due to API changes but is sometimes the only way)

-------------------------------------------------------

# Nodemon

`nodemon` is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

Typically, only needed for development.

-------------------------------------------------------

# Nodemon Install

1. Install it for development

`npm i nodemon --save-dev`

2. then under "scripts" in your package.json file, add "start": "nodemon app.js" like this -

>     "scripts": {
>         "test": "echo \"Error: no test specified\" && exit 1",
>         "start": "nodemon app.js"
>     }

3. then run

`npm start`

-------------------------------------------------------

# Debugging

Directly add `breakpoints` into VS Code.

`Watch` variables.

-------------------------------------------------------

# Debug Mode: Auto Restart Setup

1. Go to the `Debug` left tab, click on `create launch.json file`

2. Add these lines

>     "restart" : true,
>     "runtimeExecutable": "nodemon"

-------------------------------------------------------

# Deployment [Best Practices]

- Use environment variables

- Use API Keys dedicated to Production

- Reduce error output details, do not show sensitive info to users

- Set secure response headers

- Add asset compression

- Configure logging/logs

- Use SSL/TLS, encrypt data

-------------------------------------------------------

# Environment Variables in NodeJS

`nodemon.json` is the file where you add all your variables such as

>     {
>         "env": {
>             "MONGODB_USER": "adri"
>         }
>     }

`process.env.MONGODB_USER` is how you access one of these variables in your code

https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/12198022#questions

-------------------------------------------------------

# Deploying SPAs (i.e. React App)

If your app is using server-side rendering you must go with a node server. 

In other cases you can basically deploy your application on anything you want — apache, nginx, express or host it on a CDN like S3 (Amazon).

Read more:
 - https://medium.com/@baphemot/understanding-react-deployment-5a717d4378fd
 - NodeJS web app on AWS: https://aws.amazon.com/getting-started/projects/deploy-nodejs-web-app/
 - https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment

-------------------------------------------------------

# Cloud Platforms-as-a-Service

 - Heroku
 - Render
 - Vercel
 - Netlify

Warning: these platforms are optimized for frontend applications and serverless functions, but they handle server-side/backend code differently.

-------------------------------------------------------

# Heroku

Full server support.

Runs your app like a `full Node.js server` (like `Render` or `EC2`).

Natively support long-running Node.js servers like `Express`.

↳ Supports `app.listen()` – your `Express` app is always running.

Your `REST API` can maintain long-lived connections (i.e. `websockets`).

Very similar to Render but they differ in architecture, pricing model, performance, and developer experience.

-------------------------------------------------------

# Render and REST APIs w Express

Full server support.

Runs your app like a `full Node.js server` (like `Heroku` or `EC2`).

Natively support long-running Node.js servers like `Express`.

↳ Supports `app.listen()` – your `Express` app is always running.

Your `REST API` can maintain long-lived connections (i.e. `websockets`).

Very similar to Heroku but they differ in architecture, pricing model, performance, and developer experience.

-------------------------------------------------------

# Netlify and REST APIs w Express

Netlify does not natively support long-running Node.js servers like Express.

To deploy an Express API, you must adapt it to serverless functions using netlify-functions or split the Express routes into separate handler functions.

-------------------------------------------------------

# Vercel and REST APIs w Express

Vercel does not natively support long-running Node.js servers like Express.

Uses a serverless model.

However, you can deploy an Express app on Vercel by wrapping/converting it into a serverless function, typically via a package like `serverless-http`. 

No `app.listen()` — the platform handles the request lifecycle.

Vercel allows you to deploy API routes directly under an `api/` directory.

Vercel is a `serverless-first platform`, which means:
- Each API route or function is executed on-demand, per request.
- The environment is ephemeral and stateless.
- The function runs, handles the request, and then shuts down.
- Better for short-lived, fast API endpoints — not ideal for latency-sensitive or stateful apps.

-------------------------------------------------------

# Glitch vs Vercel/Render/Netlify

Glitch is not optimized for frontend apps + serverless functions in the same way that platforms like Vercel or Netlify are.

Instead, Glitch is a platform for running full-stack Node.js apps, including:
 - Persistent Express.js servers
 - Real-time, collaborative development
 - In-browser code editing and live previews

What Glitch is optimized for:
 ✅ Long-running Node.js apps
 ✅ Quick prototyping and sharing
 ✅ Collaborative real-time editing (like Google Docs for code)
 ✅ Hosting full-stack apps with persistent servers
 ✅ Great for teaching, experimentation, small demos

-------------------------------------------------------

# Bundlers Explained

Build Tools, aka Bundlers, aka JavaScript Bundlers.

Typical tasks they perform:
 - Parse Files
 - Manipulate Content
 - Output New Files

Typically, build tools merge all your code and transform it so that:
 - even old browsers can run it
 - the final file is much lighter
 - the final code is optimized

-------------------------------------------------------

# Some Popular Bundlers

 - `Webpack`
 - `Vite`
 - `esbuild`

-------------------------------------------------------

# Bundlers: REST APIs vs Frontend Apps

Two categories of JavaScript projects:
 - REST API in Node.js and Express, tl;dr backend projects
 - Web App in Node.js and React/Vue/etc, tl;dr frontend projects

Similarly, there are **two categories of bundlers**, some for frontend projects and others for backend projects.

-------------------------------------------------------

# Bundlers for Nodejs Backend Projects, for REST APIs

Context: REST APIs coded in Node.js and Express, tl;dr backend projects

These backend projects usually don’t need a frontend-style bundler like `Webpack` or `Vite`. But bundling can still be super useful for:
- Minifying and tree-shaking your code.
- Creating a single output file for deployment.
- Obfuscating code (to a degree).
- Reducing cold start times (e.g. in serverless environments like AWS Lambda).

Popular bundlers for Nodejs backend projects:
- `esbuild`
- `Rollup`
- `Webpack`
- `Bun`
- `ncc`

-------------------------------------------------------

# Bundlers for Nodejs FrontEnd Projects, for Web Apps

Context: Web Apps coded in Node.js and React/Vue/Angular, tl;dr frontend projects

Popular bundlers for Nodejs frontend projects:
- `Vite`
- `Webpack`
- `Parcel`
- `Snowpack` — no longer being maintained. Snowpack team now working on Astro, a static site builder powered by Vite.
- `esbuild` – Underlying bundler used in tools like Vite; great for DIY setups

-------------------------------------------------------

# Webpack vs Vite

| Feature          | Webpack             | Vite                      |
| ---------------- | ------------------- | ------------------------- |
| Dev speed        | 🐢 Slower           | ⚡ Blazing fast            |
| Build speed      | ⚖️ Decent           | ⚡ Fast (Rollup-based)     |
| Setup complexity | ⚙️ More config      | 🔧 Minimal config         |
| Ecosystem        | 🏛️ Mature, complex | 🌱 Modern, growing fast   |
| Plugin system    | 🧩 Huge             | 🔌 Simpler (Rollup-based) |

If you're working in a complex or legacy enterprise setup, Webpack might still be more flexible.

If you're starting a new project today, especially with modern frameworks like React, Vue, or Svelte — Vite is an excellent default.

-------------------------------------------------------

# Webpack HowTo

1. Install `webpack`

`npm i webpack`

2. Install `webpack-cli`

`npm i webpack-cli --save-dev`

3. Add to `package.json` under `scripts` section:

`"build": "webpack"`

4. Create `webpack.config.js` and add:

>     const path = require('path');
>     
>     module.exports = {
>       mode: 'production',
>       entry: './app.js',
>       output: {
>         path: path.join(__dirname, 'dist'),
>         publicPath: '/',
>         filename: 'final.js',
>       },
>       target: 'node',
>     };

5. Run the build

`npm run build`

6. Add to `package.json` under `scripts` section:

`"prod": "node dist/final.js",`

but if you use nodemon:

`"prod": "nodemon dist/final.js"`

7. Run the project with prod build

`npm run prod`


https://its-amit.medium.com/how-to-make-build-for-express-js-node-js-using-webpack-and-deployment-on-docker-9cd219ba24a2

Webpack (a build tool using Node.js): https://academind.com/tutorials/webpack-2-the-basics

-------------------------------------------------------

# Deployment Types

TODO

Deployment types, also known as deployment strategies or deployment methods, refer to the various ways software or applications are rolled out to users or put into production. 

These strategies vary in terms of how they handle updates, the risk they introduce, and the level of control they offer during the release process. 

Big-bang deployment
Rolling deployment
Recreate deployment
Continuous deployment
Infrastructure as Code
A/B testing
Blue/green deployment
Canary deployment
...

-------------------------------------------------------

# Which Deployment Has Zero Downtime?

TODO

-------------------------------------------------------

# What is an Artifact in CI/CD?

TODO

-------------------------------------------------------

# What does SLA stand for(in the DevOps domain)?

TODO

-------------------------------------------------------

# What is the main advantage of using containers in CI/CD ?

TODO

-------------------------------------------------------

# Which of the following git flows fits best for a small team?

Gitflow
Feature Flow
Trunk Base Development

TODO

-------------------------------------------------------

# When using IAC (Infrastructure As Code) resources drift means?

TODO

Difference between state file and real infrastructure state?

IAC examples are Terraform or the Cloud Development Kit

     
-------------------------------------------------------

# Operation Excellence Principles 

- small and frequent increments over big releases

- continuous feedback and improvement

- low cost(time) by leveraging automation

- happier developers - less live incidents, 

- less overtime to fix bugs, etc

-------------------------------------------------------

# Jargon

Provision = Setup

Infra = Server

-------------------------------------------------------

# Infra-As-A-Service: Infra-As-Code

The latest tech for CI/CD.

Tools involve:
 - AWS CDK
 - Terraform

-------------------------------------------------------

# CI/CD Key Concepts

Branches - Git branches where we manage code, depending on the git-flow you can have the main branch, release, and dedicated feature branches. 

Triggers - fire when something meaningful happens - like merging a pull request to a specific branch(main, release)

Artifacts - the output of the build pipeline, an executable version of the application

Stages - different places to deploy (staging, QA, production)

Jobs - specific tasks in the release process i.e. running unit tests, linting the code, packaging the artifact

Pipelines - a group of jobs with a specific purpose i.e. the Build Pipeline creates the artifact while the Release Pipeline deploys the application.

-------------------------------------------------------

# Source Code Versioning: Git Flows

1. Trunk-Based Development (Flow) - the simple one where everyone works on a single long-lived branch: the trunk(main branch). Best fit for a small team at the beginning of a project.

2. Feature Flow - in addition to the trunk (main) developers can create dedicated, short-lived feature branches that are finally merged into the trunk through a Pull/Merge Request. Suitable for a medium size team and codebase.

3. GitFlow - combines short-lived feature branches with additional long-lived branches like develop and release. Bugs are fixed by creating hot-fix branches that merge directly into the trunk. Suitable for big teams contributing to a big code base(several projects, more than 4 developers, possibly different teams). 

https://www.atlassian.com/git/tutorials/comparing-workflows#centralized-workflow

https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow

https://nvie.com/posts/a-successful-git-branching-model/

-------------------------------------------------------

# The Build Pipeline

The build pipeline is the collection of jobs we need to perform to produce the artifact.

The artifact is an executable version of our application that can be deployed.

Depending on the tech stack you are using, the steps of the build pipeline may also differ but the overall principle is always the same.

1) For a Single Page Application (React, Angular, Vue)

Lint -> Install Dependencies -> Build (ts to js, css & js processing, create bundle) -> Unit Test

2) For a Node.js API Service

Lint -> Install Dependencies -> Build (ts to js) -> Unit Test

3) For a Dockerized API Service (Node.js)

Lint -> Install Dependencies -> Build (ts to js) -> Package (docker build, docker push)

-------------------------------------------------------

# Deployment Requirements

Reversible  — a rollback mechanism to revert the deployment quickly if anything fails in the production stage.

Zero Downtime — deploying should not cause the production stage to be disabled and affect users. The change to the new version should go unnoticed.

-------------------------------------------------------

# Deployment Environment

Regardless of the dozen Cloud Services out there, there are only 4 fundamental ways to deploy an application. Cloud Services are either one of those or a managed version of those(a wrapper around them to simplify the setup).

1. On Premise

2. Virtual Servers i.e. AWS EC2

3. Containers i.e. AWS ECS

4. Serverless i.e. AWS Lambda

The above refers to the case when you do need to compute power i.e. a server-side rendered app, a node.js API

Note: if you do not need a server like in the case of a SPA or a static website you can deploy to static storage i.e. AWS S3 or Azure Blob Storage

-------------------------------------------------------

# Deployment Styles

1. In-place Deployment — the new application is deployed on the same infrastructure, replacing the old application code. 

An application restart is usually needed. The cost and complexity are very low, downtime risk is high due to the application restart.

2. Rolling Deployment — the equivalent of the in-place deployment, applied when the application is deployed to several instances. 

The new app replaces the old one gradually. Sometimes the infrastructure is also gradually replaced. 

Users might experience different variations of the app until the deployment is complete. 

The downtime risk is still high - although slightly lower than for an in-place deployment because in case of failure, we can fall back on existing instances.

-------------------------------------------------------

# Deploying a React App on AWS S3

Source for the below guide: https://www.youtube.com/watch?v=SHN48wTEQ5I

1. Create a bucket
2. ACL Disabled - leave as is
3. Block Public Access Settings > untick "Block Public Access"
4. Block Public Access Settings > tick "I acknowledge..."
5. Click "create bucket"
6. Properties tab > static website hosting > select "enable"
	- Index Document > type "index.html"
	- Error Document > type "index.html"

PATH A
7. Option B: Change bucket policies
permissions tab > bucket policies > edit
	- add action > type and select "s3"
	- type "getobj" > select "getobject"
	- next to "add a resource", click on "add" button
		- under "resource type", select "object"
		- under "Resource ARN", replace "{BucketName}" by your project name (as appearing in url) i.e. "my-react-app"
		- under "Resource ARN", replace "{ObjectName}" by *
		- under "Resource ARN", will look like: arn:aws:s3:::my-react-app/*
	- directly in the Policy replace:
		- "Principal": {},
		by
		- "Principal": "*",
	- click on "Save Changes"
   	Final file will look like:
>     {
>     	"Version": "2012-10-17",
>     	"Statement": [
>     		{
>     			"Sid": "Statement1",
>     			"Principal": "*",
>     			"Effect": "Allow",
>     			"Action": [
>     				"s3:GetObject"
>     			],
>     			"Resource": [
>     				"arn:aws:s3:::basic-node-rest-api/*"
>     			]
>     		}
>     	]
>     }

8. Objects tab > upload your project files to the bucket
9. 🎉 Access your project aws url (find it under "Properties" tab) 🎉

PATH B
7. Option A: Change ACLs
"Permissions" tab > Object Ownership > ACL Enabled
  "Enabling ACLs turns off the bucket owner enforced setting for Object Ownership" > tick "I acknowledge that ACLs will be restored" > Click "Save"
"Permissions" tab > Access Control List (ACL) > Edit
   "Everyone (public access)" row > tick "List" > tick "Read" > tick "I understand the effects of these changes on my objects and buckets." > click "save"
8. "Objects" tab > upload your project files to the bucket
   "Permissions" > Access control list (ACL) > tick "Grant Public-Read Access" > tick "I understand the risk of granting public-read access to the specified objects."
   Click "Upload"
9. 🎉 Access your project aws url (find it under "Properties" tab) 🎉

Additional tips
 - Fix routing issues by adding `index.html` to "Error Document" under `Properties` -> `Static website hosting` ; c.f. https://stackoverflow.com/questions/51218979/react-router-doesnt-work-in-aws-s3-bucket
 - For vite use `npm run build`, c.f. https://v4.vitejs.dev/guide/static-deploy.html

-------------------------------------------------------

# AWS Deployment Automation

Command format: `aws s3 cp /tmp/foo/ s3://bucket/ --recursive`

Command for my project: `aws s3 cp ./build s3://movie-app-static-adri/ --recursive --acl public-read`

Docs

AWS S3 CLI https://docs.aws.amazon.com/cli/latest/reference/s3/

-------------------------------------------------------

# AWS HowTos

How to Install and Configure AWS Command Line Interface (CLI)
 - https://www.youtube.com/watch?v=BzzCIsjrE7U

Debugging AWS Lambda and API Gateway (In-Depth Guide) - Part 3 of my Debugging Series
 - https://www.youtube.com/watch?v=y3ZfoCZ_yzg

-------------------------------------------------------

# GitLab Pipelines

Pipelines can run automatically for specific events, like when pushing to a branch, creating a merge request, or on a schedule.

When needed, you can also run pipelines manually.

Pipelines are composed of:

 - Global YAML keywords that control the overall behavior of the project’s pipelines.
 
 - Jobs that execute commands to accomplish a task. For example, a job could compile, test, or deploy code. Jobs run independently from each other, and are executed by runners.

 - Stages, which define how to group jobs together.

https://docs.gitlab.com/ci/pipelines/

-------------------------------------------------------

# GitLab Runners

In GitLab, runners are agents that: 

 - are responsible for running your builds, tests, deployments, and other CI/CD tasks defined in `.gitlab-ci.yml` files.
 
 - run the GitLab Runner application, to execute GitLab CI/CD jobs in a pipeline

The following is a basic workflow of how runners work:

 - A runner must first be registered with GitLab
 
 - when a pipeline is triggered, GitLab makes the jobs available to the registered runners
 
 - matching runners pick up jobs, one job per runner, and execute them
 
 - results are reported back to GitLab in real-time

https://docs.gitlab.com/ci/runners/

-------------------------------------------------------

# GitLab CI/CD Jobs

CI/CD jobs are the fundamental elements of a GitLab CI/CD pipeline.

Jobs are configured in the `.gitlab-ci.yml` file with a list of commands to execute to accomplish tasks like building, testing, or deploying code.

-------------------------------------------------------

# GitLab CI/CD: Jobs vs Stages

In GitLab CI, jobs are grouped by stages (like build, test, deploy).

Stages run sequentially, whereas jobs run in parallel (within a stage).

Exception: 

Jobs within the same stage run in parallel, unless explicitly told to wait on another job using `needs:` or `dependencies:`.

-------------------------------------------------------

# GitLab CI/CD YAML file 

GitLab CI/CD YAML file, `.gitlab-ci.yml`, is where you define your pipeline: you add the stages and jobs.

In this file, you define:

 - The structure and order of jobs that the runner should execute.
 
 - The decisions the runner should make when specific conditions are met.
 
-------------------------------------------------------

# GitLab Pipeline: React SPA with stages Build & Deploy

This pipeline deploys the React SPA to AWS S3.

HowTo:

1. Go to GitLab

2. Your Project > Build > Pipelines

3. Create New Pipeline by choosing the test template called "Hello world" with GitLab CI

4. Remove all the text > Instead add the text below > then click "Commit Changes"

>     stages:          
>       - build
>       - deploy
>     
>     lint-job: # This job runs in the build stage, which runs first.
>       stage: build
>       image: node:lts # The image that will be used to run the job
>       script: # The commands that will be executed in the job
>         - npm ci # Installs the dependencies
>         - npm run lint # Runs the linter
>     
>     build-job:  # This job runs in the build stage, which runs first.
>       stage: build    # It only starts when the job in the build stage completes successfully.
>       image: node:lts
>       script:
>         - touch .env # creates and env file
>         - echo $ENV_FILE > .env # adds the content of the environment file to the .env file
>         - npm ci # Installs the dependencies
>         - npm run build # Builds the project
>       artifacts:
>         untracked: false 
>         when: on_success # The build artifacts are saved only when the job succeeds
>         expire_in: 10 days # The build artifacts are saved for 10 days
>         paths:
>           - "build" # The build folder is saved as an artifact
>     
>     deploy-job: # This job runs in the deploy stage.
>       stage: deploy  # It only runs when *both* jobs in the build stage complete successfully.
>       image: registry.gitlab.com/gitlab-org/cloud-deploy/aws-base:latest
>       script:
>         - aws s3 cp ./build s3://$AWS_BUCKET_NAME/ --recursive --acl public-read # Deploys the build folder to the bucket

Above is the text for your GitLab CI/CD YAML file - `.gitlab-ci.yml`

Both lint-job and build-job are in the same build stage:

 - If either one fails, the whole build stage fails and the deploy-job won’t run.

 - So even if the code builds fine, a failed lint check blocks deployment, which is intentional and aligns with best practice.

If lint-job fails in your pipeline, the best practice is to:

 1. Fix the Lint Issues Locally
 
 2. Re-Run Unit Tests Locally
 
 3. Commit and Push Fixes - This will rerun the entire pipeline, including both lint-job and build-job

### YAML Explained

`image: node:lts`:

The job uses a Docker image from Docker Hub — specifically, the `node:lts` image, which contains Node.js (LTS version) and npm pre-installed. 

This defines the runtime environment for this job.

`script` explained:

This is the list of commands that will run inside the container in the CI job.

They are run in order, top to bottom.

5. Your Project > Settings > CI/CD > "Variables" section > click "Add Variable"

Untick "Protected Variable" (for simplicity, you might want to change that in a more mature setup)

Key: add relevant key i.e. ENV_FILE

Value: add relevant key-value pairs i.e. API_KEY=cb1ce44e537248e40baea2204

Click "add variable"

6. Repeat step 5 as many times as needed, for instances

Key: AWS_BUCKET_NAME
Value: movie-app-static-adri

Key: AWS_DEFAULT_REGION
Value: eu-north-1

Key: AWS_ACCESS_KEY_ID
Value: [ReadBelow]

Key: AWS_SECRET_ACCESS_KEY
value: [ReadBelow]

For AWS_ACCESS_KEY_ID and XYZ, go to AWS Console Page > IAM > Users > click on relevant user 

Access key 2 > click "Create access key" > Use Case, click "CLI" > click "I understand the above recommendations" > click "Next"

Description tag value > write "used by GitLab" > click "Create access key"

"Retrieve access keys" confirmation page > "Access key" is what you need for `AWS_ACCESS_KEY_ID` , and "Secret access key" is what you need for `AWS_SECRET_ACCESS_KEY`

7. Your Project > Build > Pipelines

click on "Failed" for Pipeline that previously failed > click "Retry"


https://docs.gitlab.com/ci/yaml/

-------------------------------------------------------

# GitLab Pipeline: Why Run "npm ci" For Each Job ?

Because each job runs in its own isolated environment:

 - With a fresh container - no shared dependencies, no shared file system

 - Without `node_modules/` from previous jobs

 - Without guarantee that dependencies from other jobs exist
 
This ensures correctness, speed, and consistency.

-------------------------------------------------------

# GitLab Pipeline: How Can Jobs Share State ?

GitLab CI runs each job in a separate container, unless you explicitly share state via:

 - `artifacts`

 - `cache`

 - `dependencies`

 - `needs`

For instance:

If you have 2 jobs independently installing the same dependencies, you can share them using `cache`.

It will result in faster jobs.

-------------------------------------------------------

# GitLab Pipeline: React SPA with stages Build, Test (Unit Tests) and Deploy

Comes with:

 - an `install` job to install the dependencies
  
 - cache the `node_modules` folder between jobs

>     stages:          
>       - build
>       - deploy
>     
>     default:
>       image: node:latest
>       cache:  # Cache modules in between jobs
>         key: $CI_COMMIT_REF_SLUG
>         paths:
>           - .npm/
>       before_script:
>         - npm ci --cache .npm --prefer-offline
>         
>     lint-job: # This job runs in the build stage, which runs first.
>       stage: build
>       image: node:lts # The image that will be used to run the job
>       script: # The commands that will be executed in the job
>         - npm ci # Installs the dependencies
>         - npm run lint # Runs the linter
>     
>     build-job:  # This job runs in the build stage, which runs first.
>       stage: build    # It only starts when the job in the build stage completes successfully.
>       image: node:lts
>       script:
>         - touch .env # creates and env file
>         - echo $ENV_FILE > .env # adds the content of the environment file to the .env file
>         - npm ci # Installs the dependencies
>         - npm run build # Builds the project
>       artifacts:
>         untracked: false 
>         when: on_success # The build artifacts are saved only when the job succeeds
>         expire_in: 10 days # The build artifacts are saved for 10 days
>         paths:
>           - "build" # The build folder is saved as an artifact
>     
>     unit-test-job:       # This job runs in the build stage, which runs first.
>       stage: build
>       image: node:lts
>       script:
>         - echo $MY_TEST_VAR
>         - npm test
>     
>     deploy-job: # This job runs in the deploy stage.
>       stage: deploy  # It only runs when *both* jobs in the build stage complete successfully.
>       image: registry.gitlab.com/gitlab-org/cloud-deploy/aws-base:latest
>       before_script:
>         - echo "Deploying to AWS..."
>       script:
>         - aws s3 cp ./build s3://$AWS_BUCKET_NAME/ --recursive --acl public-read # Deploys the build folder to the bucket

Above is the text for your GitLab CI/CD YAML file - `.gitlab-ci.yml`

### YAML Explained

`default`: 

Section used to define shared settings for all jobs.

`image: node:latest`:

All jobs will use the `node:latest` Docker image unless they specify another.

This provides `Node.js` and `npm` pre-installed.

`cache`:

This sets up caching between jobs to make builds faster, especially useful for caching `node_modules` or downloaded packages.

`key: $CI_COMMIT_REF_SLUG`

Defines a cache key based on the current Git branch or tag name, slugified.

This makes cache branch-specific, preventing cross-branch interference.

`paths: - .npm/`

GitLab will cache the `.npm/` directory between jobs with the same key.

This is used by npm to cache downloaded packages.

`before_script`:

Commands listed here will run before each job's `script` section.

`npm ci --cache .npm --prefer-offline`

`npm ci`: A fast, clean install of dependencies using `package-lock.json`. Ideal for CI.

`--cache .npm`: Tells npm to use .npm/ as the local cache directory.

`--prefer-offline`: Prefer cached packages if available — speeds up builds and reduces network requests.

### Advanced Version

Generate XML report file with `jest-unit`.

`npm install --save-dev jest-junit`

Add in Package.json:

`"test:ci": "npm run test -- --testResultsProcessor=\"jest-junit\" --watchAll=false --ci --coverage"`

### Docs

https://evolvingweb.com/blog/comprehensive-guide-react-native-jest-and-gitlab-cicd

https://about.gitlab.com/blog/how-to-automate-testing-for-a-react-application-with-gitlab/

-------------------------------------------------------

# GitLab Pipeline: Rules

Example

>     job:
>       script: echo "Hello, Rules!"
>       rules:
>         - if: $CI_COMMIT_BRANCH == "release"

https://docs.gitlab.com/ci/jobs/job_rules/

-------------------------------------------------------

# GitLab Pipeline: React SPA with stages Install, Build, Test (Unit Tests) and Deploy

Here we deploy on either:
 
 - "Staging" Bucket in S3
 
 - "Production" Bucket in S3

So we just added the 2 relevant variables in GitLab.

By default, GitLab runs pipelines' jobs whenever there is a commit on any branch. We remove that and run jobs only on specific branch commits.

>     stages:          
>       - build
>       - deploy
>     
>     default:
>       image: node:latest
>       cache:  # Cache modules in between jobs
>         key: $CI_COMMIT_REF_SLUG
>         paths:
>           - .npm/
>       before_script:
>         - npm ci --cache .npm --prefer-offline
>         
>     lint-job: # This job runs in the build stage, which runs first.
>       stage: build
>       image: node:lts # The image that will be used to run the job
>       script: # The commands that will be executed in the job
>         - npm ci # Installs the dependencies
>         - npm run lint # Runs the linter
>       rules:
>         - if: $CI_COMMIT_BRANCH == "release" || $CI_COMMIT_BRANCH == "main"
>     
>     build-job:  # This job runs in the build stage, which runs first.
>       stage: build    # It only starts when the job in the build stage completes successfully.
>       image: node:lts
>       script:
>         - touch .env # creates and env file
>         - echo $ENV_FILE > .env # adds the content of the environment file to the .env file
>         - npm ci # Installs the dependencies
>         - npm run build # Builds the project
>       rules:
>         - if: $CI_COMMIT_BRANCH == "release" || $CI_COMMIT_BRANCH == "main"
>       artifacts:
>         untracked: false 
>         when: on_success # The build artifacts are saved only when the job succeeds
>         expire_in: 10 days # The build artifacts are saved for 10 days
>         paths:
>           - "build" # The build folder is saved as an artifact
>         
>     unit-test-job:       # This job runs in the build stage, which runs first.
>       stage: build
>       image: node:lts
>       script:
>         - echo $MY_TEST_VAR
>         - npm test
>       rules:
>         - if: $CI_COMMIT_BRANCH == "release" || $CI_COMMIT_BRANCH == "main"
>     
>     deploy-staging-job: # This job runs in the deploy stage.
>       stage: deploy  # It only runs when *both* jobs in the build stage complete successfully.
>       image: registry.gitlab.com/gitlab-org/cloud-deploy/aws-base:latest
>       before_script:
>         - echo "Deploying to AWS Staging..."
>       script:
>         - aws s3 cp ./build s3://$AWS_BUCKET_STAGING/ --recursive --acl public-read # Deploys the build folder to the bucket
>       rules:
>         - if: $CI_COMMIT_BRANCH == "release"
>     
>     deploy-production-job: # This job runs in the deploy-production stage.
>       stage: deploy  # It only runs when *both* jobs in the build stage complete successfully.
>       image: registry.gitlab.com/gitlab-org/cloud-deploy/aws-base:latest
>       before_script:
>         - echo "Deploying to AWS Prod..."
>       script:
>         - aws s3 cp ./build s3://$AWS_BUCKET_PRODUCTION/ --recursive --acl public-read # Deploys the build folder to the bucket
>       rules:
>         - if: $CI_COMMIT_BRANCH == "main"

-------------------------------------------------------

# Amazon CloudFront (CDN): Basic Setup


https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-creating-console.html

-------------------------------------------------------

# AWS Account Basics

Each AWS account has a default VPC, three subnets, and an Internet Gateway.

-------------------------------------------------------

# AWS Setup a Budget and Email Alerts

Billing and Cost Management > Budgets > Create budget
 
Leave everything as is ("zero spend budget" should be selected by default).

Just add your email address under "Email recipients".

-------------------------------------------------------

# Virtual Private Cloud (VPC)

It's a virtual network environment provided by AWS, providing an isolated section of the cloud where we can launch resources (servers, databases, etc). 

By default, VPC are not connected to the internet.

-------------------------------------------------------

# AWS Setup Database (Postgres)

1. Create AWS RDS Database

Note that we are creating a database host, that will then have several databases inside.

Aurora and RDS > Create Database > Pick "PostgreSQL" > Pick "Free Tier"

DB instance identifier > type value i.e. movie-api-production

Master username > type "root"

Credentials management > Self managed > Master Password > type a password

Instance configuration > pick the smallest (db.t3.mico)

Connectivity > Public Access > pick "Yes"

Connectivity > VPC security group (firewall) > Create new > New VPC security group name > type value i.e. sc-movie-api-production

Tags > click "add new tag" > Key, type value i.e. env > Value, type value i.e. prod

Monitoring > Log exports > tick "PostgreSQL log"

Additional configuration > Database options > Initial database name > type value i.e. movie_api_db

Additional configuration > Database options > Backup > Enable automated backups > untick if you're playing around

Click "create database"

2. Check connectivity w pgAdmin

Connectivity & security > Endpoint & port > Endpoint > copy endpoint - it should look like movie-api-production-05-22.c3sqe2jcc7u6.eu-north-1.rds.amazonaws.com

Right click on "servers" > Register > Server

Name > type value i.e. movie-api-production-05-22

Connection tab > Host name/address > paste endpoint i.e. movie-api-production-05-22.c3sqe2jcc7u6.eu-north-1.rds.amazonaws.com

Connection tab > Username > type value (you chose that during the setup in the previous step) i.e. root

Connection tab > Password > type value (you chose that during the setup in the previous step)

Connection tab > Save Password > tick it

Click "save"

~~~~~

Voila. It should successfully connect to the AWS RDS Database. If not, you may have an issue with the setup on AWS.

~~~~~

Video Tutorials:

 - https://www.loom.com/share/b1ec00286a6a466a81d0239165156a87

 - https://www.loom.com/share/28bbbd2d8f05420fa594bb4b18afe971

Turns out they are different. In that previous tutorial you created a brand new VPC security group, whereas in the other left it on "default".

When I create a new security group, I can successfully connect to the AWS RDS Database via pgAdmin.

-------------------------------------------------------

# 🐳 Docker

Docker simplifies the packaging and deployment of applications by providing a platform for creating and running containers.

https://docs.docker.com/engine/install/

-------------------------------------------------------

# Dockerfile

Dockerfiles serve as a recipe for building Docker Container Images, outlining the steps needed to configure and set up the container environment.

You can think of Dockerfile as a class, and Docker Container Image as instances of it.

Dockerfiles are blueprints.

https://docs.docker.com/build/concepts/dockerfile

-------------------------------------------------------

# Docker Container Image

TLDR: an app wrapped into everything required to run it - including an OS (ultra light linux OS).

A Docker container image is a lightweight, standalone, executable package of software that includes everything needed to run an application: code, runtime, system tools, system libraries and settings.

Docker images are typically versioned - as your team/company implements changes and may want to roll back if needed.

-------------------------------------------------------

# Docker Container Images + Operating Systems

Docker Container Images are not OS agnostic. Docker is not fully OS agnostic. You can’t run Windows containers on Linux, and vice versa.

Every container image includes some OS components (Linux libraries).

But not a full standalone operating system.

For intance, most Node.js images are based on a minimal Linux distribution, such as:

 - `debian` (default for node:<version>)

 - `alpine` (extra lightweight)

 - `ubuntu` (heavier, but familiar)

These provide:

 - A minimal Linux kernel interface (handled by the host machine)

 - Core utilities (like sh, libc, etc.)

 - Just enough OS libraries to run Node.js and your dependencies

-------------------------------------------------------

# Docker + MacOS

Docker on macOS uses a Linux virtual machine under the hood (via HyperKit, or now WSL2 on Docker Desktop for Windows). macOS can't run containers natively.

-------------------------------------------------------

# Docker Container Images + Linux

Docker containers are highly portable across Linux distros — as long as the kernel, architecture, and system libraries align.

-------------------------------------------------------

# Docker Containers

Docker images become containers when they run on Docker Engine.

Containers isolate software from its environment and ensure that it works uniformly.

-------------------------------------------------------

# Docker Registry

A repository for storing and distributing Docker images. 

It serves as a central hub where Docker images can be uploaded, shared, and pulled by users.

-------------------------------------------------------

# Docker: Benefits

1. Deployment Standardization

Docker enables a consistent deployment pipeline across teams and services within a company, simplifying the deployment process.

TLDR: Blueprint.

2. Less Manual Configuration

Docker images streamline deployment by encapsulating code and dependencies, eliminating the need for manual configuration of servers.

TLDR: Reproducible.

3. Artifact Repository

Docker images stored in repositories allow for easy versioning and rollback in the case of failure.

TLDR: Plan A, B, and C.

4. Container Orchestration

Cloud services offer container orchestration systems like AWS ECS, Kubernetes, and Azure Container Service to automate and manage containerized applications in production environments. 

Those systems handle complex operations such as autoscaling, load balancing, and deployment strategies(Blue/Green), reducing manual overhead and streamlining the deployment process.

-------------------------------------------------------

# Docker Orchestrators

| Tool                     | Notes                                                                  |
| ------------------------ | ---------------------------------------------------------------------- |
|   Kubernetes**           | Most popular; powerful, extensible, widely adopted.                    |
|   Docker Swarm**         | Simpler alternative to Kubernetes, integrated with Docker.             |
|   Nomad** (by HashiCorp) | Lightweight, general-purpose orchestrator (not limited to containers). |
|   Amazon ECS / EKS**     | AWS’s managed orchestration services.                                  |
|   OpenShift**            | Red Hat’s enterprise Kubernetes distribution.                          |

-------------------------------------------------------

# Docker: Common Commands

`docker build -t my-app .`   # builds a Docker image from a Dockerfile and gives it a name (or "tag")

`docker run -p 3000:3000 my-node-app`   # start a container from image "my-node-app" (node.js server) + exposes port 3000 on host and map it to port 3000 in the container

`docker compose up`  # start and run multi-container Docker applications defined in a docker-compose.yml file

`docker ps`    # list all running containers

`docker images`   # list all local images

`docker network ls`   # list all Docker networks on your machine

`docker system prune`    # Remove unused containers, networks, images (prompted)

`docker compose down`   # stop and completely remove all resources created by docker-compose up

-------------------------------------------------------

# Docker Command: `docker run`

`docker run -p 3000:3000 my-node-app` 

 - Starts a container from image "my-node-app" (node.js server)

 - Exposes port `3000` on host and map it to port `3000` in the container

 - Executes the commands defined in `Dockerfile` (whatever is after `CMD`)

Example Dockerfile:

FROM node:18
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "index.js"]

Docker executes everything up to `CMD` during the image build phase - when running `docker build`

Docker executes everything after `CMD`during container runtime - when running `docker run` and `docker compose up`

-------------------------------------------------------

# Docker Command: Compose 

| Command                  | Flags / Usage         | Description                               |
| ------------------------ | --------------------- | ----------------------------------------- |
| `docker compose up`      | `-d`, `--detach`      | Run containers in the background          |
|                          | `--build`             | Build images before starting containers   |
|                          | `--force-recreate`    | Recreate containers even if unchanged     |
|                          | `--no-deps`           | Do not start linked services              |
|                          | `--remove-orphans`    | Remove containers not in the Compose file |
| `docker compose down`    | `--volumes`, `-v`     | Remove named volumes                      |
|                          | `--remove-orphans`    | Remove orphaned containers                |
|                          | `--rmi all`           | Remove all used images                    |
| `docker compose restart` | `[SERVICE...]`        | Restart specific or all services          |
| `docker compose stop`    | `[SERVICE...]`        | Stop specific or all services             |
| `docker compose start`   | `[SERVICE...]`        | Start stopped containers                  |
| `docker compose build`   | `--no-cache`          | Build without cache                       |
|                          | `--pull`              | Always pull newer base images             |
| `docker compose ps`      | `--services`          | List only service names                   |
|                          | `--all`               | Show all containers (not just running)    |
| `docker compose logs`    | `-f`                  | Follow log output                         |
| `docker compose exec`    | `<service> <command>` | Run command inside a running container    |
| `docker compose run`     | `<service> <command>` | Run one-off command in a new container    |
| `docker compose config`  | (no flags)            | View the full resolved configuration      |
| `docker compose pull`    | (no flags)            | Pull images defined in Compose file       |

-------------------------------------------------------

# Docker Commands: Container Management

| Command                             | Description                                 |
| ----------------------------------- | ------------------------------------------- |
| `docker ps`                         | List **running** containers                 |
| `docker ps -a`                      | List **all** containers (including stopped) |
| `docker run IMAGE`                  | Run a container from an image               |
| `docker run -it IMAGE`              | Run interactively (with terminal)           |
| `docker run -d IMAGE`               | Run in **detached** (background) mode       |
| `docker run -p 8080:80 IMAGE`       | Map host port `8080` to container port `80` |
| `docker stop CONTAINER_ID`          | Stop a running container                    |
| `docker start CONTAINER_ID`         | Start a stopped container                   |
| `docker restart CONTAINER_ID`       | Restart a container                         |
| `docker rm CONTAINER_ID`            | Remove a **stopped** container              |
| `docker logs CONTAINER_ID`          | Show logs for a container                   |
| `docker exec -it CONTAINER_ID bash` | Open bash inside a running container        |

-------------------------------------------------------

# Docker Commands: Image Management

| Command                            | Description                                             |
| ---------------------------------- | ------------------------------------------------------- |
| `docker images`                    | List local Docker images                                |
| `docker pull IMAGE`                | Download an image from Docker Hub                       |
| `docker build -t myapp .`          | Build an image from a `Dockerfile` in current directory |
| `docker rmi IMAGE_ID`              | Remove an image                                         |
| `docker tag SOURCE_IMAGE NEW_NAME` | Tag an image with a new name                            |

-------------------------------------------------------

# Docker Commands: Volumes & Networks

| Command                        | Description          |
| ------------------------------ | -------------------- |
| `docker volume ls`             | List volumes         |
| `docker volume rm VOLUME_NAME` | Remove a volume      |
| `docker network ls`            | List networks        |
| `docker network create NAME`   | Create a new network |

-------------------------------------------------------

# Docker Commands: Network

| **Command**                                       | **Description**                                                  | **Example**                                         |
| ------------------------------------------------- | ---------------------------------------------------------------- | --------------------------------------------------- |
| `docker network ls`                               | List all Docker networks                                         | `docker network ls`                                 |
| `docker network inspect <network>`                | Show details of a network (connected containers, settings, etc.) | `docker network inspect bridge`                     |
| `docker network create <name>`                    | Create a new user-defined bridge network                         | `docker network create my-app-net`                  |
| `docker network rm <name>`                        | Remove a network (must not be in use)                            | `docker network rm my-app-net`                      |
| `docker network rm <id>`                          | Remove a network (must not be in use)                            | `docker network rm 2342948927`                      |
| `docker network connect <network> <container>`    | Connect a container to a network                                 | `docker network connect my-app-net my-container`    |
| `docker network disconnect <network> <container>` | Disconnect a container from a network                            | `docker network disconnect my-app-net my-container` |
| `docker network prune`                            | Remove all unused networks                                       | `docker network prune` *(⚠️ be careful)*            |

-------------------------------------------------------

# Docker Commands: Cleanup & System

| Command                  | Description                                           |
| ------------------------ | ----------------------------------------------------- |
| `docker system df`       | Show disk usage by Docker                             |
| `docker system prune`    | Remove unused containers, networks, images (prompted) |
| `docker system prune -a` | Remove **all** unused data, including images          |
| `docker volume prune`    | Remove unused volumes                                 |
| `docker image prune`     | Remove dangling (unused) images                       |

-------------------------------------------------------

# Module 05. End-To-End Delivery > 2.2  Action Item: Container Deployment > 2. Provision The Infrastructure

`docker build -t movie-app-05 .`

`docker compose up`

`localhost:5001/`    # pgAdmin - u: adiber_garcia@hotmail.com, p: theSeniorDev (NOT theUltraSeniorDev)

`docker network ls`

`docker images`

`docker run -p 3000:3000 --env-file .env.development --network software-lifecycle-container-deployment-0xadri_tsd-net movie-app-05`

`docker compose down`

`http://localhost:3000/docs/`    # go to this URL, and try execute the GET method for movies

Issues Fixed: SSL error, such as "new Error('The server does not support SSL connections')" - do this:

`docker network rm <id/name>`    #  Delete the docker network

`docker rmi IMAGE_ID`    # Delete the image

Then run it all again

Issue Fixed: Db connection error:

The database connection was failing because of the password used.

It was using the password of a previous instance (theSeniorDev).

Change the password in `.env.development` to "theSeniorDev".

Then rerun `docker run -p 3000:3000 ...`

-------------------------------------------------------

# `docker build -t my-app .`

Builds a Docker image from a Dockerfile and gives it a name (or "tag").

`-t my-app` :	Tags (names) the resulting image as my-app. You can later refer to it using this name.

`.`	: Tells Docker to look in the current directory for the Dockerfile.

-------------------------------------------------------

# `docker-compose up`  

TLDR: Start services.

Start resources defined in `docker-compose.yml`.

1. Reads the docker-compose.yml file

2. Pull images (if needed)

3. Builds images (if needed)

4. Create + start containers

5. Setup networks + volumes

6. Streams logs to your terminal

| Common Flags       | Description                                                       |
| ------------------ | ----------------------------------------------------------------- |
| `-d`               | Run containers in **detached mode** (in background)               |
| `--build`          | Force **rebuild** of images                                       |
| `--force-recreate` | Recreate containers even if they haven’t changed                  |
| `--remove-orphans` | Remove containers not defined in the current `docker-compose.yml` |

-------------------------------------------------------

# `docker-compose down`

TLDR: Stop and remove services.

Stop and completely remove all resources created by `docker-compose up`.

1. Stops all containers

2. Removes: Containers, Networks, Default volumes (anonymous volumes — if you used docker-compose up without naming volumes)

3. What it does not remove by default: Named volumes, Images, External networks - explicitly remove those too using flags

| Common Flags                           | Effect                                                        |
| -------------------------------------- | ------------------------------------------------------------- |
| `docker-compose down`                  | Stop and remove containers, networks                          |
| `docker-compose down -v`               | Also remove **named volumes**                                 |
| `docker-compose down --rmi all`        | Also remove **all images** used by services                   |
| `docker-compose down --remove-orphans` | Remove containers not defined in current `docker-compose.yml` |

-------------------------------------------------------

# Docker Compose File

A `docker-compose.yml` file is used by Docker Compose to define and run multi-container Docker applications.

Lets you define:

 - The services (containers)

 - The networks they connect to

 - The volumes they use

 - Environment variables, ports, commands, dependencies, etc.

### Basic Structure

services:       # All the containers you want to run
  web:
    image: nginx:latest
    ports:
      - "8080:80"

  app:
    build: .
    depends_on:
      - db

  db:
    image: postgres
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass

### Explanation

`services` defines each container and config inside each service:

 - `image`: the Docker image to use

 - `build`: path to Dockerfile to build image

 - `ports`: map host ↔ container ports (host:container)

 - `volumes`: define persistent storage, mount host or named volumes

 - `environment`: set environment variables

 - `depends_on`: define startup order

 - `networks`: (Optional) Define private comms
 
-------------------------------------------------------

# Docker: Setup Database (MySQL)

TODO - UNFINISHED

MySQL is the most popular relational database tool, with a market share of over 40%. Following is PostgreSQL (16%) and Oracle Database (11%).

Remember: Docker images are blueprints for building containers.

Run in terminal: 

`docker pull mysql:latest`

Check the image was downloaded:

`docker images`

Create our first container from the `mysql` image:

`docker run --name test-mysql -e MYSQL_ROOT_PASSWORD=strong_password -d mysql`

https://www.datacamp.com/tutorial/set-up-and-configure-mysql-in-docker

https://hub.docker.com/_/mysql

-------------------------------------------------------

# PgAdmin for PostgreSQL

Right click on "Server" > Register > New Server

Go to AWS Console > Aurora and RDS > select your existing DB > under "Endpoint & port", copy value of Endpoint (i.e. movie-api-production-database.c4sfw7u6.eu-north-1.rds.amazonaws.com)

Go back to PgAdmin > "Connection" Tab 

  Host name/address > Paste endpoint value

  Username > enter value
  
  Password > enter value
  
  Save Password > tick "yes"

-------------------------------------------------------

# 

`scp -i AWS_KEY_PATH FILE_TO_COPY ec2-user@INSTANCE_IP:FILE_DESTINATION`

`scp -i /Users/xyz/reactapps/virtual-server/my_prod_movie_api_key.pem FILE_TO_COPY ec2-user@INSTANCE_IP:FILE_DESTINATION`

scp -i /Users/adrienberthou/all-that-jazz/reactappsss/deployment-to-virtual-server-0xadri/my_prod_movie_api_key.pem FILE_TO_COPY ec2-user@16.171.155.53:FILE_DESTINATION


# copy files to the ec2 instance
export KEY_PATH="my_prod_movie_api_key.pem"
export SERVER_DNS="ec2-16-171-155-53.eu-north-1.compute.amazonaws.com"
export SERVER_USER="ec2-user"

# create folder
ssh -i $KEY_PATH $SERVER_USER@$SERVER_DNS "mkdir /home/ec2-user/api"

# copy build files
ssh -i $KEY_PATH $SERVER_USER@$SERVER_DNS "rm -rf /home/ec2-user/api/build"
scp -i $KEY_PATH -r build $SERVER_USER@$SERVER_DNS:/home/ec2-user/api/build
scp -i $KEY_PATH package.json $SERVER_USER@$SERVER_DNS:/home/ec2-user/api/package.json

# copy and rename the env. file
scp -i $KEY_PATH .env.development.local $SERVER_USER@$SERVER_DNS:/home/ec2-user/api/.env.development.local
ssh -i $KEY_PATH $SERVER_USER@$SERVER_DNS "mv /home/ec2-user/api/.env.development.local /home/ec2-user/api/.env.production"

# set the NODE_ENV to production
ssh -i $KEY_PATH $SERVER_USER@$SERVER_DNS "export NODE_ENV=production"

ssh -i $KEY_PATH $SERVER_USER@$SERVER_DNS

-------------------------------------------------------

# 

image: node:lts   #  This automatically pulls the latest LTS image (e.g., node:20 as of now)

-------------------------------------------------------

# pm2

PM2 is a Node.js Production Process Manager with a built-in Load Balancer. 

Allows you to keep applications alive forever, to reload them without downtime (online 24/7) and to facilitate common system admin tasks.

PM2 = P(rocess) M(anager) 2
 
Common Commands:

`pm2 list` # to check the running apps

`pm2 logs` # to check the logs

`pm2 monit` # to monitor the app

`pm2 restart all` # to restart the app

`pm2 stop all` # to stop the app

https://pm2.keymetrics.io/

-------------------------------------------------------

# Apache Benchmark

Apache Benchmark is a tool for benchmarking your Apache Hypertext Transfer Protocol (HTTP) server. 

Designed to measure your current Apache installation performance.

AB features: 

 - Simple Syntax - no complex setup needed
 
 - Load Testing Simulation - how many requests per second your web server can handle

AB sends a flood of requests to a web server and measures performance metrics:

 - Requests per second (RPS)

 - Latency (min, max, mean, median)

 - Failed requests

 - Transfer rate

https://httpd.apache.org/docs/2.4/programs/ab.html

-------------------------------------------------------

# Apache Benchmark: Alternatives

`ab` (ApacheBench) is a **widely recognized but somewhat outdated** tool for simple HTTP benchmarking.

Its popularity has declined compared to modern alternatives, but it remains in use due to its simplicity and availability.

| Tool          | Best For | Strengths | Weaknesses | Typical Users |
|--------------|----------|-----------|------------|---------------|
|   `ab`   | Quick, single-URL tests | - Preinstalled on many systems <br> - Simple syntax <br> - Fast for basic tests | - No scripting <br> - Single-threaded <br> - Limited metrics | Developers, DevOps (quick checks) |
|   `wrk`   | High-performance benchmarking | - Multi-threaded <br> - Lua scripting support <br> - More efficient than `ab` | - No GUI <br> - Requires Lua for advanced use | Performance engineers |
|   `k6` (Grafana) | Modern load testing (DevOps-friendly) | - JavaScript scripting <br> - CLI & cloud options <br> - Good for CI/CD | - Requires learning JS syntax | DevOps, SREs |
|   JMeter   | Complex test scenarios | - GUI + CLI <br> - Rich plugins <br> - Supports protocols beyond HTTP | - Heavy resource usage <br> - Steeper learning curve | QA engineers, perf testers |
|   Locust   | Distributed, Python-based tests | - Scalable <br> - Code-driven (Python) <br> - Real-time UI | - Needs Python setup | Developers, Python shops |

-------------------------------------------------------

# Apache Benchmark: Basic Usage

`ab -n 1000 -c 50 http://example.com/`

Explained:

`-n 1000` → Total requests (1000)

`-c 50` → Concurrent users (50)

-------------------------------------------------------

# Redis

Speed: 100,000+ ops/sec with low latency.

Scalability: Supports clustering for horizontal scaling.

Flexibility in use cases: 

 - Cache
 
 - DB
 
 - Message broker
 
 - Real-Time Analytics

Redis = Remote Dictionary Server.

-------------------------------------------------------

# Redis vs. Traditional Databases (Speed Comparison)

Redis is orders of magnitude faster than disk-based databases - i.e. MySQL, PostgreSQL, or MongoDB - for most operations.

That's because it stores data in RAM rather than on disk.

| Metric       | Redis (In-Memory)               | Traditional DB (Disk-Based)             |
|--------------|---------------------------------|-----------------------------------------|
| Latency      | ~0.1 ms (sub-millisecond)       | ~1–10 ms+ (depends on disk I/O)         |
| Throughput   | 100,000–1M+ ops/sec (per core)  | 1,000–10,000 ops/sec (depends on indexing & hardware) |
| Read Speed   | Microseconds (RAM access)       | Milliseconds (disk seeks + cache)       |
| Write Speed  | Microseconds (append-only)      | Slower (disk sync, WAL, transactions)   |
| Concurrency  | Single-threaded (but efficient) | Multi-threaded (but bottlenecked by locks/disk) |

-------------------------------------------------------

# When Is a Traditional Database Better Than Redis?

Redis is not a full replacement for disk-based databases because:

❌ No complex queries (e.g., joins, aggregations).

❌ Limited durability (unless configured with AOF + fsync).

❌ Data must fit in RAM (unless using Redis Enterprise with tiered storage).

Use a traditional DB when:

✔ You need ACID transactions (e.g., banking apps).

✔ Data exceeds available RAM.

✔ You require complex SQL queries.

-------------------------------------------------------

# What Does "Limited Durability" Mean in Redis?

Redis prioritizes speed over durability by default, meaning data is stored in memory (RAM) and not immediately written to disk. 

This makes it vulnerable to data loss if the server crashes or restarts unexpectedly.

-------------------------------------------------------

# Container with Service (i.e. Database): Timeout Issues

Debug by adding console.log() at the start and end of methods.

TLDR: my CPU was overloaded (with other processes/tasks), hence the Containers, Redis, Postgres, Node, and test runners were all fighting for resources.
FYI potential culprits in these situations include:

 - Heavy background indexing (e.g. Spotlight on macOS, Windows Search)
 - Syncing services (Dropbox, OneDrive, iCloud)
 - Design tools (Figma, Photoshop, Blender, etc.)
 - Video conferencing apps or screen recorders
 - VS Code extensions (TypeScript server or ESLint pegging the CPU)
 - Machine learning models or Docker containers running inference
 - Build tools (Webpack, Vite dev server, etc.)

-------------------------------------------------------

# Container with Service: Timeout Issue

This is often due to mistakes with ports.

Double check the implementation is correct by using the debugger in combination with docker cli commands.

i.e. you can put a breakpoint after a service is launched and double check the ports using the `docker compose ls`

-------------------------------------------------------

docker-compose up   # start Postgre DB, pgAdmin, Redis DB

npm start  # start HTTP server in nodejs

http://localhost:8001/redis-stack/browser     # access Redis DB

redisPassword

http://localhost:3000/performance-test   # access test

http://localhost:3000/performance-test-cache    # access cached test

------------------ 

% ab -c 100 -n 500 http://localhost:3000/performance-test
This is ApacheBench, Version 2.3 <$Revision: 1903618 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 100 requests
Completed 200 requests
Completed 300 requests
Completed 400 requests
Completed 500 requests
Finished 500 requests


Server Software:        
Server Hostname:        localhost
Server Port:            3000

Document Path:          /performance-test
Document Length:        22 bytes

Concurrency Level:      100
Time taken for tests:   27.103 seconds
Complete requests:      500
Failed requests:        0
Total transferred:      142000 bytes
HTML transferred:       11000 bytes
Requests per second:    18.45 [#/sec] (mean)
Time per request:       5420.579 [ms] (mean)
Time per request:       54.206 [ms] (mean, across all concurrent requests)
Transfer rate:          5.12 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    2   2.7      0      11
Processing:    34 4487 1636.1   4456    9277
Waiting:       22 4422 1750.4   4454    9276
Total:         35 4488 1634.2   4456    9277

Percentage of the requests served within a certain time (ms)
  50%   4456
  66%   4541
  75%   4576
  80%   4607
  90%   7101
  95%   7976
  98%   8721
  99%   9018
 100%   9277 (longest request)

------------------ 

% ab -c 100 -n 500 http://localhost:3000/performance-test-cache
This is ApacheBench, Version 2.3 <$Revision: 1903618 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 100 requests
Completed 200 requests
Completed 300 requests
Completed 400 requests
Completed 500 requests
Finished 500 requests


Server Software:        
Server Hostname:        localhost
Server Port:            3000

Document Path:          /performance-test-cache
Document Length:        22 bytes

Concurrency Level:      100
Time taken for tests:   1.670 seconds
Complete requests:      500
Failed requests:        0
Total transferred:      142000 bytes
HTML transferred:       11000 bytes
Requests per second:    299.35 [#/sec] (mean)
Time per request:       334.055 [ms] (mean)
Time per request:       3.341 [ms] (mean, across all concurrent requests)
Transfer rate:          83.02 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    1   1.6      0       6
Processing:    12  304 120.4    336     493
Waiting:        6  292 123.5    323     485
Total:         12  305 119.1    336     493

Percentage of the requests served within a certain time (ms)
  50%    336
  66%    367
  75%    399
  80%    409
  90%    440
  95%    466
  98%    483
  99%    489
 100%    493 (longest request)

-------------------------------------------------------

# TestContainers

Testcontainers is an open source library for providing anything that can run in a Docker container as "a throwaway" i.e. database instances, message brokers, web browsers.

Run your tests and containers will be created and then deleted.

https://testcontainers.com/

https://testcontainers.com/modules/postgresql/

-------------------------------------------------------

# NGinx

NGINX has evolved from a web server to a comprehensive platform for app delivery, optimization, and security in Kubernetes environments.

Now, with the SaaS-based web console NGINX One, enterprises can manage web traffic, load balancing, API gateway capabilities, and security in a single, easy-to-use package.

https://nginx.com/

https://docs.nginx.com/

https://nginx.org/en/docs/beginners_guide.html

-------------------------------------------------------

# Nginx: Basic Config

A basic Nginx configuration typically involves setting up a server block with directives for listening to specific ports, defining server names, and handling different request types. Here's a simplified example

http {
    server {
        listen 80;
        server_name example.com www.example.com;
        root /var/www/example.com;
        index index.html;

        location / {
            try_files $uri $uri/ =404;
        }
    }
}

-------------------------------------------------------

Module 06: Software Architecture - Chapter 1.7: Action Item: API Scalability

Excercise 3: Setup of a load balancer(reverse proxy) with Nginx

`docker build -t movies-api `.       #  build the API image

`docker-compose up`     # start Postgre DB, pgAdmin, Redis DB

// npm start    # start HTTP server in nodejs NOT NEEDED - it's now done by Docker, see `Dockerfile`

Check you can access the services and test urls:

`localhost:80/api-docs`          # load balancer

`localhost:3001/api-docs`        # backend instance 1 (Node.js server)

`localhost:3002/api-docs`        # backend instance 2 (Node.js server)

`localhost:3003/api-docs`        # backend instance 3 (Node.js server)

`localhost:8002/`                # postgresql db via pgAdmin - e: bogdan@theseniordev.com, pw: theSeniorDev

`localhost:8001/redis-stack/browser`     # Redis DB - pw: redisPassword

`localhost:3000/performance-test`     # test url wo cache

`localhost:3000/performance-test-cache`      # test url w cache

Run Perf Tests:

`ab -c 100 -n 500 http://localhost:3001/performance-test`       # Load test a single service

`ab -c 100 -n 500 http://localhost/performance-test`     # Load test the load-balanced route

-------------------------------------------------------

# 


-------------------------------------------------------

# 


-------------------------------------------------------

# 


-------------------------------------------------------

# 


-------------------------------------------------------

# 


-------------------------------------------------------

# 


-------------------------------------------------------

# 


-------------------------------------------------------

# 

