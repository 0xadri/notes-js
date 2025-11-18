
-------------------------------------------------------

# Code Review For Project In React.js

-------------------------------------------------------

## How To On Real Project

1. Initial Inspection
2. Component Code Review - Following The Categories Below

-------------------------------------------------------

### Initial Inspection

a. Do some visual inspection (check the UI, try to infere what should be in state)

b. With the component inspector, figure out the component structure

c. Pay attention to where state is, and figure out if it should be lifted more, moved to context, if a state management library would make sense or not

d. Assess the state data-structure, is it the optimal one?
   - Array are good for lists
   - Objects are good for fast access of specific objects (google sheets)
   - Use primitives as much as possible for anything else
   - Check for unnecessary re-renders() - use the React debugger here again

-------------------------------------------------------

## Component Code Review - Following The Categories Below

Read below.

-------------------------------------------------------

## Code Review Categories 

1. Code Quality - SOLID, project structure, testing, old syntax, data structures, defensive prog, CSS scoping (CSS modules)
2. UX - views have url, pagination, 
3. Accessibility - semantic html, intuitive tabulation, aria roles and labels, color contrast
4. Performance - image optimization, duplicated states, caching, lazy loading

-------------------------------------------------------

### 1. Code Quality

Common Issues:
 - TS: No TypeScript usage. It's not mandatory, but it is a standard to keep in mind
 - TS: using any instead of correct types
 - ARCH: Elaborate organizational proposal at the level of components, CSS, files and directories.
 - ARCH: Design Patterns - container/presenter pattern, early return pattern
 - ARCH: API calls mixed within components - instead of isolated in custom hooks or services (SOLID)
 - ARCH: Components are large, impure, and/or stateful - instead of keeping them small, pure, and stateless when possible.
 - TEST: 65% test coverage
 - TEST: untestable code: put code always in functions so it can be tested
 - TEST: stateless logic in a component - instead of moving it out to a separate function in a util.ts module i.e. an email validation function
 - DEF: Lack of defensive programming techniques - i.e. to add fallback values
 - DEF: HTTP response validation missing (no status code checks)
 - DEF: error and loading states handling
 - CSS: using inline styles - instead of CSS modules or CSS-in-JS for scoping styles
 - unreadable and hard-to-maintain code: namings should be self-explanatory, logic should be easy to digest
   
Readability, Testability, Maintainability
 - 100% of the code must be in functions
 - self-explanatory namings
 - easy-to-digest logic
 - SRP: each function has a tiny responsibility - mention SOLID Principles
 - Pure Functions: for no side effects

Defensive Programming
 - handle errors
 - handle loading state
 - handle unexpected empty/null/undefined/0 values, provide default
 - handle unexpected type, i.e. string vs number

Upgrade Syntax
 - var -> const or let
 - let -> const (if possible)
 - buggy const (i.e. reassigned)
 - spread/rest operators
 - method chaining -> async/await
 - class component -> function component
 - regular function -> arrow functions

-------------------------------------------------------

### 2. UX

Common Issues:
 - No URL-based routing (cannot bookmark specific view, browser back button doesn't work)
 - No pagination implemented, loading too little or too much data at once

-------------------------------------------------------

### 3. Accessibility

 - SEO+ACC: Semantic HTML, use `<main>, <section>, <nav>, <header>, <footer>`.
 - ACC: Image-based navigation lacks keyboard accessibility (cannot Tab + Enter)

-------------------------------------------------------

### 4. Performance

Common Issues:
 - data structures: you may optimise an array into a set
 - upgrading basic for-loops into Array Instance Methods - i.e. reduce(), map(), etc
 - duplicate states: replace by data derived on-the-fly
 - no use of memoization

Optimize JS/TS Loops and Data Structures
 - array -> set, or map
 - loop -> proper algorithms
 - loop -> Array Instance Methods such as reduce(), or map()

Optimize React:
 - Look out for opportunities for using `useMemo`, `useCallback` or `React.memo`.
 - Assess moving state up or down to the component tree.

Optimize Performance
 - Caching
 - Lazy Loading

-------------------------------------------------------

















-------------------------------------------------------

# Code Review Challenges

-------------------------------------------------------

## Mini App

What don't you like about the code here?

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

Pick one answer:

a. Arrow functions should never be used as React components

b. The splice method mutates the items array

c. The map method negatively impacts performance

### Solution

b

-------------------------------------------------------

## E-Shop Spaghetti Code Refactor

The given function retrieves the items in a cart and its shipping costs to calculate the total to pay. 

The current code is hard to understand and maintain due to spaghetti code. 

Now the requirements have changed and we need to return the total instead of printing it to console.

Refactor the function so it applies best practices.

```javascript
function fetchDataAndProcess() {
  fetch('https://api.example.com/cart')
    .then(response => response.json())
    .then(data => {
      let total = 0;
      for (let i = 0; i < data.length; i++) {
        const product = data[i];
        let productTotal = product.price * product.quantity;
        total = total + productTotal;
      }
      fetch('https://api.example.com/shipping')
        .then(shippingCostsResponse => shippingCostsResponse.json())
        .then(shippingCosts => {
          total = total + shippingCosts.amount;
          console.log('Total Price (including shipping costs):', total);
        })
        .catch(error => {
          console.error('Error fetching shipping costs:', error);
        });
    })
    .catch(error => {
      console.error('Error fetching cart data:', error);
    });
}
```

### SOLUTION

```javascript
// --- API Layer (data fetching logic) ---
async function fetchJSON(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch from ${url}: ${response.statusText}`);
  }
  return response.json();
}
async function fetchCart() {
  return fetchJSON('https://api.example.com/cart');
}
async function fetchShipping() {
  return fetchJSON('https://api.example.com/shipping');
}

