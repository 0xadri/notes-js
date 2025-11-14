

-------------------------------------------------------

# Must Knows

-------------------------------------------------------

## What's Live Coding in JavaScript ?

It's a technical interviewing style. Your interviewer(s) watches while you code. In JavaScript.

Small projects for you to try to solve. Typically in 30 to 60min.

It then drifts into another type of interview:
 - Code Review (reasonable chance)
 - Code Quality (reasonable chance)
 - System Design (small chance)
 - LeetCode (tiny chance)

-------------------------------------------------------

## What's LeetCode ?

Think of it as going to gym: given two athletes of let's say, a football team, if both have equally talented, then the one who's trained to the gym will outcompete the other.

And as going to the gym, it may be really tough at first, but it'll get easier, and even become like a treat.

-------------------------------------------------------

## What Steps Should You Follow When Live Coding?

1. Write pseudo code for "brute force" solution - if needed, create a diagram on draw.io
2. Talk over your pseudo code by using mental models and analogies
3. Write code
4. Follow up by suggesting improvements - c.f. ideas below


### Your Attitude

- Take your time, else with time left they may ask super hard follow-up questions
- Keep it VERY simple, else you might not have improvements to suggest
- Say out loud "Live Coding makes me very anxious", else your interviewer might not realize it
- Stay very serious at all time unless your interviewer is very casual
- Feel free to suggest CodeSandBox.com, else you might be stuck using a crappy online IDE


### Mental Models and Analogies

Data Structures Involved
 - Duplicate Data Structures, i.e. One is the original one, the other is for **marking** processed items
 - Count/Sum Data Structure, i.e. usually just a number

Utility Functions Involved
 - Transformator/Migrator, i.e. transform a 3D array into a flat array


### Potential Improvements

Readability, Testability, Maintainability
 - 100% of the code must be in functions
 - self-explanatory namings
 - easy-to-digest logic
 - SRP: each function has a tiny responsibility - mention SOLID Principles
 - Pure Functions: for no side effects

Defensive Programming
 - handle errors
 - handle loading state
 - handle unexpected empty/null/undefined/0 values, provide default
 - handle unexpected type, i.e. string vs number

Upgrade Syntax
 - var -> const or let
 - let -> const (if possible)
 - buggy const (i.e. reassigned)
 - spread/rest operators
 - method chaining -> async/await
 - class component -> function component
 - regular function -> arrow functions

Optimize Loops and Data Structures
 - array -> set, or map
 - loop -> proper algorithms
 - loop -> Array Instance Methods such as reduce(), or map()

Optimize Performance
 - Caching
 - Lazy Loading

-------------------------------------------------------

## What Defensive Programming?

Software Development Practice.
 - Focus: anticipate and safely handle unexpected inputs, states, or errors. 
 - Goal: make code more robust, secure, and maintainable.

| Category        | Details                                                         |
| --------------- | --------------------------------------------------------------- |
| Error handling  | Use `try/catch`, custom error messages                          |
| Defaults        | Handle undefined, null, or missing params: give fallback values |
| Validate inputs | Validate types, ranges, formats                                 |
| Logic           | Use guard clauses & early exits                 |
| Types           | Use TypeScript or runtime checks                |
| APIs            | Check response validity                         |
| Security        | Sanitize and validate external inputs           |
| Mutability      | Avoid modifying shared state                    |
| Comment         | Add JSDoc for functions + Add relevant comments |








-------------------------------------------------------

# Gotchas & Common Pitfalls

-------------------------------------------------------

## Most Common Challenges

1. Data structure manipulation using Array Instance Methods
2. String manipulation using Array Instance Methods
3. Combine 1 & 2: data structure manipulation combined with String manipulation using Array Instance Methods
4. Add method to Array Object
5. Fetch data from API by doing 2 calls
6. Combine promises and timeout
7. Given "spaghetti" code snippet, review by adding comments -or- refactor the code

-------------------------------------------------------

## Fetch Data From API: Gotchas & Common Pitfalls

1. fetch() doesn’t reject on HTTP errors - always check `res.ok` and handle status codes explicitly.

i.e. `if (!res.ok) { throw new Error("HTTP error! status: " + res.status); }`

2. You must explicitly parse the response body - always call `.json()`, or `.text()`, or `.blob()`, etc

3. No built-in timeout - always use `AbortController` or a `timeout wrapper`

4. Security - always use `https`









-------------------------------------------------------

# Challenges & Solutions

-------------------------------------------------------

## Mock JSON Data And APIs

You can use free services such as :

 - https://jsonplaceholder.typicode.com/
 
 - https://rickandmortyapi.com/

-------------------------------------------------------

## String Manipulation: Check If Char Is Number

How do check if a character is a number?

`!isNaN(char)`

-------------------------------------------------------

## String Manipulation: Default Value Assignment

How do give a default value assignment "hello" when: a string is falsy (empty) ?

`const greeting = myString || "hello";`

How do give a default value assignment when: an array item is falsy (empty string, or 0, or null, or undefined)

`const currItem = myArray[i] || 1;`

-------------------------------------------------------

