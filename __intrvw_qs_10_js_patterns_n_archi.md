
# Docs

https://www.patterns.dev/vanilla/

https://www.patterns.dev/react

-------------------------------------------------------

# What's The Architect Mindset?

Think in **trade-offs** - BALANCE - developers know the benefits of everything, but architects always think in terms of trade-offs.

**Why** over How - the implementation details on how we write exports in our code matter much less than the overall level of modularity we accept.

An excellent coder - an architect is before everything an excellent coder. She excelled at coding and loves the craft. Architecture is being decided, implemented, and reviewed with every line of code written.



-------------------------------------------------------
            DEVELOPMENT METHODOLOGIES
-------------------------------------------------------

# What's Test Driven Development (TDD) ?

Software development practice / methodology.

Write tests first. Code second.

TDD = Test Driven Development.

TDD = Red–Green–Refactor = write a test → write code → refactor, repeat until done

1. Red → Write a failing test
 - Define what the code should do.
 - Run the test → it fails (because the feature isn’t built yet).

2. Green → Write the minimum code to make the test pass
 - Implement just enough logic.
 - Run tests → they pass.

3. Refactor → Clean up the code
 - Improve structure, remove duplication.
 - Ensure all tests still pass.

Then repeat the Red–Green–Refactor cycle.

-------------------------------------------------------

# Why TDD ?

Ensures better design and cleaner code.

Gives confidence to refactor (tests catch regressions).

Helps clarify requirements before coding.

Produces a safety net of automated tests.

-------------------------------------------------------

# Component Driven Development

UI development methodology.

Bottom Up.

Build applications from the bottom up, focusing on independent, reusable components instead of full pages or features first.

How:
 - start with the smallest building blocks (components)
 - and gradually compose them into larger structures until you reach complete pages.

Similar in spirit to TDD (small, incremental steps) but applied to UI.

-------------------------------------------------------

# Why Component Driven Development ?

Reusability – Build once, use everywhere.

Consistency – Unified design system (no “almost identical” buttons).

Faster development – Teams can work on components in parallel.

Testability – Easier to test small pieces in isolation.

Scalability – Large UIs are easier to maintain when broken into parts.




-------------------------------------------------------
                SOLID Principles
-------------------------------------------------------

# SOLID Principles

Set of five principles in object-oriented programming (OOP) that make software designs more maintainable, scalable, and flexible.

S — Single Responsibility Principle (SRP)

O — Open/Closed Principle (OCP)

L — Liskov Substitution Principle (LSP)

I — Interface Segregation Principle (ISP)

D — Dependency Inversion Principle (DIP)

-------------------------------------------------------

# What is the Single Responsibility Principle (SRP) ?

SOLID principles = S.

A class should only have one job or responsibility.

A class should have only one reason to change.

For instance, if you have a class that is designed to manage customer records, it should not also be responsible for printing those records.

-------------------------------------------------------

# What's the Open-Closed Principle (OCP) ?

SOLID principles = O.

`Classes`, `modules`, `functions` should be closed for modification but open for extension.

-------------------------------------------------------

# What's the Liskov Substitution Principle (LSP) ?

SOLID principles = L.

OOP Principle.

Think of it as:
- Similar to classes-interface relationship
- Most specific implementations must be able to fully replace less specific implementations.

States that objects of a `superclass` should be replaceable with objects of its `subclasses` without affecting the correctness of the program.
 - `Child classes` must be able to fully substitute their `parent classes`.
 - "if S is a subtype of T, then objects of type T in a program can be replaced with objects of type S (i.e., objects of type S can substitute objects of type T) without altering any of the desirable properties of that program." 

-------------------------------------------------------

# Which principle in SOLID stands for classes should depend upon abstractions, not concrete implementations?

SOLID principles = D.

Dependency Inversion Principle (DIP).

In simpler terms, the DIP encourages coding to `interfaces` rather than concrete implementations.
 
 -> High-level modules should not depend on low-level modules; both should depend on abstractions.
 
