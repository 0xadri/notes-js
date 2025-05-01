
-------------------------------------------------------

# Docs

https://react.dev/learn/reusing-logic-with-custom-hooks

-------------------------------------------------------

# Problem Statement

I want to reuse code logic that includes a React Hook i.e. useEffect() with call to a database.

# Solution

Create a custom hook.

-------------------------------------------------------

# Custom Hook: Example One

`useCounter.js`

>     import { useState, useEffect } from "react";
>     
>     export const useCounter = (start = 0) => {
>       // set the state
>       const [counter, setCounter] = useState(start);
>     
>       // use the effect whenever counter changes
>       useEffect(() => {
>         if (counter % 2 == 0)) {
>           alert("counter is even" + counter)
>         } else {
>           alert("counter is odd" + counter)
>         }
>       }, [counter]);
>     
>       // create an easy-to-use increment function
>       const increment = () => {
>         setCounter((counter) => counter + 1);
>       };
>     
>       // return the counter value and the incrementer
>       return [counter, increment];
>     };

`App.js`

>     import React from "react";
>     import ReactDOM from "react-dom/client";
>     import { useCounter } from "./hooks/useCounter.js";
>     
>     function App() {
>       const [currentCount, increment] = useCounter();
>     
>       return (
>         <div>
>           <h2>Count: {currentCount}</h2>
>           <button onClick={increment}>Click Me!</button>
>         </div>
>       );
>     }
>     
>     export default App;

-------------------------------------------------------

# Custom Hook: Example Two

TBD: custom hooks on form ??

`useFormInput.js`

>     import { useState } from 'react';
>     
>     export function useFormInput(initialValue) {
>       const [value, setValue] = useState(initialValue);
>     
>       function handleChange(e) {
>         setValue(e.target.value);
>       }
>     
>       const inputProps = {
>         value: value,
>         onChange: handleChange
>       };
>     
>       return inputProps;
>     }

`App.js`

>     import { useFormInput } from './useFormInput.js';
>     
>     export default function Form() {
>       const firstNameProps = useFormInput('Mary');
>       const lastNameProps = useFormInput('Poppins');
>     
>       return (
>         <>
>           <label>
>             First name:
>             <input value={firstNameProps.value} onChange={firstNameProps.onChange}/>
>           </label>
>           <label>
>             Last name:
>             <input {...lastNameProps} />
>           </label>
>           <p><b>Good morning, {firstNameProps.value} {lastNameProps.value}.</b></p>
>         </>
>       );
>     }
