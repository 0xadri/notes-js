

//-------------------------------------------------------//

# Design Pattern : Module Pattern —

Problem Statement:
We want to implement the Module Pattern to better organize our source code into components.
The concept of a “module” is not fully supported in many common programming languages.
Javascript had incomplete support for the concept until 2015 with ES6.

Solution:
Use the module software design pattern.
It provides the features and syntactic structure defined by the modular programming paradigm to programming languages that have incomplete support for the concept.

Module Pattern High Level Def:
The Module pattern can be considered a creational pattern and a structural pattern. 
It manages the creation and organization of other elements, and groups them as the structural pattern does.

//-------------------------------------------------------//

# Design Pattern : Module Pattern Implementations —

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

//-------------------------------------------------------//

# Design Pattern : Module Pattern In Practice —

When you have a file called axios.js, we say call it the axios module.

