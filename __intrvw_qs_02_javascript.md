
-------------------------------------------------------

# TODO

What/Why/When(realusecases)/How(code): ES6 modules .mjs or with "type": "module" in package.json

What/Why/When(realusecases)/How(code): Classes

What/Why/When(realusecases)/How(code): Classes Accessibility

What/Why/When(realusecases)/How(code): Classes Constructor

-------------------------------------------------------

# What's ES5, ES6, ES7 about?

`ES` stands for `ECMAScript`.

JavaScript is standardized by `ECMAScript`.

Each new version adds features, fixes, and improvements.

 - ES5 (2009): Strict mode, array methods, JSON.
 - ES6 (2015): Big upgrade (let/const, arrow functions, classes, modules, promises).
 - ES7+ (2016 onward): Smaller yearly updates (async/await, optional chaining, BigInt, etc.).

-------------------------------------------------------

# How are ECMAScript versions decided?

The TC39 group is responsible for evolving JavaScript (officially, ECMAScript).

TC39 = Technical Committee 39.

TC39 is part of Ecma International, the standards organization that manages the ECMAScript specification.

Members are representatives from big tech companies (Google, Microsoft, Apple, Mozilla, Intel, etc.) and independent experts.

-------------------------------------------------------

# What's "use strict" ?

It is a directive that enables `strict mode`.

`Strict mode` changes the way JavaScript executes by enforcing **stricter parsing and error handling**. 

Introduced with ES5 (2009).

-------------------------------------------------------

# Why "use strict" ?

It helps catch common coding mistakes and prevents potentially unsafe actions.

Makes the code: safer, more predictable, and easier to debug.

 - `this` is not automatically bound to window - NO implicit global `this`

 - Variables must be declared

 - Assignment to read-only properties throws errors
 
 - No duplicate parameter names in functions
 
 - Reserved keywords are protected i.e. implements, interface, let, package, private

-------------------------------------------------------

# When "use strict" in real-life use-cases? 

Most of the time, "use strict"; is recommended because it makes your code safer.

Few rare cases where you might avoid it:

 1. Old JavaScript Libraries - some were written assuming `sloppy mode` (especially those pre-`ES5`, pre-2009) 
 
 2. Legacy Codebases

-------------------------------------------------------

# What is "sloppy mode" ?

`sloppy mode` = `non-strict mode` = opposite of `strict mode`

This means:

 - `this` is automatically bound to window - implicit global `this`

 - Variables do not have to be declared
 
 - Assignment to read-only properties does NOT throw errors - it fails silently

 - Duplicate parameter names are allowed in functions

 - Not reserved keywords i.e. you can call your variable `public`

-------------------------------------------------------

# What are Object Methods?

A method is just a function stored as a property of an object.

Any property whose value is a function is essentially a method.

Access it using dot notation `obj.key` or bracket notation `obj["key"]`.

-------------------------------------------------------

# What are the different scope in JavaScript?

1. Global Scope → Accessible everywhere.

2. Function Scope → Created inside functions (var).

3. Block Scope (let and const) → Created by `{}` with `let` and `const`.

4. `Lexical Scope` (Static Scope) → how closures work - Inner functions access variables of outer function.

5. Module Scope (ES6 Modules) → Variables private to modules unless exported.

-------------------------------------------------------

# What's Lexical Scope?

Lexical scoping = how closures work.

Inner functions access variables of outer function.

Functions remember the scope in which they were defined, no matter where they’re later called.

-------------------------------------------------------

# Was `Lexical Scope` introduced by `arrow functions` with ES6 (2015) ?

No. Lexical scoping is in JavaScript since its very first version in 1995.

ES6 (2015) introduced new ways of declaring variables (`let` and `const`) that are `block-scoped`:

 - Lexical scoping = how closures work, and it has always been part of JavaScript. Functions remember the scope in which they were defined, no matter where they’re later called.

 - `var` (pre-ES6) = `function-scoped`, which sometimes made closures trickier (like in `for loops`).

 - `let` and `const` (ES6) = `block-scoped`, which made closures more intuitive in certain cases.

-------------------------------------------------------

