Course improvement: need side-by-side code comparison, wo Redux vs w Redux w w Redux RTK

//-------------------------------------------------------//

# Docs —

https://redux.js.org/

https://github.com/erikras/ducks-modular-redux

https://immerjs.github.io/immer/

https://redux-toolkit.js.org/api/createAsyncThunk

//-------------------------------------------------------//

# Common Imports —

import { createStore, combineReducers } from 'redux';

import { applyMiddleware } from 'redux';

import { createSlice , configureStore } from '@reduxjs/toolkit';

import { useDispatch } from 'react-redux';

import { createAsyncThunk } from '@reduxjs/toolkit';

//-------------------------------------------------------//

# Problem Statement ——

With plain React, the three parts state-view-actions overlap quite a bit. 
We would like a more elegant solution that separate those concerns.

Redux just does that.

//-------------------------------------------------------//

# Pitch ——

Redux an alternative to Context API.

Redux is a library for managing and updating application state based on the Flux architecture.

Redux is not limited to React. It can be used within the context of any UI framework whether React, Angular, jQuery or else.

More:
Complex apps have a multitude of states to keep track of, and passing states down the component tree can become tedious and inefficient. 
Redux, as a valuable tool, enhances JavaScript frameworks and libraries by offering a consistent and predictable solution for state management.

//-------------------------------------------------------//

# Redux : Install ——

npm install --save-dev @testing-library/react
// p.s. create-react-app by default includes RTL 

npm install --save-dev @testing-library/jest-dom
// p.s. create-react-app by default includes jest-dom (and jest)

npm install --save-dev @testing-library/user-event
// p.s. create-react-app by default includes user-event (and jest)

npm install @reduxjs/toolkit

//-------------------------------------------------------//

# Redux : Watch Mode ——

npm test

Launches the test in watch mode, allowing the test to re-run every time the file is saved! 
Type q in the terminal to quit out of the watch mode.

//-------------------------------------------------------//

# Redux : Watch Mode ——

Customize terminal output by RTL

npm test -- --coverage // --coverage : Indicates that test coverage information should be collected and reported in the output

npm test -- --silent  // --silent : Prevents tests from printing messages through the console.

npm test -- --help  // --help : Displays help

//-------------------------------------------------------//

# Redux: Best Practices ——

1. State – the current data used in the app
2. View – the user interface displayed to users
3. Actions – events that a user can take to change the state

Redux expects reducers to produce the same output given the same state and action

Store → View → Actions → Store

//-------------------------------------------------------//

# Redux: Core Principles ——

1. Pure Functions — always have the same outputs given the same inputs
2. Immutable Updates

A reducer must be a pure function, and it must update the state immutably.

//-------------------------------------------------------//

# Reducer: Principles ——

A reducer is a function that determines the application’s next state given a current state and a specific action. 
If no state is provided, it returns a default initial state.
If the action is not recognized, it returns the current state.

1. Reducers should only calculate the new state value based on two arguments: state and action
2. Reducers are not allowed to modify the existing state — but copy the existing state and make changes to the copied values.
3. Reducers must not do any asynchronous logic or other “side effects” — pull these outside the reducer functions

//-------------------------------------------------------//

# Redux: Principles ——

A container that holds and manages your application’s global state.

The store is a container for state, it provides a way to dispatch actions, and it calls the reducer when actions are dispatched. 
Typically there is only one store in a Redux application.

//-------------------------------------------------------//

# Redux : Immutable Updates ——

Plain strings, numbers, and booleans are immutable in JavaScript, so we can just return them without making a copy

When it is an object, you must copy the contents of the argument obj into a new object and when required you update some property() of the new object.
You usually to that with the spread annotation ({...obj}) followed by the necessary updates that either add or override a property.

  // adds a property
  case 'songs/addGlobalSong': {
    return [...state, action.payload];
  }
  
  // overrides a property
  return {
    ...obj,
    completed: !obj.completed
  }
  
//-------------------------------------------------------//