## String Manipulation: Iterate Over Chars In String

How do you iterate over characters of a string?

```javascript
for (let i = 0; i < myText.length; i++) {
  const char = myText[i];
  // do something
}
```

-------------------------------------------------------

## String Manipulation: Add Numbers In Text

Create the function `addNbInTxt` so that it matches the expected outputs

```javascript
const textOne = "2,5,3,8";
const textTwo = "2::9::3::1::5::2";
const textThree = "3jd4imco5ownen8wbvue2ncknas9"

console.log(addNbInTxt(textOne));  // expected output: 18
console.log(addNbInTxt(textTwo));  // expected output: 22
console.log(addNbInTxt(textThree));  // expected output: 31
```

### SOLUTION

```javascript
function addNbInTxt(text) {
  // extract numbers
  const nbArr = text.split("").filter((char) => !isNaN(char));
  // sum up numbers
  let total = 0;
  for (let i = 0; i < nbArr.length; i++) {
    total += Number(nbArr[i]);
  }
  return total;
}
```

-------------------------------------------------------

## Reduce: Sum Of Numbers In Array

Calculate the sum of all numbers in an array with `reduce()`.

```javascript
const numbers = [5, 10, 15, 20];

const total = numbers.reduce( /* your code here */ );   // Use reduce to get the total sum

console.log(total);     // expected output: 50
```

### SOLUTION

```javascript
const numbers = [5, 10, 15, 20];
const total = numbers.reduce((a, b) => a + b);
console.log(total);     // expected output: 50
```

-------------------------------------------------------

## Reduce: Count Occurrences

Count how many times each element appears in an array with `reduce()`.

```javascript
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const counts = fruits.reduce( /* your code here */ , {});
console.log(counts);   // expected output: { apple: 3, banana: 2, orange: 1 }
```

### SOLUTION

```javascript
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const counts = fruits.reduce((accumulator, currentValue) => {   
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {});

console.log(counts);   // expected output: { apple: 3, banana: 2, orange: 1 }
```

-------------------------------------------------------

## Reduce: Flatten a Nested Array

Turn a nested array into a single-level array with `reduce()`.

```javascript
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce( /* your code here */ );
console.log(flat);    // expected output: [1, 2, 3, 4, 5, 6]
```

### SOLUTION

```javascript
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce((accumulator, element) => {
  return accumulator.concat(element);
});
console.log(flat);   // expected output: [1, 2, 3, 4, 5, 6]
```

-------------------------------------------------------

## Nested reduce() To Calculate Total

Use nested reduce() to calculate the total sum of all numbers across all sub-arrays.

```javascript
const numbers = [[1, 2, 3], [4, 5], [6, 7, 8]];
const tot = numbers.reduce( /* todo */ });
console.log(tot);  // expected ouput: 36
```

### SOLUTION

```javascript
const numbers = [[1, 2, 3], [4, 5], [6, 7, 8]];
const res = numbers.reduce((acc, curr) => {
  return (acc + curr.reduce((subacc, curr) => {
      return subacc + curr;
    }, 0)
  );
}, 0);

console.log(res);
```

-------------------------------------------------------

## Nested reduce() To Flatten and Count Letters

Use nested reduce() to:
- Flatten all the words into an array of individual characters.
- Count how many times each letter appears (return an object like { h: 1, i: 1, t: 1, e: 2, ... }).

```javascript
const words = ["hi", "there", "javascriptiscool"];
const out = words.reduce((acc, item) => {
  // TODO
});
console.log(out); // expected output: {h: 2, i: 3, t: 2, e: 2, r: 2, …}
```

### SOLUTION

```javascript
const words = ["hi", "there", "javascriptiscool"];

const letterCount = words.reduce((acc, word) => {
  // Flatten each word into letters and count them
  return word.split("").reduce((innerAcc, letter) => {
    innerAcc[letter] = (innerAcc[letter] || 0) + 1;
    return innerAcc;
  }, acc);
}, {});

console.log(letterCount);
```

-------------------------------------------------------

## Nested reduce() To Sum All Scores

You have a list of players, each with scores across different games.

Use nested reduce() to compute the total score of all players combined.

```javascript
const players = [
  { name: "Alice", scores: [10, 20, 15] },
  { name: "Bob", scores: [5, 25, 10] },
  { name: "Cara", scores: [20, 15, 30] },
];
const tot = players.reduce((acc, item) => {
  // TODO
});
console.log(tot);
```

### SOLUTION

```javascript
const players = [
  { name: "Alice", scores: [10, 20, 15] },
  { name: "Bob", scores: [5, 25, 10] },
  { name: "Cara", scores: [20, 15, 30] }
];
const totalScore = players.reduce((playerAcc, player) => {
  // Sum up each player's scores
  const playerTotal = player.scores.reduce((scoreAcc, score) => scoreAcc + score, 0);
  // Add to the overall accumulator
  return playerAcc + playerTotal;
}, 0);
console.log(totalScore);
```

-------------------------------------------------------

## Add Method `last()` To Array Object

Add method `last()` to `Array` so that it matches the expected outputs.