# Use cases for Lexical Scope

 1. Closures (data privacy) - private variables - "remember" variables from their defining scope, even after that scope is gone
 
 2. Callbacks in Asynchronous Code - retain access to variables; useful in timers, promises, and async/await
 
 3. Arrow Functions Preserving `this` - fixes the `this` binding problem.
 
 4. Functional Programming (map, filter, reduce) - keeps variables accessible in inline functions
 
 5. Event Handlers - reference outside variables safely

 6. Currying & Partial Application - pre-fill arguments using `closures`
 
 7. Module Pattern (Data Encapsulation) - `Lexical scope` + `closures` = simulate `private` fields before ES6 classes.
 
 8. Memoization (Caching Results) - holds a cache between calls
 
 9. IIFE (Immediately Invoked Function Expressions) - IIFEs create a lexical scope to avoid polluting globals.
 
-------------------------------------------------------

# What's the informal "Object Scope" about?

 - `Object Scope` isn’t a formal type of scope like `global`, `function`, or `block` scope.

 - `Object Scope` mainly refers to accessing and controlling `properties`/`methods` via `this` and references.

 - `regular methods` vs `arrow methods` is a hack to access different scopes via `this`
 
   - `this` inside `regular methods` points to the object.

   - `this` inside `arrow methods` points to the surrounding `lexical scope`.

 - True `private` variables in objects require `closures`.

 - Object properties are not variables—they don’t follow var/let/const scoping.

-------------------------------------------------------

# Function Scope And The Informal Object Scope

Explain these points:

 - `Function Scope`: differences between `arrow functions` VS `regular functions`

 - The `this` binding problem for `regular functions` - it's inconsistent/dynamic
 
 - Why were `arrow functions` introduced when we already had `regular functions`
 
 - The informal `object scope`, and how `arrow functions` and `regular functions` relate to it

-------------------------------------------------------

# What are the difference between `rest` and `spread` syntaxes ?

`Rest` and `Spread` look the same (...) but they are kind of the opposite:

 - `Rest` = Pack = collects values into an array.

 - `Spread` = Unpack = expands an array or object into individual values.

-------------------------------------------------------

# Why use `rest` or `spread` syntaxes ?

1. `Rest` syntax usage: in `function parameters`, `object destructuring`, or `array destructuring`.

2. `Spread` syntax usage: in `function calls`, `array literals`, or `object literals`.
 
-------------------------------------------------------

# How to use `rest` or `spread` syntaxes together ?

```
 function logAndCall(fn, ...args) {   // rest syntax
  console.log("Calling with: ", args);
  console.log(fn(...args));    // spread syntax
 }
 logAndCall(Math.max, 1, 5, 3); // output below
 // Calling with: [1, 5, 3]
 // 5
```

First the `rest` syntax first collects extra arguments into an array.

Then the `spread` syntax spreads the array back into individual arguments.

This pattern allows you to write generic wrappers for any function (c.f. HOFs)

-------------------------------------------------------

# What is ...args about ?

`...args` = `rest` syntax = argument collector.

Collects all arguments passed to a `function` into a single `array`.

```
 function foo(...args) {
  console.log(args);
 }
 foo(1, "a", true);    // logs: [1, "a", true]
```

-------------------------------------------------------

# Why use ...args ?

Makes functions flexible, concise, and future-proof.

 1. Flexible → Handle any number of arguments
 
 2. Cleaner → Avoid manually accessing `arguments` - directly use map, filter, reduce, etc.
 
 3. Powerful → Works well with higher-order functions - write generic functions that forward arguments to other functions
 
 4. Readable → Makes code cleaner and more readable

-------------------------------------------------------

# When, in which real-life use-case

-------------------------------------------------------

# How to use ...args ?

`...args` must be the last parameter in the function.



-------------------------------------------------------

# Advanced usage of ...args ? 

Example with nested functions with each its own ...args

In nested function, `args` is different and local. They don’t overwrite each other.


-------------------------------------------------------

# Can you use ...args in regular functions?

Yes — you can use rest parameters `...args` with regular functions (not just arrow functions).

`...args` was introduced in ES6 (2015).

-------------------------------------------------------

# Before ES6, what did you use instead of ...args?

We could use the special `arguments` object.

 - arguments is not a real array (just array-like), so you can’t directly use .map, .reduce, etc. without converting it.

 - `...args` is a real array, so you can use array methods right away.

 - arguments works only in regular functions, not arrow functions.

 - `...args` works in both regular and arrow functions.

