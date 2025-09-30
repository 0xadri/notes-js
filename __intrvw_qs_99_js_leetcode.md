



-------------------------------------------------------

# Add Method To Array Object: Add `last()`

Add method `last()` to `Array` so that it returns the last element, if `Array` is empty return `-1`.

```javascript
Array.prototype.last = function() {
    if(this.length===0){
        return -1;
    }
    return this[this.length-1];
};
```

-------------------------------------------------------

# Add Method To Array Object: Pollyfill Reduce

Implement your own version of the `Array.reduce` method. Let's call it `Array.myReduce`.

The Array.reduce method is a built-in JavaScript method that takes a callback function and an initial value as arguments, and returns a single reduced value.

A reduced value is created by applying the following operation:
- `val = fn(init, arr[0])`
- `val = fn(val, arr[1])`
- `val = fn(val, arr[2])`
- ... until every element in the array has been processed.

The final value of val is returned. If the length of the array is 0, it should return init.

```javascript
Array.prototype.myReduce = function (fn, init){
    let total = 0;

    if (this.length ===0){
        return init;
    }

    for (let i = 0 ; i < this.length ; i++ ){
        if (i===0){
            total = fn( init , this[i] );
        }
        else {
            total = fn( total , this[i] );
        }
    }
    // Pseudocode:
    // for each element in array of args
        // if 1st item
            // total = fn(init, element)
        // else
            // total = fn(total, element)
    return total; // return single reduced value
}
```

-------------------------------------------------------

# Wrap A Function In A Timeout

```javascript
const myDelayedFunction = (fn, timeoutDuration) => {     // Define a HOF (wrapper) that returns a delayed version of a function
  return (...args) => {
    return setTimeout(() => {
      fn.apply(this, args); // preserve the context
    }, timeoutDuration);
  };
};

const myFunc = (name) => {  console.log("hello " + name);    };     // Example function

const delayedFunction = myDelayedFunction(myFunc, 2000);    // Assign wrap function with relevant function and delay - Create a delayed version

(() => {
  delayedFunction("James");   // call wrap function
})();
```

-------------------------------------------------------

# Curry Function

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

```javascript
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



-------------------------------------------------------

# Throttle Function

1. Implement a simple delay

```javascript
const throttle = (fn, interval) => {
  return (...args) => {
    return setTimeout(() => {
      fn.apply(this, ...args);  // preserve the context
    }, interval);
  };
};

const myFunc = () => {
  console.log("hello");
};

const throttled = throttle(myFunc, 2000);

(() => {
  throttled();
})();
```




