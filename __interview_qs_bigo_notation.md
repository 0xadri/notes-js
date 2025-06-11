
-------------------------------------------------------

# O(1)

constant time. 

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

# BigO Notation: time complexity vs space complexity?

TODO

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

