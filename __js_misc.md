

-------------------------------------------------------

# Javascript multiline string

`x is a long
sentence in
one string`

TL;DR: backticks are awesome.

-------------------------------------------------------

# Javascript OR

|| 

-------------------------------------------------------

# Javascript: let vs const

let allows the variable to be reassigned multiple times.

const creates a variable that cannot be reassigned after it has been assigned a value.

-------------------------------------------------------

# Javascript: arrays
        
// forEach
danceMoves.forEach( move => performDanceMove(<something>))

const keys = Object.keys(events); // dynamically get all the properties of an object
keys.forEach( (eventKey) => {
  // do something
});
    
// filter()
myArray.filter(song => song !== action.payload);  // "song" is the current item, it get removed if equal to action.payload

const favRecipes = allRecipes.filter( (recipe) => {
  return recipe.id !== 18 // do something
})

const favoriteRecipes = state.favoriteRecipes.filter( (recipe) => {
  return recipe.id !== action.payload.id; 
})

// array.slice()
const removeItemAtIndex = (list, index) => {
 //const arrStart = list.slice(0,index);
 //const arrEnd = list.slice(index+1);
 return [ ...list.slice(0,index) , ...list.slice(index+1) ];
};

The spread syntax (...) and array methods such as .map(), .slice(), and .filter() can be used to immutably update the state of a complex app.

-------------------------------------------------------

# Javascript: Promise vs Callback

A promise is when the wife asks you to do the dishes and you say "sure honey I'll do that"

A callback is when you tell her "hey honey I finished those dishes"

An await is when she asks you to do the dishes and she's standing there in the kitchen tapping her foot

-------------------------------------------------------

# Javascript: Iterate Over Object

for (let itemName in cart) {
  // do something with itemName
}

https://stackoverflow.com/a/43392879/759452

-------------------------------------------------------

# Javascript: ...

const remindMeLater = (task) => {
  return () => {
    return remindMeTo(task);
  }
}

const reminder = remindMeLater('get groceries');
console.log( reminder() );

-------------------------------------------------------

# Javascript: Switch Case

function getMaxPrice(price: PriceBracket) {
  switch (price) {
    case PriceBracket.Low:
      return 10.0;
    case PriceBracket.Medium:
      return 20.0;
    case PriceBracket.High:
      return 30.0;
    default:
      throw new Error('Invalid PriceBracket value');
  }
}

-------------------------------------------------------

# JS: Optional Chaining

The optional chaining (?.) operator accesses an object's property or calls a function. 
If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

obj?.prop
obj?.[expr]
func?.(args)


const nestedProp = obj.first && obj.first.second;  // Without optional chaining

becomes

const nestedProp = obj.first?.second; // With optional chaining


-------------------------------------------------------

# JS: Optional Chaining For Method Calls

Optional Chaining for method calls can be much nicer for deeply-nested methods:

if (foo && foo.bar && foo.bar.baz && foo.bar.baz.qux && foo.bar.baz.qux.doSomething) {
  foo.bar.baz.qux.doSomething();
}

vs:

if (foo?.bar?.baz?.qux?.doSomething) {
  foo.bar.baz.qux.doSomething();
}

vs:

foo?.bar?.baz?.qux?.doSomething?.();


-------------------------------------------------------

# JS: Destructuring: Nested object and array

— Example 1 —
const obj = { prop1: x, prop2: y, prop3: z };
const { prop1: x, prop2: y, prop3: z } = obj;
// Equivalent to:
// const x = obj.prop1, y = obj.prop2, z = obj.prop3;

— Example 2 —

const metadata = {
  title: "Scratchpad",
  translations: [
    {
      locale: "de",
      title: "JavaScript-Umgebung",
    },
  ]
};

const {
  title: englishTitle, // rename
  translations: [
    {
      title: localeTitle, // rename
    },
  ],
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle); // "JavaScript-Umgebung"

-------------------------------------------------------

# Backticks

ES6 feature, called template literals.

Use Cases: 
 - interpolate values into strings dynamically
 - JSX syntax to inject values dynamically into the render method of the component
 - allowed to split across multiple lines

Notice the extra $ Sign:

<img className={`${borderColorClass ?? ''} black-border`} src={`/img/${profile.img[0]}`} />

<div className={`${backgroundColor} p-6 rounded-lg shadow-md`}></div>

<img src={`/images/properties/${property.images[0]}`} />

-------------------------------------------------------

# Web Storage API: `sessionStorage` and `localStorage` 

Web Storage API offers 2 mechanisms: sessionStorage and localStorage.

Allows to save data as key-value pairs in the browser for later use.