-------------------------------------------------------

# Why were arrow functions introduced?

Arrow functions were introduced in ES6 (ECMAScript 2015) primarily to:

 - Shorter and Cleaner syntax.

 - Fix the common `this` binding problem.

 - Improve `lexical scoping` for arguments and closures.

 - Encourage functional programming patterns.

 - Prevent misuse as constructors.

## Fix the common `this` binding problem

One of the most common pitfalls in JavaScript was that `this` was inconsistent/dynamic. It changed depending on how a function was called:

```
 function Person() {
  this.age = 0;

  setInterval(function() {
 this.age++;  // this is not the Person object
  }, 1000);
 }
```

Solutions before ES6 required hacks: `var self = this;` or `bind(this)`.

```
 const person = {
  name: "Alice",
  greet: function() {
   const self = this;
   setTimeout(function() {
    console.log(self.name); // prints "Alice"
   }, 1000);
  }
 };
```

Arrow functions capture `this` from their surrounding scope, so you don’t need extra hacks:

```
 function Person() {
  this.age = 0;

  setInterval(() => {
   this.age++;  // 'this' is the Person instance
  }, 1000);
 }
```

-------------------------------------------------------

# Can you do multithreading in JavaScript?

No. Not natively.

JS in majority of browsers run on V8.

HTML5 Web Workers define a way to run script in the background. You can then execute some tasks in threads living outside the main page and thus non-impacting the drawing performance.

https://learn.microsoft.com/en-us/previous-versions/msdn10/hh549259(v=msdn.10)

NODE.JS SPECIFIC

JS in majority of browsers run on V8, which is essentially same engine used by Node.js

The very foundation of Node.js and the way it works is it has Event Loop on single thread - which is intentional. It removes any issues with synchronizations between threads and any overhead with creating/deleting threads. That is very important concept for backend as it often handles tens or hundreds of concurrent requests at once.

It makes also code very deterministic (you know that the synchronous part of the code taken by Event Loop will be executed fully before another event in Event Loop will be taken and processed)

However from the beginning - Node.js HAS thread pool. Another threads are used for I/O operations in background (like requests or handling files). You can create workers which does have their own threads if you like to.

Does the core of Node.js change? Most likely not, it would be breaking change and it would be actually against the main idea of Node.js. Also not bringing much benefits (as you can use more threads if you really want to already)

-------------------------------------------------------

# How do you improve code quality?

Stick to best practices and industry standards:

 - use ESLint and Prettier.

 - automated testing with Jest and Cypress.
 
 - considering SonarQube for static code analysis (automated code reviews) - to detect bugs, code smells, vulnerabilities, duplications, and security hotspots.

 - code reviews (manual code reviews) - points above reduce time required for "manual work"
 
 - CI/CD

This increases code maintainability, reduces in-production issues, and reduces rollbacks.

-------------------------------------------------------

# JavaScript is pass by value or reference language?

JavaScript is a pass by value language. 

When a function is called, a copy of the value of each argument is passed to the function, not the original argument. 

This means that the function cannot modify the original arguments. If you modify the value of any argument the function received your changes only have effect inside the function.

-------------------------------------------------------

# Why React So Fast?

Virtual DOM, Diffing, etc

-------------------------------------------------------

# Browser API: familiar with different authentication and storage mechanisms present in the browser?

Cookies, local storage, and session storage.

-------------------------------------------------------

# Browser API: familiar with the History API?

Yes, used by all modern frameworks to mimic HTTP-like routing in SPAs (Single Page Applications). 

-------------------------------------------------------

# Which are JavaScript primitive type 

Primitive type is data that is not an object. The primitive types are:

- number

- string

- boolean

- null

- undefined

- symbol

- bigint

- object

-------------------------------------------------------

# What's hoisting?

The process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

Functions and Variables are hoisted.

-------------------------------------------------------

# What's variable hoisting?

TODO

-------------------------------------------------------

# What's function hoisting?

Function hoisting means that functions are moved to the top of their scope. That is,

```
 function b() {  
   a = 10;  
   return;  
   function a() {} 
 } 
```

will be rewritten by the interpeter to this

```
 function b() {
  function a() {}
  a = 10;
  return;
 }
```

