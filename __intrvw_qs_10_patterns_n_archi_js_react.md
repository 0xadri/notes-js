



**TODO**

 - Early Return Pattern


-------------------------------------------------------

# What's The Architect Mindset?

Think in **trade-offs** - BALANCE - developers know the benefits of everything, but architects always think in terms of trade-offs.

**Why** over How - the implementation details on how we write exports in our code matter much less than the overall level of modularity we accept.

An excellent coder - an architect is before everything an excellent coder. She excelled at coding and loves the craft. Architecture is being decided, implemented, and reviewed with every line of code written.

-------------------------------------------------------

# Docs

https://www.patterns.dev/vanilla/

https://www.patterns.dev/react








-------------------------------------------------------
                  ARCHITECTURE
-------------------------------------------------------

# TODO

DDD, Clean Architecture o Hexagonal.

-------------------------------------------------------

# What's Modular Monolith Architecture ?

A single service device in separated modules with clear boundaries.

TODO

-------------------------------------------------------

# Difference between Layer vs Tier ?

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

This translates to things like: authentication, email sending, or file upload.

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

 - Each microservice can be developed by an autonomous team - and smaller team

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
            DEVELOPMENT METHODOLOGIES
-------------------------------------------------------

# What's TDD ?

TDD = Test Driven Development.

Software development practice / methodology.

TDD = Red–Green–Refactor:

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
                React Patterns
-------------------------------------------------------

# Does react have a Hierarchy Of States ?

State management topic.

One of the trickiest and most important parts of building apps.

A good way to think about it is in a **hierarchy of states**, from most local (simplest) to most global (complex and powerful):
 1. Component State (Local State)
 2. Shared State (Lifted State)
 3. Global State

Think of state like a pyramid:

```
           Global State
          (rare, app-wide)
        ---------------------
           Shared State
        (parent + children)
        ---------------------
           Component State
          (local, isolated)
```

Guideline:
 - Start with component state.
 - If multiple siblings need it → lift to shared state.
 - If it’s needed everywhere → move to global state.

## 1. Component State (Local State)

Where it lives: Inside a single component (useState, useReducer).

Use case: When only one component cares about the data.

Cheap, simple, and fast. Always prefer it if the state isn’t needed anywhere else.

## 2. Shared State (Lifted State)

Where it lives: In a common parent component, then passed down as props.

Use case: When multiple components need access to the same data, but only within a section of the app.

Rule of thumb: “Lift state up” — put the state in the nearest common ancestor of the components that need it.

## 3. Global State

Where it lives: Outside the component tree, accessible anywhere (Context API, Redux, Zustand, Jotai, Recoil, etc.).

Use case: When many unrelated components across the app need the same data.

Examples: auth, logging, theme, notifications, shopping cart.

Powerful but should be used sparingly, because:
 - can lead to unnecessary re-renders if mismanaged.
 - introduces complexity compared to local/shared state.

-------------------------------------------------------

# Container–Presentational Pattern

Splits Components Into
 1. Presentational (UI) components → only concerned with layout, markup, and styles.
 2. Container (logic) components → handle state, data fetching, and business logic.

Why
 - Separation of concerns → UI is reusable and testable.
 - Makes components easier to maintain and swap.

```javascript
 // Presentational (stateless)
 const UserList = ({ users }) => (
  <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>
 );

 // Container (stateful)
 const UserListContainer = () => {
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    fetch('/api/users').then(res => res.json()).then(setUsers);
  }, []);
  return <UserList users={users} />;
 };
```

-------------------------------------------------------

# Higher-Order Components (HOCs)


Think of it as:
 - a wrapper
 - intersector
 - decorator
 - transformator

What it is:
 - A function that takes a `component` and returns a `new component` with **extra props or behavior**.
 - Whereas a regular component transforms props into UI, a higher-order component transforms a component into another component.
 - Wraps existing components without modifying their internals.
 
Use cases:
 - `logging`, `theming`, `global state mgmt`, or `auth`.
 - generally for cross-cutting concerns, encourages code reuse.

```javascript
 function withLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) return <p>Loading...</p>;
    return <Component {...props} />;
  };
 }

 const UserListWithLoading = withLoading(UserList);
```

-------------------------------------------------------