```javascript
// your code starts here above
const arrOne = [];
const arrTwo = [4, 5, 2, 1, 5, 6];

console.log(arrOne.last());  // expected output: -1
console.log(arrTwo.last());  // expected output: 6
```

### SOLUTION

```javascript
Array.prototype.last = function() {
    if(this.length===0){
        return -1;
    }
    return this[this.length-1];
};
```

-------------------------------------------------------

## Add Method `multiplyBySelf()` To Array Object

Add method `multiplyBySelf()` to `Array` so that it matches the expected outputs.
			
```javascript
// your code starts here above
const a = [1, 2, 3, 4, 5];
a.multiplyBySelf();
console.log(a); // expected output: [1,2,3,4,5,1,4,9,16,25]
```	

### SOLUTION

```javascript
Array.prototype.multiplyBySelf = function () {
  const origArray = this;
  const length = origArray.length;
  for (let i = 0; i < length; i++) {
    this.push(origArray[i] * origArray[i]);
  }
};
```

-------------------------------------------------------

## Promise Method Chaining To Async/Await Code

```javascript
function fakeFetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { message: "Hello from fake fetch!" };
      resolve(data);
    }, 1000); // simulate 1 second delay
  });
}

function getData() {
  fakeFetchData()
    .then(data => {
      console.log("Data received:", data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
}
getData();
```

Turn the above `getData()` function to use async/await syntax. Do not modify `fakeFetchData()`.

### SOLUTION

```javascript
async function getData() {
	try {
		const data = await fakeFetchData();
		console.log("Data received:", data);
	}
	catch (error) {
		console.error("Error:", error);
	}
}
```

-------------------------------------------------------

## Function Adding-Up Elements In Array And Returns With Delay

Write a function in Javascript or Typescript that simulates asynchronous behavior using Promises. The function should take an array of numbers as input and return a Promise that resolves with the sum of all the numbers after a 1-second delay.
Example:
 - Input: [1, 2, 3, 4, 5]
 - Output: Promise resolved with 15 after a 1-second delay

```javascript
const simAsync = (nbArr) => {  //  IMPLEMENT IT
  let tot = 0;
  for (let i = 0; i < nbArr.length; i++) {  tot += nbArr[i]; }
};
const arr = [4, 5, 8, 2, 6];
console.log("start");
console.log(out);    // FIX THIS - expected output after a 1-second delay: 15
```

### SOLUTION

```javascript
async function simAsync(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(total), 1000);
  });
}

simAsync([1, 2, 3, 4, 5]).then((out) => {
  console.log(out);
});
```

-------------------------------------------------------

## Promises and Timeout: Combined

```javascript
document.getElementById("app").innerHTML = `
<h1>Hello!</h1>
<button id="button_exercise3">Exo 3</button>
`;

const job = (fun, x) => {   // IMPLEMENT IT: fun must be executed after x seconds (delay).
  // your code here 
};

const fun = () => {
  console.log("Function executed!");
};

const exec3 = () => {
  job(fun, 2000).then((fun) => fun());
};
const button3 = document.getElementById("button_exercise3");
button3.onclick = exec3;
```

### SOLUTION

```javascript
document.getElementById("app").innerHTML = `
<h1>Hello!</h1>
<button id="button_exercise3">Exo 3</button>
`;

const job = (fun, x) => {
  console.log("Let's go!");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fun);
    }, x);
  });
};

const fun = () => {
  console.log("Function executed!");
};

const exec3 = () => {
  job(fun, 2000).then((fun) => fun());
};
const button3 = document.getElementById("button_exercise3");
button3.onclick = exec3;
```

-------------------------------------------------------

## Promises: then/catch: Part 1

Guess the output.

```javascript
const exec1 = () => {
  const job = (state) => {
    return new Promise(function (resolve, reject) {
      if (state) {
        resolve("success");
      } else {
        reject("error");
      }
    });
  };

  let promise = job(true);

  promise
    .then(function (data) {
      console.log(data);
      return job(false);
    })
    .catch(function (error) {
      console.log(error);
      return "Error caught";
    })
    .then(function (data) {
      console.log(data);
      return job(true);
    })
    .catch(function (error) {
      console.log(error);
    });
};
exec1()
```

-------------------------------------------------------

## Promises: then/catch: part 2

Guess the output.

```javascript
const exec2 = () => {
  function job(state) {
    return new Promise(function (resolve, reject) {
      if (state) {
        resolve("success");
      } else {
        reject("error");
      }
    });
  }

  let promise = job(true);

  promise
    .then(function (data) {
      console.log(data);
      return job(true);
    })
    .then(function (data) {
      if (data !== "victory") {
        throw "Defeat";
      }
      return job(true);
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
      return job(false);
    })
    .then(function (data) {
      console.log(data);
      return job(true);
    })
    .catch(function (error) {
      console.log(error);
      return "Error caught";
    })
    .then(function (data) {
      console.log(data);
      return new Error("test");
    })
    .then(function (data) {
      console.log("Success:", data.message);
    })
    .catch(function (data) {
      console.log("Error:", data.message);
    });
};
exec2()
```

