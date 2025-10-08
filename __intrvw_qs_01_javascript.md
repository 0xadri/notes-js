

**TODO**

This doc is alive, hence this TODO section :)

For each topic: What / Why / When(realusecases) / How(code)
Analogy + Mental Models + Memory Tip


- Promise static methods
- What's a pure function in JavaScript?
- When do we use apply()?
- Why?
- Still relevant?
- When do we use bind()
- Why?
- Still relevant?


- diff between undefined and null
- let vs const vs var

Classes
- Classes
- Classes vs Objects
- Objects
- Classes Accessibility
- Classes Constructor
- Functions vs Objects

Primitives

Reference Types

interpreter vs compiler

ES6 modules .mjs or with "type": "module" in package.json






-------------------------------------------------------

# One-Liners Every JS Dev Should Know

-------------------------------------------------------

## JS Core Concepts

1. **Variable** – Named storage - `let`, `const`, `var`.

2. **Scope** – Defines where `variables`/`functions` are accessible - `block`, `function`, `global`.

3. **Hoisting** – JS moves `variable`/`function` **declarations** to the top of their scope.

4. **Closure** – A function that “remembers” variables from its **outer scope**.

5. **Lexical Scope** – `Scope` determined by **where code is written**, not where it's executed.

6. **Execution Context** – The environment in which code is evaluated (`this`, `variables`, `functions`).

7. **Call Stack** – Stack structure that tracks `function calls`.

8. **Event Loop** – JS mechanism that handles `async` tasks - `callbacks`, `promises`.

9. **Garbage Collection** – `Automatic memory management` by JS engine.

10. **Strict Mode** ('use strict') – Enables stricter parsing & error handling.

-------------------------------------------------------

## JS Data Types & Structures

11. **7 Primitive Types** – `string`, `number`, `bigint`, `boolean`, `null`, `undefined`,`symbol`.

12. **Reference Types** – `Object`, `Array`, `Function`, etc.

13. **NaN** (Not a Number) – Special value for invalid number operations.

14. **Falsy Values** – `false`, `0`, `""`, `null`, `undefined`, `NaN`.

15. **JSON** (JavaScript Object Notation) – Lightweight data format.

16. **Spread Operator** (`...`) – `Expands` elements `from` `arrays`, `objects`.

17. **Rest Parameters** (`...args`) – `Collects` arguments `into` an `array`.

18. **Destructuring** – `Extract` values from `arrays`/`objects`.

19. **Map** / **Set** – Modern collections with unique keys/values.

20. **Prototype** – Mechanism for inheritance in JS objects.

-------------------------------------------------------

## JS Functions & OOP

21. **First-class Functions** – Functions treated like values.

22. **Higher-order Functions** – Functions that take/return functions - Wrapper / Transformator / Decorator / Intersector.

23. **Arrow Functions** `()=>` – Shorter syntax, no `this` binding - no need for `self=this` hack in closures.

24. **Callback** – A `function` passed as an `argument`.

25. **Constructor Function** – `Function used with new` to create objects.

26. **Class** – `ES6 syntax sugar` for OOP.

27. **"This" Keyword** – Refers to the `current execution context`.

28. **Bind / Call / Apply** – Methods to control `this` context.

29. **Encapsulation** – Grouping related state and behavior.

30. **Polymorphism** – Different forms of the same method in inheritance.

-------------------------------------------------------

## JS Asynchronous & Events

31. **Callback Hell** – `Nested callbacks`, making code messy.

32. **Promise** – Object representing `async completion/failure`.

33. **Async / Await** – Syntactic sugar for `promises`.

34. **Microtask Queue** – Where `promises` are queued - faster than `macrotasks`.

35. **Macrotask Queue** – Queue for `setTimeout`, `setInterval`, etc.

36. **Event Bubbling** – Events propagate from `child` → `parent`.

37. **Event Capturing** – Events propagate from `parent` → `child`.

38. **Event Delegation** – Handling events at a `higher level` for efficiency.

39. **Debouncing** – `Delays` execution until after a `pause`.

40. **Throttling** – `Limits` execution to once per `interval`.





-------------------------------------------------------

# Getting Started

-------------------------------------------------------

## What's ES5, ES6, ES7 about?

`ES` stands for `ECMAScript`.

JavaScript is standardized by `ECMAScript`.

Each new version adds features, fixes, and improvements.

 - ES5 (2009): Strict mode, array methods, JSON.
 - ES6 (2015): Big upgrade (let/const, arrow functions, classes, modules, promises).
 - ES7+ (2016 onward): Smaller yearly updates (async/await, optional chaining, BigInt, etc.).

-------------------------------------------------------

## How are ECMAScript versions decided?

The TC39 group is responsible for evolving JavaScript (officially, ECMAScript).

TC39 = Technical Committee 39.

TC39 is part of Ecma International, the standards organization that manages the ECMAScript specification.

Members are representatives from big tech companies (Google, Microsoft, Apple, Mozilla, Intel, etc.) and independent experts.

-------------------------------------------------------

# What does ESM stand for?

ESM = ECMAScript Modules = ECMAScript 2015 (ES6) Modules

Since ECMAScript 2015 (ES6), javascript supports built-in modules through the new syntax.

JavaScript did not have built-in support for modules prior to 2015. We had to use other module systems, i.e. AMD and CommonJS

-------------------------------------------------------

## What's "use strict" ?

It is a directive that enables `strict mode`.

`Strict mode` changes the way JavaScript executes by enforcing **stricter parsing and error handling**. 

Introduced with ES5 (2009).

-------------------------------------------------------

## Why "use strict" ?

It helps catch common coding mistakes and prevents potentially unsafe actions.

Makes the code: safer, more predictable, and easier to debug.

 - `this` is not automatically bound to window - NO implicit global `this`

 - Variables must be declared

 - Assignment to read-only properties throws errors
 
 - No duplicate parameter names in functions
 
 - Reserved keywords are protected i.e. implements, interface, let, package, private

-------------------------------------------------------

## When "use strict" in real-life use-cases? 

Most of the time, "use strict"; is recommended because it makes your code safer.

Few rare cases where you might avoid it:

 1. Old JavaScript Libraries - some were written assuming `sloppy mode` (especially those pre-`ES5`, pre-2009) 
 
 2. Legacy Codebases

-------------------------------------------------------

## What is "sloppy mode" ?

`sloppy mode` = `non-strict mode` = opposite of `strict mode`

This means:

 - `this` is automatically bound to window - implicit global `this`

 - Variables do not have to be declared
 
 - Assignment to read-only properties does NOT throw errors - it fails silently

 - Duplicate parameter names are allowed in functions

 - Not reserved keywords i.e. you can call your variable `public`

-------------------------------------------------------

## Declared vs Created in JS ?

```javascript
let x;       // declared
x = 5;       // created in memory with value 5
var y;       // declared
const z = 10;   // declared and initialized
```

Declaration = A variable is declared when you introduce its name in the code using var, let, or const.

