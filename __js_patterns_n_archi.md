
# Docs

https://www.patterns.dev/vanilla/

https://www.patterns.dev/react

-------------------------------------------------------

# Modular Monolith Architecture

a single service device in separated modules with clear boundaries.

TODO

-------------------------------------------------------

# Event-Driven Architecture

TODO

-------------------------------------------------------

# Client-Server Architecture

TODO

-------------------------------------------------------

# Microservices Architecture

TODO

-------------------------------------------------------

# Which of the following Architecture Style achieves the maximum decoupling between services?

Microservices Architectures ?
Event-Driven Architectures ???
Modular Monoliths ?
Client-Server Architecture ?

TODO

-------------------------------------------------------

# The so-called MicroServices Tax refers to ...

The additional complexity of implementing a MicroServices Architecture (v.s a Monolith Architecture)

Microservices architecture requires more maintenance and development.

Drawbacks of MicroServices:

    extra latency - a call into the system usually translates to a cascade of calls(over the network) to several services downstream. Each extra call makes the total response time longer.

    extra complexity - to get data from another service we need to make a call over the network, handle authentication, caching, and maybe even load balancing. In a modular monolith, it would have been a simple function call.

    extra resources - although we can rip some scalability benefits from Microservices(see system design) we need extra pieces in our architecture: distributed login and monitoring and distributed analytics just to name a few. This all ads up in our cloud bill at the end of the month.

-------------------------------------------------------

# Basic API Design patterns

TODO

-------------------------------------------------------

# What's state machine pattern?

is a behavioral design pattern that allows an object to alter its behavior based on its internal state. 

It's closely related to the concept of a Finite State Machine (FSM), where a system can be in one of a finite number of states, and transitions between these states are triggered by events.

Every React component is actually an "implicit state machine" — cobbled together based on the component's spread out logic.

The UI is a reflection of the state, or a function of the state.

Changes in state lead to updates in the UI, making the relationship between state and UI predictable and deterministic.

-------------------------------------------------------

# Function Currying pattern

We use currying to create different versions of a function that takes multiple arguments into several derived functions that take less arguments.

TODO

-------------------------------------------------------

# Higher Order Function (HOF) pattern

Higher-order functions are a general JavaScript concept where a function takes another function as an argument or returns a function. 

-------------------------------------------------------

# Higher Order Function (HOF) vs Higher Order Component (HOC) pattern

Higher-order functions and higher-order components (HOCs) are both patterns that utilize functions to create reusable logic, but they operate in different contexts. 

Higher-order functions are a general JavaScript concept where a function takes another function as an argument or returns a function. 

In React, higher-order components are a specific pattern that leverages this concept to create reusable component logic by wrapping existing components with enhanced functionality.

https://www.patterns.dev/react/hoc-pattern/

-------------------------------------------------------

# HOC Pattern

Within our application, we often want to use the same logic in multiple components. This logic can include applying a certain styling to components, requiring authorization, or adding a global state.

One way of being able to reuse the same logic in multiple components, is by using the higher order component pattern. This pattern allows us to reuse component logic throughout our application.

A Higher Order Component (HOC) is a component that receives another component. The HOC contains certain logic that we want to apply to the component that we pass as a parameter. 

After applying that logic, the HOC returns the element with the additional logic.

https://www.patterns.dev/react/hoc-pattern/

-------------------------------------------------------

# Observer pattern

The Observer pattern is a behavioral design pattern that establishes a one-to-many dependency between objects. 

When one object (Subject/Publisher) changes state, all its dependents (Observers/Subscribers) are notified and updated automatically.

This pattern is commonly used in event handling, messaging systems, and UI frameworks.

In components-based frameworks, i.e. React, third-party State Management Libraries implement this pattern.

https://www.patterns.dev/vanilla/observer-pattern/

-------------------------------------------------------

# Subscriber pattern vs Observer pattern: what is the difference ?

Observer pattern is mostly implemented in a synchronous way, i.e. the Subject calls the appropriate method of all its Observers when some event occurs. 

The Publisher/Subscriber pattern is mostly implemented in an asynchronous way (using message queue).

-------------------------------------------------------

# Mediator/Middleware Pattern

Used in Express.js

TODO

https://www.patterns.dev/vanilla/mediator-pattern/

-------------------------------------------------------

# PRPL pattern

TODO

https://www.patterns.dev/vanilla/prpl/

-------------------------------------------------------

# Factory pattern

TODO

-------------------------------------------------------

# The MVC pattern is an example of ...

A Layered Architecture.

It separates the application into three interconnected layers: the Model, the View, and the Controller.

-------------------------------------------------------

# Function Debouncing pattern

TODO

-------------------------------------------------------

# Server Optimisation: Caching

Caching is at its core saving a copy of the data/files that your users require most often and serving them that copy, instead of making a trip to the database and back.

You could cache(save) that copy at different levels. You could save it on the browser. On a server geographically closer to your client (CDN). Or in your backend to avoid doing expensive operations again and again.

-------------------------------------------------------

# Round Robin for load balancing

TODO

-------------------------------------------------------

# Reverse Proxy vs. Forward Proxy

Forward and reverse proxies are both intermediaries in network communication, but they act on different sides of the communication flow. 

A forward proxy acts on behalf of clients, managing outgoing traffic to external servers.

While a reverse proxy acts on behalf of servers, managing incoming traffic from external clients. 

-------------------------------------------------------

# Big-O Notation

It is a way to describe the time complexity or space complexity of an algorithm. 

It essentially tells you how the algorithm's performance (or memory usage) changes as the size of the input data grows. 

