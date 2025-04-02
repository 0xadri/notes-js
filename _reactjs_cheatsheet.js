
— Codecademy Feedback —
Biggest Issues
—> impossible to know if a course is up-to-date or totally outdated.
—> for instance the course on ReactNative uses deprecated libraries (years behind)
—> impossible to scroll through comments???
—> where is the community? There is very little sign of life on the website


The learn panel (left panel) is where we read the most. However it is very narrow, making it hard and annoying to read. 
—> Learn panel: increasing width would be great (i.e. with a smooth "toggle width animation"). 
—> Learn panel: more width would also allow for improved layout (could be similar to cheatsheet).
The learn panel is missing a dark mode.

The website look and feel should be improved (i.e. slicker) so it can be taken a bit more seriously, hence its courses and ceritifications.
Gamificiation could/should be improved. i.e. suggestions on what a course could be part of

If you want to start with something lighter/shorter, maybe easier to get started, I recommend Codecademy. 
The platform is really cool and a bit gamified and you do most things directly in the browser.
Each course chapter has a vid, a quizz, coding tutorials, coding projects, code hints & solutions, and also an AI to help you code, and more.
They even have a really nice duolingo-style mobile app with complementary knowledge to whatever you are doing on the laptop. 
And it's dirt cheap. 20eu per month.


//-------------------------------------------------------//

— What To Learn —
Double down on the tech that makes sense for me.
I like tech environment that is: 
 - without compilation (i.e. Javascript/Typescript over Java)
 - has consistency, creative but a bit strict (i.e. Typescript over JavaScript)
 - mature (over ten years)
 
//-------------------------------------------------------//

— How To Learn —

- always take notes, trying to summarize
- write down plenty of questions and try to answer them
- write down questions about: problem statement (the why), differences (X vs Y), trade offs, basic syntax, pair (this alway/often goes with that)

//-------------------------------------------------------//

— Docs —

https://javascript.info/
https://react.dev/learn

//-------------------------------------------------------//

— Courses —

https://www.codecademy.com/learn/react-101
https://www.codecademy.com/learn/learn-advanced-react
https://www.codecademy.com/learn/learn-react-router
https://www.codecademy.com/learn/learn-react-testing
https://www.codecademy.com/learn/learn-redux
https://www.codecademy.com/enrolled/courses/learn-typescript
https://www.codecademy.com/learn/learn-react-native
https://www.udemy.com/course/nextjs-from-scratch/ 
https://www.codecademy.com/learn/learn-node-js
https://www.codecademy.com/learn/learn-nodes-fundamentals
https://www.codecademy.com/learn/learn-express
https://www.codecademy.com/learn/learn-python-3

//-------------------------------------------------------//

— Topics I Wanna Learn —

ReactJS — DONE
 - Basics — DONE - phase 1
 - Advanced — DONE - phase 1
 - React Testing - Jest, RTL — DONE - phase 1
 - React Router - DONE - phase 1
 - Redux - RTK, ImmerJS — DONE - phase 2
Typescript — DONE - phase 2
React Native (basics) — DONE - phase 2
AWS (basics) — DONE - phase 2
NextJS
NodeJS
Express
RESTful APIs
GraphQL
Python (basics)
ML basics
Figma
Davinci Resolve

//-------------------------------------------------------//

— Topics I Learned —

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
 - promises
 - await/sync
 - destructuring, spread
 - functions, arrow functions
 - objects, arrays, etc
 - const vs let
 - spread syntax

 - AWS Cloud Practitioner, March 13th to March

Things I find difficult
 - function usage - i.e. arrow functions, self executing functions, implicit args, nested arrow functions, number of braces in functions
 - curly braces usage - sometimes has functions that execute?

//-------------------------------------------------------//

—— COMPONENTS THE WORLD ——

React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. 

A component can be as small as a button, or as large as an entire page.

//-------------------------------------------------------//

——index.js——

import React from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('app')).render(<App/>);

//-------------------------------------------------------//

——React Component——

import React from 'react';
// import React, {useState} from 'react';
// import React, { useState, useEffect } from 'react';
// import GuineaPigsSlideShow from "../components/GuineaPigsSlideShow";  // buggy: debug by adding/removing ".js"

function Component(){
}

export default Component;


——Ract Component: Props——
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


——App.js——
    alert ( `Count: ${count}`);



——Styles——
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



——Functions in Components——
// This alert fires when the component renders, not when clicked!
<button onClick={alert('You clicked me!')}>
// This creates a function to be called later, that here fires the alert
<button onClick={() => alert('You clicked me!')}>

