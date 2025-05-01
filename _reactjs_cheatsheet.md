
-------------------------------------------------------

# Docs

https://javascript.info/

https://react.dev/learn

https://legacy.reactjs.org/ - legacy

-------------------------------------------------------

# Topics I Learned

 - `JavaScript ES6+`
 - `TypeScript`
 - `Jest`
 - `RTL`
 - `RouterJS`
 - `JSX` · `Renders` · `Re-Renders` · `Props` · `Children` · `State` · `Ref` · `Context API` · `Hooks` · `Effects` · `Custom Hooks` · `Component Functions` · `memoize` · `Prev` object (implicit) · implicits relationships (not mentioned/explained w that wording) · `callbacks` · `promises` · `async`/`await` · `API` Calls · `DB` Calls (`mongoose`) · `destructuring` (inc. `spread syntax`) · `functions`, `arrow functions` · `objects`, `arrays`, etc · `spread syntax`

-------------------------------------------------------

# Best Practices

Reusability principles:
 - To reuse JSX markup, create a component
 - To reuse logic without React Hooks, create a utility function
 - To reuse logic with React Hooks, create a custom hook
 
States
 - When updating state, always do it IMMUTABLY. Do a deep copy/clone for arrays and objects
 - When updating state based on old state, always pass a `function` with `prev` to your `state` updating function
 - Derive states from props when possible
 - Remove unnecessary states
 - Lift states if needed
 - Lift computed values if needed
 - Derive computed values when possible

Lists items must have keys
 - Keys must have unique value
 - Generate it if needed

Effects
 - One effect hook per process i.e. one effect per API call
 - If you’re not interacting with an external system, you might not need an Effect

-------------------------------------------------------

# React Project Setup: Build Tools

 - `Create React App` (CRA)
 - `Webpack`
 - `Vite`
 - `esbuild`
 - `Parcel`
 - `Snowpack`

`Create React App` (CRA): default option for developing React applications

 - Vite vs CRA : https://www.tatvasoft.com/outsourcing/2024/07/vite-vs-create-react-app.html

 - Start your project w Vite (first 14min): https://www.youtube.com/watch?v=G6D9cBaLViA

-------------------------------------------------------

# COMPONENTS THE WORLD

React apps are made out of `components`. A `component` is a piece of the UI (user interface) that has its own logic and appearance. 

A component can be as small as a `button`, or as large as an entire page.

-------------------------------------------------------

# Component Instances Work In Isolation

They use the same logic, but on their own.

-------------------------------------------------------

# Strict Mode

`Component` to help you catch errors and mistakes during development phase.

Double renders components.

-------------------------------------------------------

# Strict Mode: How To

You can wrap a specific component or your entire app.

>     import { StrictMode } from "react";
>     
>     <StrictMode>
>       <App />
>     </StrictMode>

-------------------------------------------------------

# index.js

>     import React from 'react';
>     import { createRoot } from 'react-dom/client';
>     
>     createRoot(document.getElementById('app')).render(<App/>);

-------------------------------------------------------

# React Component

>     import React from 'react';
>     // import React, {useState} from 'react';
>     // import React, { useState, useEffect } from 'react';
>     // import GuineaPigsSlideShow from "../components/GuineaPigsSlideShow";  // buggy: debug by adding/removing ".js"
>     
>     function Component(){
>     }
>     
>     export default Component;

-------------------------------------------------------

# React Component: Props

React component functions accept a single argument, a props object

props are the only argument to your component

https://react.dev/learn/passing-props-to-a-component

-------------------------------------------------------

# React Component: Props Example

>     import React from 'react';
>     function Component(props){
>       let person = props.person;
>       let size = props.size;
>     }
>     export default Component;
>     
>     import React from 'react';
>     function Component({ person, size }){ // Destructured — Same as above
>     
>     }
>     export default Component;

-------------------------------------------------------

# React: Inline Styling

>     <h1 style={{color: "red"}}> Hello, World! </h1>
>     
>     // equiv
>     const myStyle = { color: "red" }
>     <h1 style={myStyle}> Hello, World! </h1>

-------------------------------------------------------

# React: Styling

>     // in TitleScreen.module.css
>     // mind here that we switch to "className" — before we used "style" attribute
>     .btn {
>       height: 45px;
>       width: 110px;
>     }
>     // in App.js
>     import titlescreen from './styles/TitleScreen.module.css'
>     <button className={titlescreen.btn}>Play</button>

-------------------------------------------------------

# Functions in Components

>     <button onClick={alert('You clicked me!')}>  // alert fires when component renders, not when clicked!
>     
>     <button onClick={() => alert('You clicked me!')}> // alert fires when component clicked, creates function to be called later

-------------------------------------------------------

# Keys Must Have Unique Value [Best Practice] 

Prior to iterating on the list, add an id field with a unique value to each item.

Then use that field as key in the iterating code.

>     {currentRoster.map((player, index) => (
>      <div key={player.id}>
>      <p>{player.name}</p>
>      <p>{player.position}</p>
>      </div>
>     ))}

`uuid` library for generating unique id's - https://www.npmjs.com/package/uuid



