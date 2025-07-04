
-------------------------------------------------------

# CSS: Flex Box vs Box Model

TODO

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

number

string

boolean

null

undefined

symbol

bigint

object

-------------------------------------------------------

# What's hoisting?

JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

Functions and Variables are hoisted.

-------------------------------------------------------

# What's variable hoisting?

TODO

-------------------------------------------------------

# What's function hoisting?

Function hoisting means that functions are moved to the top of their scope. That is,

function b() {  
   a = 10;  
   return;  
   function a() {} 
} 

will be rewritten by the interpeter to this

function b() {
  function a() {}
  a = 10;
  return;
}

-------------------------------------------------------

# What does "functions are first class objects" mean?

All the function declarations are eventually assigned to a variable.

In Javascript, functions are first class objects, just like strings and numbers. 

That means they are defined as variables and can be passed to other functions, be stored in arrays, and so on.

-------------------------------------------------------

# What's a closure in JavaScript ?

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 

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

# How can we make sure that nobody can edit the properties of an object?

Using `Object.freeze()`. 

It freezes an object, so it cannot be modified in any way.

-------------------------------------------------------

# How can we make sure that nobody can add or delete properties to an object?

Using `Object.seal()`.

It protects the properties of an object from being added or deleted but existing ones can be modified.

-------------------------------------------------------

# Typescript - True or False

The TypeScript compiler will also polyfill our code for older browsers - TRUE - TypeScript can add polyfills to support older browsers

Types in TypeScript are sets possible values data can have - TRUE - TypeScript types describe all the possible values data can have


TypeScript runs in the browser and in Node.js - FALSE - TypeScript code is delivered as JavaScript code after being compiled

Type errors are caught at runtime - FALSE - TypeScript only runs at compile or build time

Using TypeScript decreases web performance - FALSE - TypeScript does not affect performance, because types are not included in the final code

-------------------------------------------------------

# Typescript - Record utility type

TODO

-------------------------------------------------------

# Typescript - Partial utility type

TODO

-------------------------------------------------------

# What happens when typescript finds two interfaces with the same name in a codebase?

It will merge them into a single interface.

-------------------------------------------------------

# What's a a type parameter or type argument?

It is a placeholder for a type that must be specified when the function is called.

This is a common pattern in TypeScript for creating generic functions that can work with different types and having type flexibility without sacrificing type safety.

function makeCopy<T>(input: T): T[] {
  return [input, input];
}

-------------------------------------------------------

# TypeScript: What's `structural typing`?

It means that types are compared based on their structure (shape).

If two types have the same properties and types of those properties, they are considered the same type, even if they have different names.

-------------------------------------------------------

# What's `nominal typing` ?

In contrast, nominal typing compares types based on their names. In Java, for example, two classes with the same structure but different names are considered different types.

-------------------------------------------------------

# TypeScript: What's `structural typing`?

Abstract classes are classes that cannot be instantiated directly and are used as blueprint for other classes.

They can have abstract methods (methods without implementation) and concrete methods (methods with implementation).

Derived classes(from the abstract class) must implement all abstract methods of the abstract class.


-------------------------------------------------------