-------------------------------------------------------

# What does "functions are first class objects" mean?

All the function declarations are eventually assigned to a variable.

In Javascript, functions are first class objects, just like strings and numbers. 

That means they are defined as variables and can be passed to other functions, be stored in arrays, and so on.

-------------------------------------------------------

# What is `func.apply(this, args)` ?

It uses the `Function.prototype.apply()` method to call a function (`func`) with:

 - `this` → the value that will be bound as this inside `func`.

 - `args` → an array (or array-like object) of arguments to pass to func

```
 function greet(greeting, name) {
  console.log(greeting + ', ' + name);
 }
 const args = ['Hello', 'Alice'];
 greet.apply(this, args);   // Output: "Hello, Alice"
```

-------------------------------------------------------

# When to use `Function.prototype.apply()` method?

If you want to control what `this` points to inside the function.

```
 // Example without .apply()
 function showName() { console.log(this.name); }
 const person1 = { name: "Alice" };
 const person2 = { name: "Bob" };

 person1.say = showName; // Assign function

 person1.say(); // "Alice"
 showName();    // undefined (or window/global in non-strict mode)
```

```
 // Example with .apply()
 function showName() {
  console.log(this.name);
 }

 const person1 = { name: "Alice" };
 const person2 = { name: "Bob" };

 showName.apply(person1); // "Alice"
 showName.apply(person2); // "Bob"
```

-------------------------------------------------------

# Difference between `Function.prototype.apply()` and `Function.prototype.call()` methods?

`.apply(thisArg, argsArray)` → calls the function with a chosen `this` and arguments.

`.call(thisArg, ...args)` → same as `.apply()`, but arguments are passed individually.

-------------------------------------------------------

# Difference between `Function.prototype.bind()` and `call()` and `apply()` methods?

`call` / `apply` → when you want to invoke the function right now with a specific `this`.

`bind` → when you want a function you can call later, but with `this` (and maybe some `args`) already “locked in”.

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

TODO


-------------------------------------------------------

# Macrotask vs Microtask and how the event loop interacts with them?

Macrotask: Timer Functions: setTimeout, setInterval, setImmediate, I/O: I/O, UI rendering: UI rendering

Microtask: Promise, MutationObserver, process.nextTick

Order of execution:
1. call stack
2. once the call stack is empty, the event loop will execute the microtask queue.
3. once the microtask queue is empty, the event loop will move on to the next "tick" by picking the first task from the macrotask queue

-------------------------------------------------------

# How do you iterate over properties of an object?

1. Use the `for let key in` syntax

```
 for (let key in myObject){
  const propVal = myObject[key]
 }
```

2. `Object.keys` method - keys only

const keysArray = Object.keys(objectOne)
...

3. `Object.values` method - values only

const valsArray = Object.keys(objectOne)
...

4. `Object.entries` method - keys and values

const obj = { a: 1, b: 2, c: 3 };

Object.entries(obj).forEach(([key, value]) => {
  console.log(key, value);
});


-------------------------------------------------------

# How can we make sure that nobody can edit the properties of an object?

Using `Object.freeze()`. 

It freezes an object, so it cannot be modified in any way.

-------------------------------------------------------

# How can we make sure that nobody can add or delete properties to an object?

Using `Object.seal()`.

It protects the properties of an object from being added or deleted but existing ones can be modified.

-------------------------------------------------------

# Explain javascript callbacks in human language

A callback is just a function passed into another function, so it can call it later when it’s ready.

A piece of code that calls another piece of code once it has finished executing.

-------------------------------------------------------

# What will the following function return?

```
 async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
 }
```

A Promise object that resolves to the data from the URL.

The function will return a Promise object. When the promise object resolves, the data will be returned.

Note: async functions always return a Promise that resolves to the value of the return statement.

-------------------------------------------------------

# What is a Promise?

A Promise in JavaScript is an object that represents the eventual result of an asynchronous operation.

It acts like a placeholder for a value that will be available now, later, or never.

-------------------------------------------------------

# What are Promise States?

A Promise has three states:

 1. `pending` → initial state (still waiting).

 2. `resolved` aka `fulfilled` → operation completed successfully → resolve(value).

 3. `rejected` → operation failed → reject(error).

Once `resolved` or `rejected` it won’t change again.