-------------------------------------------------------

## Add Method To Array Object: Pollyfill Reduce

Implement your own version of the `Array.reduce` method. Let's call it `Array.myReduce`.

The Array.reduce method is a built-in JavaScript method that takes a callback function and an initial value as arguments, and returns a single reduced value.

A reduced value is created by applying the following operation:
- `val = fn(init, arr[0])`
- `val = fn(val, arr[1])`
- `val = fn(val, arr[2])`
- ... until every element in the array has been processed.

The final value of val is returned. If the length of the array is 0, it should return init.

```javascript
// your Array.myReduce implementation here at the top
const myArr = [4, 7, 4, 1, 9, 3];
const myFunc = (val1, val2) => {
  return val1 + val2;
};
const out = myArr.myReduce(myFunc, 0);
console.log(out); // expected output: 28
```

### SOLUTION

```javascript
Array.prototype.myReduce = function (fn, init) {
  if (this.length === 0) return init;
  let tot = 0;
  for (let i = 0; i < this.length; i++) {
    if (i === 0) {
      tot = fn(init, this[i]);
    } else {
      tot = fn(tot, this[i]);
    }
  }
  return tot;
};
const myArr = [4, 7, 4, 1, 9, 3];
const myFunc = (val1, val2) => {
  return val1 + val2;
};
const out = myArr.myReduce(myFunc, 0);
console.log(out); // expected output: 28
```

-------------------------------------------------------

## Remove HTML Tags From String

```javascript
const removeHtmlTags = (txt) => {
  // your code here
};
const myTxt = "The quick brown fox jumps over the <b>lazy</b> dog";
const out = removeHtmlTags(myTxt);
console.log(out); // expected output: "The quick brown fox jumps over the lazy dog"
```

### SOLUTION

```javascript
const removeHtmlTags = (txt) => {
  let out = [];
  let insideTag = false;
  const txtArr = txt.split("");
  for (let i = 0; i < txtArr.length; i++) {
    const currChar = txtArr[i];
    if (!insideTag && currChar !== "<") {
      out.push(currChar);
    } else if (!insideTag) {
      insideTag = true;
    } else if (insideTag && currChar === ">") {
      insideTag = false;
    }
  }
  return out.join("");
};
const myTxt = "The quick brown fox jumps over the <b>lazy</b> dog";
const out = removeHtmlTags(myTxt);
console.log(out); // expected output: "The quick brown fox jumps over the lazy dog"
```

-------------------------------------------------------

## Call Once Function

Given a function fn, return a new function that is identical to the original function except that it ensures that fn can be called at most once.

The first time the returned function is called, it should return the same result as the original fn.

Every subsequent time it is called, it should return undefined.

```javascript
const callOnceWrapper = () => {
	// your code here
};
const myFun = (name, city) => {
  return "hey " + name + ", do you live in " + city + "?";
};
const wrapper = callOnceWrapper(myFun);
const out = wrapper("joe", "new york");
console.log(out);   // expected output: hey joe, do you live in new york?
const out2 = wrapper("joe", "new york");
console.log(out2);   // expected ouput: undefined
```

### SOLUTION

```javascript
const callOnceWrapper = (fn) => {
  let counter = 0;
  return (...args) => {    // Rest Parameters - Collects arguments into an array
    if (counter === 0) {
      counter++;
      return fn(...args);   // Spread Operator - Expands elements of arrays and objects
    }
    return undefined;
  };
};
const myFun = (name, city) => {
  return "hey " + name + ", do you live in " + city + "?";
};
const wrapper = callOnceWrapper(myFun);
const out = wrapper("joe", "new york");
console.log(out); // expected output: hey joe, do you live in new york?
const out2 = wrapper("joe", "new york");
console.log(out2); // expected ouput: undefined
```

-------------------------------------------------------

## Wrap A Function In A Timeout - Basic Version


```javascript
const myDelayedFunction = (fn, x) => {
   // your code here
};

const myFunc = (name) => {
  console.log("hello " + name);  // logs result
};

const delayedFunction = myDelayedFunction(myFunc, 2000);   // Create delayed version

delayedFunction("James");   // expected output after 2s: James
```

### SOLUTION

```javascript
const myDelayedFunction = (fn, x) => {
  return (...args) => {
    setTimeout(() => {
      return fn(...args);
    }, x);
  };
};

const myFunc = (name) => {
  console.log("hello " + name);
};

const delayedFunction = myDelayedFunction(myFunc, 2000); // Assign wrap function with relevant function and delay - Create a delayed version

delayedFunction("James"); // expected output
```

-------------------------------------------------------

## Wrap A Function In A Timeout - Advanced Version


```javascript
const myDelayedFunction = (fn, x) => {
  // your code here
};

const myFunc = (name) => "hello " + name;  // returns result

const delayedFunction = myDelayedFunction(myFunc, 2000);   // Create delayed version

delayedFunction("James").then((out) => {
  console.log(out);  // expected output after 2s: James
});
```

### SOLUTION

