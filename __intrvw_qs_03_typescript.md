

-------------------------------------------------------

# TypeScript granular accesses?

 - private
 - protected
 - public
 - static - static public
 
Todo: GPT ask

-------------------------------------------------------

# What does it mean when a property it declared `protected`?

It can be accessed from within the class and its subclasses.


-------------------------------------------------------

# What creates a new type with all the properties optional?

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

# What happens when typescript finds two interfaces with the same name in a codebase?

Typescript will merge the interfaces.

-------------------------------------------------------

# The type system in TypeScript implements...

`Structural Typing`. 

This means that types are compared based on their **structure** (shape) - if two types have the same properties and types of those properties, they are considered the same type, even if they have different names.

In contrast:

`Nominal Typing` compares types based on their **names**. In `Java`, for example, two classes with the same structure but different names are considered different types.

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

# Typescript - True or False

The TypeScript compiler will also polyfill our code for older browsers - TRUE - TypeScript can add polyfills to support older browsers

Types in TypeScript are sets possible values data can have - TRUE - TypeScript types describe all the possible values data can have


TypeScript runs in the browser and in Node.js - FALSE - TypeScript code is delivered as JavaScript code after being compiled

Type errors are caught at runtime - FALSE - TypeScript only runs at compile or build time

Using TypeScript decreases web performance - FALSE - TypeScript does not affect performance, because types are not included in the final code

-------------------------------------------------------

# Typescript - Record utility type

TODO

-------------------------------------------------------

# Typescript - Partial utility type

TODO

-------------------------------------------------------

# What happens when typescript finds two interfaces with the same name in a codebase?

It will merge them into a single interface.

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

# TypeScript: What's `structural typing`?

It means that types are compared based on their structure (shape).

If two types have the same properties and types of those properties, they are considered the same type, even if they have different names.

-------------------------------------------------------

# What's `nominal typing` ?

In contrast, nominal typing compares types based on their names. In Java, for example, two classes with the same structure but different names are considered different types.

-------------------------------------------------------

# TypeScript: What's `structural typing`?

Abstract classes are classes that cannot be instantiated directly and are used as blueprint for other classes.

They can have abstract methods (methods without implementation) and concrete methods (methods with implementation).

Derived classes(from the abstract class) must implement all abstract methods of the abstract class.
