






-------------------------------------------------------

# Big-O Notation

-------------------------------------------------------

## What is Big-O Notation?

It is a way to describe the time complexity or space complexity of an algorithm. 

It essentially tells you how the algorithm's performance (or memory usage) changes as the size of the input data grows. 

In other words, it helps you understand how efficiently an algorithm scales with larger inputs.

-------------------------------------------------------

## Big O Notation / Big(O) Complexity Analysis

`Big O Notation` is a way to describe how the performance (time and space) of an algorithm scales with the size of its input (dimensions of the input and the number of operations).

It gives an upper bound on the time or memory used, in the worst case, as the input size grows.

Two Big(O) dimensions: `Time complexity` and `Space complexity`.

1. Time complexity 

Time = Operations = Reads.

How many **operations** the algorithm performs - later translated to **CPU cycles**.

For example, iterating through an array once has O(N) time complexity because we will do N operations to go through each element once, where N is the array's length.

2. Space complexity

Space = Memory = Writes.

How much **memory** it uses - refers to **RAM** (Random Access Memory), not hard drive storage.

For example, to copy an array fully to another memory location, the space complexity would be O(N) as we will need as much space as an element in the array.

-------------------------------------------------------

## Common Big O Complexities (from best to worst)

| Big O          | Time          | Example Scenario                                    |   Growth as n increase
| -------------- | ------------- | --------------------------------------------------- | ------------------------------- |
| O(1)           | Constant      | Accessing an array element by index                 | 🔹 Fastest — doesn't grow       |
| O(log n)       | Logarithmic   | Binary search in a sorted array                     | 🔸 Grows slowly                 |
| O(n)           | Linear        | Looping through an array once                       | 🔹 Grows directly with `n`      |
| O(n log n)     | Linearithmic  | Efficient sorting algorithms (MergeSort, QuickSort) | 🔸 Between linear and quadratic |
| O(n²)          | Quadratic     | Nested loops over array (e.g., bubble sort)         | 🔺 Grows fast                   |
| O(2ⁿ)          | Exponential   | Recursive Fibonacci without memoization             | 🔺🔺 Grows extremely fast       |
| O(n!)          | Factorial     | Generating all permutations of `n` items            | 🚨 Intractable for big `n`      |

-------------------------------------------------------

## Common Big O Complexities: Growth Table

| Big O      | n = 1 | n = 5  | n = 10    | n = 15     | n = 20    |
| ---------- | ----- | ------ | --------- | ---------- | --------- |
| O(1)       | 1     | 1      | 1         | 1          | 1         |
| O(log n)   | 0     | 2.3    | 3.3       | 3.9        | 4.3       |
| O(n)       | 1     | 5      | 10        | 15         | 20        |
| O(n log n) | 0     | 11.6   | 33.2      | 58.6       | 86.4      |
| O(n²)      | 1     | 25     | 100       | 225        | 400       |
| O(2ⁿ)      | 2     | 32     | 1,024     | 32,768     | 1,048,576 |
| O(n!)      | 1     | 120    | 3,628,800 | 1.3×10¹²   | 2.4×10¹⁸  |

-------------------------------------------------------

## O(N)

Linear time ??

TODO

-------------------------------------------------------

## O(log N)

Bonded curve type time ??

TODO

-------------------------------------------------------

## O(N log N)

TODO

-------------------------------------------------------

## HashMaps Big(O) Complexity

Average Case - a well-designed hash function ensures that keys are evenly distributed across the hashmap.
 - Read at key: O(1) - Constant
 - Insert at key: O(1) - Constant
 - Delete at key: O(1) - Constant

Worst Case(Collision) - many keys hash to the same index (collision), the time complexity will degrade to a worse case of N where N is the number of key-value pairs.
 - Insert at key: O(n) - Linear
 - Delete at key: O(n) - Linear
  
-------------------------------------------------------

## Time Complexity of a nested function?

O(N^2) if each function executes N times

