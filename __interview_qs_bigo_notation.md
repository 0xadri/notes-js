

# Big O Notation / Big(O) Complexity Analysis

Big O Notation is a way to describe how the performance (time and space) of an algorithm scales with the size of its input (dimensions of the input and the number of operations).

It gives an upper bound on the time or memory used, in the worst case, as the input size grows.

Two Big(O) dimensions: Time complexity and Space complexity.

1. Time complexity 

How many operations the algorithm performs - later translated to CPU cycles.

For example, iterating through an array once has O(N) time complexity because we will do N operations to go through each element once, where N is the array's length.

2. Space complexity

How much memory it uses - refers to RAM (Random Access Memory), not hard drive storage.

For example, to copy an array fully to another memory location, the space complexity would be O(N) as we will need as much space as an element in the array.

-------------------------------------------------------

# Common Big O Complexities (from best to worst)

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

# Common Big O Complexities: Growth Table

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

# O(N)

Linear time ??

TODO

-------------------------------------------------------

# O(log N)

Bonded curve type time ??

TODO

-------------------------------------------------------

# O(N log N)

TODO

-------------------------------------------------------

# HashMaps Big(O) Complexity

Average Case - a well-designed hash function ensures that keys are evenly distributed across the hashmap.
 - Read at key: O(1) - Constant
 - Insert at key: O(1) - Constant
 - Delete at key: O(1) - Constant

Worst Case(Collision) - many keys hash to the same index (collision), the time complexity will degrade to a worse case of N where N is the number of key-value pairs.
 - Insert at key: O(n) - Linear
 - Delete at key: O(n) - Linear
  
-------------------------------------------------------

# Time Complexity of a nested function?

O(N^2) if each function executes N times

-------------------------------------------------------

# What is the Time Complexity of the function below? Where N is the total number of nodes in the Tree.

The time complexity is O(N) because the function visits each node exactly once.

-------------------------------------------------------

# What is the Recursion Stack Space Complexity of the function below assuming the Binary Tree is balanced? Where N is the total number of nodes in the Tree.

In a Balanced Binary Tree, the height of the tree is O(log N), so the recursion depth (and thus the space used by the call stack) is O(log n).

If the binary tree was skewed (i.e., it behaves like a linked list where each node has only one child), the recursion depth will be O(N), where N is the number of nodes in the tree.

-------------------------------------------------------

# Big(O) Complexity Analysis