Data stored here will always be available to your Javascript code and cannot be accessed from the backend. Thus you will have to manually add it to your requests in a header for example. 

This storage is only available to your app's domain and not to sub domains.

https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API

-------------------------------------------------------

# `localStorage` vs `sessionStorage`

Main difference is in data expiry:
 - `sessionStorage`: Data available only for a session (until the browser or tab is closed).
 - `localStorage`: Stores data with no expiration date, does not clear data when the browser closes; only gets cleared through JavaScript, or clearing the Browser cache/Locally Stored Data

-------------------------------------------------------

# `localStorage` 

Lifecycle: `localStorage` does not clear data when the browser closes.

Ideal for: persisting data not bound to the current browser tab.

UC: dark mode feature, persist to-do items, or persist a user’s form input values

How To:
 1. `localStorage` allows you to store only string values
 2. store object data to `localStorage`, convert it to a string - serialize it w JSON.stringify()
 3. get object data from `localStorage`, convert string back to object data - deserialize it w JSON.parse()

sources: 
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
https://blog.logrocket.com/storing-retrieving-javascript-objects-localstorage/
localStorage+react https://blog.logrocket.com/using-localstorage-react-hooks/

-------------------------------------------------------

# Cookies

TODO

-------------------------------------------------------

# How do we send cookies from the browser to the server? 

read cookies with javascript and set the request header?

TODO

-------------------------------------------------------

# How do we send cookies from the server to the browser? 

set the response header?

TODO 

-------------------------------------------------------

# Event Syntax Equivalents

const handleChange = (event) => setEmail(event.target.value);

const handleChange = ({target}) => setEmail(target.value);

const handleChange = (event) => {
  const newEmail = event.target.value;
  setEmail(newEmail);
}

-------------------------------------------------------

# functions

// Anonymous function — coz does not have a name i.e. function coolFun(){}
const greet = function () {
    console.log("Welcome to GeeksforGeeks!");
};
// ES6 introduced a new and shorter way of declaring an anonymous function, which is known as Arrow Functions
const greet = () => {
    console.log("Welcome to GeeksforGeeks!");
}
// with arg
const greet = (greeting) => {
    console.log(greeting);
}

-------------------------------------------------------

# functions: one-liner arrow functions 

/// Rule: expression is actually "returned" - great for callbacks
let func = (arg1, arg2, ..., argN) => expression;
// equivalent to
let func = function(arg1, arg2, ..., argN) {
  return expression;
};
/// Example: with several args
let sum = (a, b) => a + b;
// equiv
let sum = function(a, b) {
  return a + b;
};
alert( sum(1, 2) ); // 3
/// Example: with one arg — parenthesis can be removed
let multiTwo = n => n * 2;
// equiv
let multiTwo = function(n) {
  return n * 2;
};
alert( multiTwo(3) ); // 6
// Example: with no arg — parentheses must be present
let sayHi = () => alert("Hello!");
// equiv
let sayHi = function() {
  return alert("Hello!");
};
sayHi(); // alerts "Hello"

-------------------------------------------------------

# functions: embedded one-liner arrow functions

let students = ["John", "Pete", "Alice"];
// regular function
students.forEach(function(student) {
	alert(student);
});
// equiv
students.forEach(
	student => alert(student)
);

-------------------------------------------------------

# functions: arrow functions multi-liners

Rule: just like regular functions, add curly braces and optionally add return

—— functions: return ——
// If we want the returned expression to wrap across multiple lines, we should start it at the same line as return. 
// Or at least put the opening parentheses
const calculate = () => {
	const arbVal = 8;
    return (
    	1 + 2 +
    	arbVal
    );
}

-------------------------------------------------------

# Self-Executing Anonymous Functions

(function () {
    console.log("Welcome to GeeksforGeeks!");
})();

-------------------------------------------------------

# Objects

// create a thought object
const thought = {
  id: generateId(),
  text: text,
  expiresAt: getNewExpirationTime(),
};

-------------------------------------------------------

# Objects: Create Shallow Copy/Clone

const thought = { id: 345, text: "dreaming today" };

const thoughtClone = Object.assign({}, thought)

-------------------------------------------------------

# Objects: Create Deep Copy/Clone

https://lodash.com/docs/#cloneDeep

-------------------------------------------------------

# Primitive vs Reference Type

https://www.youtube.com/watch?v=9ooYYRLdg_g

-------------------------------------------------------

# Destructure: Objects, Arrays

// basics
const {name, value} = target;
const [a, b] = target;
// destructure in event handler
const handleChange = ({target}) => {
    setName(target.value);
}

-------------------------------------------------------





