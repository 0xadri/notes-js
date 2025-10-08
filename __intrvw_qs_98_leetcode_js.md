
# What's LeetCode ?

Think of it as going to gym: given two athletes of let's say, a football team, if both have equally talented, then the one who's trained to the gym will outcompete the other.

And as going to the gym, it may be really tough at first, but it'll get easier, and even become like a treat.

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

# Function Adding-Up Elements In Array And Returns With Delay

Write a function in Javascript or Typescript that simulates asynchronous behavior using Promises. The function should take an array of numbers as input and return a Promise that resolves with the sum of all the numbers after a 1-second delay.
Example:
 - Input: [1, 2, 3, 4, 5]
 - Output: Promise resolved with 15 after a 1-second delay

```javascript
async function arrowAdd(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(total), 1000);
  });
}

arrowAdd([1, 2, 3, 4, 5]).then((out) => {
  console.log(out);
});
```
-------------------------------------------------------

# Promises: Guess The Output

Impossible to get this right. Focus on explaining what you know and keep a good attitude while failing.

https://codesandbox.io/p/sandbox/promises-forked-pkf2sd

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

# Remove HTML Tags From String

Write a method that will remove all html tags from any given string.

For example, the input string:

"The quick brown fox jumps over the <b>lazy</b> dog"
should return:

"The quick brown fox jumps over the lazy dog"

```javascript
'use strict';

module.exports = {
  removeTags
};

function removeTags(input) {
    // let skipCurrChar = false;
    // let output = "";
    // for chars in input
        // if currChar === "<"
            // skipCurrChar = true
        // if currChar === ">"
            // skipCurrChar = false
        // if skipCurrChar === false && currChar === ">"
            // add to output

    let skipCurrChar = false;
    let output = "";
    for (let currChar of input){   // for let ... of ...  -> can be written: for (let i = 0; i < input.length; i++) {
        if (currChar === "<") {
            skipCurrChar = true;
        }
        else if (currChar === ">") {
            skipCurrChar = false;
        }
        else if (skipCurrChar === false && currChar === ">"){
            output = output + currChar;
        }
    }
    return output;
}
```

-------------------------------------------------------

# Call Once Function

Given a function fn, return a new function that is identical to the original function except that it ensures that fn can be called at most once.

The first time the returned function is called, it should return the same result as the original fn.

Every subsequent time it is called, it should return undefined.

```javascript
export default function callOnce(fn) {
    let wasAlreadyCalled = false;

    return (...args) => {    // Rest Parameters - Collects arguments into an array
        if(wasAlreadyCalled){
            return undefined;
        }
        wasAlreadyCalled = true;        
        return fn(...args);   // Spread Operator - Expands elements of arrays and objects
    }
};
```

-------------------------------------------------------

# Bind Polyfill

Add a simplified `bindPolyfill method` to all functions.

`bindPolyfill` takes an object obj and returns a new function.

When this new function is invoked, it should call the original function with its this value set to obj.

When the `bindPolyfill method` is called with `obj argument`, it should `return a function` that has `obj` as its `"this" context`.

Requirements:
- the `bindPolyfill` method should always receive a non-null object
- you should not use the built-in `Function.bind` or `Function.apply` methods
- the `bindPolyfill` method should return a new function

Examples

```javascript
const obj = { message: 'Hello' };
const f = function () { return this.message; };
const g = f.bindPolyfill(obj);         // g is a new object, the same as 

console.log(g()); // Hello
console.log(g.call({ message: 'Bye' })); // Hello
```

Solution

```javascript
Function.prototype.bindPolyfill = function(obj) {
    obj["__binding__"] = this;     // add function as property/method to passed object - "this" is the current function object
    return (...args) => obj["__binding__"](...args);    // return the wrapped obj method as a new function
}
```

The above version has one major issue though:
- collisions are guaranteed if you bind more than one function to the same object.
- Every time you call .bindPolyfill, it assigns the function to the same property ("__binding__") on the target object.
- That means the previous binding is overwritten.

```javascript
Function.prototype.bindPolyfill = function(obj) {
    // add the function as a method to an object
    obj[this.name] = this;

    // return the wrapped obj method as a new function
    return (...args) => obj[this.name](...args); // call as obj method
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
export default function curry(fn){
    return function helper (...args) {     // 1st function definition, this one is NOT anonymous
        if (args.length === fn.length){        // Condition to break out of recursion
            return fn(...args);
        }
        else {
            return (...nextArgs) => {      // 2nd function definition
              return helper(...args, ...nextArgs)
            } 
        }
    }
}
```

EXPLANATION

 - `if (args.length === fn.length)`   Condition to break out of recursion
 - `return (...nextArgs) => { return helper(...args,...nextArgs) }`   Creates and returns a new function that expects additional arguments
 - `(...nextArgs)`   Accepts additional arguments 
 - `nextArgs` is not coming from anywhere "magical." It’s just the `rest` parameter of the arrow function you return inside helper.
 - `(...args, ...nextArgs)`   Combines them with the previously collected ones 
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