Declaration = telling JS “this name exists”.

Creation = JS allocates memory and stores the value.

Declaration:
- tells JS: “Hey, reserve a spot for this variable.”
- No memory for actual value is allocated yet (for some cases) until it’s initialized.
- Declaration alone does not mean it has a value (except for const, which must be initialized).

Creation:
- For primitives: creation = storing the value in the stack.
- For objects: creation = allocating memory in the heap + storing reference in stack.

-------------------------------------------------------

## Created vs Called in JS Functions ?

1. Created (Function Creation / Definition)

JavaScript allocates memory for it, i.e., the function object is created in memory and assigned to a reference (the function name).

```javascript
function greet() {
  return "Hello!";
}
```

2. Called (Function Invocation / Execution)

JavaScript runs the code inside the function body.

JavaScript creates an execution context for the function.

Any local variables inside the function are created in the stack.

When execution finishes, local variables are popped from the stack.

```javascript
greet(); // calling the function
```

-------------------------------------------------------

## What's hoisting?

The process whereby the interpreter appears to move the declaration of `functions`, `variables`, `classes`, or `imports` to the top of their scope, prior to execution of the code.

Functions and Variables are hoisted.

| Feature              | Hoisted?                            | Initialization? | TDZ                   | Can use before declaration? |
| -------------------- | ----------------------------------- | --------------- | --------------------- | --------------------------- |
| `var`                | Yes                                 | No              | No                    | Yes, value = undefined      |
| `let` / `const`      | Yes                                 | No              | Yes                   | No (ReferenceError)         |
| Function declaration | Yes                                 | Yes             | No                    | Yes                         |
| Function expression  | Variable only (`var`/`let`/`const`) | No              | Yes for `let`/`const` | No (depends on type)        |

-------------------------------------------------------

## What's variable hoisting?

TODO

-------------------------------------------------------

## What's function hoisting?

Function hoisting means that functions are moved to the top of their scope. That is,

```javascript
 function b() {  
   a = 10;  
   return;  
   function a() {} 
 } 
```

will be rewritten by the interpeter to this

```javascript
 function b() {
  function a() {}
  a = 10;
  return;
 }
```

-------------------------------------------------------

## Can you do multithreading in JavaScript?

No. Not natively.

JS in majority of browsers run on `V8`.

HTML5 Web Workers define a way to run script in the background. You can then execute some tasks in threads living outside the main page and thus non-impacting the drawing performance.

https://learn.microsoft.com/en-us/previous-versions/msdn10/hh549259(v=msdn.10)

NODE.JS SPECIFIC

JS in majority of browsers run on V8, which is essentially same engine used by Node.js

The very foundation of Node.js and the way it works is it has Event Loop on single thread - which is intentional. It removes any issues with synchronizations between threads and any overhead with creating/deleting threads. That is very important concept for backend as it often handles tens or hundreds of concurrent requests at once.

It makes also code very deterministic (you know that the synchronous part of the code taken by Event Loop will be executed fully before another event in Event Loop will be taken and processed)

However from the beginning - Node.js HAS thread pool. Another threads are used for I/O operations in background (like requests or handling files). You can create workers which does have their own threads if you like to.

Does the core of Node.js change? Most likely not, it would be breaking change and it would be actually against the main idea of Node.js. Also not bringing much benefits (as you can use more threads if you really want to already)

-------------------------------------------------------

## How Do You Improve Code Quality?

Stick to best practices and industry standards:

 - use `ESLint` and `Prettier`.

 - automated testing with `Jest` and `Cypress`.
 
 - considering `SonarQube` for static code analysis (automated code reviews) - to detect bugs, code smells, vulnerabilities, duplications, and security hotspots.

 - `code reviews` (manual code reviews) - points above reduce time required for "manual work"
 
 - `CI/CD`

This increases code maintainability, reduces in-production issues, and reduces rollbacks.

-------------------------------------------------------

# What is ESLint?

ESLint is a configurable JavaScript linter. It helps you find and fix problems in your JavaScript code. 

Problems can be anything from potential runtime bugs, to not following best practices, to styling issues.

-------------------------------------------------------

# What is Prettier?

TODO

-------------------------------------------------------

## How do you find unused dependencies?

1. Use tools like `depcheck` to see if you have any unused library in your package.json

In general, webpack should be removing those with tree shaking anyhow, and dead code remove but still you want to keep it clean.

2. Use the `webpack bundle analyser` to see the JavaScript cost of adding each library to evaluate if any library should be replaced with a lighter implementation

Some libraries you will be able to easily remove, some others are harder to replace (if the codebase use them heavily).

The important thing is you make those decisions (adding a new library to the codebase for example) with performance in mind, rather than keep adding dependencies to a project (pretty common in the JS world).





-------------------------------------------------------

# Scope, Context and "this"

-------------------------------------------------------

## What's the difference between Context vs Scope in Javascript?

Context and scope are related but very different concepts. People often confuse them.

**1. Scope (Lexical)**

TLDR: Scope = variable access.

Definition: Scope refers to the `current set of variables available` at a specific point in your code.

Determined by: set at write time (lexical structure) - how and where code is written (lexical environment) - cannot be changed at runtime.

```javascript
function outer() {
  let a = 10;       // function scope
  if (true) {
    let b = 20;     // block scope
    console.log(a); // 10 (accessible inside nested scope)
  }
  console.log(b);   // ReferenceError (block-scoped)
}
outer();
```

**2. Context (this)**

TLDR: Context = object owning the current execution (`this`).

Definition: Context refers to the value of `this` within a piece of code.

Determined by: set at runtime by how a function is invoked/called - it can be changed at runtime with `.call()`, `.apply()`, `.bind()`.

```javascript
 const obj = {
  value: 42,
  regularFn: function () {
    console.log(this.value);    // depends on how it's called
  },
  arrowFn: () => {
    console.log(this.value);    // arrow functions don't have their own `this`
  }
 };

 obj.regularFn();    // 42 (context is `obj`)
 obj.arrowFn();      // undefined (context comes from outer scope, usually `window` in browsers)
```

3. Comparison Table

| Aspect        | Scope (Lexical)                       | Context (`this`)                                 |
| ------------- | ------------------------------------- | ------------------------------------------------ |
| **What?**     | Variables available to use            | The object that "owns" the execution             |
| **When set?** | At **write time** (lexical structure) | At **call time** (invocation)                    |
| **Changes?**  | Cannot be changed at runtime          | Can change with `.call()`, `.apply()`, `.bind()` |
| **Example**   | `{ let x = 1; }` → `x` is scoped      | `obj.method()` → context is `obj`                |

Scope = what variables you can access.

Context = what `this` refers to when running a function.

-------------------------------------------------------

## What Are The 5 Different Scopes In JavaScript?

1. Global Scope → Variables accessible everywhere – variables declared outside any function/block.

2. Function Scope → Variables created inside functions (var).

