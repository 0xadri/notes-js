 
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

 1. Rendering: initial render, React calls the root component.
 2. Re-Rendering: subsequent renders, React calls component whose state update triggered the render.

 1. Rendering runs the entire code of a component.
 2. Re-Rendering re-runs the entire code of a component.

https://react.dev/learn/render-and-commit

-------------------------------------------------------

# `Rendering`, `Re-Rendering` And Recursivity

`Rendering` is recursive: if the rendered component returns some other component, React will render that component next, and so on.

 1. `Rendering`: React initial render calls the root component, and its child components recursively.
 2. `Re-Rendering`: React calls component whose state update triggered the render, and its child components recursively.

`Re-Rendering` aka `re-executing` aka `re-evaluation`

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
 
TL;DR: `Re-Rendering` is tightly related to the `Data Flow`, `Props`, and `States`.

https://react.dev/learn/render-and-commit

-------------------------------------------------------

# `Components` Forget Everything

`Components` have amnesia.

When `components` `re-render`, all the previous values are lost because it re-runs from scratch.

For `states` that persist across `re-renders` (aka component re-runs), we must define them with `useState()`.

REACT STATES PERSIST ACROSS RE-RENDERS

-------------------------------------------------------

# `State` or not `State`

Figuring out if data in my app is a `state` or not.

- Does it remain unchanged over time? If so, it isn’t `state`.
- Is it passed in from a parent via `props`? If so, it isn’t `state`.
- Can you compute it based on existing `state` or `props` in your `component`? If so, it definitely isn’t `state`!

-------------------------------------------------------

# Controlled `Components` - aka `form` fields controlled by `state` hook

When a `form` has one or more fileds controlled by a `state` hook (`useState()`), we call it a controlled `component`.

Maintains any mutable `state` values within the `state` property of our `components`.

 - How: uses `useState()` and value+onChange `attributes` on `input` or other element.
 - Best: use controlled `components` whenever possible.
 - Why: allow for change-by-change tracking of `input` `form` values, they better align with React’s pattern of storing mutable data in a `component`’s state.

-------------------------------------------------------

# Uncontrolled `Component` - uncontrolled `form` fields

A `form` element that maintains its own `state` in the DOM.

 - How: uses `useRef()` and ref attribute on input and onchange attribute on `form`.
 - Best: if you only need access to the value of the `form` on submission
 - Always: w files, for `<input>` `form` elements with the `type="file"` attribute.

-------------------------------------------------------

# `Re-Rendering` `Component` From Within Itself

`useState()` is a React Hook that lets you add a `state` variable to your `component`.

Once the `component` has been initially `rendered`, you can trigger further `renders` by updating its `state`.

-------------------------------------------------------

# React Data Flow

React uses one-way data flow, passing data down the `component` hierarchy from parent to child `component`.

-------------------------------------------------------

# Data Flow, `Props` & `States`

Two-way data binding???

`Props` and `state` flowing down the hierarchy = one-way flow.

Data flowing the other way: from children `components` deep in the hierarchy up to a top `component`.

This reverse flow is required to update the `component` holding the `state`.

-------------------------------------------------------

# `Props`: Basic Example

>     const element = <Welcome name="Sara" />;
>     
>     function Welcome(props) { return <h1>Hello, {props.name}</h1>; }
>     // Equivalent...
>     function Welcome({name}) { return <h1>Hello, {name}</h1>; }

-------------------------------------------------------

# Props Forwarding With Spread Syntax

## Example A

>     const Button = ({ children, ...props }) => {
>       return (
>         <button className="someclasses" {...props}>
>           {children}
>         </button>
>       );
>     };
>     export default Button;

Use such as

>     <Button greeting="hey" name="Joe">Click Me</Button>

## Example B

>     export default function Input({richText, ...props}) {
>       if (richText) return <textarea {...props} />
>       else return <input {...props} />
>     }

use such as

>     <Input richText="hey this is some fancy text" name="long-text">
>     <Input value="James" name="fname">