-------------------------------------------------------

# JS Promise vs callback?

Callback: legacy js, it is the old way of handling asynchronous code in JavaScript.

Promise: an object that represents a value that may be available now, later, or never.

 - Provides chaining - `.then().then().catch()`, making sequences of async calls cleaner.

 - Cleaner error handling, centralized with `.catch()`.

 - Works seamlessly with `async`/`await` (making `async` code look synchronous).

| Feature  | Callback       | Promise          |
| -------------- | -------------------------------- | ------------------------------------- |
| Syntax   | Function passed into another  | Object with `.then()`, `.catch()`  |
| Readability | Can lead to "callback hell"   | More structured & chainable     |
| Error handling | Must be handled manually   | Built-in via `.catch()`      |
| Async flow  | Nested functions     | Chaining or `async/await`    |
| Multiple tasks | Hard to manage       | Promise helpers (`all`, `race`, etc.) |
| Modern usage   | Legacy / still used in Node APIs | Standard in modern JS     |

-------------------------------------------------------

# What JavaScript (design) patterns is used in the following code snippet?

```
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

Currying is a concept from `functional programming`. 

Essence of Currying: transformation of functions.

It refers to the process of transforming a **single function** that takes **multiple arguments** into a **sequence of functions** that each take a **single argument**.

```
 function add(x, y) { return x + y; } // Normal function

 function curriedAdd(x) { // Curried function - Curried version
  return function(y) {
 return x + y;
  };
 }
 console.log(curriedAdd(2)(3));
```

In short: Currying turns f(a, b, c) into f(a)(b)(c)

-------------------------------------------------------

# Why currying is useful?

Enables more **flexible** and **reusable** function calls.

1. Partial application: You can “fix” some arguments and reuse the function.

```
 const add10 = curriedAdd(10);
 console.log(add10(5)); // 15
```

2. Reusability & composition: Makes functions more **modular**.

3. Functional programming: Currying is a foundation for techniques like `point-free style`.

-------------------------------------------------------

# How: Use Cases for Currying?

We use currying to create different versions of a function that takes multiple arguments into several derived functions that take less arguments.

1. Partial application: You can “fix” (pre-fill) some arguments and reuse the function.

```
 const add10 = curriedAdd(10);
 console.log(add10(5)); // 15
```

Reduces duplication and improves readability.

2. Function Composition & Pipelines

Curried functions work well in functional programming, where you chain transformations.

```
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

```
 const logger = level => message => console.log(`[${level}] ${message}`);

 const info = logger("INFO");
 const error = logger("ERROR");

 info("App started");   // [INFO] App started
 error("Something went wrong"); // [ERROR] Something went wrong

```

Useful for logging, validation, or formatting.

4. Event Handling

You can pass extra parameters without creating messy inline functions.

```
 const handleClick = id => event => {
  console.log(`Button ${id} clicked!`);
 };

 document.getElementById("btn1").addEventListener("click", handleClick(1));
 document.getElementById("btn2").addEventListener("click", handleClick(2));
```

5. Working with Higher-Order Functions

Libraries like `Lodash`, `Ramda`, or functional utilities in JS often use currying to make APIs flexible.

```
 const add = a => b => a + b;

 const numbers = [1, 2, 3, 4];
 const incrementAll = numbers.map(add(1)); // partially applied
 console.log(incrementAll); // [2, 3, 4, 5]
```

Easily create "predicate factories".

-------------------------------------------------------

# Closures makes Javascript consume more ...

Memory.

Because it keeps the scope where a function is defined in memory even after the function has finished executing.

-------------------------------------------------------

# In which order are will the following be printed to the console?

frequent interview question! ⚠️

To answer correctly, you need to understand the difference between macrotask and microtask and how the event loop interacts with them.

- Macrotask: Timer Functions: setTimeout, setInterval, setImmediate, I/O: I/O, UI rendering: UI rendering

- Microtask: Promise, MutationObserver, process.nextTick

In this case, the code will be executed in the following order:

1. logger("Lunch Cooked ...") is called first and is synchronous, so it will be printed to the console first.

2. setTimeout(() => { logger("Dishes Washed ...") }, 0) is called second and will push the callback to the macrotask queue.

