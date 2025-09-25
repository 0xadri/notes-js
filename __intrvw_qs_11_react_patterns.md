

-------------------------------------------------------

# Does react have a Hierarchy Of States ?

State management topic.

One of the trickiest and most important parts of building apps.

A good way to think about it is in a **hierarchy of states**, from most local (simplest) to most global (complex and powerful):
 1. Component State (Local State)
 2. Shared State (Lifted State)
 3. Global State

Think of state like a pyramid:

```
           Global State
          (rare, app-wide)
        ---------------------
           Shared State
        (parent + children)
        ---------------------
           Component State
          (local, isolated)
```

Guideline:
 - Start with component state.
 - If multiple siblings need it → lift to shared state.
 - If it’s needed everywhere → move to global state.

## 1. Component State (Local State)

Where it lives: Inside a single component (useState, useReducer).

Use case: When only one component cares about the data.

Cheap, simple, and fast. Always prefer it if the state isn’t needed anywhere else.

## 2. Shared State (Lifted State)

Where it lives: In a common parent component, then passed down as props.

Use case: When multiple components need access to the same data, but only within a section of the app.

Rule of thumb: “Lift state up” — put the state in the nearest common ancestor of the components that need it.

## 3. Global State

Where it lives: Outside the component tree, accessible anywhere (Context API, Redux, Zustand, Jotai, Recoil, etc.).

Use case: When many unrelated components across the app need the same data.

Examples: auth, logging, theme, notifications, shopping cart.

Powerful but should be used sparingly, because:
 - can lead to unnecessary re-renders if mismanaged.
 - introduces complexity compared to local/shared state.

-------------------------------------------------------

# Container–Presentational Pattern

Splits Components Into
 1. Presentational (UI) components → only concerned with layout, markup, and styles.
 2. Container (logic) components → handle state, data fetching, and business logic.

Why
 - Separation of concerns → UI is reusable and testable.
 - Makes components easier to maintain and swap.

```javascript
 // Presentational (stateless)
 const UserList = ({ users }) => (
  <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>
 );

 // Container (stateful)
 const UserListContainer = () => {
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    fetch('/api/users').then(res => res.json()).then(setUsers);
  }, []);
  return <UserList users={users} />;
 };
```

-------------------------------------------------------

# Higher-Order Components (HOCs)


Think of it as:
 - a wrapper
 - intersector
 - decorator
 - transformator

What it is:
 - A function that takes a `component` and returns a `new component` with **extra props or behavior**.
 - Whereas a regular component transforms props into UI, a higher-order component transforms a component into another component.
 - Wraps existing components without modifying their internals.
 
Use cases:
 - `logging`, `theming`, `global state mgmt`, or `auth`.
 - generally for cross-cutting concerns, encourages code reuse.

```javascript
 function withLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) return <p>Loading...</p>;
    return <Component {...props} />;
  };
 }

 const UserListWithLoading = withLoading(UserList);
```

-------------------------------------------------------

# Examples of HOC (Higher Order Component) in React ?

`React.memo` is an HOC that adds functionality to another component by using composition.

HOCs are common in third-party React libraries, such as:
 - `Redux` for `connect`
 - `Relay` for `createFragmentContainer`.

https://www.patterns.dev/react/hoc-pattern/

-------------------------------------------------------

# Differences between HOFs vs HOCs patterns ?

Both patterns utilize functions to create reusable logic, but they operate in different contexts. 

Higher-order functions are a **general JavaScript concept** where a function takes another function as an argument or returns a function. 

In React, higher-order components are a specific pattern that leverages this concept to create reusable component logic by wrapping existing components with enhanced functionality.

https://www.patterns.dev/react/hoc-pattern/

-------------------------------------------------------

# Custom Hooks

What it is:
 - Encapsulating reusable stateful logic into a function that starts with use.

Why:
 - Avoids duplicating logic across components.
 - Encourages clean, composable, and testable state management.

```javascript
 function useFetch(url) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(url).then(res => res.json()).then(data => {
      setData(data);
      setLoading(false);
    });
  }, [url]);

  return { data, loading };
 }

 function UserList() {
  const { data: users, loading } = useFetch('/api/users');
  if (loading) return <p>Loading...</p>;
  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
 }
```

-------------------------------------------------------

# Middleware Pattern

Wraps/Decorate functionalities with code running before or after.

Used by:
 - Express middleware → operates on HTTP request/response lifecycle.
 - React middleware (Redux or routing) → operates on state management or component rendering lifecycle.







