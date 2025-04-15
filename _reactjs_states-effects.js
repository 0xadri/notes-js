




//-------------------------------------------------------//

— Imports —

import React, { useState, useEffect } from 'react';

//-------------------------------------------------------//

— Props vs State —

There are two types of “model” data in React: 
 1. Props
 2. State

TL;DR
 1. Props: are like arguments you pass to a function, they let a parent component pass data to a child component.
 2. State: is like a component’s memory, it lets a component keep track of some information and change it in response to interactions.

Use Cases
 1. Props: customize a child component appearance i.e. a Form can pass a color prop to a Button.
 2. State: i.e. a button to keep track of isHovered state.

//-------------------------------------------------------//
//-------------------------------------------------------//

— What is "Rendering" —

Rendering is the process of React calling your component to figure out what they display on screen.
Rendering runs the entire code of a component.

https://react.dev/learn/render-and-commit

//-------------------------------------------------------//

— Rendering vs Re-Rendering —

 1. Rendering: initial render, React calls the root component.
 2. Re-Rendering: subsequent renders, React calls component whose state update triggered the render.

 1. Rendering runs the entire code of a component.
 2. Re-Rendering re-runs the entire code of a component.

https://react.dev/learn/render-and-commit

//-------------------------------------------------------//

— Rendering, Re-Rendering And Recursivity —

Rendering is recursive: if the rendered component returns some other component, React will render that component next, and so on.

 1. Rendering: React initial render calls the root component, and its child components recursively.
 2. Re-Rendering: React calls component whose state update triggered the render, and its child components recursively.

https://react.dev/learn/render-and-commit

//-------------------------------------------------------//

— Re-Rendering Conditions —

By default, when a component re-renders:
 1. React recreates all code defined inside a component, including functions.
 2. React will recursively re-render all child components inside itself
 
A component re-renders when:
 1. one of its parents gets re-rendered
 2. one of its props gets updated (sent from parent)
 3. one of its states gets updated
 
TL;DR: Re-Rendering is tightly related to the Data Flow, Props, and States.

https://react.dev/learn/render-and-commit

//-------------------------------------------------------//

— Components Forget Everything —

Components have amnesia.

When components re-render, all the previous values are lost because it re-runs from scratch.

For states that persist across re-renders (component re-runs), we must define them with useState().

REACT STATES PERSIST ACROSS RE-RENDERS

//-------------------------------------------------------//

— State or not State —

Figuring out if data in my app is a state or not.

- Does it remain unchanged over time? If so, it isn’t state.
- Is it passed in from a parent via props? If so, it isn’t state.
- Can you compute it based on existing state or props in your component? If so, it definitely isn’t state!

//-------------------------------------------------------//

— Re-Rendering Component From Within Itself —

useState() is a React Hook that lets you add a state variable to your component.

Once the component has been initially rendered, you can trigger further renders by updating its state.

//-------------------------------------------------------//

— React Data Flow —

React uses one-way data flow, passing data down the component hierarchy from parent to child component.

//-------------------------------------------------------//

— Data Flow, Props & States —

Two-way data binding???

Props and state flowing down the hierarchy = one-way flow.

Data flowing the other way: from children components deep in the hierarchy up to a top component.

This reverse flow is required to update the component holding the state.

//-------------------------------------------------------//

— Props —

Change in props triggers a potential change in the rendered JSX (similar behavior to state)

— props: basic example —
// App.js
const element = <Welcome name="Sara" />;
// Welcome.js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

Forwarding props with the JSX spread syntax 
—> https://react.dev/learn/passing-props-to-a-component#forwarding-props-with-the-jsx-spread-syntax

//-------------------------------------------------------//

— destructure: objects, arrays —

// basics
const {name, value} = target;
const [a, b] = target;
// destructure in event handler
const handleChange = ({target}) => {
    setName(target.value);
}

//-------------------------------------------------------//

— Hooks: state hooks and effect hooks —

Hooks allow us to perform essential logic with our function components

Hooks let us “hook into” the internal component state for managing dynamic data in function components.
—> useState(): Hook to manage state
—> useEffect(): Hook to execute code after a render

