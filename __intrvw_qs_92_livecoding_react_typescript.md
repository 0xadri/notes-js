



-------------------------------------------------------

# Must Knows

-------------------------------------------------------

## What's Live Coding in React and TypeScript?

It's a technical interviewing style. Your interviewer(s) watches while you code. In React and TypeScript.

Small projects for you to try to solve. Typically in 30 to 60min.

It then drifts into another type of interview:
 - Code Review (reasonable chance)
 - Code Quality (reasonable chance)
 - System Design (small chance)
 - LeetCode (tiny chance)

-------------------------------------------------------

## Categories of Live Coding in React

1. API Integration - Fetch and Display Data with 2 API Calls
 - basic implementation
 - with Pagination
 - Mobile-First Responsive w Flexbox
 - Mobile-First Responsive w Grid
 - with Axios
 - with React Query

2. Todo List

3. Search & Filter a List

4. Form with Validation

5. Memoization i.e. optimize existing code

6. Theme Switcher

7. Debounced Search


-------------------------------------------------------

## Skills Tested in Live Coding in React

basic component structure, list rendering, event handling, hooks.

useState, performance-conscious updates, derived state.

useEffect, efficient rendering.

setTimeout/clearTimeout.

controlled components, controlled inputs, and React reactivity.

async/await, API error handling, HTTP status check.

validation logic, dynamic error display.

Component composition, props, conditional rendering.

Global state (Context API or props)

CSS: CSS-in-JS or Tailwind logic, conditional classNames.

React Router basics, component routing, URL awareness.

custom hook (e.g., useLocalStorage or useDebounce)

React.memo or useMemo














-------------------------------------------------------

# Challenges

-------------------------------------------------------

## Ask GPT

Prompt "Pls give me 3 mini exercises (without showing solution) for live coding in react+typescript"

This will give some good challenges.

-------------------------------------------------------

## The Oh-So-Famous Counter App

Update the code below to get the expected behavior:
- counter starts from 0.
- click the '+' button to increment.
- click the '-' button to decrement.

```typescript
export default function App(): JSX.Element {
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

```typescript
import { useState } from "react";

export default function App(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  const handleIncrement = (): void => {
    setCounter((prev) => prev + 1);
  };
  const handleDecrement = (): void => {
    setCounter((prev) => prev - 1);
  };
  return (
    <div className="App">
      <h1>Counter</h1>
      <div>
        <button data-testid="decrement-button" onClick={handleDecrement}>
          -
        </button>
        <button data-testid="increment-button" onClick={handleIncrement}>
          +
        </button>
        <p>clicked: {counter}</p>
      </div>
    </div>
  );
}
```

-------------------------------------------------------

## Create a useIsFirstRender() hook

Complete the code below by creating a hook to tell if it is the first render.

```typescript
import { useState } from "react";