Why? 

This makes the code more flexible, reusable, and resistant to changes in the underlying components.

-------------------------------------------------------

# What's the Interface Segregation Principle (ISP) ?

SOLID principles = I.

Many client-specific interfaces are better than a single general-purpose interface.

No client should be forced to depend on methods it does not use.

-------------------------------------------------------

# Not following SOLID principles will...

🧱 Lower Module Cohesion - modules are not focused on a single purpose

🕸️ Tight coupling

🍝 Difficulties in maintaining and extending the code(spaghetti code)

-------------------------------------------------------

# What does "code smell" refer to in the context of the SOLID principles?

A potential violation of the SOLID principles.




-------------------------------------------------------
                   PATTERNS
-------------------------------------------------------

# Composition Over Inheritance

"Has-a" vs "Is-a" relationship.

Advocates for building complex objects by combining simpler objects (composition) rather than relying on class inheritance for code reuse and polymorphism. 

Benefits:
 - Flexibility
 - Reduced Coupling
 - maintainable code
 - Improved Testability

-------------------------------------------------------

# What's state machine pattern?

It is a **behavioral design pattern** that allows an object to alter its behavior based on its internal state. 

It's closely related to the concept of a **Finite State Machine** (FSM), where a system can be:
 - in one of a finite number of states,
 - and transitions between these states are triggered by events.

Every React component is actually an "implicit state machine" — cobbled together based on the component's spread out logic.

The UI is a reflection of the state, or a function of the state.

Changes in state lead to updates in the UI, making the relationship between state and UI predictable and deterministic.

-------------------------------------------------------

# What's Function Currying pattern ?

We use currying to create different versions of a function that takes multiple arguments into several derived functions that take less arguments.

TODO

-------------------------------------------------------

# Observer pattern

The Observer pattern:
 - is a behavioral design pattern.
 - establishes a one-to-many dependency between objects. 

When one object (Subject/Publisher) changes state, all its dependents (Observers/Subscribers) are **notified** and updated automatically.

Use cases:
 - event handling
 - messaging systems
 - UI frameworks

In components-based frameworks, i.e. React, third-party State Management Libraries implement this pattern.

https://www.patterns.dev/vanilla/observer-pattern/

-------------------------------------------------------

# Observer vs Subscriber pattern ?

`Observer pattern` is mostly implemented in a **synchronous** way
 - i.e. the Subject calls the appropriate method of all its Observers when some event occurs. 

The `Publisher/Subscriber pattern` is mostly implemented in an **asynchronous** way
 - i.e. using message queue.

-------------------------------------------------------

# Observer vs Mediator pattern ?

Mediator pattern is usually more complex than the Observer pattern.

Tradeoff
 - Observer → Simple, decoupled, but **only handles notifications**.
 - Mediator → More complex, but **manages interactions and rules**.

General use cases:
 - Observer for events and reactive updates.
 - Mediator for many-to-many dependencies and want to avoid chaos.

Observer (simpler):
 - Just a publisher–subscriber relationship.
 - One subject pushes updates → many listeners receive them.
 - Easy to implement with events, callbacks, or pub/sub.
 - Minimal coordination logic.

Mediator (more complex):
 - A hub that defines rules for how objects interact.
 - Not just “notifying” → it can decide who talks to whom, when, and how.
 - Requires the mediator to know more about the participants’ capabilities.
 - Good for preventing a spaghetti of direct connections between many objects.

-------------------------------------------------------

# What's the difference between Mediator and Middleware Patterns ?

Mediator → **central hub** that manages communication.

Middleware → **chain of functions** where each one processes data (like Express.js middlewares).

👉 They’re conceptually different, but both aim to decouple components.


HOF Pattern?

Used in Express.js

TODO

https://www.patterns.dev/vanilla/mediator-pattern/

-------------------------------------------------------

# Function Debouncing pattern

TODO

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

# What's Higher Order Function (HOF) pattern ?