3. myFutureValue.then(() => { logger("Water Boiled ...") }) is called third and will push the callback to the microtask queue.

4. Once the call stack is empty, the event loop will execute the microtask queue, so logger("Water Boiled ...") will be printed to the console second.

5. Finally, once the microtask queue is empty, the event loop will move on to the next "tick" by picking the first task from the macrotask queue, so logger("Dishes Washed ...") will be printed to the console third.

-------------------------------------------------------

# What javascript pattern is used in the following code snippet?

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

An IIFE (Immediately Invoked Function Expression) used as a module declaration.

-------------------------------------------------------

# What will the following code print to the console?

```
 const firstPromise = Promise.resolve(1);
 const secondPromise = Promise.resolve(2);
 const thirdPromise = Promise.reject("A bug occurred");
 
 Promise.all([firstPromise, secondPromise, thirdPromise])
  .then((values) => {
   console.log(values);
 })
 .catch((error) => {
  console.log(error);
 });
```

A bug occurred.

Promise.all is a method that takes an Array of promises and returns a new promise that resolves when all of the promises in the array have resolved. However, if any of the promises is rejected, the promise returned will also reject, return the reason why it was rejected.

-------------------------------------------------------

# What is wrong with the subclass declaration below?

```
 // superclass
 class Vehicle {
  constructor() {
   this.type = "Vehicle";
  }
 }
 
 // subclass
 class Car extends Vehicle {
  constructor() {
   this.type = "Car";
  }
 }
 
 const car = new Car();
 console.log(car.type);
```

The subclass should call the constructor of the `superclass(parent)` using the `super()` keyword.

-------------------------------------------------------

# What is the output to the console of the following code snippet?

```
 const person = {
  name: 'John',
  sayHello: () => {
   console.log(this);
  },
 };

 person.sayHello();
```

The Global Scope.

-------------------------------------------------------

# How can we make sure that nobody can edit the properties of an object?

```
 const person = {
  name: 'John',
 };
```

Using `Object.freeze()` such as `Object.freeze(person)`.

`Object.freeze()` freezes an object, so it cannot be modified in any way.

Common Mistakes:

- `Object.seal()` protects the properties of an object from being added or deleted, but existing ones can be modified.

- An object proxy does not explicitly prevent modification of the object, but it can be used to intercept and control access to it's properties.

- `const` means that the variable cannot be redeclared or redefined, but it does not prevent the modification of the object it points to.

-------------------------------------------------------

# What creates a new type with all the properties optional?

```
 interface Table {
  legs: number;
  height: number;
  width: number;
  material: string;
 }
```

`Partial<Table>`.

https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype

-------------------------------------------------------

# What happens when typescript finds two interfaces with the same name in a codebase?

Typescript will merge the interfaces

-------------------------------------------------------

# What is the essence of closures?

The essence of closures is all about `scope`.

👉 You can think of closure as: “A function bundled together with its surrounding scope.”

1. Normally, when a function finishes, its local variables disappear.

2. Closure = when a function “remembers” the scope it was created in, even after that scope is gone.

-------------------------------------------------------

# What are the 5 most common use cases for closure?

1. Data Privacy / Encapsulation : “hide” variables so they can’t be accessed directly from outside.

2. Function Factories : create functions with “preset” values.

3. Callbacks & Event Handlers : callbacks remember the data they were created with.

4. Iterators & State Management : help functions remember their state across calls.

5. Once / Memoization : Closures can limit function execution or cache results.

-------------------------------------------------------

# How different type of functions handle the "this" object?

The behavior of `this` in JavaScript is very tricky bc it depends on how a function is called, not just where it’s defined.

Normal functions:
 - `this` depends on the call site.
 - `obj.method()` → `this = obj`.
 - `new fn()` → `this = new instance`.
 - standalone → global/undefined.
 - can be changed with .call/.apply/.bind.

Arrow functions:
 - Never bind their own `this`.
 - `this` is always "lexically inherited" from surrounding scope.
 - Great for callbacks where you don’t want `this` to change.

## 1. Normal (non-arrow) functions

Function declaration / function expression:
```
 function foo() {
  console.log(this);
 }
 foo(); // "this" = global object (window in browsers, global in Node) in non-strict mode
 // undefined in strict mode
```

