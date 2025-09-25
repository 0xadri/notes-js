
-------------------------------------------------------

# Docs

lingo
 - "Components subscribing to state" ?

-------------------------------------------------------

# Context API

TLDR: app-wide states that you can inject anywhere


-------------------------------------------------------

# Context: How To

Contexts come with a `.Provider` component that can also take in a value to be made available to child components – without having to prop drill the value.

Child components, acting as `Consumers`, may subscribe to a Context’s value from their closest parent `Provider` with React’s `useContext()` hook.

Components subscribing to a `Context` will receive the value for the `Provider` closest to them in the application tree.

`Providers` may be given an object containing the React `state` and its corresponding state updater function. Subscribing child components may then use the state updater function to update the state for the Context.

Three parts:
 - Context providers
 - Context wrappers
 - `useContext` Hook
 
------------------------------------------------------

# Context: Example 1: Without Context API

```javascript
 // App.js
 import React from "react";
 import ReactDOM from "react-dom/client";

 import { ContactItem } from "./ContactItem";

 const family = [
  { name: "Finn the Human" },
  { name: "Jake the Dog" },
  { name: "Dan the Great" },
 ];

 function App() {
  return (
  	  <>
       <div>
        <h1>Contact Item 1</h1>
        <ContactItem name={family[0].name} theme="dark"/>
       </div>
       <div>
        <h1>Contact Item 2</h1>
        <ContactItem name={family[1].name} theme="light"/>
       </div>
      </>
  );
 }
 export default App;

 // ContactItem.js
 import React from "react";

 export const ContactItem = ({ name , theme }) => {
  return (
    <div className={`theme-${theme}`}>
      {name} ! <br/><br/>
      Prop theme is {theme}  <br/>
    </div>
  );
 };
```

-------------------------------------------------------

# Context: Example 1: With Context API

```javascript
 // ThemeContext.js
 import React from 'react';

 export const ThemeContext = React.createContext();

 // App.js
 import React from "react";
 import ReactDOM from "react-dom/client";
 import {ThemeContext} from "./ThemeContext";

 import { ContactItem } from "./ContactItem";

 const family = [
  { name: "Finn the Human" },
  { name: "Jake the Dog" },
  { name: "Dan the Great" },
 ];

 function App() {
  return (
  	<>
     <ThemeContext.Provider value={"light"}>
      <div>
        <h1>Contact Item</h1>
        <ContactItem name={family[0].name}/>
      </div>
     </ThemeContext.Provider>
     <ThemeContext.Provider value={"dark"}>
      <div>
        <h1>Contact Item 2</h1>
        <ContactItem name={family[1].name}/>
      </div>
     </ThemeContext.Provider>
    </>
  );
 }
 export default App;

 // ContactsItem.js
 import React , {useContext} from "react";
 import {ThemeContext} from "./ThemeContext";

 export const ContactItem = ({ name }) => {
  const themeInContext = useContext(ThemeContext);
  return (
    <div className={`theme-${themeInContext}`}>
      {name} ! <br/><br/>
      Context theme is {themeInContext} {themeInContext === "dark" ? "🌑" : "☀"}
    </div>
  );
 };
```

-------------------------------------------------------

# Context: Example 1: With Context API + Wrapper

```javascript
 // ThemeContext.js
 import React , {useState} from 'react';

 export const ThemeContext = React.createContext();

 export const ThemeArea = ({children,initialTheme}) => {
  const [count, setCount] = useState(0);
  return (
    <ThemeContext.Provider value={{initialTheme,count,setCount}}>
      {children}
    </ThemeContext.Provider>
  );
 };

 // App.js
 import React from "react";
 import {ThemeArea} from "./ThemeContext";

 import { ContactItem } from "./ContactItem";

 const family = [
  { name: "Finn the Human" },
  { name: "Jake the Dog" },
  { name: "Dan the Great" },
 ];

 function App() {
  return (
    <>
    <ThemeArea initialTheme={"light"}>
      <div>
        <h1>Contact Item 1</h1>
        <ContactItem name={family[0].name}/>
      </div>
    </ThemeArea>
    <ThemeArea initialTheme={"dark"}>
      <div>
        <h1>Contact Item 2</h1>
        <ContactItem name={family[1].name}/>
      </div>
    </ThemeArea>
    </>
  );
 }
 export default App;


 // ContactItem.js
 import React , {useContext} from "react";
 import {ThemeContext} from "./ThemeContext";

 export const ContactItem = ({ name }) => {
  const { initialTheme, count, setCount } = useContext(ThemeContext);
  return (
    <div className={`theme-${initialTheme}`}>
      {name} ! <br/><br/>
      Context theme is {initialTheme} {initialTheme === "dark" ? "🌑" : "☀"} <br/><br/>
      <button onClick={() => setCount(count => count+1)}>
        Clicked: {count} time(s)
      </button>
    </div>
  );
 };
```

