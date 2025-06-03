

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

# Design Pattern : Module Pattern In Practice

When you have a file called axios.js, we say call it the axios module.

-------------------------------------------------------

# Micro Frontends

Architectural style in frontend web development where an application is broken down into independent, deployable features.

Similar to the microservices approach in backend development.

Each micro frontend can be developed, tested, and deployed independently by different teams, promoting modularity, scalability, and faster delivery cycles. 

-------------------------------------------------------

# Singleton Pattern

TODO

-------------------------------------------------------

# Proxy Pattern

TODO

-------------------------------------------------------

# Observer Pattern

TODO

-------------------------------------------------------

# Which data structure is used to implement the undo operation in text editors?

Queue?
Stack?
Tree?
Graph?

-------------------------------------------------------

# Which of the following Architecture Style achieves the maximum decoupling between services?

Microservices Architectures ?
Event-Driven Architectures ?
Modular Monoliths ?
Client-Server Architecture ?

TODO
