
-------------------------------------------------------

# `Imports`

`import React, { useState, useEffect } from 'react';`

-------------------------------------------------------

# `Props` vs `State`

There are two types of “model” data in React: 
 1. `Props`
 2. `State`

TL;DR
 1. `Props`: are like `arguments` you pass to a `function`, they let a parent `component` pass data to a child `component`.
 2. `State`: is like a `component`’s memory, it lets a `component` keep track of some information and change it in response to interactions.

Use Cases
 1. `Props`: customize a child `component` appearance i.e. a `Form` can pass a `color` `prop` to a `Button`.
 2. `State`: i.e. a `button` to keep track of `isHovered` `state`.

-------------------------------------------------------

# What is `Rendering` ?

`Rendering` is the process of `React` calling your `component` to figure out what they display on screen.

`Rendering` runs the entire code of a `component`.

`Rendering` aka `Mounting` aka `Executing` aka `Evaluation`

https://react.dev/learn/render-and-commit

-------------------------------------------------------

# `Rendering` vs `Re-Rendering`

 1. Rendering: initial render, React calls the `root` component.
 2. Re-Rendering: subsequent renders, React calls component whose state update triggered the render.

 1. Rendering runs the **entire code** of a component.
 2. Re-Rendering re-runs the **entire code** of a component.

https://react.dev/learn/render-and-commit

-------------------------------------------------------

# `Rendering`, `Re-Rendering` And Recursivity

`Rendering` is recursive: if the rendered component returns some other component, React will render that component next, and so on.

 1. `Rendering`: React initial render calls the `root` component, and its child components recursively.
 2. `Re-Rendering`: React calls the `component` whose state update triggered the render, and its child components recursively.

`Re-Rendering` aka `re-executing` aka `re-evaluation` aka `re-runs`

https://react.dev/learn/render-and-commit

-------------------------------------------------------

# Re-Rendering Conditions

By default, when a component re-renders:
 1. React recreates all code defined inside a `component`, including `functions`.
 2. React will recursively `re-render` all child `components` inside itself
 
A component `re-renders` when:
 1. one of its parents gets `re-rendered`
 2. one of its `props` gets updated (sent from parent)
 3. one of its `states` gets updated

TLDR: `Re-Rendering` is tightly related to the `Data Flow`, `Props`, and `States`.

https://react.dev/learn/render-and-commit

-------------------------------------------------------

# `Components` Forget Everything

`Components` have amnesia.

When `components` `re-render`, all the previous values are lost because it re-runs from scratch.

For `states` that persist across `re-renders`, we must define them using `useState()`.

REACT STATES PERSIST ACROSS RE-RENDERS

-------------------------------------------------------

# `State` or not `State`

Figuring out if data in my app is a `state` or not.

 - Does it remain unchanged over time? If so, it is not a `state`.
 - Is it passed-in from a parent via `props`? If so, it is not a `state`.
 - Can you compute it based on existing `state` or `props` in your `component`? If so, it definitely is not a `state`.

-------------------------------------------------------

# Controlled `Components` - aka `form` fields controlled by `state` hook

When a `form` has one or more fields controlled by a `state` hook (`useState()`), we call it a controlled `component`.

Maintains any mutable `state` values within the `state` property of our `components`.

 - How: using `useState()` and value+onChange `attributes` on `input` or other element.
 - Best: use controlled `components` whenever possible.
 - Why: allow for change-by-change tracking of `input` `form` values, they better align with React’s pattern of storing mutable data in a `component`’s state.

-------------------------------------------------------

# Uncontrolled `Component` - uncontrolled `form` fields

A `form` element that maintains its own `state` in the DOM.

 - How: uses `useRef()` and `ref` attribute on `input` and `onchange` attribute on `form`.
 - Best: if you only need access to the value of the `form` on submission
 - Always: w files, for `<input>` `form` elements with the `type="file"` attribute.

-------------------------------------------------------

