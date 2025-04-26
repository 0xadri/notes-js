
-------------------------------------------------------

# Docs

https://testing-library.com/docs/

DOM Testing Cheatsheet : https://testing-library.com/docs/dom-testing-library/cheatsheet/
 - `getBy` , `findBy` , `queryBy` , `getAllBy` , `findAllBy` , `queryAllBy`

Jest Matchers : https://jestjs.io/docs/expect
 - `toBe` , `toEqual` , `toBeDefined` , `toBeUndefined()` , `toBeTruthy` , `toBeFalsy` , `toBeNull` , `toThrow`, `expect.not` 

-------------------------------------------------------

# Common Imports

>     import { render, screen, cleanup , waitFor } from '@testing-library/react';
>     import userEvent from '@testing-library/user-event';
>     import '@testing-library/jest-dom';

-------------------------------------------------------

# Problem Statement

We want a reliable way to test our UI as if we were a user, from a user perspective.

UI-layer testing framework that helps us ensure that our React components are rendering and behaving properly.
- built explicitly for testing React components.
- allows us to test our components in a way that mimics real user interactions.

-------------------------------------------------------

# Best Practice Reminder

AAA: Arrange, Act, Assert

-------------------------------------------------------

# RTL : Install

`npm install --save-dev @testing-library/react`

p.s. `create-react-app` by default includes RTL 

`npm install --save-dev @testing-library/jest-dom`

p.s. `create-react-app` by default includes jest-dom (and jest)

`npm install --save-dev @testing-library/user-event`

p.s. `create-react-app` by default includes user-event (and jest)

-------------------------------------------------------

# RTL : Watch Mode

`npm test`

Launches the test in watch mode, allowing the test to re-run every time the file is saved! 

Type `q` in the terminal to quit out of the watch mode.

-------------------------------------------------------

# RTL : Watch Mode

Customize terminal output by RTL

`npm test -- --coverage` // --coverage : Indicates that test coverage information should be collected and reported in the output

`npm test -- --silent`  // --silent : Prevents tests from printing messages through the console.

`npm test -- --help`  // --help : Displays help

-------------------------------------------------------

# RTL : `render()` and screen

`render()` : function that we can use to virtually render components and make them available in our unit tests

`render()` : similar to ReactDOM.render(), RTL’s render() function takes in JSX as an argument

`screen` : special object which can be thought of as a representation of the browser window

`screen.debug()` : prints out all the DOM contents

After importing the render and screen values from `@testing-library/react`, you can test using the `it()` function from the Jest testing framework.

-------------------------------------------------------

# RTL : Example

>     import { render, screen } from '@testing-library/react'
>     
>     const Greeting = () => {
>      return (<h1>Hello World</h1>)
>     };
>     
>     it('prints out the contents of the DOM', () => {
>        render(<Greeting />);
>        screen.debug();
>     });

-------------------------------------------------------

# RTL : Example

GroceryList.js

>     const GroceryList = () => {
>       return (
>       <div>
>         <h1>Grocery List</h1>
>           <ul>
>             <li>
>               <label htmlFor="item1">Apples</label>
>               <input type="checkbox" id="item1"/>
>             </li>
>             <li>
>               <label htmlFor="item2">Milk</label>
>               <input type="checkbox" id="item2"/>
>             </li>
>             <li>
>               <label htmlFor="item3">Cereal</label>
>               <input type="checkbox" id="item3"/>
>             </li>
>           </ul>
>         </div>
>       )
>     };
>     export default GroceryList;

testfile.js

>     import { render, screen, cleanup } from '@testing-library/react';
>     import GroceryList from './components/GroceryList';
>     import userEvent from '@testing-library/user-event';
>     
>     it('should mark the first checkbox as checked', () => {
>       // render the grocery list
>       render(<GroceryList />);
>       // grab the apple item
>       const appleItem = screen.getByLabelText('Apples');
>       // simulate a "click" on the apple checkbox
>       userEvent.click(appleItem);
>       // assert that the apple checkbox was checked
>       expect(appleItem).toBeChecked();  // extension provided by : testing-library/jest-dom
>     });

-------------------------------------------------------

# RTL : `it()` Example Skeleton

>     const header = screen.getByText("Passing Thoughts");
>     expect(header).toHaveTextContent("Passing Thoughts");

>     const button = screen.getByRole('button');
>     expect(button).toBeEnabled();

-------------------------------------------------------

# RTL : `getByRole()` Example Skeleton