3. Block Scope → Variables created by `{}` with `let` and `const`.

4. `Lexical Scope` (Static Scope) → how closures work - Inner functions access variables of Outer Function.

5. Module Scope (ES6 Modules) → Variables private to modules unless exported.

-------------------------------------------------------

## What's Lexical Scope?

Lexical scoping = how closures work.

Inner functions access variables of outer function.

Functions remember the scope in which they were defined, no matter where they’re later called.

-------------------------------------------------------

## Was `Lexical Scope` introduced by `arrow functions` with ES6 (2015) ?

No. Lexical scoping is in JavaScript since its very first version in 1995. But it improved `lexical scoping` for arguments and closures.

ES6 (2015) introduced new ways of declaring variables (`let` and `const`) that are `block-scoped`:

 - Lexical scoping = how closures work, and it has always been part of JavaScript. Functions remember the scope in which they were defined, no matter where they’re later called.

 - `var` (pre-ES6) = `function-scoped`, which sometimes made closures trickier (like in `for loops`).

 - `let` and `const` (ES6) = `block-scoped`, which made closures more intuitive in certain cases.

-------------------------------------------------------

## Use Cases for Lexical Scope

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

## What's the informal "Object Scope" about?

 - `Object Scope` isn’t a formal type of scope like `global`, `function`, or `block` scope.

 - `Object Scope` mainly refers to accessing and controlling `properties`/`methods` via `this` and references.

 - `regular methods` vs `arrow methods` is a hack to access different scopes via `this`
 
   - `this` inside `regular methods` points to the object.

   - `this` inside `arrow methods` points to the surrounding `lexical scope`.

 - True `private` variables in objects require `closures`.

 - Object properties are not variables—they don’t follow var/let/const scoping.

-------------------------------------------------------

## Function Scope And The Informal Object Scope

Explain these points:

 - `Function Scope`: differences between `arrow functions` VS `regular functions`

 - The `this` binding problem for `regular functions` - it's inconsistent/dynamic
 
 - Why were `arrow functions` introduced when we already had `regular functions`
 
 - The informal `object scope`, and how `arrow functions` and `regular functions` relate to it








-------------------------------------------------------

# Args, Rest, Spread

-------------------------------------------------------

## What are the difference between `rest` and `spread` syntaxes ?

`Rest` and `Spread` look the same (...) but they are kind of the opposite:

 - `Rest` = Pack = Collects values into an array.

 - `Spread` = Unpack = Expands an array or object into individual values.

-------------------------------------------------------

## Why Use `rest` vs `spread` Syntaxes ?

1. `Rest` syntax usage: in `function parameters`, `object destructuring`, or `array destructuring`.

2. `Spread` syntax usage: in `function calls`, `array literals`, or `object literals`.

-------------------------------------------------------

## Why Use `rest` vs `spread` Syntaxes get confusing when used on functions ?

Because one is for function definitions and the other is for functions calls.

Rest syntax -> function definitions (it has "{...}"), that's when we call it `rest parameter`.

Spread syntax -> function call, that's when we call it `spread syntax`.

| Feature            | Syntax                   | Used in                                       | Purpose                                             |
| ------------------ | ------------------------ | --------------------------------------------- | --------------------------------------------------- |
| **Rest parameter** | `function f(...args) {}` | Function parameter list (function definition) | Collects remaining arguments into an array          |
| **Spread syntax**  | `f(...array)`            | Function call, array/object literal           | Expands an array or object into individual elements |


| 4 function definitions    | Code Example                   | What it does                            |
| ------------------------- | ------------------------------ | --------------------------------------- |
| **Function Declaration**  | `function greet() {}`          | Declares how a function works           |
| **Function Expression**   | `const greet = function() {};` | Defines a function inside an expression |
| **Arrow Function**        | `const greet = () => {};`      | Defines a shorter function              |
| **Function Call**         | `greet();`                     | Executes a function                     |

-------------------------------------------------------

## Why Use `rest` Syntax ?

| Feature            | Example                       | What it does                                                 |
| ------------------ | ----------------------------- | ------------------------------------------------------------ |
| **Rest parameter** | `function f(...args) {}`      | Collects remaining arguments (function inputs) into an array |
| **Object rest**    | `const { a, ...rest } = obj;` | Collects remaining object properties into a new object       |
| **Array rest**     | `const [x, ...rest] = arr;`   | Collects remaining array elements into a new array           |

-------------------------------------------------------

## Examples For `rest` Parameters Usage ?