https://react.dev/learn/passing-props-to-a-component#forwarding-props-with-the-jsx-spread-syntax

-------------------------------------------------------

# Hooks: State Hooks, Effect Hooks

Hooks allow us to perform essential logic with our function `components`

Hooks let us “hook into” the internal component state for managing dynamic data in function `components`.
 - `useState()`: Hook to manage `state`
 - `useEffect()`: Hook to execute code after a `render`

Two main rules to keep in mind when using Hooks:
 - Only call Hooks from React functions.
 - Only call Hooks at the top level - never within other functions, conditionals, or loop blocks

-------------------------------------------------------

# State Hook

State lets a component “remember” information like user input. For

Updating a `state` re-renders your component

THREE things to setup: `useState` call, value attribute in `form` element, `onChange` function handler

>     // state setter declaration - useState call
>     const [phone, setPhone] = useState('');
>     const [cool, setCool] = useState([]);
>     const [formState, setFormState] = useState({});
>     const [categories, setCategories] = useState(null); // for object
>     
>     // form element declaration for value and onChange
>     <input name="lastname" onChange={handleLastnameChange} />
>     <form onSubmit={handleSubmit}><input type="submit" value="Submit" /></form>

-------------------------------------------------------

# State Hook: Updating And Prev Object [Best Practice]

`functional update` aka `functional form`: passing a `function` with `prev` to your `state` updating function

When updating state based on old state, always use a `functional update`
 - otherwise the update is scheduled for "later"
 - the updating `function` has an implicit parameter (often called `prev`) with the latest value of the state.
 - `functional update` ensures that you are working with the latest `state` snapshot, especially in scenarios where `state` updates are asynchronous.

When updating state NOT based on old state, do NOT pass a `function` to your `state` updating function
 - not necessary
 - confusing for other devs reading your code

-------------------------------------------------------

# State Hook: Updating, State/Prev Is Number

>     const [count, setCount] = useState(0);
>     
>     const handleClick = () => {
>      setCount((prevCount) =>  prevCount + 1); // prevCount is whatever is defined in the useState() argument
>     };

-------------------------------------------------------

# State Hook: Updating: Always Use A Deep Clone [Best Practice]

When using the `setXYZ` method, always do it IMMUTABLY. Especially when arrays or objects. 
  - Do a deep copy/clone

https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39659798

-------------------------------------------------------

# State Hook: Updating When State Is Array

>     const [students, setStudents] = useState(["Max","Lauren","Marc"]);
>     
>     const handleClickAdd = (e) => {
>       const name = e.target.value;
>       setStudents((students) => { // Add Item When State Is Array
>         const newStudents = [...students]; // Clone array for immutability
>         newStudents.push(name); // Modify array
>         return newStudents;
>       });
>     };
>     
>     const handleClickRemove = (e) => {
>       const name = e.target.value;
>       setStudents((students) => { // Remove Item When State Is Array
>         const newStudents = [...students]; // Clone array for immutability
>         const index = newStudents.indexOf(name);
>         if (index > -1) newStudents.splice(index, 1); // Modify array
>         return newStudents;
>       });
>     };
>     
>     <button onClick={handleClickAdd} value="Jamie">ADD STUDENT "Jamie"</button>
>     <button onClick={handleClickRemove} value="Jamie">REMOVE STUDENT "Jamie"</button>

-------------------------------------------------------

# State Hook: Updating When State Is Two Dimensional Array

>     const gameBoard = [
>       ["max",null,null],
>       [null,"adri",null],
>       [null,"james",null],
>     ]
>     
>     const newBoard = [...gameBoard.map( (array) => [...array] )]; // Clone 2D array for immutability

-------------------------------------------------------

# State Hook: Updating When State Is Shallow Object

