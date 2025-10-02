
-------------------------------------------------------

# TODO

Handling form submission with preventDefault
useRef for DOM access vs persistent values
Custom hooks – when and why to create them
useReducer vs useState
useLayoutEffect vs useEffect

-------------------------------------------------------

# Why React So Fast?

Virtual DOM, Diffing, etc

-------------------------------------------------------

# Does order matter for React Hooks?

Yes.

React doesn’t track hooks by their variable names.

Instead, it keeps an internal array of hook states for each component in the order they’re called.

So if hooks are called in a different order between renders, React’s mapping breaks.

-------------------------------------------------------

# What Are The Rules of Hooks?

1. Always call them in the same order for every render.

2. Call hooks only at the top level — never inside conditionals, loops, or nested functions.

Calling hooks inside conditionals could change the order, so point 2 refers to the same goal as point 1.

-------------------------------------------------------

# Do "infinite loops in hooks" happen often ?

Yes. Infinite loops in React hooks are a common pitfall.

Especially with `useEffect`, `useMemo`, and `useCallback`.

-------------------------------------------------------

# Why do infinite loops happen in hooks?

React components re-render when `state` or `props` change.

If a hook (like useEffect) updates state without proper dependency control, it keeps triggering re-renders → infinite loop.

```javascript
 function BadComponent() {          // Infinite Loops Example
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);   // Infinite loop: setCount triggers re-render every time
  }, [count]);

  return <p>{count}</p>;
 }
```

-------------------------------------------------------

# How to avoid infinite loops in hooks?

1. Use Correct Dependencies
   - Always list only what’s necessary in the dependency array.
   - If you leave it out, it may run every `render`.
   - If you put too much, it may loop unnecessarily.

2. Use Functional State Updates
   - sets state based on the previous state, `setCount(prev => prev + 1);`

3. Don’t Derive State From State Inside Effects
   - use `useMemo` instead

4. Be Careful With Asynchronous Calls
   - If an effect triggers an `async` call that updates state, you may loop.
   - Solution: use guards (conditions) or cancelation
   - Why: prevent state updates or side effects from running after a component unmounts (removed from the DOM) 

```javascript
 useEffect(() => {
  let isMounted = true;    // guard flag

  async function loadData() {
    const data = await fetchSomething();
    if (isMounted) setValue(data);     // condition, only update if component is "still" mounted
  }

  loadData();
  return () => { isMounted = false };
 }, []); // condition, only runs once
```

5. Memoize Functions Passed as Dependencies
   - If a function is defined inside component (inline), it'll be re-created on every render
   - `useEffect` sees a "new" dependency → runs again → re-renders (if state updates inside) → infinite loop.
   - Fix with `useCallback`.

```javascript
 function MyComponent() {
  // const fetchData = async () => {
  //  const res = await fetch("/api/data");
  //  return res.json();
  // };
  // below is the correct way - above is the former version that creats the infinite loop
  const fetchData = useCallback(async () => {
    const res = await fetch("/api/data");
    return res.json();
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]); // 🚨 redefined each render
 }
```

   - Rule of Thumb
     - If fetchData is external (defined outside component) and stable → [fetchData] or [] is fine.
     - If fetchData is inside component → wrap in `useCallback`, then use it in deps.
     - If fetchData has no dependencies → prefer [].

-------------------------------------------------------
 
# What are Default Props in React Components ?

`Default props` allow you to specify fallback values for props if none are provided.

```javascript
 function Button({ label = "Click me", color = "blue" }) {
  return <button style={{ backgroundColor: color }}>{label}</button>;
 }

 <Button /> // renders "Click me" with blue background
 <Button label="Submit" /> // renders "Submit" with blue background
```

-------------------------------------------------------
 
# What's PropTypes in React ?

`prop-types` is a package for runtime type checking of props. 

It helps catch bugs by warning if props are the wrong type.

-------------------------------------------------------
 
# What are Controlled vs Uncontrolled components ?

Refers to how **form inputs** are managed and where their state lives.

**1. Controlled Components**

React fully controls the form input’s value through state.

The input’s value is accessed and set via `useState`. The source of truth is React state.

`<input type="text" value={myVar} onChange={(e) => setMyVar(e.target.value)} />`

Pros:
 - Predictable, React always knows the current value.
 - Easy to validate, transform, or reset inputs.
 - Best for complex forms.

Cons:
 - More code, and re-renders happen on every keystroke.

**2. Uncontrolled Components**

An uncontrolled component lets the DOM itself handle the form state, instead of React.

The input’s value is accessed via a `ref` when needed. The source of truth is the DOM.

Pros:
 - Less code, simpler for small forms.
 - No re-renders on every keystroke.

Cons:
 - Harder to enforce validation or sync UI with input state.
 - React doesn’t “know” the current value until you read it manually.

**3. Rule of thumb**

Use controlled components when you need React to always “know” and manage the input value (validation, dynamic inputs, UI sync).

Use uncontrolled components for quick forms or when you don’t need real-time validation.

-------------------------------------------------------

# What's a "pure function" in React ?

TLDR: deterministic + no side effect.

A function that, given the same inputs, always returns the same output and does not produce side effects.

