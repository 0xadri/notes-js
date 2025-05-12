
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

`npm install nodemon --save-dev`

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

`npm install express`

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

# Body Parser Install

`npm install body-parser`

-------------------------------------------------------

# 