# Redux :  ——

In Redux, actions are represented as plain JS objects. Example:

const action = {
  type: 'todos/addTodo',
  payload: 'Take selfies'
};

The action.payload property is used to hold additional data that the reducer might need to carry out a given action. The name payload is simply a convention, and its value can be anything!

1. MUST: type property — a string value. Describes the action. 
2. COULD: payload property — an object value. Includes info related to the action
3. When an action is generated and notifies other parts of the application, we say that the action is dispatched

Actions in Redux represent specific events that occur.

//-------------------------------------------------------//

# Redux : Store ——

Redux is a state-management library centered around a single, powerful object called the store.

This one object is responsible for holding the entire application’s state, receiving action objects 
and then executing state changes based on the type of the action received, and informing (executing) 
listener functions when such changes occur.

//-------------------------------------------------------//

# Redux : Reducer ——

Reducer composition is a design pattern for managing a Redux store with multiple slices. 

The root reducer delegates actions to slice reducers that are responsible for updating only their assigned slice of the store’s state. 
The root reducer then reassembles the slices into a new state object.

//-------------------------------------------------------//

# Redux : Slice ——

const state = {
  songs: ['Claire De Lune', 'Garota de Ipanema', 'We Will Rock You'],
  playMode: 'SHUFFLE'
}

Given this state object for a playlist application, "Slice" is the Redux-specific term describes state.songs and state.playMode

Property is the general term to describe the values of an object, and Slice is Redux specific

//-------------------------------------------------------//

# Redux : Slice Advanced ——

A “slice” of state is a segment of the global state that focuses on a particular feature. 
It encompasses the related data, along with its associated reducers, actions, and selectors. 
Think of it as a self-contained unit dedicated to managing a specific part of your application’s functionality.

For each slice of the state, we usually define a corresponding reducer. These are known as “slice reducers.” 
Each reducer is akin to a worker solely responsible for managing the state of its respective slice. 
This modular approach simplifies complex applications and makes debugging a breeze. 

//-------------------------------------------------------//

# Redux : RTK ——

Redux Toolkit (RTK) contains packages and functions that build in suggested best practices, 
simplify most Redux tasks, prevent common mistakes, and make it easier to write Redux applications.

//-------------------------------------------------------//

# Redux : Reducer ——

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'songs/addSong': {
      return [ ...state, action.payload];
    }
    case 'songs/removeSong': {
      return state.filter(song => song !== action.payload);
    }
    case 'todos/removeAll': {
      return [];
    }
    default: {
      return state;
    }
  }
}

//-------------------------------------------------------//

# Redux : API ——

import { createStore } from 'redux'


store.getState()  // Returns the current value of the store’s state

store.dispatch(action)  // Executes store’s reducer function with the action object

store.subscribe(listener) // Executes listener function each time a change to the store's state occurs 

subscribe() returns an unsubscribe function  // to stop the listener from responding to changes to the store

//-------------------------------------------------------//

# Redux API : Example ——

// Create Store
import { createStore } from 'redux'
const initialState = 'on';
const lightSwitchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'toggle':
      return state === 'on' ? 'off' : 'on';
    default:
      return state;
  }
}
const store = createStore(lightSwitchReducer);

//-------------------------------------------------------//

# Redux API: Example II ——

import { createStore } from 'redux';
const countReducer = (state = 0, action) => {
  switch (action.type) {  
    case 'increment':  
      return state + 1;
    case 'decrement':  
      return state - 1;
    default:  
      return state;  
  }
}
const store = createStore(countReducer);

const render = () => {
  document.getElementById('count').text = store.getState(); // Display the current state.
}
render(); // Render once with the initial state of 0.

store.subscribe(render); // Re-render on state changes.

document.getElementById('plusButton').addEventListener('click', () => {  
  store.dispatch( { type : 'increment' } );  // Request a state change.
  store.dispatch( { type : 'increment' } );
  console.log( store.getState() );
  
  store.dispatch( { type : 'decrement' } );
  store.dispatch( { type : 'decrement' } );
  store.dispatch( { type : 'decrement' } );
  console.log( store.getState() );
});