>     const [profile, setProfile] = useState({
>       name: "James",
>       city: "London",
>     });
>     
>     const handleClick = (keyName, value) => {
>       setProfile((prev) => ({
>         ...prev, // Clone object for immutability (Shallow Clone)
>         [keyName]: value, // Add/Update Property
>       }));
>     };
>     
>     <button onClick={() => handleClick("age", "33")}>UPDATE AGE TO 33</button>
>     <button onClick={() => handleClick("age", "44")}>UPDATE AGE TO 44</button>

-------------------------------------------------------

# State Hook: Updating, State/Prev Is Object With Nested Objects

Assume state is an object with a property 'data'.

>     const [person, setPerson] = useState({
>       name: "James",
>       data: {
>         dob-year: 1988
>       }
>     });
>     
>     setPerson(person => {
>       return {
>         ...person,
>         data: {
>           ...person.data,
>           someProperty: newValue
>         }
>       };
>     });

-------------------------------------------------------

# State Hook: Avoid Intersecting States [Best Practice]

Always to only have a piece of data managed only by one state.

Prefer computed values

-------------------------------------------------------

# State Hook: Misc [Best Practice]

 - If updating state based on old state, use prev
 - Derive states from props when possible
 - Remove unnecessary states
 - Lift states if needed
 - Lift computed values if needed
 - Derive computed values when possible

-------------------------------------------------------

# Effect Hook: Use Cases

Effects let a component connect to and `synchronize` with external systems.

i.e. dealing with network, browser DOM, animations and other non-React code.

-------------------------------------------------------

# `escape hatches`

Effects are an `escape hatch` from the React paradigm.

`escape hatches`: features that let you “step outside” React and connect to external systems.

Other `escape hatches` include refs, custom Hooks

-------------------------------------------------------

# Effect Hook [Best Practice]

One effect hook per process i.e. one API call per effect. Do not use a single Effect to synchronize several independent processes i.e. two API fetch calls

Don’t use Effects to orchestrate the data flow of your application. 

If you’re not interacting with an external system, you might not need an Effect.

If different parts of your Effect should re-run for different reasons, split it into several Effects.

https://react.dev/learn/removing-effect-dependencies#is-your-effect-doing-several-unrelated-things

-------------------------------------------------------

# Effect Hook: How To

useEffect() function calls its 1st argument (the effect) after each time a component renders - not just once

>     useEffect(() => {
>         alert ( "Yo!" );
>     });

Effect Cleanup Function
Called when the component is being unmounted and before calling the effect again

>     useEffect(()=>{
>       alert ( "Yo!" );
>       // clean up
>       return () => {
>         alert ( "Remove something!" );
>       };
>     });

Effect Cleanup Function — used to remove handler

>     useEffect(()=>{
>       document.addEventListener('keydown', handleKeyPress);
>       // clean up
>       return () => {
>         document.removeEventListener('keydown', handleKeyPress);
>       };
>     });


Conditional re-render - Run an effect only when the component mounts (if renders the first time)

>     useEffect(() => {
>       alert("component rendered for the first time");
>     }, []);
>     
>     // Conditional re-render — Only re-run the effect if the value stored by count or input changes
>     useEffect(() => {
>       document.title = `You clicked ${count} times`;
>     }, [count, input]); 

-------------------------------------------------------

# Functions: Multi line return with JSX

>     const HeaderComponent = () => {
>      const classVal = "blue";
>      return (
>       <h1 className = {classVal} />
>      );
>     }

----------------------

# States vs Refs

Like `States`, `Refs` do not loose value when the component `re-renders` (`re-executes`).

But unlike `States`, setting `Refs` to new values does not trigger `re-render`.

States:
 - cause `component` `re-evaluation` (`re-renders`) when changed
 - should be used for values directly reflected in the UI
 - should NOT be used for "behind the scenes" values wo direct UI impact 

Refs
 - Do NOT cause `component` `re-evaluation` when changed
 - Can be used for direct DOM element access (remember `jQuery` selectors??)

https://react.dev/reference/react/useRef

----------------------

# Debouncing Clicks Actions


