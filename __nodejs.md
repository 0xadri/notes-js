
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

# Debugging Auto Restart Setup

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

# Deploying SPAs (i.e. React App)

If your app is using server-side rendering you must go with a node server. 

In other cases you can basically deploy your application on anything you want — apache, nginx, express or host it on a CDN like S3 (Amazon).

https://medium.com/@baphemot/understanding-react-deployment-5a717d4378fd

NodeJS web app on AWS: https://aws.amazon.com/getting-started/projects/deploy-nodejs-web-app/

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

# Heroku Alternatives

Try: Vercel, Netlify, or Render

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

 - Parse Files
 - Manipulate Content
 - Output New Files

Typically, build tools merge all your code and transform it so that:
 - even old browsers can run it
 - the final file is much lighter
 - the final code is optimized

-------------------------------------------------------

# Build Tools

 - Webpack
 - Vite
 - esbuild

Webpack (a build tool using Node.js): https://academind.com/tutorials/webpack-2-the-basics