In other words, it helps you understand how efficiently an algorithm scales with larger inputs.

-------------------------------------------------------

# Binary Search Tree

In a Binary Search Tree, the left subtree of a node contains only nodes with keys: 
Less than the node key?
Greater than the node key?
...?

Binary Search works on an array that:
Contains only positive integers?
Is not longer than 128 elements?
Is already sorted?

TODO

-------------------------------------------------------

# Hash Map

A Hash Map (Object) is based on:
An array, a hash function, and linked lists?

TODO

-------------------------------------------------------

# Data Structures

In which data structure is faster to insert an element?
LinkedList?
Array?
Hash Map?

TODO

-------------------------------------------------------

# Stack Space

The Stack Space is where the recursive calls are stored.

-------------------------------------------------------

# Design Pattern : Module Pattern

### Problem Statement

We want to implement the Module Pattern to better organize our source code into components.

The concept of a “module” is not fully supported in many common programming languages.

JavaScript had incomplete support for the concept until 2015 with ES6.

### Solution

Comes the module software design pattern.

It provides the features and syntactic structure defined by the modular programming paradigm to programming languages that have incomplete support for the concept.

### Module Pattern High Level Def

The Module pattern can be considered a creational pattern and a structural pattern. 

It manages the creation and organization of other elements, and groups them as the structural pattern does.

https://www.patterns.dev/vanilla/module-pattern/

-------------------------------------------------------

# Design Pattern : Module Pattern Implementations

JavaScript did not have built-in support for modules.

The JS community has created impressive work-arounds. The two most popular standards are:

CommonJS Modules: The dominant implementation of this standard is in Node.js. Characteristics:

 - Compact syntax
 - Designed for synchronous loading
 - Main use: server

AMD: The most popular implementation of this standard is RequireJS. Characteristics:

 - Slightly more complicated syntax, enabling AMD to work without eval() (or a compilation step)
 - Designed for asynchronous loading
 - Main use: browsers

Since ECMAScript 2015 (ES6), javascript supports built-in modules through the new syntax.

http://jargon.js.org/_glossary/COMMONJS.md

-------------------------------------------------------

# CommonJS Modules vs ES6 Modules

>     module.exports = askQuestionSet;

Becomes

>     export default askQuestionSet;

Then 

>     const askQuestionSet = require("./askQuestionSet.js");

Becomes

>     import askQuestionSet from "./askQuestionSet.js";

-------------------------------------------------------

# Design Pattern : Module Pattern In Practice

When you have a file called axios.js, we say call it the axios module.

-------------------------------------------------------

# Micro Frontends

Architectural style in frontend web development.

Similar to the microservices approach in backend development.

Breaks big monolithic frontend applications into smaller ones. Into independent, deployable features.

Each micro frontend can be developed, tested, and deployed independently by different teams.

Promotes modularity, scalability, and faster delivery cycles. 

-------------------------------------------------------

# Static Rendering (SSR)

Static rendering or static generation (SSG) delivers pre-rendered HTML content to the client that was generated when the site was built.

A static HTML file is generated ahead of time corresponding to each route that the user can access. These static HTML files may be available on a server or a CDN and fetched as and when requested by the client.

Static files may also be cached thereby providing greater resiliency.

As the name suggests, static rendering is ideal for static content - where the page need not be customized based on the logged-in user (e.g personalized recommendations).

https://www.patterns.dev/react/static-rendering/

-------------------------------------------------------

# Server Side Rendering (SSR)

Architectural style in frontend web development.

Server-side rendering (SSR) is one of the oldest methods of rendering web content - think Java or .NET

SSR generates the full HTML for the page content to be rendered in response to a user request. The content may include data from a datastore or external API.

Server Side Rendering can now be done in JavaScript, it allows you to render your JavaScript application on the server before sending it to the browser.

This is not easy as SPAs were built with CSR (client-side rendering) in mind. 

Pros:
 - increasing web performance
 - better SEO
 - gives additional space for client-side JavaScript
 
Downsides:
 - Slow TTFB - since all processing takes place on the server
 - javascript must be loaded too anyway before the UI has any functionality.

https://www.patterns.dev/react/server-side-rendering/

-------------------------------------------------------

# Backend-For-Frontend Pattern (BFF)

Having a MicroFrontend Architecture or having different types of clients(mobile app, web app) consuming data from the backend means the backend REST APIs will need to adapt to all those different requirements. 

A mobile app might need the same data as the web app but in a different format. This adds a lot of complexity to the backend.

To solve this problem, the BFF(backend-for-frontend pattern) has been invented. It basically means having a backend layer close to the frontend. 

TODO

-------------------------------------------------------

# Module Federation Pattern

TODO

-------------------------------------------------------

# Component Driven Development

Encapsulating code in smaller pieces of code called Components.

Includes Component Design and Component Testing.

-------------------------------------------------------

# Hierarchy Of States

Component State, Shared State, and Global State

TODO

-------------------------------------------------------

# Singleton Pattern

TODO

https://www.patterns.dev/vanilla/singleton-pattern/

-------------------------------------------------------

# Proxy Pattern

TODO

https://www.patterns.dev/vanilla/proxy-pattern/

-------------------------------------------------------

# Which data structure is used to implement the undo operation in text editors?

Queue?
Stack?
Tree?
Graph?

-------------------------------------------------------

# IIFE used as a module declaration

IIFE (Immediately Invoked Function Expression)

(function (module) {
  const someVariable = "someVar";

  function returnFirstChar(text) {
    // ...
  }

  module.returnFirstChar = returnFirstChar;
  module.firstChar = firstChar;
  window.myModule = module;
})({});