In React, this means:

 - A component should return the same `JSX` for the same `props` and `state`.

 - It should NEVER modify external variables, directly change props, or cause unintended side effects during rendering.

-------------------------------------------------------

# Can you give examples of "impure functions" in React ?

Some operations are inherently impure:
 - data fetching
 - logging
 - subscriptions
 - DOM manipulation
 
React’s approach is to isolate these side effects:
 - Class components: use lifecycle methods (componentDidMount, componentWillUnmount, etc).
 - Function components: use hooks (useEffect, useLayoutEffect).

This way, the render phase (component body) stays pure, while effects are handled after rendering.

## Impure component example:

```javascript
 function MyComponent({ name }) {
  console.log("Rendering..."); // side effect inside render
  return <h1>Hello {name}</h1>;
 }
```

## Pure render + side effect in useEffect:

```javascript
 function MyComponent({ name }) {
  useEffect(() => {
   console.log("Mounted or updated"); // side effect isolated
  }, [name]);

  return <h1>Hello {name}</h1>;
 }
```

So the best way to phrase it:
 - React components should be pure functions of their props and state during rendering.
 - Side effects should be moved into hooks (or lifecycle methods).

-------------------------------------------------------

# Why React prefers purity

React’s rendering model relies on being able to re-render components predictably.

If components are pure:

 - React can **optimize rendering** with tools like memoization (React.memo) and concurrent rendering.

 - **Debugging and testing** are easier, since the UI is just a predictable function of state + props.
 
-------------------------------------------------------
 
# Difference between functional and class components

These are the two main ways to define components.

1. Definition Differs

```javascript
 function Greeting(props) {    // Functional Component
  return <h1>Hello, {props.name}!</h1>;
 }
```

```javascript
 class Greeting extends React.Component {   // Class Component
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
 }
```

2. State Management Differs
 
```javascript
 function Counter() {    // Functional Components are originally stateless
  const [count, setCount] = React.useState(0);   // but with React Hooks (like useState, useEffect), they can manage state and lifecycle logic
  return <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>;
 }
```
 
```javascript
 class Counter extends React.Component {
  state = { count: 0 };
  render() {
    return (
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>   // Class Components: State updated with this.setState()
        Clicked {this.state.count} times    // Class Components: State getter is this.state 
      </button>
    );
  }
 }
```

3. Lifecycle Methods

Functional Components : use hooks like `useEffect` to handle lifecycle behavior (`mount`, `update`, `unmount`).

```javascript
 useEffect(() => {
  console.log("Mounted or updated");
  return () => console.log("Unmounted");
 }, []);
```

Class Components : Use lifecycle methods such as `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`.

```javascript
 componentDidMount() { console.log("Mounted"); }
 componentWillUnmount() { console.log("Unmounted"); }
```

4. Simplicity

Functional Components are simpler:
 - Easier to write and read.
 - Encourages cleaner and more modular code.
 - No need to worry about this binding.

Class Components:
 - More verbose.
 - Requires this keyword for state and props.
 - Can get harder to manage in large projects.

-------------------------------------------------------
 
# What's the difference between `useMemo()` vs `useCallback()` ?

Both are hooks for caching, for performance optimization, but they serve slightly different purposes.

- `useMemo()` → caches the **result** of a function

- `useCallback()` → caches the **function itself** (not the result).

HOF / wrapper ???

-------------------------------------------------------
 
# `useMemo()` Use Case and Basic Example?

Memoizes/Caches the **result** of a function.

Use case: When you have an expensive calculation and don’t want to recompute it unless dependencies change.

```javascript
 const expensiveValue = useMemo(() => {
  console.log("Calculating...");
  return count * 2;     // imagine a heavy computation here
 }, [count]);        // calculation only runs when count changes
```

HOF / wrapper ???

for the result of a function to be memoized with `useMemo()`, it should be:
- deterministic: the same inputs always produce the same outputs ???
- pure: it should not have side effects ???

-------------------------------------------------------
 
# `useCallback()` Use Case and Basic Example?

Memoizes/Caches the **function itself** (not the result).

Use case: When you pass callbacks to child components.

`<CoolDisplay onClick={increment} />`

CoolDisplay component will be re-rendered whenever `increment` is re-created, typically every time its parent component re-renders.

We can avoid that by caching `increment` since it's not a changing value.

HOF / wrapper ???

for a function to be memoized with `useCallback()`, it should be BOTH:
- deterministic: the same inputs always produce the same outputs ???
- pure: it should not have side effects ???

-------------------------------------------------------

# What's the difference between `React.memo()` vs `useCallback()` ?

Both are hooks for caching, for performance optimization, but they serve slightly different purposes.

- `useCallback()` → caches a **regular function**

- `React.memo()` → caches a **react function component**

HOF vs HOC / wrappers ???

-------------------------------------------------------

# What's `React.memo()` ?

Memoizes/Caches the rendered output of a react function component, meaning:
 - React skips re-rendering the component if its `props` are the same as the previous render.
 - If `props` change, it will re-render normally.

Performance optimization.

Prevents unnecessary `re-renders` of functional components.