-------------------------------------------------------

## What is the Time Complexity of the function below? Where N is the total number of nodes in the Tree.

The time complexity is O(N) because the function visits each node exactly once.

-------------------------------------------------------

## What is the Recursion Stack Space Complexity of the function below assuming the Binary Tree is balanced? Where N is the total number of nodes in the Tree.

In a Balanced Binary Tree, the height of the tree is O(log N), so the recursion depth (and thus the space used by the call stack) is O(log n).

If the binary tree was skewed (i.e., it behaves like a linked list where each node has only one child), the recursion depth will be O(N), where N is the number of nodes in the tree.

-------------------------------------------------------

## Suppose you are using a dynamic array to store values. If an array resize occurs by doubling its size, what is the Average(Amortised) Time Complexity of inserting an element?

O(1).

When inserting elements into a dynamic array, most insertions take constant time, O(1). However, when the array runs out of space, it needs to resize by doubling its capacity, which involves copying all the elements to a new larger array. This resizing operation can take O(n) time, where n is the current size of the array.

Amortized analysis helps account for the occasional costly resize by spreading the cost of resizing over many insertions. Over a sequence of n insertions, the total cost of resizing is O(n), making the average (amortized) time per insertion O(1).

Thus, while individual insertions may sometimes be expensive, the amortized time complexity for each insertion is O(1)

-------------------------------------------------------











-------------------------------------------------------

# Data Structures

-------------------------------------------------------

## What's a binary search?

Binary search is an efficient algorithm for finding an item from a sorted list of items. 

It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one.

-------------------------------------------------------

## Binary Search Tree (BST) ?

each node has at most 2 children

-------------------------------------------------------

## What's the two pointers technique?

The two-pointer technique is effective for sorted arrays, allowing for a linear-time solution(O(n)) by moving pointers towards each other.

Good for instance if you are given a sorted array and need to find if there exists a pair of numbers that add up to a specific target value. 

-------------------------------------------------------

## What's the sliding window technique?

Good for instance if you want to find the maximum sum of a contiguous subarray of size kin an array of integers.

TODO

-------------------------------------------------------

## What's the prefix/suffix sum technique?

Good for instance if you need to compute the sum of elements in various subarrays of a large array quickly, especially as the array does not change frequently.

TODO

-------------------------------------------------------

## What's a stack data structure?

Good for instance if you need to evaluate a mathematical expression given in postfix notation (Reverse Polish Notation).

TODO

-------------------------------------------------------

## What's a hashmap data structure?

TODO

-------------------------------------------------------

## What's a binary tree data structure?

TODO

-------------------------------------------------------

## What's a linked list data structure?

TODO

-------------------------------------------------------

## What is the Time Complexity for accessing an element by index in an array? Where N is the number of elements in the array.

O(1)

-------------------------------------------------------

## What is the primary disadvantage of using static arrays?

It can only hold a fixed number of elements.

Their size is fixed at the time of declaration and cannot be changed during runtime.

-------------------------------------------------------

## Which one of the following operations can be performed in O(1) time in a singly linked list?

Inserting a node at the tail(end) : FALSE

Inserting a node at the head(beginning) : TRUE

-------------------------------------------------------

## In a Binary Tree, what is the maximum number of nodes at level h?

In a Binary Tree, the maximum number of nodes at level h (where the root is at level 0) is given by the formula: Maximum nodes at level H = 2^H

This is because each node at a given level can have up to two children, leading to exponential growth in the number of nodes as you move down each level.

For example:
 - Level 0: 2^0 = 1
 - Level 1: 2^1 = 2
 - Level 2: 2^2 = 4
 - Level 3: 2^3 = 8
 - And so on

-------------------------------------------------------

## What is the Average Time Complexity for inserting an element into a HashMap?

O(1)

The average time complexity for inserting an element into a HashMap is O(1), or constant time. This efficiency is achieved because:

    Hash Function: The key is hashed to determine an index in the underlying array.

    Direct Access: The element can be added directly in the underlying array at that index.

