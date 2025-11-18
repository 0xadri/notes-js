


-------------------------------------------------------

# One-Liners Every TypeScript Dev Should Know

-------------------------------------------------------

TODO









-------------------------------------------------------

# TypeScript Fundamentals

-------------------------------------------------------

# TypeScript implements Structural Typing or Nominal Typing?

`Structural Typing`. 

-------------------------------------------------------

# TypeScript: What's `structural typing`?

It means that types are compared based on their structure (shape).

If two types have the same properties and types of those properties, they are considered the same type, even if they have different names.

-------------------------------------------------------

# What's `nominal typing` ?

`Nominal Typing` compares types based on their **names**. In `Java`, for example, two classes with the same structure but different names are considered different types.

-------------------------------------------------------

# TypeScript: What are Abstract Classes?

Abstract classes are classes that cannot be instantiated directly and are used as blueprint for other classes.

They can have abstract methods (methods without implementation) and concrete methods (methods with implementation).

Derived classes (from the abstract class) must implement all abstract methods of the abstract class.

-------------------------------------------------------

# TypeScript, Browsers, and JavaScript Engines - True or False

The TypeScript compiler will also polyfill our code for older browsers - TRUE - TypeScript can add polyfills to support older browsers

Types in TypeScript are sets possible values data can have - TRUE - TypeScript types describe all the possible values data can have


TypeScript runs in the browser and in Node.js - FALSE - TypeScript code is delivered as JavaScript code after being compiled

Type errors are caught at runtime - FALSE - TypeScript only runs at compile or build time

Using TypeScript decreases web performance - FALSE - TypeScript does not affect performance, because types are not included in the final code









-------------------------------------------------------

# Interfaces

-------------------------------------------------------

# Interface vs Type: Are Interfaces A Kind Of Type?

An interface is a specific kind of type definition, an interface defines the shape of a value, just like many types do. 

Anywhere you can use a type annotation, you can use an interface.

Interfaces are mainly for describing object shapes, with special features like declaration merging.

| Feature                                         | Interface | Type Alias                    |
| ----------------------------------------------- | --------- | ----------------------------- |
| Declares a type                                 | ✔️ Yes     | ✔️ Yes                         |
| Structural typing                               | ✔️ Yes     | ✔️ Yes                         |
| Type checking                                   | ✔️ Yes     | ✔️ Yes                         |
| Can represent any type (union, primitive, etc.) | ❌ No     | ✔️ Yes                         |
| Primarily for object shapes                     | ✔️ Yes     | ✔️ Not necessarily             |
| Extends other interfaces/types                  | ✔️ Yes     | ✔️ Yes (via intersection)      |
| Implementation by classes                       | ✔️ Yes     | ❌ No (cannot be `implements`) |
| Can be merged                                   | ✔️ Yes     | ❌ No                         |

-------------------------------------------------------

# What happens when typescript finds two interfaces with the same name in a codebase?

It will merge them into a single interface.

-------------------------------------------------------

# Differences between abstract classes vs interfaces?

Abstract class = contract + behavior = interface + partial implementation.


Interface = contract = shape = blueprint = a purely structural contract describing the shape of an object. No implementation allowed. 
vs
Abstract Class = uninstantiable implementation & contract = partially built toolkit = a class that cannot be instantiated and may contain both implemented and abstract members.


Interfaces = blueprint = contract = shape = what something looks like = what must exist, but gives no materials, no instructions, no behavior.
vs
Abstract Class = partially built toolkit = what something is and does = some tools are already there, and you must finish the rest.


Interface = “Here’s what it must look like—how you build it is up to you.”
vs
Abstract Class = “Here's some behavior and state you inherit; but you must complete the missing pieces.”


| Feature                                                 | Abstract Class                                      | Interface                                                          |
| ------------------------------------------------------- | --------------------------------------------------- | ------------------------------------------------------------------ |
| Used for                                                | **Shared behavior + contract**                      | **Shape/contract only**                                            |
| Can contain implementation                              | ✔️ Yes (methods & fields can have bodies)            | ❌ No (all methods are declarations only)                           |
| Allows state (fields)                                   | ✔️ Yes                                               | ❌ No (no instance fields)                                          |
| Can extend a class                                      | ✔️ Yes (extend another abstract or concrete class)   | ✔️ Yes (extend classes via “type queries” on their instance shape) |
| Can extend interfaces                                   | ✔️ Yes                                               | ✔️ Yes                                                             |
| Constructor                                             | ✔️ Yes (including abstract constructors)             | ❌ No                                                               |
| Visibility modifiers (`public`, `protected`, `private`) | ✔️ Yes                                               | ❌ No (all interface members are public)                            |
| Static members                                          | ✔️ Yes                                               | ❌ No                                                               |
| Multiple inheritance                                    | ❌ No (TS/JS don’t allow extending multiple classes) | ✔️ Yes (a class can implement many interfaces)                     |
| Can be merged                                           | ❌ No                                                | ✔️ Yes (declaration merging)                                       |
| Can represent unions, primitives, etc.                  | ❌ No                                                | ❌ No (only object-like shapes)                                     |

-------------------------------------------------------

# Common things between abstract classes vs interfaces?


| What They Have in Common           | Explanation                                                                                                   |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Define contracts                   | Both specify required methods/properties that concrete classes must provide.                                  |
| Cannot be instantiated directly    | Interfaces have no runtime value; abstract classes are explicitly uninstantiable.                             |
| Enable polymorphism                | Both allow treating many concrete classes through a common abstract type.                                     |
| Provide compile-time guarantees    | Both ensure that a class fulfills the declared requirements during type checking.                             |
| Participate in structural typing   | Both are checked by TypeScript based on shape, not inheritance history.                                       |
| Can be extended                    | Interfaces extend interfaces (and instance shapes); abstract classes extend classes and implement interfaces. |
| Guide architecture and code design | Both formalize expectations for how classes should behave.                                                    |