```javascript
const myDelayedFunction = (fn, x) => {
  return (...args) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const res = fn(...args);
        resolve(res);
      }, x);
    });
  };
};

const myFunc = (name) => "hello " + name;

const delayedFunction = myDelayedFunction(myFunc, 2000); // Assign wrap function with relevant function and delay - Create a delayed version

delayedFunction("James").then((out) => {
  console.log(out); // expected output after 2s: James
});
```

-------------------------------------------------------

## Random Chuck Norris Images

Being given these 2 APIs
- https://api.chucknorris.io/ - The Internet Chuck Norris Database
- https://developers.giphy.com/docs/ - Giphy API

Select one random Chuck Norris joke and look for a matching GIF by using
the first 3 words from the joke. The result should be displayed with the
image on the left side and the text on the right side, positioned in the
vertically in the middle.

Whenever the image is clicked, a new gif will be loaded.

Caveat: the Giphy API will return the same set of images for a given string,
so in order to produce an observable change, the application needs to request
more images on the first load and cache them internally.

const GIPHY_API_KEY = "2cZkiFTqyiS79UdSapL6LHWlublpl7iy";
const DEFAULT_GIF = "https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif";

### SOLUTION

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chuck Norris Jokes + Giphy</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f8f8f8;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }
    .container {
      display: flex;
      align-items: center;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      overflow: hidden;
      max-width: 700px;
      width: 90%;
      padding: 20px;
      gap: 20px;
    }
    img {
      width: 250px;
      height: 250px;
      object-fit: cover;
      border-radius: 10px;
      cursor: pointer;
      flex-shrink: 0;
    }
    .text {
      flex: 1;
      text-align: left;
      font-size: 1.1rem;
      color: #333;
    }
  </style>
</head>
<body>
  <div class="container">
    <img id="gif" src="" alt="Chuck Norris Gif">
    <div class="text" id="joke">Loading...</div>
  </div>

  <script>
    const jokeEl = document.getElementById('joke');
    const gifEl = document.getElementById('gif');
    let gifCache = [];
    let currentGifIndex = 0;

    async function fetchJoke() {
      const res = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await res.json();
      return data.value;
    }

    async function fetchGifs(query) {
      const apiKey = 'dc6zaTOxFJmzC'; // public test key
      const res = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(query)}&limit=10&rating=g`
      );
      const data = await res.json();
      return data.data.map(g => g.images.fixed_height.url);
    }

    async function loadContent() {
      jokeEl.textContent = 'Loading...';
      gifEl.src = '';
      gifCache = [];
      currentGifIndex = 0;

      const joke = await fetchJoke();
      jokeEl.textContent = joke;

      const firstThreeWords = joke.split(' ').slice(0, 3).join(' ');
      gifCache = await fetchGifs(firstThreeWords);

      if (gifCache.length > 0) {
        gifEl.src = gifCache[currentGifIndex];
      } else {
        gifEl.src = 'https://via.placeholder.com/250?text=No+GIF+found';
      }
    }

    gifEl.addEventListener('click', () => {
      if (gifCache.length === 0) return;
      currentGifIndex = (currentGifIndex + 1) % gifCache.length;
      gifEl.src = gifCache[currentGifIndex];
    });

    loadContent();
  </script>
</body>
</html>
```

-------------------------------------------------------

## Bind Polyfill

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

### SOLUTION

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

## Curry Function

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

### SOLUTION 1: ITERATIVE

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

### SOLUTION 2: RECURSIVE

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

## Throttle Function

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

-------------------------------------------------------

## Anagram Challenge 

You are given an array of strings, text. 

Two strings are considered anagrams if they contain exactly the same characters, just in i different order. 

For example,
"aaagmnrs" is an anagram of "anagrams"".

Your task is to process the array by removing any string that is an anagram of a string that appears earlier in the array. 
After removal, return the remaining strings in sorted order.

Example

