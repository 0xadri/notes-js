
-------------------------------------------------------

# NodeJS Docs

Official Node.js Docs
https://nodejs.org/en/docs/guides/

Full Node.js Reference (for all core modules)
https://nodejs.org/dist/latest/docs/api/

Node.js Event Loop
https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/

Blocking and Non-Blocking Code
https://nodejs.org/en/docs/guides/dont-block-the-event-loop/

Debugging Node.js
https://nodejs.org/en/docs/guides/debugging-getting-started/

Debugging Node.js in VS Code
https://code.visualstudio.com/docs/nodejs/nodejs-debugging

-------------------------------------------------------

# `npm` and 3rd Party Packages

`npm` = node package manager

Differentiate between dependencies environments:
 - `--save` for Development and Production, this is the default option if you add none
 - `--save-dev` for Development
 - `-g` for Global

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

# Express Docs

https://expressjs.com/

-------------------------------------------------------

# Express Install

`npm i express`

-------------------------------------------------------

# Express Usage

Always call `next()` unless you send a response (with `res()`).

If you send a `response` (with `res()`), never call `next()`.

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

# Body Parser Middleware

Used to process data sent in an `HTTP request body`.

Provides four express middleware for parsing:
 1. JSON
 2. Text
 3. URL-encoded
 4. Raw data

Before parsing, `HTTP request body` was just a regular string that could not access the data encoded inside.

After parsing, `HTTP request body` becomes a JavaScript `object`.

`body-parser` allows you to access `req.body` from within routes and use that data.

-------------------------------------------------------

# Body Parser Install

`npm i body-parser`

-------------------------------------------------------

# Handlebars Install

`npm i express-handlebars@3.0`

-------------------------------------------------------

# REST APIs

`REST` = Representational State Transfer = Transfer Data instead of UI

`JSON` = JavaScript Object Notation

`API Endpoints` = combination of HTTP Method and Path

REST APIs are decoupled from the clients - there is no connection history

-------------------------------------------------------

# HTTP Methods [Best Practice]

 - `GET`: get resource from server
 - `POST`: post resource to server (i.e. create or append resource)
 - `PUT`: put resource to server (i.e. create or override resource)
 - `DELETE`: delete resource on server
 - `PATCH`: update parts of an existing resource on the server
 - `OPTIONS`: to check whether follow-up request (i.e. DELETE) is allowed

But ultimately you can run any code you want. These are used to break down the route for a single path into many routes.

https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods

-------------------------------------------------------

# REST Principles [Best Practice]

### Uniform Interface
Clearly defined API endpoints with clearly defined request + response data structure.

### Stateless Interactions
Server and client don't store any connection history, every request is handled separately.

### Cacheable
Servers may set caching headers to allow the client to cache responses.

### Client-Server
Server and client are separated, client is not concerned with persistent data storage.

### Layered System
Server may forward requests to other APIs.

### Code On Demand
Executable code may be transferred from server to client.

-------------------------------------------------------

# CORS [Best Practice]

CORS = Cross Origin Resource Sharing

Fix it in express:

>     app.use((req, res, next) => {
>       res.setHeader('Access-Control-Allow-Origin', '*');
>       res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
>       res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
>       next();
>     })

-------------------------------------------------------

# Debugging

You might want to try to change:
 - `http://localhost` for `http://127.0.0.1`
 - `Firefox` for `Chrome`

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

# `npm`

`npm` Docs https://docs.npmjs.com/

`npm` CLI https://docs.npmjs.com/cli/

`npm` Web https://www.npmjs.com/

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

# Build Tools Explained

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

These backend projects usually don’t need a frontend-style bundler like Webpack or Vite. But bundling can still be super useful for:
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

# `__dirname`

`__dirname` gives the directory in which the currently executing script resides.

`__dirname` vs `./` https://stackoverflow.com/q/8131344/759452

https://nodejs.org/docs/latest/api/modules.html#__dirname