//-------------------------------------------------------//

# Redux API : Subscribe and Unsubscribe ——

// lightSwitchReducer(), toggle(), and store omitted...
const reactToChange = () => {
  console.log(`The light was switched ${store.getState()}!`);
}
const unsubscribe = store.subscribe(reactToChange);

store.dispatch(toggle());
// reactToChange() is called, printing:
// 'The light was switched off!'

store.dispatch(toggle());
// reactToChange() is called, printing:
// 'The light was switched on!'

unsubscribe(); 
// reactToChange() is now unsubscribed

store.dispatch(toggle());
// no print statement!

console.log(store.getState()); // Prints 'off'

//-------------------------------------------------------//

# Redux API : Subscribe and Unsubscribe ——

/* App.js */
import React from "react";
import { increment, decrement } from "./store";
function App({ state, dispatch}) {
  const incrementerClicked = () => {    // Dispatch increment action
    dispatch( increment() );
  }
  const decrementerClicked = () => {    // Dispatch decrement action
    dispatch( decrement() );
  }
  return(
    <main>
      <p id='counter'>{state}</p>
      <button id='incrementer' onClick={incrementerClicked}>+</button>
      <button id='decrementer' onClick={decrementerClicked}>-</button>
    </main>
  )
}
export default App;

/* index.js */
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js"
import { store } from "./store.js"
const root = createRoot(document.getElementById("app"));
// Store State Change Listener
const render = () => {
  root.render(<App state={store.getState()} dispatch={store.dispatch}/>);
}
render();
store.subscribe(render);  // Subscribe to state changes

/* Store.js */
import { createStore } from 'redux';
// Action Creators
export function increment() { 
  return {type: 'increment'}
}
export function decrement() { 
  return {type: 'decrement'}
}
// Reducer / Store
const initialState = 0;
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1; 
    case 'decrement':
      return state - 1; 
    default:
      return state;
  }
};  
export const store = createStore(countReducer);

//-------------------------------------------------------//

# Redux :  ——

// fun stuff with updating state slices
case 'cart/changeItemQuantity': {
  const { name, newQuantity } = action.payload;
  const itemToUpdate = cart[name];

  const updatedItem = {
    ...itemToUpdate,
    quantity : newQuantity
  }

  return {
    ...cart,
    [name] : updatedItem   // I first thought it'd be cart[name] but I was incorrect
  };
}

//-------------------------------------------------------//

# Redux :  ——

Middleware is the code that runs in the middle—usually between a framework receiving a request and producing a response. 
Middleware is a powerful tool for extending, modifying, or customizing a framework or library’s default behavior to meet an application’s specific needs.


Middlewares must conform to a specific, nested function structure in order to work as part of the pipeline.
This nested structure is also called a higher-order function.

//-------------------------------------------------------//

# callback function VS higher-order function  ——

A higher-order function is a function that takes another function(s) as an argument(s) and/or returns a function to its callers. 

A callback function is a function that is passed to another function with the expectation that the other function will call it.

So a callback is not necessarily itself a higher-order function, but a function which receives a callback as an argument is

//-------------------------------------------------------//

# thunk VS higher-order function  ——

Thunk is a function that returns another function.

Thunks may accept functions as arguments, but that’s not a requirement. 

//-------------------------------------------------------//

# Redux Toolkit and thunk middleware  ——


Redux Toolkit provides configureStore, which returns a store that applies a thunk middleware by default.

//-------------------------------------------------------//

# Redux : Middleware createAsyncThunk() ——

import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchUser } from './api'
const fetchUserById = createAsyncThunk(
  'users/fetchUserById', // action type
  async (userId, thunkAPI) => { // payload creator
    const response = await fetchUser(userId);
    return response.json();
  }
)

//-------------------------------------------------------//

# Redux :  ——




