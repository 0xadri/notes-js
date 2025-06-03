
-------------------------------------------------------

# `npm` Docs

`npm` Docs https://docs.npmjs.com/

`npm` CLI https://docs.npmjs.com/cli/

`npm` Web https://www.npmjs.com/

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