# `Re-Rendering` `Component` From Within Itself

`useState()` is a React Hook that lets you add a `state` variable to your `component`.

Once the `component` has been initially `rendered`, you can trigger further `renders` by updating its `state`.

-------------------------------------------------------

# React Data Flow

React uses ONE-WAY data flow.

`Props` and `state` flow DOWN the hierarchy from parent to child `component`.

-------------------------------------------------------

# Two-Way Data Binding

React does NOT have built-in `two-way data binding`.

But you can achieve the same effect by combining `component` `state` with `event` handlers.

This way, data can flow UP from children `components` deep in the hierarchy up to a top `component`.

This reverse flow is required to update the `component` holding the `state`.

```javascript
 import { useState } from "react";

 export default function TwoWayBindingExample() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}              // value comes from state
        onChange={(e) => setName(e.target.value)}     // updates state when the user types → input and state stay in sync
      />
      
      <p>Hello {name || "Stranger"}</p>
    </div>
  );
 }
```

This is effectively two-way binding:
 - `Input` → `State`
 - `State` → `Input`

-------------------------------------------------------

# Why Use Two-Way Data Binding ?

The `two-way data binding pattern` is common in `forms`, `search bars`, or `live previews`.

If you’re building more complex forms, you may want to use 3rd party libraries to simplify two-way binding across many fields.

-------------------------------------------------------

# `Props`: Basic Example

```javascript
 const element = <Welcome name="Sara" />;

 function Welcome(props) { return <h1>Hello, {props.name}</h1>; }
 // Equivalent...
 function Welcome({name}) { return <h1>Hello, {name}</h1>; }
```

-------------------------------------------------------

# `Props` Forwarding With `Spread` Syntax

## Example A

```javascript
 const Button = ({ children, ...props }) => {
  return (
    <button className="someclasses" {...props}>
      {children}
    </button>
  );
 };
 export default Button;
```

Use such as

```javascript
 <Button greeting="hey" name="Joe">Click Me</Button>
```

## Example B

```javascript
 export default function Input({richText, ...props}) {
  if (richText) return <textarea {...props} />
  else return <input {...props} />
 }
```

Use such as

```javascript
 <Input richText="hey this is some fancy text" name="long-text">
 <Input value="James" name="fname">
```

https://react.dev/learn/passing-props-to-a-component#forwarding-props-with-the-jsx-spread-syntax

-------------------------------------------------------

# Hooks: State Hooks, Effect Hooks

Hooks allow us to perform essential logic with our function `components`

Hooks let us “hook into” the internal `component` `state` for managing dynamic data in function `components`.
 - `useState()`: Hook to manage `state`
 - `useEffect()`: Hook to execute code after a `render`

Two main rules to keep in mind when using Hooks:
 - Only call Hooks from React functions.
 - Only call Hooks at the top level - never within other functions, conditionals, or loop blocks

-------------------------------------------------------

# State Hook

State lets a component “remember” information like user input.

Updating a `state` re-renders your component.

THREE things to setup: 
 1. `useState` call
 2. value attribute in `form` element
 3. `onChange` function handler

```javascript
 // state setter declaration - useState call
 const [phone, setPhone] = useState('');
 const [cool, setCool] = useState([]);
 const [formState, setFormState] = useState({});
 const [categories, setCategories] = useState(null); // for object

 // form element declaration for value and onChange
 <input name="lastname" onChange={handleLastnameChange} />
 <form onSubmit={handleSubmit}><input type="submit" value="Submit" /></form>
```

-------------------------------------------------------

# State Hook: Updating And Prev Object [Best Practice]

`functional update` aka `functional form`: passing a `function` with `prev` to your `state` updating function

When updating `state` is based on `old state`, ALWAYS use a `functional update`:
 - otherwise the update is scheduled for "later"
 - the updating `function` has an implicit parameter (often called `prev`) with the latest value of the state.
 - `functional update` ensures that you are working with the latest `state` snapshot, especially in scenarios where `state` updates are asynchronous.