Think of it as:
 - a wrapper
 - intersector
 - decorator
 - transformator

It is: 
 - a function that takes **another function as an argument** or **returns a function**
 - transforms a function into another function.
 - Wraps existing functions without modifying their internals.

Use cases:
 - `logging`, `theming`, `global state mgmt`, or `auth`.
 - generally for cross-cutting concerns, encourages code reuse.
 
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
                  JS SPECIFIC
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

# What's the Module Pattern ?

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

# IIFE used as a module declaration

IIFE (Immediately Invoked Function Expression)

```
(function (module) {
  const someVariable = "someVar";

  function returnFirstChar(text) {
    // ...
  }

  module.returnFirstChar = returnFirstChar;
  module.firstChar = firstChar;
  window.myModule = module;
})({});
```

-------------------------------------------------------

# Module Federation Pattern

TODO




-------------------------------------------------------
                API TOPICS
-------------------------------------------------------

# Can you give common API patterns?

1. Resource-Oriented Design (RESTful Pattern)
2. Request-Response with Filtering and Pagination
3. Hypermedia-Driven (HATEOAS)
4. Asynchronous / Event-Driven APIs
5. API Gateway & Aggregation Pattern
6. Backend-For-Frontend Pattern (BFF)
7. GraphQL: Flexible queries, client-driven shape of responses.
8. gRPC: High-performance, strongly typed APIs with streaming support.

-------------------------------------------------------

# What's Resource-Oriented Design (RESTful Pattern) ?

Treats everything as a resource (users, orders, products) identified by URLs, manipulated using standard HTTP verbs (GET, POST, PUT, DELETE).

When to use: General-purpose APIs, CRUD-heavy systems.

Pros: Simple, predictable, widely adopted, works well with caching.

Cons: Can get complex for highly relational or real-time scenarios.

-------------------------------------------------------

# What's Request-Response with Filtering and Pagination ?

Instead of returning huge payloads, APIs provide query parameters for filtering, sorting, and paginating results.

When to use: Large datasets (e.g., search, e-commerce catalogs, logs).

Pros: Improves performance, reduces bandwidth, increases client flexibility.

Cons: More complexity in query parsing and validation.

-------------------------------------------------------

# What's Backend-For-Frontend Pattern (BFF) ?

Separate backend services tailored to the needs of a specific frontend application (web, mobile, smart TV, etc.).

Acts as a middle layer between the frontend and the underlying microservices, APIs, or databases.

-------------------------------------------------------

# Why BFF?

Different frontends often have different needs:
 - A mobile app may need smaller payloads (limited bandwidth, lower processing power).
 - A web app may need richer data in fewer calls.
 - A smartwatch UI may only need a minimal subset of features.

If all frontends consume the same backend API directly, you risk:
 - Over-fetching (getting too much data).
 - Under-fetching (needing multiple calls to assemble what’s required).
 - Increased complexity in frontend code.

The BFF solves this by shaping the API per frontend.

Key Benefits
 - Frontend-specific optimization – Tailored APIs for mobile, web, etc.
 - Reduced complexity in frontend – Business logic is handled in the BFF instead of the UI.
 - Decoupling – Frontends don’t need to know about all microservices.
 - Security – BFF can handle authentication, rate limiting, and filtering sensitive data.
 - Faster iteration – Frontend and BFF can evolve together without breaking other clients.

-------------------------------------------------------

# BFF vs GraphQL: Can GraphQL solve the same issues as BFF ?

Yes, GraphQL can solve many of the same problems that the BFF pattern addresses, but the two approaches are not identical. 

| Aspect                           | BFF                                                        | GraphQL                                                              |
| -------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------- |
| **Frontend-specific APIs**       | Each frontend has its own backend service.                 | One shared schema; clients decide what to query.                     |
| **Business logic location**      | Moved into each BFF layer.                                 | Ideally kept in resolvers/microservices, schema acts as a contract.  |
| **Flexibility for new clients**  | Need to build a new BFF.                                   | New clients can reuse the schema without backend changes.            |
| **Security & auth per frontend** | Easier to enforce per BFF.                                 | Must enforce at the schema or resolver level.                        |
| **Performance tuning**           | Each BFF can optimize payloads & caching for its frontend. | GraphQL allows custom queries but still may need DataLoader/caching. |