`React.memo()` is a HOC: it's a wrapper / intersector.

for a react function component to be memoized with `useCallback()`, it should be BOTH:
- deterministic: the same inputs always produce the same outputs ???
- pure: it should not have side effects ???

-------------------------------------------------------

# How: Code example for `React.memo()` ?

```javascript
 import React from 'react';

 const MyComponent = React.memo(function MyComponent({ value }) {
  console.log('Rendered!');
  return <div>{value}</div>;
 });
```

-------------------------------------------------------
 
# Why: Real-Life Use Cases For `React.memo()` ?

Components re-renders can hurt performance, especially for:
 - Large component trees
 - Components with expensive rendering logic (e.g., heavy calculations, complex UI)
 - Lists of items that rarely change

These are common examples where `React.memo()` is especially useful.

-------------------------------------------------------
 
# How does `React.memo()` compare the `props`?

By default, `React.memo()` does a **shallow comparison** of props.

-------------------------------------------------------
 
# `React.memo()` comparing `props`: Is it possible to change the default behavior?

Yes, via a custom **comparison function**.

```javascript
 const MyComponent = React.memo(
  ({ user }) => {     // function component
    console.log('Rendered!');
    return <div>{user.name}</div>;
  },
  (prevProps, nextProps) => {    // custom comparison function
    return prevProps.user.id === nextProps.user.id;    // only re-renders if user.id changes, even if other properties in user change
  }
 );
```

-------------------------------------------------------
 
# How do you handle file uploads in React forms ?

TLDR: React just helps you access the `file` object. Uploading is handled by the browser via `FormData` and a request to the server.

React doesn’t manage file contents directly — the browser handles that.

React gives you access to the selected file(s) through `event.target.files`.

```javascript
 function FileUploadForm() {
  const [file, setFile] = React.useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);      // get the first file
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();   // FormData is a built-in browser API
    formData.append("myFile", file);

    // Send to backend
    fetch("/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log("Success:", data))
      .catch((err) => console.error("Error:", err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
 }
```

Unlike text inputs, `<input type="file">` is **uncontrolled** in React:
 - You CANNOT set its value via React state (security reasons).
 - You handle changes via `onChange` and keep references to files instead.

-------------------------------------------------------

# How do you debounce/throttle input in React ?

TODO

What ?

Limit how often an expensive operation (like an API call, input handler, or scroll listener) is executed in response to rapidly firing events.

-------------------------------------------------------
 
# Pros and Cons of Inline vs External Styling in React? 

Inline-Styling in React are written as JavaScript `objects` and applied directly to elements using the `style prop`.

Inline-Styling Pros:
- Scoped by default – no risk of style leaks.
- Dynamic styling – can use JS variables and state easily.
- Quick & simple for small components or one-off styles.

Inline-Styling Cons:
- `Partial` CSS Support - No pseudo-classes (:hover, :focus) or media queries.
- `Partial` CSS Support - Can’t leverage CSS features like keyframe animations or complex selectors.
- Verbose – not ideal for large components.
- Harder to maintain and re-use styles.

External styling refers to using `CSS files`, `CSS Modules`, or `CSS-in-JS` libraries.

External-Styling Pros:
- `Full` CSS support (pseudo-classes, media queries, animations).
- Cleaner & reusable – easier to manage across large apps.
- Separation of concerns – keeps JSX less cluttered.
- Works well for team projects.

External-StylingCons:
- Might need build setup (CSS Modules, CSS-in-JS).
- Slightly more overhead than inline styles.
- Scoped CSS (with CSS Modules) requires different syntax.

TLDR:
 - Inline styles → Quick fixes, dynamic per-element styling, or when styles depend heavily on props/state.
 - External styles (CSS/CSS-Modules/CSS-in-JS) → Larger projects, reusable styles, complex UI with pseudo-classes and media queries.

-------------------------------------------------------
 
# What are CSS Modules ?

Regular CSS files, but class names are locally scoped by default using unique hashes.

Prevents naming conflicts without extra setup.

Pros:
- Full CSS support.
- Scoped CSS by default → no global pollution.
- Familiar CSS syntax.

Cons:
- Styling is separate from component logic (JSX) → potential context change inefficiency.
- Dynamic styles (based on props) can be tricky → usually require multiple classes or inline styles.

-------------------------------------------------------
 
# What's CSS-in-JS ?

CSS-in-JS = Styled Components.

Uses JavaScript to create styled React components with template literals.

Styles are scoped automatically.

Pros:
- Full CSS support.
- Scoped CSS by default → no global pollution.
- Familiar CSS syntax.
- Styles live with the component → easy to manage per-component styles.
- Dynamic styling is straightforward using `props`.
- Encourages component-driven styling → aligns with React philosophy.

Cons:
- Slight runtime overhead (injecting styles in JS).
- CSS syntax inside JS → may feel less familiar.
- Can increase bundle size if heavily used.

-------------------------------------------------------
 
# 





-------------------------------------------------------
 
# 



-------------------------------------------------------
 
# 





-------------------------------------------------------
 
# 





-------------------------------------------------------
 
# 





-------------------------------------------------------
 
# 
















 
 
 
 
 