When called as a method of an object:
```
 const obj = {
  x: 10,
  show: function() {
 console.log(this.x);
  }
 };
 obj.show(); // 10 (this = obj)
```

With `new` (constructor):
```
 function Person(name) {
  this.name = name;
 }
 const p = new Person("Alice");
 console.log(p.name); // Alice
```

## 2. Arrow functions


-------------------------------------------------------

# How do you find unused dependencies?

1. Use tools like `depcheck` to see if you have any unused library in your package.json

In general, webpack should be removing those with tree shaking anyhow, and dead code remove but still you want to keep it clean.

2. Use the `webpack bundle analyser` to see the JavaScript cost of adding each library to evaluate if any library should be replaced with a lighter implementation

Some libraries you will be able to easily remove, some others are harder to replace (if the codebase use them heavily).

The important thing is you make those decisions (adding a new library to the codebase for example) with performance in mind, rather than keep adding dependencies to a project (pretty common in the JS world).

-------------------------------------------------------

# What are Higher-Order Functions (HOFs) ?

A function that either:

 - Takes another function as an argument, or

 - Returns a function as its result.

Core concept in functional programming and very common in JavaScript.

1. Takes a function as an argument

```
 function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
 }
 repeat(3, console.log); // Logs: 0, 1, 2
```

2. Returns a function

```
 function multiplier(factor) {
  return function(x) {
   return x * factor;
  };
 }
 const double = multiplier(2);
 console.log(double(5)); // 10
```

-------------------------------------------------------

# Why Higher-Order Functions (HOFs) ?

They’re great at **wrapping** (decorating) other functions - also called function decoration or middleware pattern:
 1. Take an existing function.
 2. Put it inside another function.
 3. Add extra behavior before/after (or even instead of) the original function.

Essential for:
 - abstraction
 - reusability (DRY)
 - cleaner code
 - declarative code
 - modular code
 - expressive code

Especially when working with collections, async tasks, or configurable behavior.

-------------------------------------------------------

# Why: Real-Life Use-Cases for Higher-Order Functions (HOFs) ?

In real-world apps, HOFs help with:

 - React event handling: parameterized handlers.

 - API middleware such as logging, error handling, authentication - used by Express middleware

 - Reusable utilities such as debounce, and throttle.

Built-in `HOFs` in JS:

 - `map()` – transforms arrays

 - `filter()` – keeps matching items

 - `reduce()` – folds values into one

 - `forEach()` – iterates over items

 - `sort()` – sorts with a callback

-------------------------------------------------------

# How: Can you give some Code Examples?

1. **Abstraction & Reusability**

Let you extract patterns and reuse logic.

```
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

```
 const nums = [1, 2, 3, 4, 5];
 
 let evens = [];
 for (let n of nums) { if (n % 2 === 0) evens.push(n); }   // Imperative

 const evens2 = nums.filter(n => n % 2 === 0);    // Declarative with HOF

 console.log(evens2); // [2, 4]
```

Shorter and more readable.

3. **Function Composition**

You can combine small functions into bigger ones.

```
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

```
 function createComparator(key) {
  return (a, b) => a[key] > b[key] ? 1 : -1;
 }

 const users = [{name: "Alice"}, {name: "Bob"}];
 users.sort(createComparator("name"));
 console.log(users); // sorted by name
```

One HOF → many custom comparators.




-------------------------------------------------------

# Leetcode: Curry

is curry a native feature in js ?


Requirements:
 - Given a function fn, return a curried version of it
 - The curried function should accept fewer than or equal to the number of parameters as the original function
 - If enough arguments are provided, it should return the final result
 - If not enough arguments are provided, it should return another function waiting for the remaining arguments

Example behavior: If you have an original function `sum(a, b, c)` that takes 3 arguments, after currying it to csum, you can call it in multiple ways:
 1. `csum(1)(2)(3)` - one argument at a time
 2. `csum(1)(2, 3)` - one argument, then two arguments
 3. `csum(1, 2)(3)` - two arguments, then one argument
 4. `csum(1, 2, 3)` - all three arguments at once

Do you understand the problem? Really?

The above hints to the problem to be solved, turn any of the following:
 1. `csum(1)(2)(3)` - one argument at a time
 2. `csum(1)(2, 3)` - one argument, then two arguments
 3. `csum(1, 2)(3)` - two arguments, then one argument
