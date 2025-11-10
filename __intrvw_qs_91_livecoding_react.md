



-------------------------------------------------------

# Must Knows

-------------------------------------------------------

## What's Live Coding in React ?

It's a technical interviewing style. Your interviewer(s) watches while you code. In React.

Small projects for you to try to solve. Typically in less than 60min.

There is a reasonable chance that it drifts into code quality questions.

There is a small chance that it will drift into system design interview.

There is a tiny chance that it degenerates into LeetCode style interviews.

-------------------------------------------------------

## Categories of Live Coding in React

- Fetch and Display Data - with 2 API Calls

- Fetch and Display Data - with 2 API Calls - with TypeScript

- Fetch and Display Data - with 2 API Calls - with Axios

- Fetch and Display Data - with 2 API Calls - with React Query

- Todo List

- Search & Filter a List

- Form with Validation

- Memoization i.e. optimize existing code

- Theme Switcher

- Debounced Search


-------------------------------------------------------

## Skills Tested in Live Coding in React

Hooks (useState), list rendering, event handling, basic component structure.

useState, useEffect, derived state, efficient rendering.

State updates, controlled components, and React reactivity.

useEffect, async/await, conditional rendering, API error handling.

Component composition, props, conditional rendering.

Controlled inputs, validation logic, dynamic error display.

Global state (Context API or props), conditional classNames, CSS-in-JS or Tailwind logic.

React Router basics, component routing, URL awareness.

useEffect, setTimeout/clearTimeout, API calls, performance-conscious updates.

custom hook (e.g., useLocalStorage or useDebounce)

React.memo or useMemo

















-------------------------------------------------------

# Challenges

-------------------------------------------------------

## Ask GPT

Prompt "Pls give me 3 mini exercises (without showing solution) for live coding in react"

This will give some good challenges.

-------------------------------------------------------

## The Oh-So-Famous Counter App

Update the code below to get the expected behavior:
- counter starts from 0.
- click the '+' button to increment.
- click the '-' button to decrement.

```javascript
import React from 'react'

export function App() {
  return (
    <div>
      <button data-testid="decrement-button">-</button>
      <button data-testid="increment-button">+</button>
      <p>clicked: 0</p>
    </div>
  )
}
```

### SOLUTION

```javascript
import React from "react";

export default function App() {
  const [counter, setCounter] = React.useState(0);

  const decrement = () => {
    setCounter((prev) => prev - 1);
  };

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
      <button data-testid="decrement-button" onClick={decrement}>
        -
      </button>
      <button data-testid="increment-button" onClick={increment}>
        +
      </button>
      <p>clicked: {counter}</p>
    </div>
  );
}
```

-------------------------------------------------------

## Create a useIsFirstRender() hook

Complete the code below by creating a hook to tell if it is the first render.

```javascript
export default function App() {
  const isFirstRender = useIsFirstRender();    // only true for the first render
  const [counter, setCounter] = React.useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <button onClick={increment}>+</button>
      <p>clicked: {counter}</p>
      <p>first render? {isFirstRender ? "Yes" : "No"}</p>
    </div>
  );
}
```

### SOLUTION

```javascript
import React from "react";

export function useIsFirstRender(): boolean {
  const isFirst = React.useRef(true);

  React.useEffect(() => {
    isFirst.current = false;
  }, []);

  return isFirst.current;   // always runs before update in useEffect above
}

export default function App() {
  const isFirstRender = useIsFirstRender();
  const [counter, setCounter] = React.useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <button onClick={increment}>+</button>
      <p>clicked: {counter}</p>
      <p>first render? {isFirstRender ? "Yes" : "No"}</p>
    </div>
  );
}
```

You can do it with useState() instead of useEffect() but
- useRef does not trigger a re-render when you update it (isFirst.current = false) -> more efficient
- useState does trigger a re-render when you call setIsFirst(false).

-------------------------------------------------------

## Create a usePrevious() hook

Complete the code below by creating a custom hook to return the previous value of a state.

```javascript
export default function App() {
  const [counter, setCounter] = React.useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const prevCount = usePrevious(counter); // Get previous counter value

  return (
    <div>
      <button onClick={increment}>+</button>
      <p>clicked: {counter}</p>
      <p>Previous: {prevCount}</p>
    </div>
  );
}
```

### SOLUTION

```javascript
import {useState,useRef,useEffect} from "react";

export function usePrevious(value) {
  const storedValue = useRef(undefined);

  useEffect(() => {
    storedValue.current = value;
  }, [value]);

  return storedValue.current;   // always runs before update in useEffect above
}

export default function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const prevCount = usePrevious(counter); // Get previous counter value

  return (
    <div>
      <button onClick={increment}>+</button>
      <p>clicked: {counter}</p>
      <p>Previous: {prevCount}</p>
    </div>
  );
}
```