# Examples of HOC (Higher Order Component) in React ?

`React.memo` is an HOC that adds functionality to another component by using composition.

HOCs are common in third-party React libraries, such as:
 - `Redux` for `connect`
 - `Relay` for `createFragmentContainer`.

https://www.patterns.dev/react/hoc-pattern/

-------------------------------------------------------

# Differences between HOFs vs HOCs patterns ?

Both patterns utilize functions to create reusable logic, but they operate in different contexts. 

Higher-order functions are a **general JavaScript concept** where a function takes another function as an argument or returns a function. 

In React, higher-order components are a specific pattern that leverages this concept to create reusable component logic by wrapping existing components with enhanced functionality.

https://www.patterns.dev/react/hoc-pattern/

-------------------------------------------------------

# Custom Hooks

What it is:
 - Encapsulating reusable stateful logic into a function that starts with use.

Why:
 - Avoids duplicating logic across components.
 - Encourages clean, composable, and testable state management.

```javascript
 function useFetch(url) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(url).then(res => res.json()).then(data => {
      setData(data);
      setLoading(false);
    });
  }, [url]);

  return { data, loading };
 }

 function UserList() {
  const { data: users, loading } = useFetch('/api/users');
  if (loading) return <p>Loading...</p>;
  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
 }
```

-------------------------------------------------------

# Middleware Pattern

Wraps/Decorate functionalities with code running before or after.

Used by:
 - Express middleware → operates on HTTP request/response lifecycle.
 - React middleware (Redux or routing) → operates on state management or component rendering lifecycle.









-------------------------------------------------------
                   ANALOGIES
-------------------------------------------------------

# Patterns Analogies

Debounce: Think of it like waiting for someone to stop talking before you reply.

Throttle: Think of it like a speed limiter.





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

Think of it like waiting for someone to stop talking before you reply.

Ensures that a function runs only after a certain amount of inactivity. Useful when the final action matters.

 - The function executes only after the event has stopped firing for a given delay.
 - If events keep coming in before the delay ends, the timer resets.

Debounce Example: fire an API request only once the user stops typing for, say, 500ms. Timeline (keystrokes at |):
  User types:  |   |   |           (pause)
  Debounce:                  X (fires once, after 500ms pause)

-------------------------------------------------------

# Differences between Debouncing and Throttling ?

Debounce: Think of it like waiting for someone to stop talking before you reply.

Throttle: Think of it like a speed limiter.

Debounce: ensures that a function runs only after a certain amount of inactivity. Useful when the final action matters.

Throttle: ensures that a function is called at most once per interval, no matter how many times the event fires. Useful when regular updates matter.

Debounce:
 - The function executes only after the event has stopped firing for a given delay.
 - If events keep coming in before the delay ends, the timer resets.

Throttle:
 - The function executes immediately (or at fixed intervals) but never more than once per X ms.
 - Events that happen faster than the interval are ignored until the next interval.

Debounce Example: fire an API request only once the user stops typing for, say, 500ms. Timeline (keystrokes at |):
  User types:  |   |   |           (pause)
  Debounce:                  X (fires once, after 500ms pause)

Throttle Example: scroll listener updates position regularly, but not on every single pixel scrolled (it would kill perf):
  User scrolls: | | | | | | | | | | | | | 
  Throttle:     X     X     X     X

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

# What's Higher Order Function (HOF) pattern ?

Think of it as:
 - a wrapper
 - intersector
 - decorator
 - transformator

A function that either:
 - Takes another function as an argument, and/or
 - Returns a function as its result.

How it works:
 1. Take an existing function.
 2. Put it inside another function.
 3. Add extra behavior before/after (or even instead of) the original function.

TRANSFORMATIVE
 - Transforms a function into another function.
 - Wraps existing functions without modifying their internals.

Core concept in functional programming and very common in JavaScript.

-------------------------------------------------------

# Code examples of Higher-Order Functions (HOFs) ?

1. HOF taking a function as an argument

```javascript
 function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
 }
 repeat(3, console.log); // Logs: 0, 1, 2
```

2. HOF returning a function

```javascript
 function multiplier(factor) {
  return function(x) {
   return x * factor;
  };
 }
 const double = multiplier(2);
 console.log(double(5)); // 10
```

