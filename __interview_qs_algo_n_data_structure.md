
# What's a binary search?

Binary search is an efficient algorithm for finding an item from a sorted list of items. 

It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one.

-------------------------------------------------------

# What's the two pointers technique?

The two-pointer technique is effective for sorted arrays, allowing for a linear-time solution(O(n)) by moving pointers towards each other.

Good for instance if you are given a sorted array and need to find if there exists a pair of numbers that add up to a specific target value. 

-------------------------------------------------------

# What's the sliding window technique?

Good for instance if you want to find the maximum sum of a contiguous subarray of size kin an array of integers.

TODO

-------------------------------------------------------

# What's the prefix/suffix sum technique?

Good for instance if you need to compute the sum of elements in various subarrays of a large array quickly, especially as the array does not change frequently.

TODO

-------------------------------------------------------

# What's a stack data structure?

Good for instance if you need to evaluate a mathematical expression given in postfix notation (Reverse Polish Notation).

TODO

-------------------------------------------------------

# What's a hashmap data structure?

TODO

-------------------------------------------------------

# What's a binary tree data structure?

TODO

-------------------------------------------------------

# What's a linked list data structure?

TODO

-------------------------------------------------------

# What is the Time Complexity for accessing an element by index in an array? Where N is the number of elements in the array.

O(1)

-------------------------------------------------------

# What is the primary disadvantage of using static arrays?

It can only hold a fixed number of elements.

Their size is fixed at the time of declaration and cannot be changed during runtime.

-------------------------------------------------------

# Which one of the following operations can be performed in O(1) time in a singly linked list?

Inserting a node at the tail(end) : FALSE

Inserting a node at the head(beginning) : TRUE

-------------------------------------------------------

# In a Binary Tree, what is the maximum number of nodes at level h?

In a Binary Tree, the maximum number of nodes at level h (where the root is at level 0) is given by the formula: Maximum nodes at level H = 2^H

This is because each node at a given level can have up to two children, leading to exponential growth in the number of nodes as you move down each level.

For example:
 - Level 0: 2^0 = 1
 - Level 1: 2^1 = 2
 - Level 2: 2^2 = 4
 - Level 3: 2^3 = 8
 - And so on

-------------------------------------------------------

# What is the Average Time Complexity for inserting an element into a HashMap?

O(1)

The average time complexity for inserting an element into a HashMap is O(1), or constant time. This efficiency is achieved because:

    Hash Function: The key is hashed to determine an index in the underlying array.

    Direct Access: The element can be added directly in the underlying array at that index.

In the worst-case scenario (e.g., when many keys hash to the same index, causing collisions), the time complexity can degrade to O(N), where N is the number of elements in the HashMap. But with a good hash function and proper resizing strategies, average-case operations remain efficient.

-------------------------------------------------------

# You are developing a web application that requires frequently adding, removing, and accessing user sessions. Each session should be uniquely identifiable by a session ID, and you need to ensure that retrieving a session by its ID is efficient. Which data structure would be the best choice for managing user sessions in this scenario?

Hashmap

-------------------------------------------------------

# What is a hash collision in the context of a HashMap data structure?

When two different keys produce the same hash value

-------------------------------------------------------

# What's a Trie (or prefix tree) ?

TODO

-------------------------------------------------------

# You are developing a predictive text feature for a mobile keyboard that suggests words as the user types. You want to efficiently store a large dictionary of words and allow for quick retrieval of all words that share a common prefix. Which data structure would be the best choice for implementing this feature?

A Trie (or prefix tree) is specifically designed for efficiently storing and retrieving strings, particularly for applications like autocomplete and predictive text.

It allows for quick retrieval of all words that share a common prefix by traversing down the tree based on the input characters.

This makes it much more efficient than other data structures, such as hashmaps or binary search trees, for this particular use case.

-------------------------------------------------------

# What's a B-Tree ?

TODO

-------------------------------------------------------

# You are designing a database for a large e-commerce platform where users frequently search for products by name, category, and price. Which indexing structure would be the best choice for fast lookups in search operations?

B-Tree