When updating `state` is NOT based on `old state`, NEVER use a `functional update`:
 - not necessary
 - confusing for other devs reading your code

-------------------------------------------------------

# State Hook: Functional Update When State/Prev Is A Number

`functional update` = `functional form`.

```javascript
 const [count, setCount] = useState(0);

 const handleClick = () => {
  setCount((prevCount) =>  prevCount + 1); // prevCount is whatever is defined in the useState() argument
 };
```

-------------------------------------------------------

# State Hook: Functional Update When State/Prev Is An Object [Best Practice]

`functional update` = `functional form`.

When State/Prev Is An Object, ALWAYS:
 - do it IMMUTABLY.
 - do a deep copy/clone.

Examples below for array, 2D array, shallow object, nest objects.

https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39659798

-------------------------------------------------------

# State Hook: Updating When State Is Array

```javascript
 const [students, setStudents] = useState(["Max","Lauren","Marc"]);

 const handleClickAdd = (e) => {
  const name = e.target.value;
  setStudents((students) => {   // Add Item When State Is Array
    const newStudents = [...students];   // Clone array for immutability
    newStudents.push(name);   // Modify array
    return newStudents;
  });
 };

 const handleClickRemove = (e) => {
  const name = e.target.value;
  setStudents((students) => {   // Remove Item When State Is Array
    const newStudents = [...students];   // Clone array for immutability
    const index = newStudents.indexOf(name);
    if (index > -1) newStudents.splice(index, 1);   // Modify array
    return newStudents;
  });
 };

 <button onClick={handleClickAdd} value="Jamie">ADD STUDENT "Jamie"</button>
 <button onClick={handleClickRemove} value="Jamie">REMOVE STUDENT "Jamie"</button>
```

-------------------------------------------------------

# State Hook: Updating When State Is Two Dimensional Array

```javascript
 const gameBoard = [
  ["max",null,null],
  [null,"adri",null],
  [null,"james",null],
 ]

 const newBoard = [...gameBoard.map( (array) => [...array] )];   // Clone 2D array for immutability
```

-------------------------------------------------------

# State Hook: Updating When State Is Shallow Object

```javascript
 const [profile, setProfile] = useState({
  name: "James",
  city: "London",
 });

 const handleClick = (keyName, value) => {
  setProfile((prev) => ({
    ...prev, // Clone object for immutability (Shallow Clone)
    [keyName]: value, // Add/Update Property
  }));
 };

 <button onClick={() => handleClick("age", "33")}>UPDATE AGE TO 33</button>
 <button onClick={() => handleClick("age", "44")}>UPDATE AGE TO 44</button>
```

-------------------------------------------------------

# State Hook: Updating, State/Prev Is Object With Nested Objects

Assume state is an object with a property 'data'.

```javascript
 const [person, setPerson] = useState({
  name: "James",
  data: {
    dob-year: 1988
  }
 });

 setPerson(person => {
  return {
    ...person,
    data: {
      ...person.data,
      someProperty: newValue
    }
  };
 });
```

-------------------------------------------------------

# State Hook: Avoid Intersecting States [Best Practice]

ALWAYS have a single piece of data managed by a single state only.

Prefer `computed` values - keep number of states to a minimum.

-------------------------------------------------------

# State Hook: Misc [Best Practice]

 - If updating `state` based on `old state`, use `prev` (functional updates)
 - Derive `states` from `props` when possible
 - Remove unnecessary `states`
 - Lift `states` if needed
 - Lift `computed` values if needed
 - Derive `computed` values when possible - instead of creating more `states`

-------------------------------------------------------

# Effect Hook: Use Cases

Effect Hook = `escape hatch`.

Effects are an `escape hatch` from the React paradigm.

`escape hatches`: features that let you “step outside” React and connect to external systems.