Into the last:
 4. `csum(1, 2, 3)` - all three arguments at once


The key insight is that we need to accumulate arguments across multiple function calls until we have enough to execute the original function.

Think of it like filling a bucket - each time the curried function is called, we add more water (arguments) to the bucket. Once the bucket is full (we have all required arguments), we can pour it out (execute the original function).

To achieve this behavior, we need:
 - A way to remember previously passed arguments - This naturally suggests using closures, where inner functions can access variables from outer scopes
 - A way to check if we have enough arguments - JavaScript functions have a length property that tells us how many parameters they expect
 - A recursive structure - If we don't have enough arguments yet, we need to return another function that continues the same pattern

SOLUTION 1: ITERATIVE

```
 var curry = function (fn) {
  let nums = [];
  
  return function curried (...args) {
   nums = [...nums, ...args];
  
   if (fn. length === nums.length) {
    const res = fn(...nums);
    nums = [];
    return res;
   } else {
    return curried;
   };
 };
```

SOLUTION 2: RECURSIVE

```
 function curry(fn) {
  return function helper(...args) {
   if (args.length === fn.length){
    return fn.apply(this,args);
   }
   else {
    return (...nextArgs) => helper(...args,...nextArgs)  
   }
  }
 }
 export default curry;
```

EXPLANATION

 - `if (args.length === fn.length)`   Condition to break out of recursion
 - `return (...nextArgs) => helper(...args,...nextArgs)`   Creates and returns a new function that expects additional arguments
 - `(...nextArgs)`   Accepts additional arguments 
 - `nextArgs` is not coming from anywhere "magical." It’s just the `rest` parameter of the arrow function you return inside helper.
 - `(...args, ...moreArgs)`   Combines them with the previously collected ones 
 - helper is a recursive call curried with the combined arguments

EXAMPLES

How this curry implementation handles arguments one at a time, or in groups.

1. Example 1: **one** arg at the time

```
 function add3(a, b, c) {
  return a + b + c;
 }
 const curriedAdd3 = curry(add3);

 // below is the step-by-step of curriedAdd3(1)(2)(3)
 
 const f1 = curriedAdd3(1);
 // First call: args = [1]
 // f1 is now (...nextArgs) => helper(1, ...nextArgs)

 const f2 = f1(2);
 // Second call: args = [1,2]
 // f2 is now (...nextArgs) => helper(1,2, ...nextArgs)

 const f3 = f2(3);
 // Third call: args = [1,2,3]
 // Total number of argument condition met
 // So regular function called add3(1,2,3)
```

2. Example 2: **multiple** args at once

```
 function add3(a, b, c) {
  return a + b + c;
 }
 const curriedAdd3 = curry(add3);

 // below is the step-by-step of curriedAdd3(1,2)(3)
 
 const f1 = curriedAdd3(1,2);   // 1st call: args = [1,2] - So it returns (...moreArgs) => helper(1,2,...moreArgs)
 // First call: args = [1,2]
 // f1 is now (...nextArgs) => helper(1,2, ...nextArgs)

 const f2 = f1(3);   // 2nd call: args[3] - So it returns (...moreArgs) => helper(1,2,3)
 // Second call: args = [1,2,3]
 // Total number of argument condition met
 // So regular function called add3(1,2,3)
```

3. Example 3: **multiple** args at once in other brackets

```
 function add3(a, b, c) {
  return a + b + c;
 }
 const curriedAdd3 = curry(add3);

 // below is the step-by-step of curriedAdd3(1)(2,3)
 
 const f1 = curriedAdd3(1);   // 1st call: args = [1] - So it returns (...moreArgs) => helper(1,...moreArgs)
 // First call: args = [1]
 // f1 is now (...nextArgs) => helper(1, ...nextArgs)

 const f2 = f1(2,3);   // 2nd call: args[2,3] - So it returns (...moreArgs) => helper(1,2,3)
 // Second call: args = [1,2,3]
 // Total number of argument condition met
 // So regular function called add3(1,2,3)
```

Links
 - Leetcode Curry: Explained https://algo.monster/liteproblems/2632
 - Leetcode Curry: Explanation on Iterative and Recursive Solutions https://www.youtube.com/watch?v=pi4kqMWQXxA