In the worst-case scenario (e.g., when many keys hash to the same index, causing collisions), the time complexity can degrade to O(N), where N is the number of elements in the HashMap. But with a good hash function and proper resizing strategies, average-case operations remain efficient.

-------------------------------------------------------

## You are developing a web application that requires frequently adding, removing, and accessing user sessions. Each session should be uniquely identifiable by a session ID, and you need to ensure that retrieving a session by its ID is efficient. Which data structure would be the best choice for managing user sessions in this scenario?

Hashmap

-------------------------------------------------------

## What is a hash collision in the context of a HashMap data structure?

When two different keys produce the same hash value

-------------------------------------------------------

## What's a Trie (or prefix tree) ?

TODO

-------------------------------------------------------

## You are developing a predictive text feature for a mobile keyboard that suggests words as the user types. You want to efficiently store a large dictionary of words and allow for quick retrieval of all words that share a common prefix. Which data structure would be the best choice for implementing this feature?

A Trie (or prefix tree) is specifically designed for efficiently storing and retrieving strings, particularly for applications like autocomplete and predictive text.

It allows for quick retrieval of all words that share a common prefix by traversing down the tree based on the input characters.

This makes it much more efficient than other data structures, such as hashmaps or binary search trees, for this particular use case.

-------------------------------------------------------

## What's a B-Tree ?

TODO

-------------------------------------------------------

## You are designing a database for a large e-commerce platform where users frequently search for products by name, category, and price. Which indexing structure would be the best choice for fast lookups in search operations?

B-Tree

-------------------------------------------------------

## Which one of the following operations can be performed in O(1) time in a singly linked list?

 1. Inserting a node at the tail(end)
 2. Inserting a node at the head(beginning)
 3. Deleting a node at the middle
 4. Accessing a node by index

Inserting a node at the tail (end) → INCORRECT. Normally requires traversal to the end (unless we keep an explicit tail pointer), so this is O(n). With a tail pointer, insertion can be O(1), but by default in a standard singly linked list it’s not.

Inserting a node at the head (beginning) → CORRECT. We can directly link the new node’s next to the current head and update the head pointer. This is always O(1).

Deleting a node at the middle → INCORRECT. To delete, we need to find the previous node to update its next pointer, which requires traversal. So it’s O(n).

Accessing a node by index → INCORRECT. Requires traversal from the head until we reach that index, so O(n).

-------------------------------------------------------

## In a Binary Tree, what is the maximum number of nodes at level h?

 1. h * log(h)
 2. h^2
 3. 2^h
 4. 2h

2^h s, you can easy check this:
 - Level 0: 2^0 = 1
 - Level 1: 2^1 = 2
 - Level 2: 2^2 = 4
 - Level 3: 2^3 = 8

-------------------------------------------------------

## What is a hash collision in the context of a HashMap data structure?

 1. When two different keys produce the same hash value
 2. When two identical keys produce different hash values

CORRECT: When two different keys produce the same hash value.

-------------------------------------------------------

## Which one is more efficient in the case we want to run multiple consecutive search operations on the same very large unsorted array? Efficient = Better Time Complexity Overall

 1. Simple Search(Iterate over the array until we find the element we want) - Time Complexity: O(N) for each query
 2. Sorting and Binary Search Afterwards - Time Complexity: Sorting O(N Log N) and Binary Search O(Log N) for queries

CORRECT: Sort and Binary Search

If you plan to conduct multiple searches on the same array, sorting it first and then using binary search is better, resulting in a time complexity of O(NlogN) for sorting and O(logN) for each search thereafter.
Therefore, the decision depends on the number of searches you need to perform and the size of the array.

-------------------------------------------------------

## You are building a text editor that requires implementing an undo feature. The user should be able to undo multiple actions in the order they were performed. Which data structure would be the best choice for implementing this undo functionality?

 1. Array
 2. Stack
 3. Queue
 4. Linked List

