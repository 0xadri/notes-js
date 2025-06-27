     
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

# Time To First Byte (TTFB) - performance metric

Measures how long it takes for a web server to respond to a request and send the first byte of data back to the client. 
It's a key indicator of server responsiveness and network performance. 
TTFB is measured from when a browser sends a request to when it receives the initial byte of the response. 

-------------------------------------------------------

# First Contentful Paint (FCP) - performance metric

Measures the time it takes for any part of a page's content to be rendered on the screen after the user navigates to it. 
This includes text, images, background images, <svg> elements, and non-white <canvas> elements. 
FCP is a key metric for understanding perceived page load speed and user experience. 

-------------------------------------------------------

# Cumulative Layout Shift (CLS) - performance metric

Calculates the shifting of elements while the page is being downloaded and rendered. 
The more common occurrences are on images, buttons and other interactive elements but can be easily spotted on text as well.

-------------------------------------------------------

# Interaction to Next Paint (INP) - performance metric

Measures user interface responsiveness – how quickly a website responds to user interactions like clicks or key presses.

-------------------------------------------------------

# First Input Delay (FID) - performance metric

Measures the responsiveness of a webpage by tracking the time it takes for a browser to respond to a user's first interaction, i.e. click a link or tap a button. 
It essentially indicates how quickly the browser becomes able to process a user's interaction after it's initiated.

FID was previously a Core Web Vitals metric, but has been replaced by Interaction to Next Paint (INP).

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

# GitLab CI/CD YAML file 

GitLab CI/CD YAML file, `.gitlab-ci.yml`, is where you define your pipeline: you add the stages and jobs.

In this file, you define:

 - The structure and order of jobs that the runner should execute.
 
 - The decisions the runner should make when specific conditions are met.
 
-------------------------------------------------------

# GitLab Pipeline for React SPA with stages: Build and Deploy

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

# GitLab Pipeline for React SPA with stages: Build, Test (Unit Tests) and Deploy

Generate XML report file with `jest-unit`.

npm install --save-dev jest-junit

"test:ci": "npm run test -- --testResultsProcessor=\"jest-junit\" --watchAll=false --ci --coverage"

GitLab CI/CD YAML file.


https://evolvingweb.com/blog/comprehensive-guide-react-native-jest-and-gitlab-cicd

https://about.gitlab.com/blog/how-to-automate-testing-for-a-react-application-with-gitlab/

-------------------------------------------------------

# 


-------------------------------------------------------

# 


-------------------------------------------------------

# 


-------------------------------------------------------