input: ["code", "doce", "ecod", "framer", "frame""]

Processing steps:
 - "code" and "doce" are anagrams. Remove "doce" keep "code".
 - "code" and "ecod" are anagrams. Remove "ecod" and keep "code".
 - "code" and "framer" are not anagrams. Keep both strings.
 - "framer" and "frame" are not anagrams due to the extra "r" in "framer". Keep both strings.

Return: ["code", "frame", "framer"]


Function Description:

Complete the function funWithAnagrams in the editor withthe following parameters:
string text[n]: an array of strings

Returns:
string[]: the remaining strings in ascending alphabetical order

Constraints
 - 0 <= n <= 1000
 - 1 <= length of text[i] <= 1000
 - Each string text[i]: made up of lowercase English letters, ascii[a-z].
 
Example 1:
- input: ["code","aaagmnrs", "anagrams", "doce"]
- expected output: ["aaagmnrs", "code"]

Example 12:
- input: ["poke", "pkoe", "okpe", "ekop"]
- expected output:["poke"]

### SOLUTION 1

```javascript
function funWithAnagrams(text) {
  const seen = [];
  const result = [];

  for (const word of text) {
    const sorted = word.split('').sort().join('');   // Sort letters in word to get its canonical form

    if (!seen.includes(sorted)) {    // Only keep the first occurrence of each anagram group
      seen.push(sorted);
      result.push(word);
    }
  }

  return result.sort();    // Return result in ascending (alphabetical) order
}
```

### SOLUTION 2

```javascript
function funWithAnagrams(text) {
  const final = text.reduce(
    (acc, word) => {
      const sorted = word.split('').sort().join('');   // Sort letters in word to get its canonical form

      if (!acc.seen.includes(sorted)) {    // Only keep the first occurrence of each anagram group
        acc.seen.push(sorted);
        acc.result.push(word);
      }

      return acc;
    },
    { seen: [], result: [] } // initial accumulator
  );

  return final.result.sort();    // Return result in ascending (alphabetical) order
}
```

Possible Optimisation: Use `Set` to store `result`, this will give:
 - Fast lookups
 - No duplicates automatically

-------------------------------------------------------

## Dial Speed Calculator

Calculate the minimum time needed to type a string of digits on a numeric keypad where the key positions are mixed up.

Rules:
- it takes 0 seconds to move to the first key that you press.
- it takes 0 seconds to press the key where your finger is currently located.
- Moving to an adjacent key (including diagonals) takes 1 second.
- Moving to a non-adjacent key requires a series of moves to adjacent keys.

Your task is to find the most efficient path to type the given string and return the minimum time required.

Example

Distances from 5:
9 2 3
8 5 7
6 1 4

9(1) 2(1) 3(1)
8(1) 5(0) 7(1)
6(1) 1(1) 4(1)

Distances from 9:
9 2 3
8 5 7
6 1 4

9(0) 2(1) 3(2)
8(1) 5(1) 7(2)
6(2) 1(2) 4(2)

This diagram depicts the minimum amount of time it takes to move from the current location to all other locations on the keypad.

Function Description

Complete the function entryTime in the editor with the following parameter(s):
- string s: the string to type
- string keypad: a string of 9 digits where each group of 3 digits represents a row on the keypad, in order
Returns:
- int : integer denoting the minimum amount of time it takes to type the string s

Constraints
- 1 <= length of s <= 10^5
- length of keypad = 9
- keypad[i] is in the range 11-91

Sample Input 0:
- string s = "423692"
- string keypad = "923857614"

Sample Output 0:
8

Explanation 0

The keypad looks like this:

9 2 3
8 5 7
6 1 4

Calculate the time it takes to types = "423692" as follows:
- 4: Start here, so it takes 0 seconds.
- 2: It takes 2 seconds to move from 4 -> 2
- 3: It takes second to move from 2 -> 3
- 6: it takes 2 seconds to move from 3 -> 6
- 9: it takes 2 seconds to move from 6 -> 9
- 2: It takes 1 second to move from 9 -> 2

The total time is 2 + 1 + 2 + 2 + 1 = 8.


Sample Case 1

Sample Input 1
- string S = "5111"
- string keypad "752961348"

Sample Output 1
1

Explanation 1

The keypad looks like this:

7 5 2
9 6 1
3 4 8

Calculate the time it takes to type 5 = "5111" as follows:
- 5: Start here, so it takes O seconds, and totalTime = 0.
- 1: it takes 1 second to move from 5 -> 1
- 1: it takes 0 seconds to move from 1 -> 1
- 1: it takes O seconds to move from 1 -> 1

The total time is 0 + 1 + 0 + 0 = 1.

Sample Case 2

Sample Input 2
- string s = "91566165"
- string keypad = "639485712"

Sample Output 2
11

Explanation 2

The keypad looks like this:

6 3 9
4 8 5
7 1 2

Calculate the time it takes to types = "91566165° as follows:

- 9: Start here, so it takes 0 seconds.
- 1: It takes 2 seconds to move from 9->1
- 5: takes 1 second to move from 1 -> 5
- 6: It takes 2 seconds to move from 5 -> 6
- 6: It takes 0 seconds to move from 6 -> 6
- 1: it takes 2 seconds te move from 6 -> 1
- 6: it takes 2 seconds to move from 1 -> 6
- 5: It takes 2 seconds to move from 6 -> 5.

The total time is 0 + 2 + 1 + 2 + 0 + 2 + 2 + 2 = 11.

### SOLUTION

```javascript
/**
 * @param {string} input - The string of digits to type.
 * @param {string} keypad - A string of 9 digits (3x3 layout).
 * @returns {number} Minimum time required.
 */
function entryTime(input, keypad) {
  // Convert the keypad string into a position map
  const keyPositions = getKeyPositions(keypad);

  let totalTime = 0;

  // Iterate through consecutive digits
  for (let i = 1; i < input.length; i++) {
    const from = keyPositions[input[i - 1]];
    const to = keyPositions[input[i]];
    totalTime += getDistance(from, to);
  }

  return totalTime;
}

/**
 * Builds a mapping of digit → (row, col)
 * Example: keypad = "923857614"
 * returns { '9':[0,0], '2':[0,1], '3':[0,2], '8':[1,0], ... }
 */
function getKeyPositions(keypad) {
  const positions = {};
  for (let i = 0; i < keypad.length; i++) {
    const digit = keypad[i];
    const row = Math.floor(i / 3);
    const col = i % 3;
    positions[digit] = [row, col];
  }
  return positions;
}

/**
 * Calculates the time to move between two keys.
 * Since diagonal movement is allowed, distance = max(|dx|, |dy|)
 */
function getDistance([x1, y1], [x2, y2]) {
  const dx = Math.abs(x1 - x2);
  const dy = Math.abs(y1 - y2);
  return Math.max(dx, dy);
}
```

-------------------------------------------------------

## Bucket Fill Challenge

Digital graphics tools often make available a "bucket fill" tool that will only paint adjacent cells. 

In one fill, a modified bucket tool recolors adjacent cells (connected horizontally or vertically but not diagonally) that have the same color.

Given a picture represented as a 2-dimensional array of letters representing colors. 

Find the minimum number of fills to completely repaint the picture.

Example

picture = ["aabba", "aabba", "aaacb"]

Each string represents a row of the picture and each letter represents a cell's color.

The diagram below shows the 5 fills needed to repaint the picture.

It takes two fills each for a and b, and one for c. The array picture is shown below.

[c.f. illustration in attached screenshot]


Function Description

Complete the function strokes Required in the editor below.

strokesRequired has the follawing parameter(s):
- string picture[h]: an array of strings where each string represents one row of the picture to be painted
Output:
- int: the minimum number of fills required to repaint the picture

Constraints
- h and w refer to height and width of the graph.
- 1 <= h <= 10^5
- 1 <= w <= 10^5
- 1 <= h*w <= 10^5
- length(picture(i)) = w (where 0 <= 1 <= h)
- picture[i][j] is in the set ['a', 'b', 'c'] (where 0 <= i < h and 0 ≤ j < w)

Input Format For Custom Testing

The first line contains an integer. h that denotes the height of the picture and the number of elements in picture.

Each line / of the h subsequent lines (where 0 < i < h) contains a string that describes picture [i].

Sample Case 0

Sample Input For Custom Testing

picture[] size h = 3
picture = ["aaaba" , "ababa" , "aaaca"]

Sample Output
5

Explanation

[c.f. illustration in attached screenshot]

Letter a takes 2 fills, b takes 2 fills and c takes 1 fill for a total of 5.

Sample Case 1

Sample Input For Custom Testing

picture[]] size h = 4