// --- Business Logic Layer (pure functions) ---
function calculateCartTotal(cart) {
  if (!Array.isArray(cart)) throw new Error('Cart must be an array');
  return cart.reduce((sum, item) => {
    const { price, quantity } = item;
    if (typeof price !== 'number' || typeof quantity !== 'number') {
      throw new Error('Invalid cart item: price and quantity must be numbers');
    }
    return sum + price * quantity;
  }, 0);
}
function calculateTotal(cartTotal, shippingAmount) {
  if (typeof cartTotal !== 'number' || typeof shippingAmount !== 'number') {
    throw new Error('Both cart total and shipping amount must be numbers');
  }
  return cartTotal + shippingAmount;
}

// --- Orchestration Layer (workflow logic) ---
async function getTotalPrice() {
  try {
    const [cart, shipping] = await Promise.all([fetchCart(), fetchShipping()]);
    const cartTotal = calculateCartTotal(cart);
    const total = calculateTotal(cartTotal, shipping.amount);
    return total;
  } catch (error) {
    console.error('Error calculating total price:', error);
    throw error;
  }
}

// --- Example usage (outside of business logic) ---
async function main() {
  try {
    const total = await getTotalPrice();
    console.log('Total price (including shipping):', total);
  } catch (err) {
    console.error('Could not retrieve total:', err.message);
  }
}
main();
```

-------------------------------------------------------

## Gaming App

Review this code. Leave comments where appropriate.

TODO: add solution

```javascript
import { useState } from "react";
import isEven from "~/utilities/isEven";

class Square extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    );
  }
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares)) {
      return;
    } else if (calculateWinner(squares[i])) {
      return;
    }
    var nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares.i = "X";
    } else {
      nextSquares["i"] = "O";
    }
    onPlay(nextSquares);
  }

  var winner = calculateWinner(squares);
  var status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onClick={handleClick} />
        <Square
          value={squares[0]}
          onSquareClick={function () {
            handleClick;
          }}
        />
        <Square
          value={squares[1]}
          onSquareClick={function () {
            handleClick;
          }}
        />
        <Square
          value={squares[2]}
          onSquareClick={function () {
            handleClick;
          }}
        />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={handleClick(3)} />
        <Square value={squares[4]} onSquareClick={handleClick(4)} />
        <Square value={squares[5]} onSquareClick={handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function Game() {
  const [history] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  var xIsNext = isEven(currentMove);
  var currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    this.state.history = nextHistory;
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    const description = "";
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key="move">
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game gameBoard">
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
        ></Board>
      </div>
      <div className="game gameBoard gameInfo">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

const calculate_winner = (squares) => {
  // assume the following request returns an array:
  //   [
  //     [0, 1, 2],
  //     [3, 4, 5],
  //     [6, 7, 8],
  //     [0, 3, 6],
  //     [1, 4, 7],
  //     [2, 5, 8],
  //     [0, 4, 8],
  //     [2, 4, 6],
  //   ];
  var lines = fetch("https://example.com/lines").then((response) => {
    response = lines;
  });

  for (var i = 0; i < lines.length; i++) {
    var a = lines[i][0];
    var b = lines[i][1];
    var c = lines[i][2];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
};
```


