
# Docs

https://www.patterns.dev/vanilla/

https://www.patterns.dev/react

-------------------------------------------------------

# The Architect Mindset

Think in trade-offs - BALANCE - developers know the benefits of everything, but architects always think in terms of trade-offs.

Why over How - the implementation details on how we write exports in our code matter much less than the overall level of modularity we accept.

An excellent coder - an architect is before everything an excellent coder. She excelled at coding and loves the craft. Architecture is being decided, implemented, and reviewed with every line of code. written.

-------------------------------------------------------

# SOLID principles

Set of five principles in object-oriented programming (OOP) that make software designs more maintainable, scalable, and flexible.

S — Single Responsibility Principle (SRP): A class should have only one reason to change.

O — Open/Closed Principle (OCP): Software entities (classes, modules, functions) should be open for extension but closed for modification.

L — Liskov Substitution Principle (LSP): Subtypes must be substitutable for their base types.

I — Interface Segregation Principle (ISP): No client should be forced to depend on methods it does not use.

D — Dependency Inversion Principle (DIP): High-level modules should not depend on low-level modules; both should depend on abstractions.

-------------------------------------------------------

# What does the Single Responsibility Principle (SRP) mandate?

A class should only have one job or responsibility.

Hence a class should have only one reason to change.

For instance, if you have a class that is designed to manage customer records, it should not also be responsible for printing those records.

-------------------------------------------------------

# Which principle in SOLID stands for classes should depend upon abstractions, not concrete implementations?

Dependency Inversion Principle (DIP).

In simpler terms, the DIP encourages coding to interfaces rather than concrete implementations, making the code more flexible, reusable, and resistant to changes in the underlying components.

-------------------------------------------------------

# In the context of the Open-Closed Principle, which of the following best explains what closed means?

Classes, modules, functions should be closed for modification but open for extension.

-------------------------------------------------------

# What does the Liskov Substitution Principle (LSP) state about inheritance?

Child classes must be able to fully substitute their parent classes.

Think of it as:

- similar to classes-interface relationship

- most specific implementations must be able to fully replace less specific implementations.

-------------------------------------------------------

# The Interface Segregation Principle (ISP) states that:

Many client-specific interfaces are better than a single general-purpose interface.

-------------------------------------------------------

# Not following SOLID principles will...

🧱 Lower Module Cohesion - modules are not focused on a single purpose

🕸️ Tight coupling

🍝 Difficulties in maintaining and extending the code(spaghetti code)

-------------------------------------------------------

# In the context of the SOLID principles, what does the term 'code smell' refer to?

A potential violation of the SOLID principles

-------------------------------------------------------

# Monorepo vs Polyrepo

Monorepo = Monolithic Repository = multiple projects/packages in a single Git repository

Polyrepo = Multiple Repositories = Each project/package in its own Git repository.

| Feature                | Monorepo                      | Polyrepo                     |
| ---------------------- | ----------------------------- | ---------------------------- |
| Centralized code       | ✅ Yes                         | ❌ No                         |
| Independent versioning | ⚠️ Harder                     | ✅ Easy                       |
| Shared libraries       | ✅ Simple via internal imports | ❌ Needs external publishing  |
| CI/CD                  | ✅ Shared & centralized        | ❌ Repeated per repo          |
| Large teams            | ⚠️ Can get complex            | ✅ Scoped per service/project |


Turborepo for scaling monorepos of projects in JS/TS https://turborepo.com/docs

-------------------------------------------------------

# Layer !== Tier

It is important to understand that a tier is not a layer. A tier is an independent component deployed at a specific physical location, that can contain many layers. 

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

# Service Oriented Architecture

You can think of services as the utilities we share: Internet, Electricity, Water, etc. This translates to: Things like authentication, email sending, or file upload.

They abstract away complexity and expose a simple interface. 

Services can depend on each other following a Service Dependency Graph. 