picture = ["bbba", "abba", "acaa" "aaac"]

Sample Output

4

Explanation

[c.f. illustration in attached screenshot]

Letters a and b each take / fill and letter c takes 2 fills.



### SOLUTION

1. Problem Restatement

We are given a 2D grid (list of strings) where each cell is a color represented by a lowercase letter ('a', 'b', 'c').

We need to find the minimum number of fills (connected color regions) required to repaint the picture.
Cells are connected horizontally or vertically (not diagonally).

Each “fill” corresponds to one connected component of the same color.

2. Approach

This is a connected components problem in a grid.
We can use DFS or BFS to count how many connected regions exist.

Steps:

Iterate through each cell (i, j) in the grid.

If the cell hasn’t been visited:

Start a DFS/BFS to mark all connected cells of the same color as visited.

Increment the counter (fills += 1).

Continue until all cells are processed.

3. Code

```javascript
function strokesRequired(picture) {
    if (!picture || picture.length === 0) return 0;

    const h = picture.length;
    const w = picture[0].length;
    const visited = Array.from({ length: h }, () => Array(w).fill(false));   // initial 3D array with all cells to false
    const directions = [        // encodes the four possible moves from any cell in the grid
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ];

    function dfs(r, c, color) {
        const stack = [[r, c]];
        visited[r][c] = true;

        while (stack.length > 0) {
            const [x, y] = stack.pop();
            for (const [dx, dy] of directions) {
                const nx = x + dx;
                const ny = y + dy;
                if (
                    nx >= 0 && nx < h &&
                    ny >= 0 && ny < w &&
                    !visited[nx][ny] &&
                    picture[nx][ny] === color
                ) {
                    visited[nx][ny] = true;
                    stack.push([nx, ny]);
                }
            }
        }
    }

    let fills = 0;

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (!visited[i][j]) {
                dfs(i, j, picture[i][j]);
                fills++;
            }
        }
    }

    return fills;
}

// Test cases
console.log(strokesRequired(["aaaba", "ababa", "aaaca"])); // Output: 5
console.log(strokesRequired(["bbba", "abba", "acaa", "aaac"])); // Output: 4
```

-------------------------------------------------------

## E-Shop Spaghetti Code Refactor

The given function retrieves the items in a cart and its shipping costs to calculate the total to pay. 

The current code is hard to understand and maintain due to spaghetti code. 

Now the requirements have changed and we need to return the total instead of printing it to console.

Refactor the function so it applies best practices.