CORRECT: Stack.

-------------------------------------------------------

## You are developing a predictive text feature for a mobile keyboard that suggests words as the user types. You want to efficiently store a large dictionary of words and allow for quick retrieval of all words that share a common prefix. Which data structure would be the best choice for implementing this feature?

 1. HashMap - Time Complexity: O(N) for each query (N = number of words in the dictionary)
 2. Binary Search Tree - Time Complexity: O(N Log N) for each query (N = number of words in the dictionary)
 3. Trie - Time Complexity: O(M) for each query where M is the length of the word
 4. Array - Time Complexity: O(N) for each query (N = number of words in the dictionary)

CORRECT: Trie.

A Trie (pronounced "try") is a tree-based data structure used to efficiently store and search strings, especially when dealing with large sets of words (like dictionaries, autocomplete, or spell checkers). It is also called a prefix tree because it organizes data by common prefixes.

Key Characteristics of a Trie:
 - Nodes represent characters – each edge corresponds to a character in the string.
 - Root node is empty – it represents the starting point of all words.
 - Paths from root to a node represent prefixes of stored strings.
 - End-of-word marker – a boolean flag (or special symbol) marks whether a path corresponds to a complete word.
 - Efficient prefix lookups – searching, inserting, and prefix matching are done in O(L), where L is the length of the word.

-------------------------------------------------------

## What is a Balanced Tree (B-Tree) ?

A `B-Tree` is a self-balancing search tree that maintains sorted data and allows searching, insertion, and deletion in logarithmic time (`O(log n)`).

It is widely used in databases and file systems, where reading/writing large blocks of data from disk efficiently is critical.

Generalization of a `Binary Search Tree` (`BST`):
 - Unlike `BSTs`, where each node has at most 2 children, a `B-Tree node` can have **multiple keys** and **multiple children**.

Balanced by design:
 - All leaf nodes are at the same depth (no skewed shape like in normal BSTs).

Node properties:
 - Each node stores multiple keys in sorted order.
 - Keys act as separators between child subtrees.
 - If a node has `n` keys, it has `n+1` children.

Order (`m`) of a `B-Tree`:
 - A `B-Tree` of order `m` can have at most `m` children and `m−1` keys per node.
 - Except for the root:
   - Each node must have at least ⌈m/2⌉ children.
   - Each node must have between ⌈m/2⌉−1 and m−1 keys.

-------------------------------------------------------

## You are designing a database for a large e-commerce platform where users frequently search for products by name, category, and price. Which indexing structure would be the best choice for fast lookups in search operations?

 1. HashMap
 2. B-Tree
 3. Linked List
 4. Array
 
 - Hashmaps: INCORRECT: fast but not well suited for disk access.
 - Arrays: INCORRECT: not time efficient for search operations(you need a full table scan to find a record).
 - LinkedList: INCORRECT: very limited and search is also O(N) in the worst case scenario which is not well suited for large datasets.
 - B-Tree: CORRECT: specifically designed for efficient disk access and is commonly used in database indexing because it can store multiple keys in each node, thereby reducing the height of the tree and the number of disk accesses needed to find a specific key.

B-Trees (and their variant B+ Trees) are excellent for:
 - Range queries (like price between X and Y).
 - Ordered data (since keys are stored in sorted order).
 - General-purpose indexing in databases.
 - In fact, most modern databases (MySQL, PostgreSQL, Oracle) use B+ Trees for their default indexes.

So, for price searches and category lookups, a B+ Tree index works well.

-------------------------------------------------------

## Binary Search Tree

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

## Hash Map

A Hash Map (Object) is based on:
An array, a hash function, and linked lists?

TODO

-------------------------------------------------------

## Data Structures

In which data structure is faster to insert an element?
LinkedList?
Array?
Hash Map?

TODO

-------------------------------------------------------

## Stack Space

The Stack Space is where the recursive calls are stored.