GraphQL sometimes Replace BFF:
 - If your main pain points are over/under-fetching and multiple frontends consuming the same data differently, GraphQL can eliminate the need for multiple BFFs.

GraphQL cannot always Replace BFF:
 - If you need frontend-specific business logic (e.g., the mobile app applies custom discount rules, or the TV app has radically different flows), a dedicated BFF layer may still make sense.
 - In fact, many teams combine both:
   - GraphQL as a gateway
   - BFF services feeding into it

Example Architecture with GraphQL as BFF
   Web App  ----> GraphQL Gateway ----> Microservices
   Mobile   ----> GraphQL Gateway ----> Microservices
   TV App   ----> GraphQL Gateway ----> Microservices

-------------------------------------------------------



-------------------------------------------------------
                  ARCHITECTURE
-------------------------------------------------------

# What's Modular Monolith Architecture ?

A single service device in separated modules with clear boundaries.

TODO

-------------------------------------------------------

# What's the difference between Layer and Tier ?

 - `Tier` != `Layer`
 - `tier` is NOT a `layer`. 

A `tier` is an independent component deployed at a **specific physical location**.

A `tier` can contain `many layers`. 

-------------------------------------------------------

# The MVC pattern is an example of ...

A Layered Architecture.

It separates the application into three interconnected layers: the Model, the View, and the Controller.

-------------------------------------------------------

# Event-Driven Architecture

TODO

-------------------------------------------------------

# Client-Server Architecture

TODO

-------------------------------------------------------

# What's a Service Oriented Architecture ?

You can think of services as the utilities we share: Internet, Electricity, Water, etc. 

This translates to: Things like authentication, email sending, or file upload.

They abstract away complexity and expose a simple interface.

Services can depend on each other following a `Service Dependency Graph`. 

We typically use a `class` to define a Service and use access modifiers (read-only, private) to expose a minimum API to anyone using the service (other service or a Controller).

Services can be used across the different layers.

-------------------------------------------------------

# What's a Microservices Architecture ?

TODO

The Microservices Architecture is a natural evolution of SOA (Service Oriented Architecture).

We can transition to by extracting Services from the **modular monolith** and **run them independently**. 

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

# What does the "Micro Services Tax" refer to ?

The **additional complexity** of implementing a MicroServices Architecture (v.s a Monolith Architecture)

Microservices architecture requires **more maintenance and development**.

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

# Micro Frontends

Architectural style in frontend web development.

Similar to the microservices approach in backend development.

Breaks big monolithic frontend applications into smaller ones. Into independent, deployable features.

Each micro frontend can be developed, tested, and deployed independently by different teams.

Promotes modularity, scalability, and faster delivery cycles. 




-------------------------------------------------------
                  DEVOPS
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

# API Gateway Pattern

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

# Monorepo vs Polyrepo

Monorepo = Monolithic Repository = multiple projects/packages in a single Git repository

Polyrepo = Multiple Repositories = Each project/package in its own Git repository.

| Feature                | Monorepo                      | Polyrepo                     |
| ---------------------- | ----------------------------- | ---------------------------- |
| Centralized code       | ✅ Yes                         | ❌ No                        |
| Independent versioning | ⚠️ Harder                      | ✅ Easy                       |
| Shared libraries       | ✅ Simple via internal imports | ❌ Needs external publishing |
| CI/CD                  | ✅ Shared & centralized        | ❌ Repeated per repo         |
| Large teams            | ⚠️ Can get complex             | ✅ Scoped per service/project |

Turborepo for scaling monorepos of projects in JS/TS https://turborepo.com/docs