-------------------------------------------------------

# Basics about abstract classes in TypeScript?

Abstract classes cannot be instantiated directly

Abstract classes cannot have implementations

```javascript
abstract class Animal {
  abstract makeSound(): void;
  walk(): void {
    console.log("Walking");
  }
}

class Dog implements Animal {
  makeSound(): void {
    console.log("Bark!");
  }
}
```








-------------------------------------------------------

# Type Annotation and Generics

-------------------------------------------------------

# Why sometime type is defined as `<T>` or after `:` (semi column) ?

`:` — Type Annotation / Type Declaration

`<T>` — Generic Type Parameters

1. Type annotation:

Syntax attaching a specific type to a variable, function parameter, or property.

```typescript
let count: number = 5;
function greet(name: string): void {
  console.log("Hello " + name);
}
type User = {
  id: number;
  name: string;
};
```

2. Generic Type Parameters:

Syntax used for generics — when a function, class, or interface accepts a type as a parameter.

```typescript
function wrap<T>(value: T): T {
  return value;
}
interface Box<T> {
  item: T;
}
```

- `<T>` is not a type annotation.
- It defines a type parameter named T.
- You later use T inside the function/interface.

Think of `<T>` as “this function/class works for any type, and here is what I call that type”.

3. Together

Sometimes the two appear together.

```typescript
function echo<T>(value: T): T {    // Generic function
  return value;
}
echo(123);      // T = number
echo("hello");  // T = string
```

```typescript
interface Box<T> {   // Generic interface
  content: T;
}
const stringBox: Box<string> = { content: "hello" };
const numberBox: Box<number> = { content: 42 };
```

```typescript
function getLength<T extends { length: number }>(value: T): number {     // Generic with constraint
  return value.length;
}
getLength("hello");   // ok
getLength([10, 20]);  // ok
```

-------------------------------------------------------

# What's a type parameter or type argument?

It is a placeholder for a type that must be specified when the function is called.

This is a common pattern in TypeScript for creating generic functions that can work with different types and having type flexibility without sacrificing type safety.

```javascript
 function makeCopy<T>(input: T): T[] {
  return [input, input];
 }
```

-------------------------------------------------------

# How to handle Typing on large projects (best practices) ?

From the most important & simplest → to the least important & most complex:

1. Enable Strict Mode in `tsconfig.json`
2. Keep Types Simple (Avoid Overly Complex Generics)
3. Organize Your Types Carefully
4. Use Type Aliases and Interfaces Intentionally
5. Prefer Modules Over Namespaces
6. Use ESLint With Type-Aware Rules
7. Document Complex Types
8. Separate API, Domain, and UI Types
9. Use Code Generation for APIs
10. Improve Build Performance (Incremental Builds & Project References)

















-------------------------------------------------------

# Misc

-------------------------------------------------------

# What Are The Granular Access Modifiers?

Control visibility with `private`/`protected`/`public`.

| Visibility Modifier | Accessible Where                         |
| ------------------- | ---------------------------------------- |
| `public` (default)  | Class, subclass, outside - most open     |
| `protected`         | Class and subclass                       |
| `private`           | Class only - most closed                 |

Control ownership (class vs instance) with `static`/nothing.

| Ownership Modifier  | Accessible Where                         |
| ------------------- | ---------------------------------------- |
| `static public`     | Class itself and anywhere                |
| `static protected`  | Class and subclass (via class reference) |
| `static private`    | Class itself only                        |

**1. `public` (default) example**

```typescript
class Example {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const ex = new Example("Alice");
console.log(ex.name); // ✅ Allowed
```

**2. `protected` example**

```typescript
class Parent {
  protected role: string;

  constructor(role: string) {
    this.role = role;
  }
}

class Child extends Parent {
  getRole() {
    return this.role; // ✅ Allowed
  }
}

const c = new Child("admin");
console.log(c.role); // ❌ Error, only accessible in class/child
console.log(c.getRole()); // ✅ Allowed
```

**3. `private` example**

```typescript
class Example {
  private secret: string;

  constructor(secret: string) {
    this.secret = secret;
  }

  revealSecret() {
    return this.secret; // ✅ Allowed
  }
}

const ex = new Example("hidden");
console.log(ex.secret); // ❌ Error
console.log(ex.revealSecret()); // ✅ Allowed
```

**4. `static` example**

```typescript
class Example {
  static publicCounter = 0;        // Public static
  private static secretCounter = 0; // Private static

  static increment() {             // Public static
    Example.publicCounter++;       
    Example.secretCounter++;       // Accessible inside class
  }
}

console.log(Example.publicCounter); // ✅ Accessible
console.log(Example.secretCounter); // ❌ Error
```

-------------------------------------------------------

# What does it mean when a property it declared `protected`?

It can be accessed from within the class and its subclasses.

-------------------------------------------------------

# What **creates** a new type with all the properties optional?

```javascript
interface Table {
  legs: number;
  height: number;
  width: number;
  material: string;
}
```

Using `Partial<Table>`.

https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype


-------------------------------------------------------

# Typescript - Record utility type

TODO

-------------------------------------------------------

# Typescript - Partial utility type

TODO


-------------------------------------------------------

**TODO**

- private
- protected - protected properties can be accessed from within the class and its subclasses.
- abstract classes
- constructor
- inheritance
- 