Only and only if:
 - in function parameter lists
 - in function definition (not when it's called)

```javascript
function logAll(...args) {}      // Function declaration

const logAll = function(...args) {};     // Function expression

const logAll = (...args) => {};    // Arrow function

class Logger {  log(...messages) {}  }   // Class method
```

```javascript
function greet(greeting, ...names) {     // Combine Named and Rest Parameters
   names.forEach(name => console.log(`${greeting}, ${name}!`))
}
greet("Hello", "Alice", "Bob", "Charlie");     // will print 3 lines: "Hello, Alice!" then "Hello, Bob!" then "Hello, Charlie!"
```

```javascript
function multiply(a, b) {   return a * b;    }
function logAndMultiply(...args) {      // function definition so: rest syntax, rest parameters
  console.log("Multiplying:", args);
  return multiply(...args);         // function call so: spread syntax
}
console.log(logAndMultiply(3, 5)); // 15
```

-------------------------------------------------------

## When using rest parameter (...args in function), what will be the value of `...args` if no parameters is passed?

An empty array.

```javascript
function demo(...args) {
  console.log(args);
  console.log(Array.isArray(args));
}

demo();           // Output: []  true
demo(1, 2, 3);    // Output: [1, 2, 3]  true
```

→ code above shows that `args` is always an array

-------------------------------------------------------

## How to use `rest` or `spread` syntaxes together ?

```javascript
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

## What is ...args about ?

`...args` = `rest` syntax = argument collector.

Collects all arguments passed to a `function` into a single `array`.

```javascript
 function foo(...args) {
  console.log(args);
 }
 foo(1, "a", true);    // logs: [1, "a", true]
```

-------------------------------------------------------

## Why use ...args ?

Makes functions flexible, concise, and future-proof.

 1. Flexible → Handle any number of arguments
 
 2. Cleaner → Avoid manually accessing `arguments` - directly use map, filter, reduce, etc.
 
 3. Powerful → Works well with higher-order functions - write generic functions that forward arguments to other functions
 
 4. Readable → Makes code cleaner and more readable

-------------------------------------------------------

## When, in which real-life use-case

TODO

-------------------------------------------------------

## How to use ...args ?

`...args` must be the last parameter in the function.

-------------------------------------------------------

## Advanced usage of ...args ? 

Example with nested functions with each its own ...args

In nested function, `args` is different and local. They don’t overwrite each other.

-------------------------------------------------------

## Can you use ...args in regular functions?

Yes — you can use rest parameters `...args` with regular functions AND arrow functions.

`...args` was introduced in ES6 (2015).

-------------------------------------------------------

## Before ES6, what did you use instead of ...args?

We could use the special `arguments` object.

 - `arguments` is NOT a real array (just array-like) -> you CANNOT DIRECTLY use array methods such as `.map`, `.reduce` - prior conversion required.

 - `arguments` does NOT work in arrow functions - ONLY in regular functions.

For the history:

 - `...args` came in ES6 and replaces the older `arguments` object:

 - `...args` is a real array, so you can use array methods right away.

 - `...args` works in both regular and arrow functions.

-------------------------------------------------------

## Why were arrow functions introduced?

Arrow functions were introduced in ES6 (ECMAScript 2015) primarily to:

 - Shorter and Cleaner syntax.

 - Fix the common `this` binding problem.

 - Improve `lexical scoping` for arguments and closures.

 - Encourage functional programming patterns.

 - Prevent misuse as constructors.

### Fix the common `this` binding problem

One of the most common pitfalls in JavaScript was that `this` was inconsistent/dynamic. It changed depending on how a function was called:

```javascript
 function Person() {
  this.age = 0;

  setInterval(function() {
   this.age++;  // "this" is not the Person object
  }, 1000);
 }
```

Solutions before ES6 required hacks: `var self = this;` or `bind(this)`.

```javascript
 const person = {
  name: "Alice",
  greet: function() {
   const self = this;         // `self = this` hack
   setTimeout(function() {
    console.log(self.name);   // prints "Alice"
   }, 1000);
  }
 };
```

Arrow functions capture `this` from their surrounding scope, so you don’t need extra hacks:

```javascript
 function Person() {
  this.age = 0;

  setInterval(() => {
   this.age++;  // 'this' is the Person instance
  }, 1000);
 }
```










-------------------------------------------------------

# Implicit Objects and Variables

-------------------------------------------------------

# What are Implicit Objects and Variables ?

This refers to the automatically available objects and variables that the JavaScript runtime provides, without the programmer explicitly declaring or importing them.

These come from the execution context (`global`, `function`, or `block` scope), and they depend on where and how the code is executed.

Examples:

| Category         | Implicit Object / Variable         | Scope / Purpose                       |
| ---------------- | ---------------------------------- | ------------------------------------- |
| Global Object    | `window` / `global` / `globalThis` | Global environment container          |
| Function Context | `this`                             | Refers to current execution context   |
| Function Context | `arguments`                        | Holds passed arguments (non-arrow)    |
| Variable         | Undeclared variables               | Implicitly global (discouraged)       |
| Return Value     | `undefined`                        | Default return when none is specified |

-------------------------------------------------------

# Implicit (Automatically Available) Objects

1. `window` / `global` / `globalThis` : global objects that act as containers for all global variables and functions.

 - In browsers: The global object is `window`. `console.log(window === this);` // true in global scope

 - In Node.js: The global object is `global`. `console.log(global === this);` // false in Node's module scope

 - Universal (ES2020+): `globalThis` works in any JS environment.

2. `this`: implicit object reference automatically available inside `functions` and `objects`.

3. `arguments`: inside any `non-arrow function`, contains all passed parameters. Note that `args` is preferred in modern js bc cleaner, safer, and works everywhere.









-------------------------------------------------------

# Memory, Reference Types and Primitives

-------------------------------------------------------

## How does the memory work in JavaScript ?

JavaScript uses two main memory regions:

1. Stack → Fast, small storage for simple data (`primitives`).

2. Heap → Large, flexible storage for complex data (`objects`, `arrays`, `functions`).

Reference types (objects, arrays, functions) live in the `heap`, and variables store a pointer (reference) to them in the `stack`.

That’s why when you copy a reference type, you don’t copy the value itself, but the reference (so changes affect both).

-------------------------------------------------------

## Code example illustrating how the memory work in JavaScript ?

```javascript
let num = 42;                   // primitive → stack
let obj1 = { name: "Alice" };   // reference → stack holds pointer, heap stores actual object
let obj2 = obj1;
obj2.name = "Bob";
console.log(obj1.name);      // Output: "Bob"
```

Memory model:

```javascript
Stack:
num → 42
obj1 → (ref) 0x001
obj2 → (ref) 0x001

Heap:
0x001 → { name: "Bob" }
```

-------------------------------------------------------

## Are Stack and Heap are different type of hardware ?

This is a very common confusion.

The stack and heap in programming are NOT different pieces of physical hardware.

Conceptual differences, not hardware differences.

They are two regions of memory managed differently by the runtime (in our case, the JavaScript engine, like V8 in Chrome).

Stack:

- Think of it as a neat pile of plates — last in, first out.

- Stores simple, fixed-size data (like numbers, booleans, and references to objects).

- Memory is automatically managed — when a function ends, all its local variables are popped off.

- Very fast because it’s just pushing/popping in a known order.

Heap:

- Think of it as a messy storage room — you can put things anywhere, but need to keep track of where.

- Stores complex, dynamic data (like objects, arrays, functions).

- Memory allocation is flexible but slower than stack.

- The JavaScript garbage collector cleans unused objects.

-------------------------------------------------------

## Which Data Is Of Primitive Types?

Primitive type is data that is not an object.

SEVEN primitive types:
- `number`
- `string`
- `boolean`
- `null`
- `undefined`
- `symbol`
- `bigint`

-------------------------------------------------------

## What are Reference Types?

`All non-primitive types` are reference types, with `Object being the root` -> All objects are reference types -> And all reference types are objects.

Main Reference Types:

| Category | Example         | Notes                                     |
| -------- | --------------- | ----------------------------------------- |
| Object   | `{}`            | Base for most structures                  |
| Array    | `[]`            | Ordered list                              |
| Function | `function(){}`  | Callable object                           |
| Date     | `new Date()`    | Date/time                                 |
| RegExp   | `/pattern/`     | String matching                           |
| Map      | `new Map()`     | Key–value pairs, keys can be any type     |
| Set      | `new Set()`     | Unique values                             |
| WeakMap  | `new WeakMap()` | Keys must be objects, garbage-collectable |
| WeakSet  | `new WeakSet()` | Stores objects only, garbage-collectable  |
| Error    | `new Error()`   | Error handling                            |

-------------------------------------------------------

## JavaScript Language Is Pass-By-Value Or Pass-By-Reference ?

JavaScript is a **Pass-By-Value** for primitives, and **Pass-By-Reference** for reference types.

When a `function` is called, a **copy** of the `value` of each `argument` is passed to the `function`, NOT the original `argument`. 

This means that the `function` **cannot** modify the original arguments. Modifications done to any `argument` the `function` received only have effect inside the `function`.

1. `Primitives` → Passed by `Value` → stored in Stack

2. `Objects` → Passed by Reference to Value (reference itself is copied) → Object stored in Heap, Reference stored in Stack.

JavaScript always passes function arguments by `value`.

But when that `value` is a `reference` (for `objects`/`arrays`/`functions`), the reference itself is copied, so both variables point to the **same** underlying object.

-------------------------------------------------------

## What is a Symbol?

Primitive data types introduced in ES6.

A Symbol is a `unique` and `immutable` identifier.

Even if two symbols have the same description, they are always different values.

-------------------------------------------------------

## Why use Symbol?

Often used as object property keys to:
- avoid naming conflicts
- create hidden properties

Symbol is often used to define unique constants.

JavaScript also uses some well-known symbols internally (Symbol.iterator, Symbol.toStringTag, etc.).

-------------------------------------------------------

## How to use Symbol with code examples?

Example 1 – Uniqueness

```javascript
const a = Symbol("id");
const b = Symbol("id");
console.log(a === b);    // false (even if descriptions are the same)
```

Example 2 – Using as Object Keys

```javascript
// Define a symbol for private/hidden data
const secretId = Symbol("secretId");
const user = {
  name: "Alice",
  age: 25,
  [secretId]: 98765  // hidden property
};

// Normal access
console.log(user.name);       // Output: "Alice"
console.log(user.age);        // Output: 25
console.log(user.secretId);   // Output: undefined

// Access using the symbol
console.log(user[secretId]);  // Output: 98765

// Iterating over keys/properties
for (let key in user) {       // Output: name, age
  console.log(key);
}

console.log(Object.getOwnPropertySymbols(user));    // Output: [ Symbol(secretId) ]
```




-------------------------------------------------------

# Browser API

-------------------------------------------------------

## Browser API: familiar with different authentication and storage mechanisms present in the browser?

Cookies, local storage, and session storage.

-------------------------------------------------------

## Browser API: familiar with the History API?

Yes, used by all modern frameworks to mimic HTTP-like routing in SPAs (Single Page Applications). 








-------------------------------------------------------

# Functions

-------------------------------------------------------

## What does "functions are first class objects" mean?

All the function declarations are eventually `assigned to a variable`.

That means they can be `passed to other functions`, be `stored in arrays`, and so on.

-------------------------------------------------------

## What is `func.apply(this, args)` ?

It uses the `Function.prototype.apply()` method to call a function (`func`) with:

 - `this` → the value that will be bound as this inside `func`.

 - `args` → an array (or array-like object) of arguments to pass to func

```javascript
 function greet(greeting, name) {
  console.log(greeting + ', ' + name);
 }
 const args = ['Hello', 'Alice'];
 greet.apply(this, args);   // Output: "Hello, Alice"
```

-------------------------------------------------------

## When to use `Function.prototype.apply()` method?

If you want to control what `this` points to inside the function.

```javascript
 // Example without .apply()
 function showName() { console.log(this.name); }
 const person1 = { name: "Alice" };
 const person2 = { name: "Bob" };

 person1.say = showName; // Assign function

 person1.say(); // "Alice"
 showName();    // undefined (or window/global in non-strict mode)
```

```javascript
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

## Difference between `Function.prototype.apply()` and `Function.prototype.call()` methods?

`.apply(thisArg, argsArray)` → calls the function with a chosen `this` and arguments.

`.call(thisArg, ...args)` → same as `.apply()`, but arguments are passed individually.

-------------------------------------------------------

## Difference between `Function.prototype.bind()` and `call()` and `apply()` methods?

`call` / `apply` → when you want to invoke the function right now with a specific `this`.

`bind` → when you want a function you can call later, but with `this` (and maybe some `args`) already “locked in”.

-------------------------------------------------------

## What and How to use `Function.prototype.bind` ?

`bind` → used to `create a new function` with a `fixed this value`.

```javascript
const obj = { x: 10 };
function printX() { console.log(this.x); }   // function definition

const boundFn = printX.bind(obj);    // bind "obj" to the "this" of "printX" function (hence object)
boundFn();    // output: 10
```

-------------------------------------------------------

## What javascript pattern is used in the following code snippet?

```javascript
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

# Classes, Prototypes, Objects

-------------------------------------------------------

## What are prototypes in javascript?

Every JavaScript object has an internal link to another object called its prototype.

That prototype object can have its own prototype, and so on, forming a prototype chain.

When you try to access a property on an object, JavaScript looks for it:

 1. On the object itself.

 2. If not found, it looks up the prototype chain until it reaches Object.prototype.


 - `ES6` `class` is syntactic sugar over prototype-based inheritance.

 - Objects inherit from other objects via prototypes.

 - Constructor functions use `prototype` for shared methods.

 - `Object.create(proto)` creates a new object with the given prototype.
 
 - An object’s internal Prototype is accessible via `__proto__`

-------------------------------------------------------

## How: Code Example for a Basic Prototype

```javascript
 const person = {
  greet() {
    console.log("Hello!");
  }
 };

 const user = Object.create(person);   // user’s prototype is person
 user.greet();   // Inherited from person → "Hello!"
```

Here, `user` doesn’t have `greet`, but it inherits it from its `prototype` (`person`).

-------------------------------------------------------

## Why Use Function.prototype?

Because we want all objects created by the same constructor to share methods instead of duplicating them.

```javascript
 Person.prototype.sayHello = function() {
  console.log("Hi, I'm " + this.name);
 };

 const alice = new Person("Alice");
 const bob = new Person("Bob");

 alice.sayHello(); // "Hi, I'm Alice"
 bob.sayHello();   // "Hi, I'm Bob"
```

Both alice and bob share the same `sayHello` function on `Person.prototype`.

This saves memory and allows consistent behavior across instances.

Prototype chain for an object like alice created from Person:

- alice → inherits from `Person.prototype`

- `Person.prototype` → inherits from `Object.prototype`

- `Object.prototype` → ends with `null`

-------------------------------------------------------

## Constructor Functions and Prototypes

A constructor function in JavaScript is just a normal function.

```javascript
 function Person(name) {
  this.name = name;
 }
```

`const alice = new Person("Alice");` - But when you call it with new, special things happen.

JavaScript does these steps under the hood:

1. Create a new empty object

2. Set the prototype of that object to the function’s prototype property.

`obj.__proto__ = Person.prototype;`

3. Call the constructor function with this bound to the new object:

`Person.call(obj, "Alice");`

4. Return the object unless the function explicitly returns something else.

`return obj;`

-------------------------------------------------------

## What is a class in javascript?

Think of it as a template for objects.

It's a blueprint for creating objects.

Encapsulates:
 - data (properties)
 - behavior (methods)

ES6 introduced the `class` keyword for cleaner syntax.

Before ES6, JavaScript used functions and prototypes for object creation. 

-------------------------------------------------------

## Code example for classes in javascript ?

```javascript
class Person {
  constructor(name, age) {
    this.name = name; // property
    this.age = age;   // property
  }

  greet() {           // method
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Creating an instance
const person1 = new Person('Alice', 25);
person1.greet(); // Hello, my name is Alice and I am 25 years old.
```

 - class Person { ... } → defines the class.
 - constructor → special method called when you create a new object.
 - this → refers to the instance being created.
 - greet() → a method attached to the class.

-------------------------------------------------------

## What about class inheritance in javascript?

A class can `inherit` from another class by using `extends`.

```javascript
 class Person {
  constructor(name, age) {
    this.name = name;      // property
    this.age = age;        // property
  }

  greet() {                // method
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
 }

 class Employee extends Person {      // `extends` sets up inheritance.
  constructor(name, age, position) {
    super(name, age);     // call parent constructor
    this.position = position;
  }

  work() {
    console.log(`${this.name} is working as a ${this.position}`);
  }
 }

 const emp1 = new Employee('Bob', 30, 'Developer');
 emp1.greet(); // Hello, my name is Bob and I am 30 years old.
 emp1.work();  // Bob is working as a Developer
```

 - `extends` → sets up inheritance.
 - `super(...)` → calls the parent class constructor.
 - Child class can add new methods or override parent methods.

-------------------------------------------------------

## What is wrong with the subclass declaration below?

```javascript
 class Vehicle {   // superclass
  constructor() {
   this.type = "Vehicle";
  }
 }
 
 class Car extends Vehicle {    // subclass
  constructor() {
   this.type = "Car";
  }
 }
 
 const car = new Car();
 console.log(car.type);
```

The subclass should call the constructor of the `superclass(parent)` using the `super()` keyword.

-------------------------------------------------------

## What are Object Methods?

A method is just a function stored as a property of an object.

Any property whose value is a function is essentially a method.

Access it using dot notation `obj.key` or bracket notation `obj["key"]`.

-------------------------------------------------------

## How do you iterate over properties of an object?

1. Use the `for let key in` syntax

```javascript
 for (let key in myObject){
  const propVal = myObject[key]
 }
```

2. `Object.keys` method - keys only

```javascript
const keysArray = Object.keys(objectOne)
...
```

3. `Object.values` method - values only

```javascript
const valsArray = Object.keys(objectOne)
...
```

4. `Object.entries` method - keys and values

```javascript
const obj = { a: 1, b: 2, c: 3 };

Object.entries(obj).forEach(([key, value]) => {
  console.log(key, value);
});
```

-------------------------------------------------------

## How can we make sure that nobody can edit the properties of an object?

Using `Object.freeze()`. 

It freezes an object, so it cannot be modified in any way.

-------------------------------------------------------

## How can we make sure that nobody can add or delete properties to an object?

Using `Object.seal()`.

It protects the properties of an object from being added or deleted but existing ones can be modified.

-------------------------------------------------------

## How can we make sure that nobody can edit the properties of an object?

```javascript
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

# "this", Regular Functions, Arrow Functions

-------------------------------------------------------

## How different type of functions handle the "this" object?

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

-------------------------------------------------------

## Ouput for code snippet with apply() ?


```javascript
const numbers = [1, 1, 1];

function sumThis(a, b, c) {
  return this + a + b + c;
}

console.log(sumThis.apply(5, numbers));
```

-------------------------------------------------------

## The global "this", what is the output to the console of the following snippet?

```javascript
 console.log(this); 
```

Prints the value of `this` to the console, in the global scope
- In a `browser`: `this` refers to the `window` object.
- In `Node.js`: `this` refers to `{} (an empty object)` because the global scope in modules is not the same as the global object.

Output:
- Browser -> Window {...}
- Node.js -> {}

-------------------------------------------------------

## Normal functions and the "this" object?

Function declaration / function expression:

```javascript
 function foo() {
  console.log(this);
 }
 foo(); 
```

Output:
- "this" = global object (window in browsers, global in Node) in non-strict mode
- "this" = undefined in strict mode

-------------------------------------------------------

## Normal functions with `new` (constructor), the "this" object?

A constructor function in JavaScript is just a normal function.

```javascript
 function Person(name) {
  this.name = name;
 }
 const p = new Person("Alice");
 console.log(p.name); 
```

Output: "Alice".

-------------------------------------------------------

## Normal Function with Object method: what is the output to the console?

```javascript
const obj = {
  name: "John",
  normalFunc: function() {
    console.log(this.name);
  }
};
obj.normalFunc();
```

For an object method with normal function, `this` refers to the object (`obj`).

Output: "John".

-------------------------------------------------------

## Object method with Arrow Function and "this": what is the output to the console?

```javascript
const person = {
  name: 'John',
  sayHello: () => {
   console.log(this);
  },
 };
person.sayHello();
```

Arrow functions don’t have their own `this`, they inherit it from the surrounding lexical scope: the global `this` (not person!)

Output:
- Browser -> Window {...}
- Node.js -> {}

-------------------------------------------------------

## Object methods with Normal Function and Arrow Function: what is the output to the console?

```javascript
const obj = {
  name: "ChatGPT",
  normalFunc: function() {
    console.log("Normal:", this); // obj
  },
  arrowFunc: () => {
    console.log("Arrow:", this);  // global object or undefined
  }
};

obj.normalFunc();
obj.arrowFunc();
```

Output:
`Normal: obj`
`Arrow: undefined` (strict mode) or `Arrow: window` (browser sloppy mode)

When to use what?
- Use `normal functions` for object methods if you want `this` to refer to the `object`.
- Use `arrow functions` when you want to preserve the `this` from the outer scope (e.g., inside a setTimeout or callback in a class method).

-------------------------------------------------------

## Class methods with Normal Function and Arrow Function: what is the output to the console?

```javascript
 class User {
  constructor(name) {
    this.name = name;
  }

  // Normal method
  normalMethod() {
    console.log("Normal:", this.name);
  }

  // Arrow function method
  arrowMethod = () => {
    console.log("Arrow:", this.name);
  }
 }

 const user = new User("Alice");

 // Direct call
 user.normalMethod(); // "Normal: Alice"
 user.arrowMethod();  // "Arrow: Alice"

 // Extract methods
 const normal = user.normalMethod;
 const arrow = user.arrowMethod;

 normal();   // Error: Cannot read property 'name' of undefined ("this" is lost)
 arrow();    // "Arrow: Alice" (this is bound to the instance)
```

1. Normal method
   - Lives on the prototype.
   - Its `this` depends on how it’s called.
   - If you detach it (const normal = user.normalMethod), `this` is no longer user — it becomes undefined (in strict mode).

2. Arrow method
   - Created as a property on the instance.
   - Lexically binds `this` at the moment the instance is created.
   - Even if you detach it, it still points to the correct `this` (the instance).

When to use what?
- Use normal methods most of the time (less memory overhead, fits standard OO style).
- Use arrow functions in classes when you need to keep the method as a callback (e.g., event listeners, async code, React components).

-------------------------------------------------------

## Practical example with setTimeout: Normal Function and Arrow Function

```javascript
class Timer {
  constructor() {
    this.seconds = 0;
  }

  // Normal function method
  startNormal() {
    setTimeout(function () {
      this.seconds++;
      console.log("Normal:", this.seconds);
    }, 1000);
  }

  // Arrow function method
  startArrow() {
    setTimeout(() => {
      this.seconds++;
      console.log("Arrow:", this.seconds);
    }, 1000);
  }
}

const t = new Timer();

t.startNormal();
t.startArrow();  
```

Output:
t.startNormal(); // TypeError (this is undefined inside the callback)
t.startArrow();  // "Arrow: 1"

Normal function: its this is not the class instance. It's the global scope.
Arrow function: inherits this from its enclosing scope (startArrow method), it's bound to the class instance (t). So it correctly updates `t.seconds`.

This is a classic case where `arrow functions` save you from this headaches.

-------------------------------------------------------

## Class methods with Normal Function using self and bind: what is the output ?

TODO

-------------------------------------------------------





-------------------------------------------------------

# Asynchronous & Events: Callbacks & Promises

-------------------------------------------------------

## TODO

34. **Microtask Queue** – Where `promises` are queued - faster than `macrotasks`.
only promises ???

35. **Macrotask Queue** – Queue for `setTimeout`, `setInterval`, etc.
only callbacks???

36. **Event Bubbling** – Events propagate from `child` → `parent`.
only callbacks???

37. **Event Capturing** – Events propagate from `parent` → `child`.
only callbacks???

38. **Event Delegation** – Handling events at a `higher level` for efficiency.
only callbacks???

try/catch/finally
throw

.then() and .catch() chaining instead of nesting

Promises

32. **Promise** – Object representing `async completion/failure`.

js : promise, syntax for handling resolve / reject

33. **Async / Await** – Syntactic sugar for `promises`.

34. **Microtask Queue** – Where `promises` are queued - faster than `macrotasks`.

-------------------------------------------------------

## Can you explain callbacks in human language?

A **callback** is just a function passed into another function, so it can call it later when it’s ready.

A piece of code that calls another piece of code once it has finished executing.

-------------------------------------------------------

## What's Callback Hell?

TLDR: `Nested callbacks`, making code messy.

Example???

-------------------------------------------------------

## Can you use try/catch/finally on callbacks?

No.

Why? Because by the time the callback runs, the try/catch block has already finished executing.

```javascript
try {
  setTimeout(() => {
    throw new Error("Oops");
  }, 100);
} catch (err) {
  // This won't catch the error
  console.error("Caught:", err);
}
```

-------------------------------------------------------

## How Do You Use `try/catch/finally block` ?

`try{}` → risky operation handling - `may throw error` - code blocks executes fully or partially - partially if error thrown

`catch(){}` → error handling - i.e. log error - code block may execute, if and only if an error is thrown

`finally{}` → cleanup handling - any additional tasks - code block always executes

-------------------------------------------------------

## Differences And Connection Between Promise vs Callback?

Callback is connected to Promise because **callback is legacy js**, it is the old way of handling asynchronous code.

Promise: an object that represents a value that may be available now, later, or never.

 - Provides chaining - `.then().then().catch()`, making sequences of async calls cleaner.

 - Cleaner error handling, centralized with `.catch()`.

 - Works seamlessly with `async`/`await`, making `async` code look synchronous.

Improvement List:

| Feature        | Callback                         | Promise                               |
| -------------- | -------------------------------- | ------------------------------------- |
| Syntax         | Function passed into another     | Object with `.then()`, `.catch()`     |
| Readability    | Can lead to "callback hell"      | More structured & chainable           |
| Error handling | Must be handled manually         | Built-in via `.catch()`               |
| Async flow     | Nested functions                 | Chaining or `async/await`             |
| Multiple tasks | Hard to manage                   | Promise helpers (`all`, `race`, etc.) |
| Modern usage   | Legacy / still used in Node APIs | Standard in modern JS                 |

-------------------------------------------------------

## What Is A Promise?

An **object** that represents the **eventual result of an asynchronous operation**.

It acts like a placeholder for a value that will be available now, later, or never.

-------------------------------------------------------

## What Are Promise States?

3 states:

 1. `pending` → initial state (still waiting).

 2. `resolved` aka `fulfilled` → operation completed successfully → `resolve(value)`.

 3. `rejected` → operation failed → `reject(error)`.

Once `resolved` or `rejected` it won’t change again.


-------------

## What are the two key moments of a promise lifecycle?

1. Creation
2. Handling

-------------------------------------------------------

## Creation: What's The Code To Create A Promise With `new()` Syntax ?

```javascript
const myPromise = new Promise((resolve, reject) => {
  const success = true;   // Do some async work, set to boolean depending on condition
  if (success) {
    resolve("Operation was successful!");    // resolve(value) → sends a success value
  } else {
    reject("Something went wrong.");        // reject(error) → sends an error value
  }
});
```

TLDR:
- `new Promise((resolve, reject) => { ... }` → creates Promise object with `resolve` and `reject` as callbacks
- resolve(value) → sends a success value
- reject(error) → sends an error value

-------------------------------------------------------

## Handling: What Are The Different Ways To Handle A Promise?

4 ways to handle a Promise:
- Method Chaining → `.then()/.catch()/.finally()` (classic way?? )
- `async/await` syntax + `try/catch/finally` block (modern way?? )
- Attaching `.catch()` on the `async function call`
- `Top-level await` (ES2022+) → `await without async`, without wrapping in a function

5th way...to handle **multiple Promises at once**:
- Promise utilities → `Promise.all`, `Promise.race`, etc.

TODO: break down each in separate question ???

-------------------------------------------------------

## Can you call all of .then(), .catch(), and .finally() handlers ?

Yes, informally, you can.

But the handlers are the callback functions inside these methods.

```javascript
promise
  .then(onFulfilled, onRejected)
  .catch(onRejected)
  .finally(onFinally);
```

 - onFulfilled → handles the fulfilled result
 - onRejected → handles a rejection
 - onFinally → handles cleanup (runs regardless of outcome)


-------------------------------------------------------

## `Promise Handling` With `Method Chaining` Syntax: Code Example ?

TLDR:
- `.then()` → for success
- `.catch()` → for errors
- `.finally()` → for cleanup

```javascript
myPromise
  .then(result => {
    console.log("Resolved:", result); // runs if resolve() is called
  })
  .catch(error => {
    console.error("Rejected:", error); // runs if reject() is called
  })
  .finally(() => {
    console.log("Always runs, success or failure");
  });
```

-------------------------------------------------------

## `Promise Handling` With `Method Chaining`: Code Example Handling 2 Promises ?

TLDR:
- `.then()` → for success
- `.catch()` → for errors
- `.finally()` → for cleanup

```javascript
fetch("/api/data")
  .then(res => res.json())     // 1st promise
  .then(data => console.log(data))     // 2nd promise
  .catch(err => console.error("Error handled here:", err))    // one error handler
  .finally(() => console.log("Always runs"));    // one finally handler
```

-------------------------------------------------------

## `Promise Handling` With `async/await`: Code Example ?

Good Practice:
 - Always wrap your await in a try/catch/finally block

```javascript
async function handlePromise() {
  try {
    const result = await myPromise;     // waits until resolved
    console.log("Resolved:", result);
  } catch (error) {
    console.error("Rejected:", error);
  } finally {
    console.log("Always runs");
  }
}

handlePromise();
```

-------------------------------------------------------

## `Promise Handling` With `async/await`: Code Example Handling 2 Promises ?

Good Practice:
 - Always wrap your await in a try/catch/finally block

```javascript
async function getData() {
  try {
    const res = await fetch("/api/data");     // typical fetch api call
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Caught error:", err);
  } finally {
    console.log("Always runs");
  }
}
getData();
```

-------------------------------------------------------

## Is This OK To Use `async/await` Syntax Without `try/catch/finally block` ?

TLDR:
 - No. You can, but not ok for error handling.
 - You’ll get an unhandled rejection.
 - **This may crash your program** in modern runtimes.

```javascript
async function run() {
  const result = await Promise.reject("Oops!");     // Rejects
  console.log(result);      // This will never run !
}
run();          // UnhandledPromiseRejectionWarning (in Node.js) !
```

Good Practice:
 - Always wrap your await in a try/catch/finally block

-------------------------------------------------------

## When were `try/catch/finally block` and `promise chaining` and `async/await` introduced?

1999 (ES3) → `try/catch/finally block` → `try{...} catch(e){...} finally{...}` for **synchronous code** only.

2015 (ES6) → Promise method chaining (v1) → `.then().catch()`

2017 (ES8) → `async/await` intro'd → `try/catch/finally block` and `async/await` combined allow for **asynchronous code** (in `await expressions`).

ES2018 → Promise method chaining (v2) → `.finally()`

-------------------------------------------------------

## What's the difference between `Promise Chaining` and `try/catch/finally block` ?

- Promise **Chaining** → method-based style - uses methods `.then()`, `.catch()`, `.finally()`

- try/catch/finally **Block** → language syntax - uses keywords, not methods

Pro and Cons ???

how do `Promise Chaining` and `try/catch/finally block` and `async/await` relate to one another?

-------------------------------------------------------

## What will the following function return?

```javascript
 async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
 }
```

The function will return a Promise object. When the promise object resolves, the data will be returned.

Important: **async functions always return a Promise** that resolves to the value of the return statement.

Note: you'll have to add a try/catch block for error handling outside the function.

-------------------------------------------------------

## What Happens When Returning Anything Inside A Promise's .then() or .catch() ?

Warning: WEIRD one. But easy one.

It is passed to the next handler in the chain.

### Returning Simple Value In then()

It’s automatically `wrapped in a resolved Promise` for the next handler:

```javascript
Promise.resolve(1)
  .then(x => x + 1)     // returns 2 → next .then receives 2
  .then(y => console.log(y));     // logs 2
```

### Returning a Promise In then()

The chain waits for it to settle, and passes along its result:

```javascript
Promise.resolve(1)
  .then(x => Promise.resolve(x + 1))       // returns Promise(2)
  .then(y => console.log(y));        // logs 2
```

### Returning Simple Value In catch()

```javascript
Promise.reject(22)
  .catch((x) => x + 1)     // returns 23 → next .then receives 23
  .then((y) => console.log(y));     // logs 23
```

### Returning Simple Values In then() and catch()

Combining the previous cases.

```javascript
Promise.reject(44)
  .catch((x) => x + 1) // returns 45 → next .then receives 45
  .then((y) => y + 1) // returns 46 → next .then receives 46
  .then((z) => console.log(z)); // logs 46
```

### Returning Nothing In then()

```javascript
Promise.resolve(11)
  .then((x) => {
    console.log(x);
    // no return
  }) // returns undefined → next .then receives undefined
  .then((y) => console.log(y)); // logs undefined
```


  
  
-------------------------------------------------------

## Returning A Value In `catch()`, What Will Be The Output ?

```javascript
function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) resolve("success");
    else reject("error");
  });
}

job(false)
  .then(function (data) {   // 1st then()
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
    return "yow";
  })
  .then(function (data) {   // 2nd then()
    console.log(data);
  });
```

Returns "yow" → this resolves the chain AGAIN (it does NOT rethrow). So it goes into the next then() and passes its argument

Output:
error
yow


-------------------------------------------------------

## What's Promise.all ?

TODO

-------------------------------------------------------

## Why Promise.all ?

TODO

-------------------------------------------------------

## Real-Life Use-Cases Promise.all ?

TODO

-------------------------------------------------------

## `Promise.all`: What will be the console output?

```javascript
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

`Promise.all` is a method that takes an Array of promises and returns a new promise that resolves when all of the promises in the array have resolved. 

However, if any of the promises is rejected, the promise returned will also reject, return the reason why it was rejected.

-------------------------------------------------------

## Macrotask vs Microtask and how the `event loop` interacts with them?

TLDR: call stack -> microtask queue -> microtask queue.

Macrotask: Timer Functions: `setTimeout`, `setInterval`, `setImmediate`, I/O: `I/O`, UI rendering: `UI rendering`

Microtask: `Promise`, `MutationObserver`, `process.nextTick`

Order of execution: 
1. call stack
2. once the call stack is empty, the event loop will execute the microtask queue.
3. once the microtask queue is empty, the event loop will move on to the next "tick" by picking the first task from the macrotask queue

-------------------------------------------------------

## In which order will the following be printed to the console?

frequent interview question! ⚠️

```javascript
function cookLunch() {
    const myFutureValue = new Promise((resolve, reject) => {
        resolve(true);
    });

    myFutureValue.then(() => {
        logger("Water Boiled ...");
    });

    setTimeout(() => {
        logger("Dishes Washed ...");
    }, 0);
    
    logger("Lunch Cooked ...");
}
cookLunch();
```

To answer correctly, you need to understand the difference between `macrotask` and `microtask` and how the event loop interacts with them.

- Macrotask: Timer Functions: `setTimeout`, `setInterval`, `setImmediate`, I/O: `I/O`, UI rendering: `UI rendering`

- Microtask: `Promise`, `MutationObserver`, `process.nextTick`

In this case, the code will be executed in the following order:

1. `logger("Lunch Cooked ...")` is called first and is synchronous, so it will be printed to the console first.

2. `setTimeout(() => { logger("Dishes Washed ...") }, 0)` is called second and will push the callback to the `macrotask queue`.

3. `myFutureValue.then(() => { logger("Water Boiled ...") })` is called third and will push the callback to the `microtask queue`.

4. Once the call stack is empty, the event loop will execute the microtask queue, so `logger("Water Boiled ...")` will be printed to the console second.

5. Finally, once the microtask queue is empty, the event loop will move on to the next "tick" by picking the first task from the macrotask queue, so logger("Dishes Washed ...") will be printed to the console third.

Answer:

Lunch Cooked ..., Water Boiled ..., Dishes Washed ...
