


-------------------------------------------------------

# Code Review For React.js Project

TODO: Add:
 - watch out for things that should/could be updgraded:
 	- var -> const or let
 	- let -> const (if possible)
 	- buggy const (i.e. reassigned)
 	- method chaining -> async/await
 	- class component -> function component
 - watch out for untestable code: put code always in functions so it can be tested
 - watch out for unreadable and hard-to-maintain code: namings should be self-explanatory, logic should be easy to digest
 - watch out for data structures: you may optimise an array into a set
 - watch out for upgrading basic for-loops into Array Instance Methods - i.e. reduce(), map(), etc
 - watch out for error and loading states handling

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

# What don't you like about the code here?

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

-------------------------------------------------------

# E-Shop Spaghetti Code Refactor

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

## SOLUTION

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

# Code Review This Snippet

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


