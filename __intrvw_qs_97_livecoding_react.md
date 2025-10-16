
# What's React Live Coding ?

Small projects for you to try to solve. Typically in less than 60min.

-------------------------------------------------------

# The Oh-So-Famous Counter App

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

SOLUTION:

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

# Create a useIsFirstRender() hook

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

SOLUTION:

```javascript
import React from "react";

export function useIsFirstRender(): boolean {
  const isFirst = React.useRef(true);

  React.useEffect(() => {
    isFirst.current = false;
  }, []);

  return isFirst.current;
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

# Create a usePrevious() hook

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

SOLUTION:

```javascript
import React from "react";

export function usePrevious(value) {
  const storedValue = React.useRef(undefined);

  React.useEffect(() => {
    storedValue.current = value;
  }, [value]);

  return storedValue.current; // happens before update in useEffect above
}

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

-------------------------------------------------------

# Create a useToggle() hook

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

SOLUTION:

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

# Create a useDebounce() hook

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

# Random Chuck Norris Images

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

# Giphy App

## End Result

Should Look Like [https://ghyphir.pages.dev/](https://ghyphir.pages.dev/)


##  App Requirements

• Show trending gifs (Giphy API) when no search text is applied
• Search gifs by text (Giphy API)
• Handle loading and error
• View more button
• Persist last search in browser
• Copy gif URL on click

## Technical Requirements

• You must use React.
• You may use any JavaScript/CSS libraries (e.g., Tailwind, Axios, etc.).
• You are allowed to use resources like Google, Stack Overflow, etc
• AI tools such as search engines or autocompleters are allowed, but not generative AI; we want to assess your knowledge first.
• UI design will not be evaluated, but clean code structure and thoughtful logic will be.

## Submission

• A GitHub repo with your code.
• A README that includes setup instructions.
• (Optional) A live deployment (e.g., Vercel, Netlify).

## Notes

• You’ll need to sign up for a free Giphy Developer account to get an API key.
• This challenge is designed to evaluate your practical skills — don’t worry about visual
polish.
• Creativity and clarity are more important than perfection.

-------------------------------------------------------



**TODO**

More React Live Coding Questions:

- https://bigfrontend.dev/

- https://www.hackerrank.com/domains/react



