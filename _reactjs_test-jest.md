
—Docs—

https://jestjs.io/
https://github.com/testing-library/jest-dom

//-------------------------------------------------------//

# Problem Statement ——

We want a reliable way to test our code, not just once, but continuously as our project grows.

A unit test is designed to test the smallest unit of your code, like a single function. 

Jest provides: assertion library + test runner

Test runner: command line tool for executing test files and displaying the results

//-------------------------------------------------------//

# Jest : File Setup ——

make sure that our test files are located, or match the following name conventions under the /src top-level directory:

 - files with names ending in .test.js
 - files with names ending in .spec.js
 - .js files within a __tests__/ directory
 
//-------------------------------------------------------//

# Jest : Watch Mode ——

npm test

Launches the test in watch mode, allowing the test to re-run every time the file is saved! 
Type q in the terminal to quit out of the watch mode.

//-------------------------------------------------------//

# Jest : Watch Mode ——

Customize terminal output by Jest

npm test -- --coverage // --coverage : Indicates that test coverage information should be collected and reported in the output

npm test -- --silent  // --silent : Prevents tests from printing messages through the console.

npm test -- --help  // --help : Displays help

//-------------------------------------------------------//

# Jest : Report ——

Statement coverage : % of the program’s statements that have been executed.
Branch coverage : % of the program’s edge cases that have been executed.
Function coverage : % of the program’s functions that have been called during testing.
Line coverage : % of the program’s executable lines in the source file that have been executed.

//-------------------------------------------------------//

# Jest : it() and test() ——

it() and test() functions: create separate containers for our testing logic

it() function takes three arguments:
1. A string describing what is being tested.
2. A callback function containing assertions and other testing logic.
3. An optional timeout in milliseconds that specifies how long a test should wait before automatically aborting. If unspecified, this defaults to 5000 ms.

Each it() function call creates a separate entry in our testing output when we run npm test.

//-------------------------------------------------------//

# Jest : it() Example Skeleton ——

//file: __tests__/recipes.test.js

// import the functions to test
import { findRecipe, getIngredients } from "./recipes.js"; 

it("gets the full recipe for pesto", async () => {
    // testing logic for findRecipe() omitted...
}, 10000);

it("gets only the ingredients list for pesto", () => {
    // testing logic for getIngredients() omitted...
});

//-------------------------------------------------------//

# Jest : assertion methods (matchers) ——

toBeDefined() // verify that a variable is not undefined. This is often the first thing checked.
toEqual() // perform deep equality checks between objects.
toBe() // similar to .toEqual() but is used to compare primitive values.
toBeTruthy() // verify whether a value is truthy or not.
toContain() // when we want to verify that an item is in an array
not // before another matcher to verify that the opposite result is true

i.e. expect(actualIngredients).not.toContain("Ice Cream"); // verifies "Ice Cream" is NOT in the array

//-------------------------------------------------------//

# Jest : it() Example ——

AAA: Arrange, Act, Assert: best practice testing pattern in the callback

//file: ./language_spoken.test.js
import { 
  capitalize, 
  countryExtractor,
  countryListLookup
} from './language_spoken.js';

it("converts array of country data objects to array of countries", ()=>{
    //arrange
    const inputObject = [
      {name: "Argentina", capital: "Buenos Aires"},
      {name: "Belize", capital: "Belmopan"},
      {name: "Bolivia", capital: "Sucre"}
      ]
    const expectedValue = ["Argentina","Belize","Bolivia"]
    
    //act
    const actualValue = countryExtractor(inputObject)
    
    //assert
    expect(actualValue[0]).toBe("Argentina");
    expect(actualValue).toContain("Belize");
    expect(actualValue[2]==="Bolivia").toBeTruthy();
    expect(actualValue[3]).not.toBeDefined();
    expect(expectedValue).toEqual(actualValue);
})

//-------------------------------------------------------//

# Jest : Test Async Code ——

When testing async code, what the diff between done() vs async/await ?

—> use done() for asynchronous code that uses callbacks, while async/await is best suited for code that returns Promises

// Passes "done" as an argument to signal the test performs an async operation
it("Gets the full recipe for pesto", (done) => {
  //arrange
  const dish = "pesto";
  const expectedRecipe = {
    'Basil': '2 cups',
    'Pine Nuts': '2 tablespoons',
    'Garlic': '2 cloves',
    'Olive Oil': '0.5 cups',
    'Grated Parmesan': '0.5 cups'
  };

  //act  
  findRecipe(dish, (actualRecipe) => {
    //assert
    try {
      expect(actualRecipe).toEqual(expectedRecipe);
      done();
    } catch (error) {
      done(error);
    }   
  });
});


//-------------------------------------------------------//

# Jest : Why Mocking ——

Problem Statement:
Often we do not want to test with real functions, i.e. that connects with potentially buggy external systems (i.e. third-party API).
We are missing a safer and more efficient way to write our tests, a way to test our code in isolation.

Solution:
Create a mock function that bypasses the 3rd party (i.e. API call) and returns values that we control instead.
A mock function is a clone implementation of the code we are testing.
It behaves the same way, but it is easier to control and test.
We can use the mock function to test our code in isolation without worrying about the actual implementation details.

//-------------------------------------------------------//

# Jest :  Mock How To ——

When mocking entire modules, mock implementations of the module should be created in a __mocks__/ folder adjacent to the file being mocked.

In the test files, the jest.mock() method may be used. It accepts a path to the file where the module to be mocked is defined and replaces the actual module with the version defined in the __mocks__/ folder.

The file to be mocked must be imported before it can be mocked with jest.mock().

//-------------------------------------------------------//

# Jest : Mocking Functions ——

jest.fn() : create functions that we want to mock

// file: utils/__mocks__/api-request.js
const apiRequest = jest.fn(() => {
  //Return a resolved Promise with a mock response object
  return Promise.resolve({ 
    status: "", 
    data: {} 
  });
});

export default apiRequest;

//-------------------------------------------------------//

# Jest :  Mocking ——

Goal: replace the actual function with a mocked one we created

import httpRequest from './utils/http-request.js';  // import as usual
jest.mock('./utils/http-request.js');  // only required when mocking local modules — not if mocking modules installed into the node_modules directory