-------------------------------------------------------

# Why: High-Level Use-Cases for Higher-Order Functions (HOFs) ?

They’re great at **wrapping** (decorating/intersecting-with) other functions.

Especially when working with collections, async tasks, or configurable behavior.

Essential for:
 - abstraction
 - reusability (DRY)
 - cleaner code
 - declarative code
 - modular code
 - expressive code

-------------------------------------------------------

# Why: Real-Life Use-Cases for Higher-Order Functions (HOFs) ?

Use cases:
 - `logging`, `theming`, `global state mgmt`, or `auth`.
 - generally for cross-cutting concerns, encourages code reuse.

In real-world apps, HOFs help with:
 - `API middleware` such as logging, error handling, authentication 
 - `utilities` such as debounce, and throttle.
 - `event handling` in react: parameterized handlers.

Built-in `HOFs` in JS:
 - `map()` – transforms arrays
 - `filter()` – keeps matching items
 - `reduce()` – folds values into one
 - `forEach()` – iterates over items
 - `sort()` – sorts with a callback

TODO: also called function decoration or middleware pattern??
TODO: - used by Express middleware

-------------------------------------------------------

# How: Can you give some Code Examples of HOFs?

1. **Abstraction & Reusability**

Let you extract patterns and reuse logic.

```javascript
 function withLogging(fn) {
  return function(...args) {   // rest syntax
    console.log("Calling with", args);
    return fn(...args);   // spread syntax
  };
 }

 const add = (a, b) => a + b;
 const loggedAdd = withLogging(add);

 console.log(loggedAdd(2, 3)); 
 // Calling with [2,3]
 // 5
```

2. **Cleaner Code (Declarative style)**

Instead of manual loops, you describe what to do.

```javascript
 const nums = [1, 2, 3, 4, 5];
 
 let evens = [];
 for (let n of nums) { if (n % 2 === 0) evens.push(n); }   // Imperative

 const evens2 = nums.filter(n => n % 2 === 0);    // Declarative with HOF

 console.log(evens2); // [2, 4]
```

Shorter and more readable.

3. **Function Composition**

You can combine small functions into bigger ones.

```javascript
 const map = fn => arr => arr.map(fn);
 const filter = fn => arr => arr.filter(fn);

 const double = x => x * 2;
 const isEven = x => x % 2 === 0;

 const process = arr => map(double)(filter(isEven)(arr));

 console.log(process([1,2,3,4])); // [4, 8]
```

Small reusable pieces → powerful pipelines.

4. **Callbacks & Asynchronous Programming**

HOFs power event handling, promises, and async patterns.

`setTimeout(() => console.log("Hello after 2s"), 2000);`

Here, `setTimeout` is a HOF that takes a function (callback).

5. **Customization without Duplication**

You can inject behavior without rewriting code.

```javascript
 function createComparator(key) {
  return (a, b) => a[key] > b[key] ? 1 : -1;
 }

 const users = [{name: "Alice"}, {name: "Bob"}];
 users.sort(createComparator("name"));
 console.log(users); // sorted by name
```

One HOF → many custom comparators.

-------------------------------------------------------

# What pattern is used in the following code snippet?

```javascript
 // Initial function
 function authorization(role, permission_name) {
  if (role.name == "admin") return true;
  if (role.name == "user") {
 return role.permission[permission_name];
  }
  if (role == "visitor") return false;
 }

 // Helper function
 function authFactory(callback) {
  return function (role) {
   return function (permission_name) {
    return callback(role, permission_name);
   };
  };
 }

 // Creating different authorization functions
 const adminAuth = authFactory(authorization)({ name: "admin" });
 const visitorAuth = authFactory(authorization)({ name: "visitor" });
 const userAuth = authFactory(authorization)({
  name: "user",
  permission: { change_password: true },
 });
```

Function Currying.

-------------------------------------------------------

# What is Currying?

TLDR: Currying turns f(a, b, c) into f(a)(b)(c)

Currying always produces a function.

It refers to the process of transforming a **single function** that takes **multiple arguments** into a **sequence of functions** that each take a **less arguments**.

```javascript
 function add(x, y) { return x + y; } // Normal function

 function curriedAdd(x) { // Curried function - Curried version
  return function(y) {
 return x + y;
  };
 }
 console.log(curriedAdd(2)(3));
```