-------------------------------------------------------

## Create a useToggle() hook

It is quite common to see switches and checkboxes in web apps such as:

```javascript
import React from "react";
export default function App() {
  const [status, setStatus] = React.useState(true);

  const toggle = () => {
    setStatus((status) => !status);
  };

  return (
    <div>
      <button onClick={toggle}>toggle</button>
      <p>State: {status ? "On" : "Off"}</p>
    </div>
  );
}
```

Update the code to implement useToggle() custom hook instead to make things easier such as:

`const [on, toggle] = useToggle()`

### SOLUTION

```javascript
import React from "react";

export function useToggle() {
  const [toggleStatus, setToggleStatus] = React.useState(false);

  const toggle = () => {
    setToggleStatus((prev) => !prev);
  };

  return [toggleStatus, toggle];
}

export default function App() {
  const [on, toggleIt] = useToggle();
  return (
    <div>
      <button onClick={toggleIt}>toggle it</button>
      <p>State: {on ? "On" : "Off"}</p>
    </div>
  );
}
```

-------------------------------------------------------

## Create a useDebounce() hook

For a frequently changing value like text input you might want to debounce the changes.

Implement useDebounce() to achieve this such as:
 - input value and a delay (in milliseconds).
 - Returns a debounced value that only updates after the delay has passed without further changes.

Complete the code below by implementing useDebounce() custom hook.

```javascript
import { useState, useEffect } from 'react';

export function SearchBox() {
  const [query, setQuery] = useState('');          // this value changes frequently
  const debouncedQuery = useDebounce(query, 1000);     // now it is debounced
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (debouncedQuery) {
      setMessage(`FIRED! ${debouncedQuery}`);
    } else {
      setMessage('');
    }
  }, [debouncedQuery]);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type..."
      />
      <p>
        {message}
      </p>
    </div>
  );
}
```

-------------------------------------------------------

## Random Chuck Norris Images

Being given these 2 APIs
- https://api.chucknorris.io/ - The Internet Chuck Norris Database
- https://developers.giphy.com/docs/ - Giphy API

Select one random Chuck Norris joke and look for a matching gif by using
the first 3 words from the joke. The result should be displayed with the
image on the left side and the text on the right side, positioned in the
vertically in the middle.

Whenever the image is clicked, a new gif will be loaded.

Caveat: the Giphy API will return the same set of images for a given string,
so in order to produce an observable change, the application needs to request
more images on the first load and cache them internally.
 
const GIPHY_API_KEY = "2cZkiFTqyiS79UdSapL6LHWlublpl7iy";
const DEFAULT_GIF = "https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif";

SOLUTION:

```javascript
import React, { useEffect, useState } from "react";

const GIPHY_API_KEY = "2cZkiFTqyiS79UdSapL6LHWlublpl7iy";
const DEFAULT_GIF = "https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif";

export default function ChuckNorrisGifApp() {
  const [joke, setJoke] = useState("");
  const [gifs, setGifs] = useState([]);
  const [gifIndex, setGifIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // --- Fetch random Chuck Norris joke ---
  const fetchJoke = async () => {
    setLoading(true);
    const res = await fetch("https://api.chucknorris.io/jokes/random");     // remember to ALWAYS add the 's' to http
    const data = await res.json();
    setJoke(data.value);
    setLoading(false);
    return data.value;
  };

  // --- Fetch multiple Giphy results for caching ---
  const fetchGifs = async (query) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${encodeURIComponent(           // remember to ALWAYS add the 's' to http
      query
    )}&limit=10&rating=g`;
    const res = await fetch(url);
    const data = await res.json();
    return data.data.map((gif) => gif.images.fixed_height.url);
  };

  // --- Initialize joke + gifs ---
  useEffect(() => {
    const init = async () => {
      const jokeText = await fetchJoke();
      const firstThreeWords = jokeText.split(" ").slice(0, 3).join(" ");
      const gifList = await fetchGifs(firstThreeWords);
      setGifs(gifList.length > 0 ? gifList : [DEFAULT_GIF]);
      setGifIndex(0);
    };
    init();
  }, []);

  // --- Handle GIF click (next cached gif) ---
  const handleGifClick = () => {
    setGifIndex((prev) => (prev + 1) % gifs.length);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 p-6">
      <div className="flex bg-white shadow-lg rounded-2xl overflow-hidden max-w-3xl">
        <div
          className="w-1/2 cursor-pointer flex items-center justify-center bg-gray-200"
          onClick={handleGifClick}
        >
          {loading ? (
            <div className="text-gray-500">Loading...</div>
          ) : (
            <img
              src={gifs[gifIndex] || DEFAULT_GIF}
              alt="Chuck Norris GIF"
              className="object-cover h-full w-full"
            />
          )}
        </div>
        <div className="w-1/2 flex items-center justify-center p-6">
          <p className="text-lg font-medium text-gray-800 text-center">{joke}</p>
        </div>
      </div>
    </div>
  );
}
```

-------------------------------------------------------

## Giphy App

End Result: should look like [https://ghyphir.pages.dev/](https://ghyphir.pages.dev/)

App Requirements:

• Show trending gifs (Giphy API) when no search text is applied
• Search gifs by text (Giphy API)
• Handle loading and error
• View more button
• Persist last search in browser
• Copy gif URL on click

Technical Requirements:

• You must use React.
• You may use any JavaScript/CSS libraries (e.g., Tailwind, Axios, etc.).
• You are allowed to use resources like Google, Stack Overflow, etc
• AI tools such as search engines or autocompleters are allowed, but not generative AI; we want to assess your knowledge first.
• UI design will not be evaluated, but clean code structure and thoughtful logic will be.

Submission:

• A GitHub repo with your code.
• A README that includes setup instructions.
• (Optional) A live deployment (e.g., Vercel, Netlify).

Notes:

• You’ll need to sign up for a free Giphy Developer account to get an API key.
• This challenge is designed to evaluate your practical skills — don’t worry about visual polish.
• Creativity and clarity are more important than perfection.

### SOLUTION

TODO



-------------------------------------------------------

## API Call and Displays List Of Users

Build a small React application that displays a list of users fetched from a public API.

Example API: https://jsonplaceholder.typicode.com/users

Functional requirements:
 1️⃣ Fetch data from a public API (e.g., https://jsonplaceholder.typicode.com/users)
 2️⃣ Display a list of users showing their name and email
 3️⃣ When clicking on a user, show detailed information (phone, company, address)
     → This can be displayed in a side panel, modal, or separate section
 4️⃣ Include a real-time search input that filters users by name or email
 5️⃣ Show a loading state (loader/spinner) while fetching data
 6️⃣ Handle API errors and display a visible error message to the user
 7️⃣ Implement a simple cache mechanism to avoid unnecessary API calls
     → Example: store fetched users in memory or localStorage
 8️⃣ Support pagination or lazy loading for large user lists
 9️⃣ Add unit tests for 1–2 key components (e.g., UserList, UserDetails)


### SOLUTION

TODO

-------------------------------------------------------

## API Call + List View w Sorting and Dynamic Filtering + Detail View

you have the API, based on the Ricky & Morty API, to perform the challenge. 
- https://rickandmortyapi.com/
- i.e. endpoint https://rickandmortyapi.com/api/character

Two main screens in the app:
1/ Listing View
• show a list of items coming from the API, with some information. Title
and image are mandatory.
• The app will be able to order the items by (at least) the Title.
• The app will be able to filter the items by some of the fields. It could be a
property from the items with any select or checkbox or a search field, or all
of them.

2/ Details View
• It will show detailed information about the selected element.

## SOLUTION

TODO

-------------------------------------------------------

## API Call + List View + Favorites

The are many Rick and Morty fans out there looking for a web application that will help them look for any character and mark them as favorite.

Rules:

- Use Typescript (The right way, "any" is not the right way!).
- Create all components from scratch, components libraries are forbidden.
- Implement good semantic HTML (div is not always the solution).
- Use best practices.
- If you know any React pattern, feel free to use it!
- Adding styles is important! No need to be picasso, make it feel like a real application.

Requirements:

- When a user types into the search field, an autocomplete dropdown should appear, displaying a list of matching characters.
- Use the Rick and Morty API https://rickandmortyapi.com/
- The search should be perform after typing the first 2 letters of the characters.
- Each item in the autocomplete list must show the character's name and image.
- Each character in the autocomplete results should have a "favorite" icon (e.g., a star ⭐). Clicking this icon adds the character to your favorites list and immediately removes them from the autocomplete results.
- Characters that are currently in the favorites list should not appear in the autocomplete search results.

## SOLUTION

TODO

-------------------------------------------------------

**TODO**

More React Live Coding Questions:

- https://bigfrontend.dev/

- https://www.hackerrank.com/domains/react




- Mock JSON data https://jsonplaceholder.typicode.com/