Two main rules to keep in mind when using Hooks:
—> Only call Hooks from React functions.
—> Only call Hooks at the top level - never within other functions, conditionals, or loop blocks

——State Hook——
// State lets a component “remember” information like user input. For
// Updating a state re-renders your component

// THREE things to setup: useState call, value attribute in form element, onChange function handler

// state setter declaration - useState call
const [phone, setPhone] = useState('');
const [cool, setCool] = useState([]);
const [formState, setFormState] = useState({});
const [categories, setCategories] = useState(null); // for object

// form element declaration for value and onChange
<input name="lastname" onChange={handleLastnameChange} />
<form onSubmit={handleSubmit}><input type="submit" value="Submit" /></form>


——state: prev object——
// Setter function's implicit object

// prevCount's type is whatever is defined in the useState() argument
setClickCount((prevCount) =>  prevCount + 1);

// prev's type is whatever is defined in the useState() argument
setProfile((prev) => ({
  ...prev,
  [name]: value
}));

// prev with a handling function
const handleClick = () => {
	setCount((prevCount) =>  prevCount + 1);
};

//-------------------------------------------------------//

—— Event Syntax Equivalents ——

const handleChange = (event) => setEmail(event.target.value);

const handleChange = ({target}) => setEmail(target.value);

const handleChange = (event) => {
  const newEmail = event.target.value;
  setEmail(newEmail);
}

//-------------------------------------------------------//


——effects: effect hook——
// Effects let a component connect to and synchronize with external systems.
// This includes dealing with network, browser DOM, animations and other non-React code.

// Rule:
// Effects are an “escape hatch” from the React paradigm. Don’t use Effects to orchestrate the data flow of your application
// If you’re not interacting with an external system, you might not need an Effect

// useEffect() function calls its 1st argument (the effect) after each time a component renders - not just once
useEffect(() => {
    alert ( "Yo!" );
});

// Effect Cleanup Function
// Called when the component is being unmounted and before calling the effect again
useEffect(()=>{
  alert ( "Yo!" );
  // clean up
  return () => {
    alert ( "Remove something!" );
  };
});

// Effect Cleanup Function — used to remove handler
useEffect(()=>{
  document.addEventListener('keydown', handleKeyPress);
  // clean up
  return () => {
    document.removeEventListener('keydown', handleKeyPress);
  };
});

// Conditional re-render - Run an effect only when the component mounts (if renders the first time)
useEffect(() => {
  alert("component rendered for the first time");
}, []);

// Conditional re-render — Only re-run the effect if the value stored by count or input changes
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count, input]); 


//-------------------------------------------------------//


——functions——
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


//-------------------------------------------------------//


—— functions: one-liner arrow functions  ——
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


—— functions: embedded one-liner arrow functions ——
let students = ["John", "Pete", "Alice"];
// regular function
students.forEach(function(student) {
	alert(student);
});
// equiv
students.forEach(
	student => alert(student)
);





—— functions: arrow functions multi-liners ——
/// Rule: just like regular functions, add curly braces and optionally add return



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
// Multi line return with JSX
const HeaderComponent = () => {
	const classVal = "blue";
    return (
		<h1
	    	className = {classVal}
		/>
    );
}

——Self-Executing Anonymous Functions——
(function () {
    console.log("Welcome to GeeksforGeeks!");
})();



——Objects———
// create a thought object
const thought = {
  id: generateId(),
  text: text,
  expiresAt: getNewExpirationTime(),
};



—— Controlled Components - aka controlled form fields ——

Maintains any mutable state values within the state property of our components.
How: uses useState() and value+onChange attributes on input or other element.
Best: use controlled components whenever possible. 
Why: allow for change-by-change tracking of input form values, they better align with React’s pattern of storing mutable data in a component’s state.


—— Uncontrolled Component - uncontrolled form fields ——

A form element that maintains its own state in the DOM.
How: uses useRef() and ref attribute on input and onchange attribute on form.
Best: if you only need access to the value of the form on submission
Always: w files, for <input> form elements with the type="file" attribute.


