
# Code Review For React.js Project


## 1. Initial Inspection

a. Do some visual inspection (check the UI, try to infere what should be in state)

b. With the component inspector, figure out the component structure

c. Pay attention to where state is and figure out if it should be lifted more, moved to context, if a state management library would make sense or not

d. Assess the state data-strucuture, is it the optimal one?
   - Array are good for lists
   - Objects are good for fast access of specific objects (google sheets)
   - Use primitives as much as possible for anything else
   - Check for unnecessary re-renders() - use the React debugger here again


## 2. React Optimizations

a. Look out for opportunities for using `useMemo`, `useCallback` or `React.memo`.

b. Assess moving state up or down to the component tree.


## 3. Code Quality -  here you do a "component code review" 

a. Design Patterns - the Container/Presenter pattern, the Early Return pattern, asses if there is any logic that is worth encapsulating in a custom hook 
   - Statefull logic - react query
   - WET before DRY

b. Code Style
   - Review variable naming following this guide from Google

c. Is there stateless logic in a component that can be moved out?
   - Example: an email validation function declared inside a component should be moved outside and unit tested

d. CSS:
   - Avoid inline styles
   - CSS Modules / CSS Classes

e. Testing
   - Write some component tests before the interview so you are not rusty

-------------------------------------------------------

## What don't you like about the code here?

```javascript
import React, { useState } from 'react';

export const Component = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'item 1', category: 'category A' },
    { id: 2, name: 'item 2', category: 'category B' },
    { id: 3, name: 'item 3', category: 'category A' },
    { id: 4, name: 'item 4', category: 'category C' },
    { id: 5, name: 'item 5', category: 'category B' },
  ]);

  const removeItem = (index: number) => {
    items.splice(index, 1);
    setItems([...items]);
  };

  return (
    <section>
      ...
    </section>
  );
};
```

a. Arrow functions should never be used as React components

b. The splice method mutates the items array

c. The map method negatively impacts performance

Solution:

b