-------------------------------------------------------

# Error Handling in `Express`

`Express` comes with a default `error handler` so you don’t need to write your own to get started.

It’s important to ensure that `Express` catches all `errors` that occur while running `route handlers` and `middleware`.

https://expressjs.com/en/guide/error-handling.html

https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/12097888

-------------------------------------------------------

# Problem Statement

When an error happen in the backend project:
 1. should it be handled in the backend project?
 2. if handled in the backend project, which layer should catch it? router, controller, or other?
 3. what seems specific to `nodejs`/`express`: is the above question related to the usage of `throw` vs `next()`?
 4. if handled in the backend project, let's say we log the error - is it best practice to also pass the error to the frontend project in the response?
 5. in Nodejs/Express backend projects, how do we let errors "bubble up"? i.e. we rethrow them? -or- we do not catch them? -or- we use `next()`? -or- else?

### Solutions

1. If error originates in the backend, the error should be handled in the backend i.e. when validating requests, accessing databases.
If something fails, it should catch and handle the error before sending a controlled response to the frontend i.e. error message with appropriate status code.
Letting raw errors leak to the frontend is insecure and bad practice.

2. Ideally, the error is caught centrally in error-handling middleware. Controllers or routers can throw the error or pass it via `next(err)`, 
but don’t handle the response directly there unless absolutely necessary. 
A centralized error-handling middleware placed **at the end of the middleware stack** should log the error, determine the HTTP status code, 
and send a user-friendly error response. 
This separation is best practice and keeps controller logic clean.

3. In Express, this is very specific. Unlike many frameworks that automatically catch throw, Express requires you to use next(err) if you want to pass an error 
to the centralized error handler. If you just throw inside an async function without a wrapper, it won’t be caught. 
So best practice is to use next(err), or wrap async functions to automatically catch errors and forward them to next().

4. Partially. Yes, you should send an error response to the frontend, but it should be sanitized. Never send internal error messages or stack traces. 
Instead, send a **generic message** (like "Something went wrong") and a proper HTTP status code (400 for bad input, 500 for internal errors, etc.). 
You can log detailed info (with stack trace) on the server, but only send user-friendly messages to the frontend.

5. The thing is that you let errors bubble up by passing them to the next layer using next(err). You don’t rethrow and you don’t catch them in every controller manually. 
If you're using async/await, you either wrap your async functions in a try-catch and call next(err) in the catch block, or use a utility wrapper (like express-async-errors or a custom catchAsync function).
This way, the error will reach the centralized error-handling middleware and you won’t repeat error handling in each route/controller.

-------------------------------------------------------

# Synchronous Errors

Errors that occur in synchronous code inside route handlers and middleware require no extra work. 

If synchronous code throws an error, then Express will catch and process it. 

"Catch and process" synchronous errors refers to how it handles those errors through its built-in error-handling middleware system.

-------------------------------------------------------

# How Express "Processes" Errors

When a synchronous error is thrown inside a route handler or middleware, Express does the following:

 - Catches the error using try-catch logic internally (you don't see it, but it's there in the framework).

 - Skips the remaining middleware/handlers for that route.

 - Passes the error to the first error-handling middleware it finds in the middleware stack.

-------------------------------------------------------

# What Is an Error-Handling Middleware?

It's a special kind of middleware with four parameters, specifically:

>     (err, req, res, next) => { ... }

Example:

>     app.use((err, req, res, next) => {
>       console.error(err.stack);
>       res.status(500).send('Something broke!');
>     });

As long as you define this kind of middleware in your app, Express will "process" errors by passing them to this handler.

-------------------------------------------------------

# Asynchronous Errors

Errors inside `setTimeout`, `Promises`, or `async/await`.

They need to be passed to `next(err)` manually (where Express will catch and process them), or caught with try/catch.

For example:

