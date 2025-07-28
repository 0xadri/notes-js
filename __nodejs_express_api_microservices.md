
-------------------------------------------------------

# NodeJS Docs

https://nodejs.org/

https://expressjs.com/

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
https://www.loom.com/share/d9f0bf7f608643e987ac3de0378a074f

-------------------------------------------------------

# `npm` and 3rd Party Packages

See dedicated notes `js_setup_n_deploy.md`

-------------------------------------------------------

# `Nodemon`

See dedicated notes `js_setup_n_deploy.md`

-------------------------------------------------------

# Express Docs

https://expressjs.com/

-------------------------------------------------------

# `Express.js`, aka `Express`

Back end web application framework for building RESTful APIs with `Node.js`.

The de facto standard `server framework` for `Node.js`.

Free and `open-source` software under the MIT License.

-------------------------------------------------------

# Microservices: Problem Statement 1

As a project grows larger, we're adding more teams of 5-6 people work on the code base.

It quickly becomes unmanageable. How can we make this work?

### Microservices: Solution 1

We can split up the code base in different services.

Each service is a different code base and belongs to a dedicated team.

Best practice is to also split the database, each service get its own db.

Services being independent means they are also much more reliable/available.

-------------------------------------------------------

# Microservices: Problem Statement 2 

As a project gets traffic peaks on a specific part of the project which results in issues i.e. unable to handle the load/requests, API becoming unavailable temporarily because of too many requests

### Microservices: Solution 2

Migrate system to a set of microservices with the objective to create a more robust and scalable solution that could handle traffic peaks, with the API always staying available.

-------------------------------------------------------

# Architecture: Problem Statement

Each service may have a different code base and database, but there might be inter-dependencies in how these services work.

How can we reduce these dependencies ?

### Architecture: Solution

Highest dependency architecture is `synchronous`. Services make direct calls to one another.

Lowest dependency architecture is `asynchronous`. Services cannot make direct calls to one another, but only to an `Event Broker` aka `Event Bus`.

-------------------------------------------------------

# Asynchronous Communication

- Pro: Query Service has zero dependencies on other services

- Pro: Query Service will be extremely fast

- Con: Data Duplication

- Con: Harder to understand

-------------------------------------------------------

# Docker

Container = instance of an image, it runs a program.

Image = single file with all the dependencies and configurations required to run a program.

-------------------------------------------------------

# Express Install

`npm i express`

-------------------------------------------------------

# Express Usage

Always call `next()` unless you send a response (with `res()`).

If you send a `response` (with `res()`), never call `next()`.

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

# HTTP Request, HTTP Response, Headers

+ Request Methods, Response Status Codes, and more

Read note "js_api_calls"

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

# RESTful APIs Idempotent Methods [Best Practice]

HTTP methods that, when called multiple times with the same parameters, will produce the same result as a single call. 

This ensures consistent behavior, especially when dealing with network issues or client retries. 

Idempotent methods don't change the server's state beyond the initial operation. 

-------------------------------------------------------

# CORS in Express [Best Practice]

CORS = Cross Origin Resource Sharing

Fix it in express:

>     app.use((req, res, next) => {
>       res.setHeader('Access-Control-Allow-Origin', '*');
>       res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
>       res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
>       next();
>     })

https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS

-------------------------------------------------------

# Debugging in Express

You might want to try to change:
 - `http://localhost` for `http://127.0.0.1`
 - `Firefox` for `Chrome`

-------------------------------------------------------

# `__dirname` in Node.js

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

# Problem Statement for Error Handling in Express 

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