export default function App(): JSX.Element {
  const isFirstRender: boolean = useIsFirstRender();
  const [counter, setCounter] = useState<number>(0);

  const increment = (): void => {
    setCounter((prev) => prev + 1);
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

```typescript
import { useRef, useState, useEffect } from "react";

const useIsFirstRender = (): boolean => {
  const isFirstRender = useRef<boolean>(true);

  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  return isFirstRender.current; // always runs before update in useEffect above
};

export default function App(): JSX.Element {
  const isFirstRender: boolean = useIsFirstRender();
  const [counter, setCounter] = useState<number>(0);

  const increment = (): void => {
    setCounter((prev) => prev + 1);
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
- `useRef` does not trigger a re-render when you update it (`isFirst.current = false`) -> more efficient
- `useState` does trigger a re-render when you call `setIsFirst(false)`.

-------------------------------------------------------

## Create a usePrevious() hook

Complete the code below by creating a custom hook to return the previous value of a state.

```typescript
import { useState } from "react";
export default function App(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  const increment = (): void => {
    setCounter(counter + 1);
  };

  // const prevCount: number | undefined = usePrevious(counter); // Implement custom hook to: Get previous counter value

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

```typescript
import { useState, useRef, useEffect } from "react";

const usePrevious = (value: number): number => {
  const previous = useRef<number>(undefined);

  useEffect(() => {
    previous.current = value;
  }, [value]);

  return previous.current;
};

export default function App(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  const increment = (): void => {
    setCounter(counter + 1);
  };

  const prevCount: number | undefined = usePrevious(counter);   // Get previous counter value

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

```typescript
import { useState } from "react";

export default function App(): JSX.Element {
  const [status, setStatus] = useState<boolean>(true);

  const toggle = (): void => {
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

```typescript
import { useState } from "react";

type ToggleFn = () => void;

const useToggle = (value: boolean): [boolean, ToggleFn] => {
  const [status, setStatus] = useState<boolean>(value);

  const toggle = (): void => {
    setStatus((status) => !status);
  };

  return [status, toggle];
};
export default function App(): JSX.Element {
  const [status, toggle] = useToggle(true);

  return (
    <div>
      <button onClick={toggle}>toggle</button>
      <p>State: {status ? "On" : "Off"}</p>
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

```typescript
import { useState, useEffect } from 'react';

export default function App(): JSX.Element {
  const [query, setQuery] = useState<string>(""); // this value changes frequently
  const debouncedQuery = useDebounce(query, 1000); // now it is debounced
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (debouncedQuery) {
      setMessage(`FIRED! ${debouncedQuery}`);
    } else {
      setMessage("");
    }
  }, [debouncedQuery]);

  return (
    <div>
      <input
        value={query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
        placeholder="Type..."
      />
      <p>{message}</p>
    </div>
  );
}
```

### Solution

```typescript
import { useState, useEffect } from "react";

const useDebounce = (query: string, delay: number): string => {
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const timeoutid = setTimeout(() => {
      setDebouncedQuery(query);
    }, delay);
    return () => clearTimeout(timeoutid);    // If "query" changes within <delay> milliseconds, React runs the cleanup before starting the new effect
  }, [query]);

  return debouncedQuery;
};

export default function App(): JSX.Element {
  const [query, setQuery] = useState<string>(""); // this value changes frequently
  const debouncedQuery = useDebounce(query, 1000); // now it is debounced
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (debouncedQuery) {
      setMessage(`FIRED! ${debouncedQuery}`);
    } else {
      setMessage("");
    }
  }, [debouncedQuery]);

  return (
    <div>
      <input
        value={query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
        placeholder="Type..."
      />
      <p>{message}</p>
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
 
const GIPHY_API_KEY = "2cZkiFTqyiS79UdSapL6LHWlublpl7iy";   // you may need to create a new one on https://developers.giphy.com/docs/

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

TLDR: API Integration, List, Dynamic Search, Pagination, Caching

Requirements:
• Expected result should look like [https://ghyphir.pages.dev/](https://ghyphir.pages.dev/)
• Show trending gifs (Giphy API) when no search text is applied
• Search gifs by text (Giphy API)
• Handle loading and error
• View more button
• Persist last search in browser
• Copy gif URL on click

### SOLUTION

TODO



-------------------------------------------------------

## API Call and Displays List Of Users

Build a small React application that displays a list of users fetched from a public API.

Example API: https://jsonplaceholder.typicode.com/users

Functional requirements:
• Fetch data from a public API (e.g., https://jsonplaceholder.typicode.com/users)
• Display a list of users showing their name and email
• When clicking on a user, show detailed information (phone, company, address)
     → This can be displayed in a side panel, modal, or separate section
• Include a real-time search input that filters users by name or email
• Show a loading state (loader/spinner) while fetching data
• Handle API errors and display a visible error message to the user
• Implement a simple cache mechanism to avoid unnecessary API calls
     → Example: store fetched users in memory or localStorage
• Support pagination or lazy loading for large user lists
• Add unit tests for 1–2 key components (e.g., UserList, UserDetails)


### SOLUTION

TODO

-------------------------------------------------------

## Rick And Morty App 1

TLDR: API Call + List View w Sorting and Dynamic Filtering + Detail View

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

## Rick And Morty App 2

TLDR: API Integration + List View + Favorites

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

## 
















-------------------------------------------------------

**TODO**

1) Simple Form https://frontendeval.com/questions/mortgage-calculator

2) Complex Form https://frontendeval.com/questions/multi-step-form

3) Pagination and data fetching https://frontendeval.com/questions/job-board


More React Live Coding Questions:

- https://bigfrontend.dev/

- https://www.hackerrank.com/domains/react

- Mock JSON data https://jsonplaceholder.typicode.com/