-------------------------------------------------------

# Context: Example 1: With Context API + Wrapper + 2 Buttons

ThemeContext.js

```javascript
 import React , {useState} from 'react';

 export const ThemeContext = React.createContext();

 export const ThemeArea = ({children,initialTheme}) => {
  const [count, setCount] = useState(0);
  const [fontSize, toggleFontSize] = useState("large");
  return (
    <ThemeContext.Provider value={{initialTheme,count,setCount,fontSize,toggleFontSize}}>
      {children}
    </ThemeContext.Provider>
  );
 };
```

App.js

```javascript
 import React from "react";
 import {ThemeArea} from "./ThemeContext";

 import { ContactItem } from "./ContactItem";

 const family = [
  { name: "Finn the Human" },
  { name: "Jake the Dog" },
  { name: "Dan the Great" },
 ];

 function App() {
  return (
    <>
    <ThemeArea initialTheme={"light"}>
      <div>
        <h1>Contact Item 1</h1>
        <ContactItem name={family[0].name}/>
      </div>
    </ThemeArea>
    <ThemeArea initialTheme={"dark"}>
      <div>
        <h1>Contact Item 2</h1>
        <ContactItem name={family[1].name}/>
      </div>
    </ThemeArea>
    </>
  );
 }
 export default App;
```

ContactItem.js

```javascript
 import React , {useContext} from "react";
 import {ThemeContext} from "./ThemeContext";

 export const ContactItem = ({ name }) => {
  const { initialTheme, count, setCount, fontSize, toggleFontSize } = useContext(ThemeContext);
  return (
    <div className={`theme-${initialTheme}`}>
      {name} ! <br/><br/>
      Context theme is {initialTheme} {initialTheme === "dark" ? "🌑" : "☀"} <br/><br/>
      <button onClick={() => setCount(count => count+1)}>
        Clicked: {count} time(s)
      </button><br/><br/>
      <button onClick={() => toggleFontSize(toggleFontSize => (fontSize==="large") ? "regular" : "large")}>
        Click To Switch Font Size
      </button>
      now it's "{fontSize}"
    </div>
  );
 };
```

-------------------------------------------------------

# Context: Example 3

App.js

```javascript
 import React from 'react';
 import ReactDOM from 'react-dom/client';
 import { ContactsSection } from "./ContactsSection";
 import { ThemeArea } from "./ThemeContext";

 const family = [{name: "Finn the Human"},{name: "Jake the Dog"}];
 const friends = [{name: "Marceline"},{name: "Princess Bubblegum"}];
 function App() {
  return (
    <div>
      <h1>Contacts</h1>
      // JXL tag for the context
      <ThemeArea initialTheme="light">
        <ContactsSection contacts={family} name="Family" />
      </ThemeArea>
      <ThemeArea initialTheme="dark">
        <ContactsSection contacts={friends} name="Friends" />
      </ThemeArea>
    </div>
  );
 }
```

ThemeContext.js

```javascript
 import React , { useState } from "react";

 // to get the props
 export const ThemeContext = React.createContext();

 // defines JXL tag to pass the prop
 export const ThemeArea = ({ children, initialTheme }) => {
  const [theme,setTheme] = useState(initialTheme);
  
  return (
    <ThemeContext.Provider value={{theme:theme,setTheme:setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
 }
```

ContactsSection.js

```javascript
 import React from "react";
 import { ContactsList } from "./ContactsList";

 import { ThemeContext } from "./ThemeContext";

 export const ContactsSection = ({ contacts, name }) => {
  const {theme} = useContext(ThemeContext);  // get the props
  
  return (
    <div className={`theme-${theme}`}>
      <h2>{name}</h2>
      <ContactsList contacts={contacts} />
    </div>
  );
 };
```