>     const myCheckbox = screen.getByRole('checkbox')
>     const myInput = screen.getByRole("input");
>     const myButton = screen.getByRole("submit");

>     const nameInput = screen.getByRole('textbox' , { name: /name/i });
>     const emailInput = screen.getByRole('textbox' , { name: /email/i });
>     const addressInput = screen.getByRole('textbox' , { name: /address/i });
>     const selectDrowdown = screen.getByRole('combobox' , { name: /payment method/i });   // for dropdown
>     const checkoutButton = screen.getByRole('button' , { name: /checkout/i });

TLDR on Accessible Name : https://www.tpgi.com/what-is-an-accessible-name/

-------------------------------------------------------

# RTL : `getByText()` w Regex

Matching a string

>     getByText(container, 'Hello World')   // full string match

Matching a regex

>     getByText(container, /World/)   // substring match
>     getByText(container, /world/i)   // substring match, ignore case

https://testing-library.com/docs/dom-testing-library/cheatsheet/#text-match-options

-------------------------------------------------------

# RTL : `getByX` vs `queryByX` methods

`.getByX` methods: throw an error and immediately cause the test to fail.

`.queryByX` methods: return null if they don’t find a DOM node
 - useful when asserting that an element is NOT present in the DOM.

-------------------------------------------------------

# RTL : `queryByX` methods

>     const emptyThought = screen.queryByText("Oreos are delicious")
>     expect(emptyThought).toBeNull();
  
-------------------------------------------------------

# RTL : `queryByX` methods

something.test.js

>     import App from './components/App';
>     import { render, screen } from '@testing-library/react';
>     
>     it('Header should not show Goodbye yet', () => {
>       render(<App />);
>       const header = screen.queryByText('Goodbye!');
>       expect(header).toBeNull();  // Assert null as we have not clicked the button
>     });

-------------------------------------------------------

# RTL : `getByX` VS `findByX` methods

`.getByX` methods: throw an error and immediately cause the test to fail.

`.findByX` methods: query for asynchronous elements, which will eventually appear in the DOM. 
 - The `.findByX` methods work by returning a Promise, which resolves when the queried element renders in the DOM. 
 - `async`/`await` keywords can be used to enable asynchronous logic.

-------------------------------------------------------

# RTL : `getByX` VS `findByX` vs `queryByX`

`.getByX` methods: throw an error and immediately cause the test to fail.
 - assert regular elements - synchronous ones

`.queryByX` methods: return null if they don’t find a DOM node
 - assert an element is NOT present in the DOM.
 - whether sync or asynch

`.findByX` methods: query for asynchronous elements
 - asset an element will eventually appear in the DOM. 

-------------------------------------------------------

# RTL : `findByX` methods

Thought.test.js

>     it("Should show new thought to be present", async () => {
>       render(<App />);
>     
>       // The code below mimics a user posting a thought with text 'Oreos are delicious'
>       const addThoughtInput = screen.getByRole("input");
>       const addButton = screen.getByRole("submit");
>       userEvent.type(addThoughtInput, "Oreos are delicious");
>       userEvent.click(addButton);
>     
>       const thought = await screen.findByText("Oreos are delicious");
>       expect(thought).toBeInTheDocument();
>     });

-------------------------------------------------------

# RTL : `findByX` + `Await`

>     it("Should display copied text after removing tape", async () => {
>       render(<CopyCatContainer />); 
>       const input = screen.getByRole("textbox"); 
>       // Await typing "Eventually this will appear" into the input before moving on
>       await userEvent.type(input, "Eventually this will appear"); 
>       // 
>       const copyCatImage = screen.getByRole("button", { name: /copycat/i }); 
>       userEvent.click(copyCatImage); 
>       // Find and wait for the quiet cat image button to be displayed before moving on
>       const quietCatImage = await screen.findByRole("button", { name: /quietcat/i }); 
>       // 
>       userEvent.click(quietCatImage); 
>       // Find and wait for "Eventually this will appear" to be displayed
>       const copiedText = await screen.findByText("Eventually this will appear");
>     });

-------------------------------------------------------

# RTL : Mimick User Interactions

## Problem Statement

As a JS Dev testing my app, I want to mimic user interactions such as clicking a checkbox and typing text.

## Solution

The library @testing-library/user-event in the @testing-library suite is there just for that.

-------------------------------------------------------

# RTL : userEvent library/object

>     import userEvent from '@testing-library/user-event';
>     
>     // userEvent object contains many built-in methods that allow us to mimic user interactions
>     
>     userEvent.interactionType(nodeToInteractWith);
>     
>     userEvent.type()
>     userEvent.click()
>     userEvent.hover()
>     ...