```javascript
function fetchDataAndProcess() {
  fetch('https://api.example.com/cart')
    .then(response => response.json())
    .then(data => {
      let total = 0;
      for (let i = 0; i < data.length; i++) {
        const product = data[i];
        let productTotal = product.price * product.quantity;
        total = total + productTotal;
      }
      fetch('https://api.example.com/shipping')
        .then(shippingCostsResponse => shippingCostsResponse.json())
        .then(shippingCosts => {
          total = total + shippingCosts.amount;
          console.log('Total Price (including shipping costs):', total);
        })
        .catch(error => {
          console.error('Error fetching shipping costs:', error);
        });
    })
    .catch(error => {
      console.error('Error fetching cart data:', error);
    });
}
```

### SOLUTION

```javascript
// --- API Layer (data fetching logic) ---
async function fetchJSON(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch from ${url}: ${response.statusText}`);
  }
  return response.json();
}
async function fetchCart() {
  return fetchJSON('https://api.example.com/cart');
}
async function fetchShipping() {
  return fetchJSON('https://api.example.com/shipping');
}

// --- Business Logic Layer (pure functions) ---
function calculateCartTotal(cart) {
  if (!Array.isArray(cart)) throw new Error('Cart must be an array');
  return cart.reduce((sum, item) => {
    const { price, quantity } = item;
    if (typeof price !== 'number' || typeof quantity !== 'number') {
      throw new Error('Invalid cart item: price and quantity must be numbers');
    }
    return sum + price * quantity;
  }, 0);
}
function calculateTotal(cartTotal, shippingAmount) {
  if (typeof cartTotal !== 'number' || typeof shippingAmount !== 'number') {
    throw new Error('Both cart total and shipping amount must be numbers');
  }
  return cartTotal + shippingAmount;
}

// --- Orchestration Layer (workflow logic) ---
async function getTotalPrice() {
  try {
    const [cart, shipping] = await Promise.all([fetchCart(), fetchShipping()]);
    const cartTotal = calculateCartTotal(cart);
    const total = calculateTotal(cartTotal, shipping.amount);
    return total;
  } catch (error) {
    console.error('Error calculating total price:', error);
    throw error;
  }
}

// --- Example usage (outside of business logic) ---
async function main() {
  try {
    const total = await getTotalPrice();
    console.log('Total price (including shipping):', total);
  } catch (err) {
    console.error('Could not retrieve total:', err.message);
  }
}
main();
```

-------------------------------------------------------

## Code Review This Snippet

Review this code. Leave comments where appropriate.

```javascript
import { useState } from "react";
import isEven from "~/utilities/isEven";

class Square extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    );
  }
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares)) {
      return;
    } else if (calculateWinner(squares[i])) {
      return;
    }
    var nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares.i = "X";
    } else {
      nextSquares["i"] = "O";
    }
    onPlay(nextSquares);
  }

  var winner = calculateWinner(squares);
  var status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onClick={handleClick} />
        <Square
          value={squares[0]}
          onSquareClick={function () {
            handleClick;
          }}
        />
        <Square
          value={squares[1]}
          onSquareClick={function () {
            handleClick;
          }}
        />
        <Square
          value={squares[2]}
          onSquareClick={function () {
            handleClick;
          }}
        />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={handleClick(3)} />
        <Square value={squares[4]} onSquareClick={handleClick(4)} />
        <Square value={squares[5]} onSquareClick={handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function Game() {
  const [history] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  var xIsNext = isEven(currentMove);
  var currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    this.state.history = nextHistory;
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    const description = "";
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key="move">
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game gameBoard">
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
        ></Board>
      </div>
      <div className="game gameBoard gameInfo">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

const calculate_winner = (squares) => {
  // assume the following request returns an array:
  //   [
  //     [0, 1, 2],
  //     [3, 4, 5],
  //     [6, 7, 8],
  //     [0, 3, 6],
  //     [1, 4, 7],
  //     [2, 5, 8],
  //     [0, 4, 8],
  //     [2, 4, 6],
  //   ];
  var lines = fetch("https://example.com/lines").then((response) => {
    response = lines;
  });

  for (var i = 0; i < lines.length; i++) {
    var a = lines[i][0];
    var b = lines[i][1];
    var c = lines[i][2];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
};
```















-------------------------------------------------------

**TODO**

Fundamentals:

3 mini exercises (without showing solution) for:
- var vs let vs const

3 mini exercises (without showing solution) for each array instance method:
- `slice`
- `filter`
- `map`
- `flat`
- `reduce`
- `sort`
- `flatMap`
- `closure`

3 mini exercises (without showing solution) using prototype methods
- class
- class inheritance
- class instantiation
- object inheritance
- Constructor Function
- Class
- Class vs Constructor Function
- Polymorphism


3 mini exercises (without showing solution) using prototype methods
- add method to a Array Object

3 mini exercises (without showing solution) using promises
- build promises
- consume promises
- consume promises: migrate from method chaining to async/await
- add timeout to returned promise


JS Live Coding :

https://www.codewars.com/kata/search/javascript?q=&beta=false&order_by=popularity%20desc

https://www.hackerrank.com/domains/algorithms

https://leetcode.com/problemset/javascript/


TS Live Coding :

https://www.codewars.com/kata/search/typescript?q=&beta=false&order_by=popularity%20desc

