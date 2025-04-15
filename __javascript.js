

//-------------------------------------------------------//

— Javascript multiline string —

`x is a long
sentence in
one string`

TL;DR: backticks are awesome.

//-------------------------------------------------------//

— Javascript OR —

|| 

//-------------------------------------------------------//

— Javascript: let vs const —

let allows the variable to be reassigned multiple times.

const creates a variable that cannot be reassigned after it has been assigned a value.

//-------------------------------------------------------//

— Javascript: arrays —
        
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

//-------------------------------------------------------//

— Javascript: Promise vs Callback —

A promise is when the wife asks you to do the dishes and you say "sure honey I'll do that"

A callback is when you tell her "hey honey I finished those dishes"

An await is when she asks you to do the dishes and she's standing there in the kitchen tapping her foot

//-------------------------------------------------------//

— Javascript: Iterate Over Object —

for (let itemName in cart) {
  // do something with itemName
}

https://stackoverflow.com/a/43392879/759452

//-------------------------------------------------------//

— Javascript:  —

const remindMeLater = (task) => {
  return () => {
    return remindMeTo(task);
  }
}

const reminder = remindMeLater('get groceries');
console.log( reminder() );

//-------------------------------------------------------//

— Javascript: Switch Case —

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

//-------------------------------------------------------//

— JS: Optional Chaining —

The optional chaining (?.) operator accesses an object's property or calls a function. 
If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

obj?.prop
obj?.[expr]
func?.(args)


const nestedProp = obj.first && obj.first.second;  // Without optional chaining

becomes

const nestedProp = obj.first?.second; // With optional chaining


//-------------------------------------------------------//

— JS: Optional Chaining For Method Calls —

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


//-------------------------------------------------------//

— JS: Destructuring: Nested object and array —

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

//-------------------------------------------------------//

— Backticks —

ES6 feature, called template literals.

Use Cases: 
 - interpolate values into strings dynamically
 - JSX syntax to inject values dynamically into the render method of the component
 - allowed to split across multiple lines

Notice the extra $ Sign:

<div className={`${backgroundColor} p-6 rounded-lg shadow-md`}></div>

<img src={`/images/properties/${property.images[0]}`} />

//-------------------------------------------------------//

— localStorage and web storage —

localStorage is one of the 2 mechanisms of a browser’s web storage.

It allows users to save data as key-value pairs in the browser for later use.

Lifecycle: localStorage does not clear data when the browser closes.

Ideal for: persisting data not bound to the current browser tab.

UC: dark mode feature, persist to-do items, or persist a user’s form input values

How To:
 1. localStorage allows you to store only string values
 2. store object data to localStorage, convert it to a string - serialize it w JSON.stringify()
 3. get object data from localStorage, convert string back to object data - deserialize it w JSON.parse()

sources: 
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
https://blog.logrocket.com/storing-retrieving-javascript-objects-localstorage/
localStorage+react https://blog.logrocket.com/using-localstorage-react-hooks/

//-------------------------------------------------------//

— localStorage vs sessionStorage —

sessionStorage persists data in the browser storage as long as the current browser tab is running.

localStorage does not clear data when the browser closes. 