Essence of Currying: transformation of functions.

Currying is a concept from `functional programming`. 

-------------------------------------------------------

# Why currying is useful?

Enables more **flexible** and **reusable** function calls.

1. Partial application: You can “fix” some arguments and reuse the function.

```javascript
 const add10 = curriedAdd(10);
 console.log(add10(5)); // 15
```

2. Reusability & composition: Makes functions more **modular**.

3. Functional programming: Currying is a foundation for techniques like `point-free style`.

-------------------------------------------------------

# How: Use Cases for Currying?

We use currying to create different versions of a function that takes multiple arguments into several derived functions that take less arguments.

1. Partial application: You can “fix” (pre-fill) some arguments and reuse the function.

```javascript
 const add10 = curriedAdd(10);
 console.log(add10(5)); // 15
```

Reduces duplication and improves readability.

2. Function Composition & Pipelines

Curried functions work well in functional programming, where you chain transformations.

```javascript
 const map = fn => arr => arr.map(fn);
 const filter = fn => arr => arr.filter(fn);

 const isEven = x => x % 2 === 0;
 const square = x => x * x;

 const process = filter(isEven)([1,2,3,4,5,6]);
 console.log(map(square)(process)); // [4, 16, 36]
```

Here `filter` and `map` become modular building blocks.

3. Reusability with Configurable Functions

Currying lets you create configurable utilities easily.

```javascript
 const logger = level => message => console.log(`[${level}] ${message}`);

 const info = logger("INFO");
 const error = logger("ERROR");

 info("App started");   // [INFO] App started
 error("Something went wrong"); // [ERROR] Something went wrong

```

Useful for logging, validation, or formatting.

4. Event Handling

You can pass extra parameters without creating messy inline functions.

```javascript
 const handleClick = id => event => {
  console.log(`Button ${id} clicked!`);
 };

 document.getElementById("btn1").addEventListener("click", handleClick(1));
 document.getElementById("btn2").addEventListener("click", handleClick(2));
```

5. Working with Higher-Order Functions

Libraries like `Lodash`, `Ramda`, or functional utilities in JS often use currying to make APIs flexible.

```javascript
 const add = a => b => a + b;

 const numbers = [1, 2, 3, 4];
 const incrementAll = numbers.map(add(1)); // partially applied
 console.log(incrementAll); // [2, 3, 4, 5]
```

Easily create "predicate factories".

-------------------------------------------------------

# How Do Currying Pattern Relate To HOF ?

A `curried function` is by definition a `higher-order function` because it `returns a function`.

Every curried function is a HOF, but not every HOF is curried.

Currying always produces a function.

-------------------------------------------------------

# How does currying pattern relate to closure?

Currying relies on closures to work - to pass along and remember previous arguments.

Currying = breaking multi-argument function into unary functions.

Closures = inner functions “remember” variables from outer functions.

-------------------------------------------------------

# What is the essence of closures?

The essence of closures is all about `scope`.

👉 You can think of closure as: “A function bundled together with its surrounding scope.”

1. Normally, when a function finishes, its local variables disappear.

2. Closure = when a function “remembers” the scope it was created in, even after that scope is gone.

-------------------------------------------------------

# What's a closure in JavaScript ?

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the "lexical environment"). 

In other words, a closure gives a function access to its outer scope.

In JavaScript, closures are created every time a function is created, at function creation time.

Using closures makes JavaScript use more memory.

A closure is a pairing of:
 1. A function and
 2. A reference to that function's outer scope (lexical environment)

https://stackoverflow.com/questions/111102/how-do-javascript-closures-work

-------------------------------------------------------

# Why: use-cases top-5 for closure?

1. Data Privacy / Encapsulation : “hide” variables so they can’t be accessed directly from outside.

2. Function Factories : create functions with “preset” values.

3. Callbacks & Event Handlers : callbacks remember the data they were created with.

4. Iterators & State Management : help functions remember their state across calls.

5. Once / Memoization : Closures can limit function execution or cache results.

-------------------------------------------------------

# Closures makes Javascript consume more ...

Memory.

Because it keeps the scope where a function is defined in memory even after the function has finished executing.





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