>     app.get('/', (req, res, next) => {
>       fs.readFile('/file-does-not-exist', (err, data) => {
>         if (err) {
>           next(err) // Pass errors to Express.
>         } else {
>           res.send(data)
>         }
>       })
>     })

-------------------------------------------------------

# `next()`

next('route') to bypass the remaining route callback(s)

-------------------------------------------------------

# Express: Route Handler vs Middleware Function

Middleware can be a route handler or a route handler can behave as middleware. There is not a hard and fast line between the two.

But, when people refer to middleware or a route handler in a programming discussion, they usually mean something slightly different for each...
 
Middleware Function - as generic terms, middleware is code that examines an incoming request and prepares it for further processing by other handlers or short circuits the processing (like when it discovered the user is not authenticated yet). Some examples:
 - Session Management
 - Authentication
 - Metrics
 - Parsing of Cookies
 - Parsing and Reading of POST/PUT bodies
 - Serve static files (HTML, CSS, JS, etc...)

It is common for middleware to be active for a large number of different requests.

Route Handler - code that is looking for a request to a specific incoming URL such as `/login` and often a specific HTTP verb such as POST and has specific code for handling that precise URL and verb. Some examples:
 - Serve a specific web page
 - Handle a specific form post
 - Respond to a specific API request

It is common for route handlers to be targeted at a specific URL and only active for that specific URL.

https://stackoverflow.com/a/58925330/759452

-------------------------------------------------------

# Express Route Handlers and Middleware Functions

>     app.use(path, handlerFc)
>     app.get(path, handlerFc)
>     app.post(path, handlerFc)
>     app.put(path, handlerFc)
>     app.delete(path, handlerFc)
>     app.all(path, handlerFc)

Use them such as :

>     app.use('/', (req, res, next) => { /* code */ });
>     app.get('/something', (req, res, next) => { /* code */ });
>     app.post('/something', (req, res, next) => { /* code */ });

https://expressjs.com/en/5x/api.html#router

-------------------------------------------------------

# Express Routing: `get()`

`app.get()` is intended for specific routes.

`app.get()` matches only for requests done with the `GET` HTTP method.
 
`app.get('/', handlerFc)` only matches '/', and does NOT match `/hello` nor `/hi/how/things`.

It is common for middleware to be active for a large number of different requests. Hence the above design.

-------------------------------------------------------

# Express Routing: `post()`

`app.post()` is intended for specific routes.

`app.post()` matches only for requests done with the `POST` HTTP method.

tl;dr: same as `app.get()` but for `POST` HTTP method.

-------------------------------------------------------

# Express: `app.use()`

Middleware Functions aka Middleware Mounters.

`app.use()` is intended for binding middleware to your application.

`app.use()` matches regardless of the HTTP Method whether `POST`, `GET`, `PUT`, `DELETE` or other.

`app.use()` matches any path that begins with the specified path. For instance `app.use('/', handlerFc)` matches all three URLs:
 - `/`
 - `/hello`
 - `/hi/how/things`

It is common for middleware to be active for a large number of different requests. Hence the above design.

-------------------------------------------------------

# Express: `app.use()` To Serve Static Files

>     app.use('/static', express.static(__dirname + '/public'));

-------------------------------------------------------

# Express: `app.use()` To Embed Subapp

>     app.use('/subapp', require('./subapp'));

The above embeds another application.

-------------------------------------------------------

# Express: Request

Request aka `req` object.

The `req` object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on.

The `req` object is an enhanced version of Node’s own `request` object and supports all built-in fields and methods.

https://expressjs.com/en/5x/api.html#req

https://nodejs.org/api/http.html#class-httpclientrequest

-------------------------------------------------------

# Express: Response

Response aka `res` object.

The `res` object represents the HTTP response that an Express app sends when it gets an HTTP request.

The res object is an enhanced version of Node’s own `response` object and supports all built-in fields and methods.

https://nodejs.org/api/http.html#class-httpserverresponse
