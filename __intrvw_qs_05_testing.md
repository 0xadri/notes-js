
-------------------------------------------------------	

# Why Testing?

Reduction in bugs reported after deployments, which led to faster release cycles and improved customer satisfaction.

Instill a culture of quality within the team.

-------------------------------------------------------	

# How would you implement a more robust testing strategy?

Included both `unit tests` and `end-to-end tests`. 

Assess current testing practices and identify key areas where additional testing could be most beneficial.

Used mental models like the Testing Pyramid to design our testing efforts and agreed on a desired code coverage.

In the initial step, we would be happy with anything above 60%.

-------------------------------------------------------	

# What's A Testing Pyramid?

Metaphor for structuring automated tests.

Shape: pyramid — wide at the bottom, narrow at the top.

Core Idea:
 1. Lots of unit tests (fast, isolated).
 2. Fewer integration tests.
 3. Even fewer E2E/UI tests (slow, brittle).

From top to bottom:
- Manual and Exploratory Tests
- UI and API Testing
- Integration Testing
- Component Testing
- Unit Testing

-------------------------------------------------------	

## What's Unit Testing?

Individual pieces of code — the smaller the better.

-------------------------------------------------------	

## What's Component Testing?

Tests objects independently, such as modules, classes, and programs. More thorough than unit testing. Often need access to a database or other components. Slower than unit tests.

-------------------------------------------------------	

## What's Integration Testing?

Combines the individual software modules and tests them together as a group.

-------------------------------------------------------	

## What's Manual and Exploratory Tests?

TODO

-------------------------------------------------------	

# Code Coverage

Software testing metric that measures the percentage of a program's source code that is executed when a test suite is run.

Measure % of functions that are tested.

-------------------------------------------------------	

# AAA Pattern

Technique to write adequate test cases.

A = Arrange
A = Act
A = Assert

-------------------------------------------------------	

# "Given > When > Then" Pattern

technique to write adequate test cases.

-------------------------------------------------------	

# What is a Test Double?

A generic term (Umbrella Term) for any kind of object that replaces a real component in testing.

Includes `dummy`, `stub`, `fake`, `mock`, and `spy`.

-------------------------------------------------------	

# Why Test Doubles?

To isolate the system under test (SUT) from external complexity.

Typically: test a function in isolation.

To do so, we need to provide a **placeholder** or **replacement**.

-------------------------------------------------------	

# Types of Test Doubles?

| Type            | Purpose             | Behavior                       | Example Use Case             |
| --------------- | ------------------- | ------------------------------ | ---------------------------- |
| **Dummy**       | Placeholder         | Does nothing                   | Fill unused params           |
| **Stub**        | Provide test data   | Returns predefined values      | Feed input to SUT            |
| **Fake**        | Lightweight version | Works but not production-ready | External Calls: APIs, DBs... |
| **Mock**        | Verify interactions | Checks if calls were made      | Ensure method was called     |

Summary:

 1. Dummy = exists but unused
 2. Stub = provides answers
 3. Fake = simplified real thing
 4. Mock = checks expectations

-------------------------------------------------------	

# What's a Dummy?

Passed around only because the method signature requires it.

Never actually used in the test.

-------------------------------------------------------	

# What's a Stub?

Provides predefined responses.

Used when the SUT needs some data.

No verification of interactions.

-------------------------------------------------------	

# Why Stubs? Use Cases?

1. Avoiding External Calls - i.e. APIs, DBs - isolation & speed

2. Controlling Edge Cases - i.e. simulate errors or unusual data

3. Replacing Expensive or Random Behavior

4. Simulating Slow or Complex Logic - skip heavy processing

-------------------------------------------------------	

# What's a Fake?

Has a simplified but working implementation.

Not suitable for production.

Example: in-memory DB.

-------------------------------------------------------	

# Why use Mocks in Unit Tests?

If we do not provide a mock, the test will become an INTEGRATION TEST - not a unit test - as it will evaluate the function and its dependencies together.

Used to verify interactions with dependencies.

Typically created with a mocking framework (like Jest).

-------------------------------------------------------	

# Are test doubles only used in Unit Testing?

No — test doubles are not only used in unit testing.

But unit testing is where they are most common and essential.

Test doubles can also be useful outside of unit tests:

 - Integration Testing: Sometimes you still want to isolate part of the system, e.g., replace a payment provider with a fake service to avoid hitting real APIs.

 - System / End-to-End (E2E) Testing: Often discouraged, but still possible when external services are too costly or unstable. Example: Using a mocked email server to capture emails instead of sending real ones.

-------------------------------------------------------	

# To write a unit test for the following function we need to also ...

```
import { User } from "./types";
import validateUser from "./validateUser";
async function getUser(url: string): Promise<User | false> {
  const response = await fetch(url);
  const user = (await response.json()) as User;

  if (validateUser(user)) return user;

  return false;
}
export default getUser;
```

1. `mock` the validateUser function so the test is constrained to the current function

2. `stub` the fetch call, and return mock data to make the test independent of the availability/response of the backend

-------------------------------------------------------	

# What are Spies?

Spy function records the calls to the external function

For instance, to spy on a specific method, and make sure it was called with the right inputs.

-------------------------------------------------------	

# When testing with mocks, why use model without relations?


"Without relations" means the type includes only the User's scalar fields, not the relation fields.

Scalar Field = stores a single, indivisible value — something that is not another object or record - i.e. string, int, boolean, date, etc

Relation fields = represents a relationship between two entities/models/tables - typically correspond to foreign keys - i.e. relations One-to-one, One-to-many, Many-to-many

-------------------------------------------------------	

# Coverage threshold levels

**Conservative (80% overall, 70% per-file)**

- Pros: Achievable quickly, less friction, focuses on critical paths
- Cons: May miss edge cases, lower confidence in refactoring
- Best for: Early projects, rapid iteration, small teams

**Moderate (85% overall, 75% per-file)**

- Pros: Good balance, catches most issues, reasonable maintenance
- Cons: Some gaps remain, requires consistent discipline
- Best for: Most production projects, growing codebases

**Strict (90% overall, 80% per-file)**

- Pros: High confidence, safer refactoring, catches edge cases
- Cons: Higher maintenance, can slow development, may encourage low-value tests
- Best for: Critical systems, mature codebases, regulated industries

-------------------------------------------------------	

# Coverage metrics

**Lines**
- Pros: Simple, fast, easy to understand
- Cons: Misses untested branches/conditions, can be misleading

**Statements**
- Pros: More accurate than lines, accounts for multi-line statements
- Cons: Similar to lines, still misses branch coverage

**Functions**
- Pros: Ensures functions are called, good for API coverage
- Cons: Doesn't verify behavior, can pass with shallow tests

**Branches**
- Pros: Catches untested if/else, switch cases, ternaries; most valuable
- Cons: Harder to achieve, can be noisy with defensive code

**All metrics (recommended)**
- Pros: Comprehensive, catches different failure modes
- Cons: Strictest, requires thorough testing

-------------------------------------------------------	

# Per-file vs global thresholds

**Per-file threshold**
- Pros: Prevents files with 0% coverage, ensures consistent quality
- Cons: Can be strict for utility files, may need exceptions

**Global threshold only**
- Pros: Flexible, allows some files to be lower if others are higher
- Cons: Can hide files with no coverage











-------------------------------------------------------

**TODOs**

- Testing REST APIs
- Testing REST APIs: Postman?
- Testing REST APIs: Integration Tests?
- Testing REST APIs: Unit Tests? SuperTest library?
- Testing REST APIs: cURL Scripts ?