https://github.com/testing-library/user-event

https://testing-library.com/docs/user-event/utility

-------------------------------------------------------

# RTL : `userEvent.interaction()` vs `user.interaction()`

You can do

`userEvent.click();`

Or

`const user = userEvent.setup();`

`user.click();`

TLDR: most of the time `userEvent.click()` is ok

c.f. https://github.com/testing-library/user-event/discussions/1036

-------------------------------------------------------

# RTL : `waitFor()` method

## Problem Statement

I have components that disappear asynchronously. How can I test they disappear as planned?
 - `waitFor()` method

Basic Syntax

>     await waitFor(() => {
>     	...
>     })

-------------------------------------------------------

# RTL : `waitFor()` Example

App.js

>     import { waitFor, render, screen } from '@testing-library/react';
>     import '@testing-library/jest-dom';
>     import userEvent from '@testing-library/user-event';
>     import { Header } from './header.js'
>     
>     it('should remove header display', async () => {
>       // Render Header
>       render(<Header/>)
>       // Extract button node 
>       const button = screen.getByRole('button');
>       // click button
>       userEvent.click(button);
>     
>       // Wait for the element to be removed asynchronously
>       await waitFor(() => {
>         const header = screen.queryByText('Hey Everybody');
>         expect(header).toBeNull(); 
>         // OR: expect(header).not.toBeInTheDocument();
>       })
>     });

-------------------------------------------------------

# RTL : `waitFor()` deets

`waitFor()` callback function : confirms this by querying for this element and then waiting for the `expect(`) assertion to pass.

`waitFor()` optional 2nd arg: options object, can be used to control how long to wait for before aborting and much more

-------------------------------------------------------

# RTL : Testing for Accessibility

Writing tests that adhere to this principle forces you to make your applications more accessible. If a test can find and interact with your elements by their text, it’s more likely that a user who uses assistive technology can as well.

One way we can write tests with accessibility concerns in mind is by sticking to querying with `ByRole` queries (`getByRole`, `findByRole`, `queryByRole`). The ByRole variant will be able to query any elements within the accessibility tree. If you are unable to query for the component you want to test, you may have just exposed a part of your application that is inaccessible.

React Testing Library Playground for suggestions on accessible queries for more complex needs. 

https://testing-playground.com/

-------------------------------------------------------

# RTL : Testing for Accessibility

CheckoutForm.js

>     import React, { useState } from "react";
>     
>     const CheckoutForm = () => {
>       const [formState, setFormState] = useState({
>         name: "",
>         email: "",
>         address: "",
>         payment: "Credit Card",
>       });
>     
>       const handleChange = (e) => {
>         setFormState({ ...formState, [e.target.name]: e.target.value });
>       };
>     
>       const handleSubmit = (e) => {
>         e.preventDefault();
>         console.log(formState);
>       };
>     
>       return (
>         <form onSubmit={handleSubmit}>
>           <div>
>             <label htmlFor="name">
>               Name:
>               <input id="name" name="name" type="text" onChange={handleChange} />
>             </label>
>           </div>
>           <div>
>             <label htmlFor="email">
>               Email:
>               <input id="email" name="email" type="email" onChange={handleChange} />
>             </label>
>           </div>
>           <div>
>             <label htmlFor="address">
>               Address:
>               <input
>                 id="address"
>                 name="address"
>                 type="text"
>                 onChange={handleChange}
>               />
>             </label>
>           </div>
>           <div>
>             <label htmlFor="payment">
>               Payment Method:
>               <select id="payment" name="payment" onChange={handleChange}>
>                 <option>Credit Card</option>
>                 <option>Debit Card</option>
>                 <option>PayPal</option>
>               </select>
>             </label>
>           </div>
>           <div>
>             <button type="submit">Checkout</button>
>           </div>
>         </form>
>       );
>     };
>     export default CheckoutForm;

CheckoutForm.test.js

>     import { render, screen } from "@testing-library/react";
>     import CheckoutForm from "./CheckoutForm";
>     
>     it("finds form fields and checkout button", () => {
>       render(<CheckoutForm />);
>       screen.getByRole('textbox' , { name: /name/i });
>       screen.getByRole('textbox' , { name: /email/i });
>       screen.getByRole('textbox' , { name: /address/i });
>       screen.getByRole('combobox' , { name: /payment method/i });
>       screen.getByRole('button' , { name: /checkout/i });
>     });