We typically use a class to define a Service and use access modifiers (read-only, private) to expose a minimum API to anyone using the service (other service or a Controller).

Services can be used across the different layers.

-------------------------------------------------------

# Microservices Architecture

TODO

The Microservices Architecture is a natural evolution of SOA (Service Oriented Architecture): we can transition to by extracting Services from the modular monolith and running them independently. 

Benefits:

 - Each microservice runs independently 

 - Each microservice can be developed by an autonomous (and smaller) team

 - If one service fails, the system will keep running 

 - Services are also deployed independently

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

 - extra latency - a call into the system usually translates to a cascade of calls(over the network) to several services downstream. Each extra call makes the total response time longer.

 - extra complexity - to get data from another service we need to make a call over the network, handle authentication, caching, and maybe even load balancing. In a modular monolith, it would have been a simple function call.

 - extra resources - although we can rip some scalability benefits from Microservices(see system design) we need extra pieces in our architecture: distributed login and monitoring and distributed analytics just to name a few. This all ads up in our cloud bill at the end of the month.


These drawbacks related to the 8 Fallacies of Distributed Computing:

1. The network is reliable.
2. Latency is zero.
3. Bandwidth is infinite.
4. The network is secure.
5. Topology doesn't change.
6. There is one administrator.
7. Transport cost is zero.
6. The network is homogeneous.

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

# higher-order component and React.memo

React.memo is an HOC that adds functionality to another component by using composition.

Liskov substitution principle and Composition Over Inheritance

-------------------------------------------------------

# Composition Over Inheritance

"has-a" vs "is-a" relationship

Advocates for building complex objects by combining simpler objects (composition) rather than relying on class inheritance for code reuse and polymorphism. 

Benefits:
 - Flexibility
 - Reduced Coupling
 - maintainable code
 - Improved Testability

-------------------------------------------------------

# Liskov Substitution principle

OOP Principle.

States that objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program.

"if S is a subtype of T, then objects of type T in a program can be replaced with objects of type S (i.e., objects of type S can substitute objects of type T) without altering any of the desirable properties of that program." 

Essentially, subclasses should behave in a way that is consistent with their parent class, allowing for seamless substitution.

TODO

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

PRPL Pattern -> Push, Render, Pre-cache, Lazy-load

Pattern that optimizes for interactivity through aggressive code-splitting and caching.

1. Push the minimal code for the initial route

2. Render route - and get interactive

3. Pre-cache using Service Workers

4. Lazy-load async (split) routes

https://web.dev/articles/optimizing-content-efficiency-javascript-startup-optimization#prpl

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

-----------------------------------------------------

# Reverse Proxy vs. API Gateway

An API gateway is a specialized form of a reverse proxy, primarily focused on API traffic management rather than general load balancing or data caching.

-------------------------------------------------------

# Proxy Pattern

TODO

https://www.patterns.dev/vanilla/proxy-pattern/

-------------------------------------------------------

# API Gateway Pattter

A common pattern used in the Microservices Architecture and it works like the gate to your cluster of services.

Just like a medieval city gate, the API gateway is the only entry point for requests to the various microservices. 

This setup centralizes security and functionality, making it simpler to manage.

Benefits 

 - Security - The gateway handles critical security functions like TLS handshakes, HTTPS, authentication, and sometimes authorization. It's also the point for implementing shared functionalities like caching or CORS, reducing redundancy in microservices.

 - Centralized Common Functions: Common needs like HTTP caching and CORS are handled centrally, avoiding repetitive coding across services.

Drawbacks 

 - Single point of failure. Despite its benefits, if it goes down, everything behind it is unreachable.

Note:

 - It’s advisable to keep business logic out of the API gateway to prevent it from becoming a bottleneck during updates or system changes. 

 - Business logic should reside in more flexible, adaptable backend services like a Backend for frontend.

Example

https://aws.amazon.com/api-gateway/

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

ESM = ECMAScript Modules = ECMAScript 2015 (ES6) Modules

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




