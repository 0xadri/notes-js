
//-------------------------------------------------------//

# Docs —

https://javascript.info/
https://react.dev/learn

//-------------------------------------------------------//

# Topics I Learned —

 - JavaScript ES6+
 - TypeScript
 - Jest
 - RTL
 - RouterJS
 - Hooks
 - Effects
 - Custom Hooks
 - Rendering
 - JSX
 - props
 - component functions
 - custom hooks
 - memoize
 - prev object - implicit
 - implicits relationships (not mentioned/explained w that wording)
 - callbacks
 - promises async/await
 - API Calls
 - DB Calls (mongoose)
 - destructuring, inc w spread syntax
 - functions, arrow functions
 - objects, arrays, etc
 - const vs let
 - spread syntax


Things I find difficult
 - function usage - i.e. arrow functions, self executing functions, implicit args, nested arrow functions, number of braces in functions
 - curly braces usage - sometimes has functions that execute?

//-------------------------------------------------------//

# React Project Setup: Build Tools —

 - Create React App(CRA)
 - Webpack
 - Vite
 - esbuild
 - Parcel
 - Snowpack

Create React App(CRA): default option for developing React applications

 - Vite vs CRA : https://www.tatvasoft.com/outsourcing/2024/07/vite-vs-create-react-app.html

 - Start your project w Vite (first 14min): https://www.youtube.com/watch?v=G6D9cBaLViA

//-------------------------------------------------------//

#— COMPONENTS THE WORLD ——

React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. 

A component can be as small as a button, or as large as an entire page.

//-------------------------------------------------------//

#— index.js ——

import React from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('app')).render(<App/>);

//-------------------------------------------------------//

#— React Component ——

import React from 'react';
// import React, {useState} from 'react';
// import React, { useState, useEffect } from 'react';
// import GuineaPigsSlideShow from "../components/GuineaPigsSlideShow";  // buggy: debug by adding/removing ".js"

function Component(){
}

export default Component;


—— React Component: Props ——
// https://react.dev/learn/passing-props-to-a-component
// props are the only argument to your component
// React component functions accept a single argument, a props object
import React from 'react';
function Component(props){
  let person = props.person;
  let size = props.size;
}
export default Component;
// Destructured — Same as above
import React from 'react';
function Component({ person, size }){
}
export default Component;


—— App.js ——
    alert ( `Count: ${count}`);



—— Styles ——
// inline
<h1 style={{color: "red"}}> Hello, World! </h1>

// equiv
const myStyle = { color: "red" }
<h1 style={myStyle}> Hello, World! </h1>

// in TitleScreen.module.css
// mind here that we switch to "className" — before we used "style" attribute
.btn {
  height: 45px;
  width: 110px;
}
// in App.js
import titlescreen from './styles/TitleScreen.module.css'
<button className={titlescreen.btn}>Play</button>



—— Functions in Components ——
// This alert fires when the component renders, not when clicked!
<button onClick={alert('You clicked me!')}>
// This creates a function to be called later, that here fires the alert
<button onClick={() => alert('You clicked me!')}>