Effects let a component connect to and `synchronize` with external systems, with non-React code i.e. deal with network, API calls, DB calls, browser DOM, animations and other non-React code.

Other `escape hatches` include `refs`, and `custom Hooks`.

-------------------------------------------------------

# Effect Hook [Best Practice]

Effect hooks ALWAYS run AFTER a component renders.

One effect hook per process i.e. one API call per effect. NEVER use a single Effect to synchronize several independent processes i.e. two API fetch calls

Don’t use Effects to orchestrate the data flow of your application. 

If you’re not interacting with an external system, you might not need an Effect.

If different parts of your Effect should re-run for different reasons, split it into several Effects.

https://react.dev/learn/removing-effect-dependencies#is-your-effect-doing-several-unrelated-things

-------------------------------------------------------

# Effect Hook: How To

Effect hooks ALWAYS run AFTER a component renders.

No Condition: Runs each time a component renders

```javascript
 useEffect(() => {
    alert ( "Yo!" );
 });
```

Conditional Re-Render: Runs only ONCE, when the component `mounts`

```javascript
 useEffect(() => {
  alert("component rendered for the first time");
 }, []);
```

Conditional Re-Render: Runs MANY times, when `count` or `input` changes

```javascript
 useEffect(() => {
  document.title = `You clicked ${count} times`;
 }, [count, input]); 
```

Conditional Re-Render: Cleanup Function: Runs when component `unmounts` AND before calling the effect again

```javascript
 useEffect(()=>{
  alert ( "Yo!" );
  // clean up
  return () => {
    alert ( "Remove something!" );
  };
 });
```

Conditional Re-Render: Cleanup Function: Here used to remove handler

```javascript
 useEffect(()=>{
  document.addEventListener('keydown', handleKeyPress);
  // clean up
  return () => {
    document.removeEventListener('keydown', handleKeyPress);
  };
 });
```

-------------------------------------------------------

# Functions: Multi line return with JSX

```javascript
 const HeaderComponent = () => {
  const classVal = "blue";
  return (
   <h1 className = {classVal} />
  );
 }
```

----------------------

# `States` vs `Refs`

Similar to `States`:
 - `Refs` do not loose value when the component `re-renders`
 - `Refs` persists across `re-renders`

But unlike `States`:
 - Setting `Refs` to new values does NOT trigger `re-render`.

States:
 - cause `component` `re-evaluation` (`re-renders`) when changed
 - should be used for values directly reflected in the UI
 - should NOT be used for "behind the scenes" values wo direct UI impact 

Refs
 - Do NOT cause `component` `re-evaluation` when changed
 - Can be used for direct DOM element access (remember `jQuery` selectors??)

https://react.dev/reference/react/useRef

----------------------

# Lifting States

When multiple components can all update the same state, the principle is: 
 - The state lives in the common parent
 - All children get the state and the updater function via props

Example: Three components updating a counter

```javascript
 import React, { useState } from 'react';

 function Incrementer({ counter, setCounter }) {
  return <button onClick={() => setCounter(counter + 1)}>Increment</button>;
 }

 function Decrementer({ counter, setCounter }) {
  return <button onClick={() => setCounter(counter - 1)}>Decrement</button>;
 }

 function Resetter({ setCounter }) {
  return <button onClick={() => setCounter(0)}>Reset</button>;
 }

 function Parent() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <Incrementer counter={counter} setCounter={setCounter} />
      <Decrementer counter={counter} setCounter={setCounter} />
      <Resetter setCounter={setCounter} />
    </div>
  );
 }

 export default Parent;
```

 1. `counter` lives in the Parent component.
 2. All child components (`Incrementer`, `Decrementer`, `Resetter`) receive `setCounter` via props.
 3. Any child can update the counter, causing the parent to re-render.
 4. All children always see the latest state, because the parent passes it down again on each render.


----------------------

**TODO**

Debouncing Clicks Actions


 