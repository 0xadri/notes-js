
//-------------------------------------------------------//

— Docs —

A (Mostly) Complete Guide to React Rendering Behavior https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/

//-------------------------------------------------------//

— Problem Statement —

What is "Rendering"?
 1. Rendering is the process of React asking your components to describe what they want their section of the UI to look like. 
 2. This description is based on the current combination of props and state.

By default, when a component re-renders:
 1. React will recursively re-render all child components inside of it
 2. React recreates all code defined inside a component when it is re-rendered, including functions.

This behavior may create a performance issue when:
 1. rendering takes time, and "wasted renders" can add up - where UI output did not change
 2. a component has en expensive function
 3. a child component renders something expensive

This behavior becomes especially problematic when a component re-render when it actually does NOT have 

//-------------------------------------------------------//

— Solution Statement —

We want to
 1. Override that default behavior for any given component.
 2. Skip unnecessary renders for any given component whether triggered by a/ props change or b/ state change

A component re-renders when:
 1. one of its parents gets re-rendered
 2. one of its props gets updated (sent from parent)
 3. one of its states gets updated

In practice, we do NOT want to re-render (skip it) if:
 1. parent re-renders but props are unchanged
 2. a state did not actually change in value — i.e. a recalculation resulting in the same result - we want to cache it somehow

//-------------------------------------------------------//

— Solution in Code —

Memoize:
 1. React.memo() —> for COMPONENT —> skip re-render if props unchanged
 2. React.useMemo() —> for VALUE —> cache result of a calculation
 3. React.useCallback() —> for FUNCTION —> cache a function definition

//-------------------------------------------------------//

Should you add memo everywhere?

Yes. Tolerable when used kinda everywhere.

React.memo() is completely useless if the props passed to your component are always different, such as if you pass an object or a plain function defined during rendering. This is why you will often need useMemo and useCallback together with memo.

//-------------------------------------------------------//

— useMemo() Summary —

useMemo() hook memoizes VALUES returned by expensive functions

useMemo() lets you cache the RESULT of a calculation between re-renders.


— useMemo() usage —

const isPrime = useMemo( () => {
  checkIfPrime(number);
},[number]);

 
//-------------------------------------------------------//


— React.memo() usage — 

Higher-order component: component that takes another component as an argument so that it can add functionality to it.

React.memo() is such "higher-order component".

memo() lets you skip re-rendering a component when its props are unchanged.

Wrap a component in memo to get a memoized version of that component.

The memoized version will usually not be re-rendered when its parent component is re-rendered as long as its props have not changed.

export const GraphPoint = () => {
  const [on] = useState(Math.random() > 0.8);

  return <div className={`e3-graph-point ${on ? 'e3-graph-point-on' : ''}`} />;
};

// becomes
export const GraphPoint = React.memo(() => {
  const [on] = useState(Math.random() > 0.8);

  return <div className={`e3-graph-point ${on ? 'e3-graph-point-on' : ''}`} />;
});


//-------------------------------------------------------//

— React.useCallback() usage —

useCallback() allows us to memoize a FUNCTION, preventing React from recreating that function when the component re-renders.

This hook is particularly important when passing functions as props to components memoized with React.memo(). Since React.memo() compares props between renders, it checks if each prop is the same before and after each render.
—> The problem is that in JavaScript, two identical functions will not equal each other since they are stored in the language as two separate references.
—> useCallback() complements React.memo() — never use it wo React.memo() being used elsewhere

// Original Code
const CounterContainer = () => {
  const [count, setCount] = useState(0);
  function increment () { setCount((count) => count + 1); }
  return <MemoizedCounter onClick={increment} />
}
// Becomes
const CounterContainer = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((count) => count + 1), []);
  return <MemoizedCounter onClick={increment} />
}

//-------------------------------------------------------//
//-------------------------------------------------------//

— Code Splitting —

— Docs —

https://javascript.info/modules-dynamic-imports
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Introducing
https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Promises
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

https://react.dev/reference/react/lazy


— Problem Statement —

Sometime some code is expensive to load. We would like to delay its loading to only when needed.

We need: a technique to only send the necessary parts of our React code when the user needs them.

FYI: bundle.js contains the packaged javascript

Warning: right-click "empty cache & reload" when refreshing page to measure file size of bundle.js 


//-------------------------------------------------------//

— Using await import() —

The import() syntax is based on JavaScript Promises, so we use await to wait for the Promise to resolve and mark the function as async. 
Also, we have to add .default to the imported code after importing it

// Regular import
import moment from 'moment';
function onClick() {
  setDate(moment(new Date()).format('MM/D/YYYY'))
}
// Becomes
async function onClick() {
  const moment = await import('moment');
  // note the .default
  setDate(moment.default(new Date()).format('MM/D/YYYY'))
}

// Regular import
import getIconOptions from './getIconOptions';
const load = () => {
  const userIconOptions = getIconOptions();
  setIconOptions(userIconOptions);
};
// Becomes
const load = async () => {
  const getIconOptions = await import('./getIconOptions');
  const userIconOptions = getIconOptions.default();
  setIconOptions(userIconOptions);
}
//-------------------------------------------------------//

— Promises —

— Problem Statement —

When doing JS asynchronous programming with callbacks, you often have to call callbacks inside callbacks (nested callbacks).
We get a deeply nested doOperation() function, which is much harder to read and debug.
It can also get very hard to handle errors at specific levels, vs error handling only once at the top level.
This is sometimes called "callback hell" or the "pyramid of doom" (coz the indentation looks like a pyramid on its side).

We need something cleaner.

— Promises: Clean Syntax For Async Programming —

Promises are the foundation of asynchronous programming in modern JavaScript. 
A promise is an object returned by an asynchronous function, which represents the current state of the operation. 
At the time the promise is returned to the caller, the operation often is not finished, but the promise object provides methods to handle the eventual success or failure of the operation.

— Promise: using .then() and .catch —

// Not so easy to read at first but gets easier as you use promises
// Remember the similarity to event handlers
// Except we can call the second then() on that return value. This is called promise chaining
const fetchPromise = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });

— Promise: using async, await and catch —

// The async keyword gives you a simpler way to work with asynchronous promise-based code. 
// Adding async at the start of a function makes it an async function:
// Becomes
async function fetchProducts() {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    console.log(data[0].name);
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}


//-------------------------------------------------------//

— Using React.lazy() with <Suspense> —

React.lazy() lets you defer loading component’s code until it is rendered for the first time.

// Regular import
import DrivingDirectionsMap from './DrivingDirectionsMap';
// Becomes
const DrivingDirectionsMap = React.lazy(() => import('./DrivingDirectionsMap')); 

That React.lazy() must be put after all the imports

// Regular component
<Confetti size={size} />
// Becomes
import Loader from './Loader';
<Suspense fallback={<Loader />}>
  <Confetti size={size} />
</Suspense>

