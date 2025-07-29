
-------------------------------------------------------

# Docs

https://www.typescriptlang.org/docs/handbook/variable-declarations.html
https://www.typescriptlang.org/docs/handbook/compiler-options.html

-------------------------------------------------------	

# What's `tsconfig.json` ?

It specifies the root files and the compiler options required to compile the project.

https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

https://www.typescriptlang.org/tsconfig/

-------------------------------------------------------	

# Can TypeScript work with React and Webpack ?

Yes. Here is some docs.

https://webpack.js.org/guides/typescript/

https://github.com/typescript-cheatsheets/react

https://www.sitepoint.com/react-with-typescript-best-practices/

-------------------------------------------------------	

# Can you give an example of `tsconfig.json` and explain it ?

Here you go. Explanations in comments.

### `tsconfig.json` example 1

>   {
>     "compilerOptions": {
>       "module": "commonjs",   // Specify module code generation
>       "noImplicitAny": true,  // issue an error whenever TypeScript will fall back to a type of any for a variable when it cannot infer the type.
>       "removeComments": true,  // Strips all comments from TypeScript files when converting into JavaScript
>       "preserveConstEnums": true,   // Do not erase const enum declarations in generated code
>       "sourceMap": true,    // Enables the generation of sourcemap files. These files allow debuggers and other tools to display the original TypeScript source code
>       "target": "es5",    // Specify ECMAScript target version
>       "jsx": "react",   // Support JSX in .tsx files
>       "allowJs": true,  // Allow JavaScript files to be imported inside your project, instead of just .ts and .tsx files
>       "moduleResolution": "node"    // Resolve modules using Node.js style
>     },
>     "include": ["src"],
>     "exclude": ["node_modules"]
>   }

### `tsconfig.json` example 2

>   {
>     "compilerOptions": {
>       "target": "es5", // Specify ECMAScript target version
>       "lib": [
>         "dom",
>         "dom.iterable",
>         "esnext"
>       ], // List of library files to be included in the compilation
>       "allowJs": true, // Allow JavaScript files to be compiled
>       "skipLibCheck": true, // Skip type checking of all declaration files
>       "esModuleInterop": true, // Disables namespace imports (import * as fs from "fs") and enables CJS/AMD/UMD style imports (import fs from "fs")
>       "allowSyntheticDefaultImports": true, // Allow default imports from modules with no default export
>       "strict": true, // Enable all strict type checking options
>       "forceConsistentCasingInFileNames": true, // Disallow inconsistently-cased references to the same file.
>       "module": "esnext", // Specify module code generation
>       "moduleResolution": "node", // Resolve modules using Node.js style
>       "isolatedModules": true, // Unconditionally emit imports for unresolved files
>       "resolveJsonModule": true, // Include modules imported with .json extension
>       "noEmit": true, // Do not emit output (meaning do not compile code, only perform type checking)
>       "jsx": "react", // Support JSX in .tsx files
>       "sourceMap": true, // Generate corresponding .map file
>       "declaration": true, // Generate corresponding .d.ts file
>       "noUnusedLocals": true, // Report errors on unused locals
>       "noUnusedParameters": true, // Report errors on unused parameters
>       "incremental": true, // Enable incremental compilation by reading/writing information from prior compilations to a file on disk
>       "noFallthroughCasesInSwitch": true // Report errors for fallthrough cases in switch statement
>     },
>     "include": [
>       "src/**/*" // *** The files TypeScript should type check ***
>     ],
>     "exclude": ["node_modules", "build"] // *** The files to not type check ***
>   }

-------------------------------------------------------	

# Terminal

// Command to transpile
`tsc`

// Command to run script — mind the ".js" , not ".ts"
`node index.js`

-------------------------------------------------------

# Variables

Type inference: TypeScript expects the data type of the variable to match the type of the value initially assigned to it at its declaration.
Inference = Deduction
Infer = Deduct

TypeScript recognizes JavaScript’s built-in “primitive” data types:
 - boolean
 - number
 - null
 - string
 - undefined

In situations where it isn’t able to infer a type, TypeScript will consider a variable to be of type "any".
// Example
let onOrOff;  // type any
onOrOff = 1;
onOrOff = false;

-------------------------------------------------------

# Type In Functions Params

>   function triple(value : number) {
>     return value * 3;
>   }

>   function smush(...manyStrings : string[]){
>     let output : string;
>     for(let i = 0; i < manyStrings.length; i++){
>       output = output.concat(manyStrings[i]);
>     }
>     return output;
>   }

-------------------------------------------------------

# Tuples and Spread Syntax

function gpsNavigate(startLatitudeDegrees:number, startLatitudeMinutes:number, startNorthOrSouth:string, startLongitudeDegrees: number, startLongitudeMinutes: number, startEastOrWest:string, endLatitudeDegrees:number, endLatitudeMinutes:number , endNorthOrSouth:string, endLongitudeDegrees: number, endLongitudeMinutes: number,  endEastOrWest:string) {
  /* calculates a route from one GPS Coordinates to another */
}
// Can be used such as
let codecademyCoordinates: [number, number, string, number, number, string] = [40, 43.2, 'N', 73, 59.8, 'W'];
let bermudaTCoordinates: [number, number, string, number, number, string] = [25, 0 , 'N' , 71, 0, 'W'];
gpsNavigate(...codecademyCoordinates, ...bermudaTCoordinates); // one direction
gpsNavigate(...bermudaTCoordinates, ...codecademyCoordinates); // other direction


-------------------------------------------------------

# type annotations

let mustBeAString : string;
mustBeAString = 'Catdog';

// For arrays - 2 annotations
let names: string[] = ['Danny', 'Samantha'];
let names: Array<string> = ['Danny', 'Samantha'];

// For 2 dimensional arrays of strings
// Think of the string[][] as short for (string[])[]
let arr: string[][] = [['str1', 'str2'], ['more', 'strings']];

-------------------------------------------------------

# Tuples

In TypeScript, when an array is typed with elements of specific types, it’s called a tuple

// arrays with a fixed sequence of types
let ourTuple: [string, number, string, boolean] = ['Is', 7 , 'our favorite number?' , false]; 

Tuples and arrays do not have compatible types within TypeScript
We can’t assign an array to a tuple variable, even when the elements are of the correct type

-------------------------------------------------------

# type annotations on functions

// use void when nothing to return
function logGreeting(name:string): void{
  console.log(`Hello, ${name}!`)
}

// use relevant type otherwise
function returnFruit():string{
  return 'durian.jpg';
}
console.log(returnFruit())

-------------------------------------------------------

# Functions default parameters

// defaults to the name 'Anonymous' if no name is provided
function greet(name = 'Anonymous') {
  console.log(`Hello, ${name}!`);
}
greet();

-------------------------------------------------------

# question mark

To indicate that a parameter is intentionally optional, we add a ? after its name. This tells TypeScript that the parameter is allowed to be undefined and doesn’t always have to be provided.

function greet(name?: string) {
  console.log(`Hello, ${name|| 'Anonymous'}!`);
}
greet(); // Prints: Hello, Anonymous!

TypeScript infers the type of an initialized variable to be the same as the type of its initial value.
Same goes for functions.
TypeScript will infer the variable type to be the same as the default value’s type.


-------------------------------------------------------

# type annotations + bang operator (exclamation mark)

Exclamation mark operator aka bang operator.
It is the non-null assertion operator. It is a way to tell the compiler "this expression cannot be null or undefined here, so don't complain about the possibility of it being null or undefined."

// Regular Declaration
let myVar : number;
// Becomes
let myVar !: number;


Can be used in other parts of your code

// Regular
let myVar : number;
console.log(myVar);
// Becomes
let myVar : number;
console.log(myVar!);
// Or
let myVar !: number;
console.log(myVar);


// Other Example
if (node.parent!.kind === "textHere") {
    return;
}

https://stackoverflow.com/questions/42273853/in-typescript-what-is-the-exclamation-mark-bang-operator-when-dereferenci

-------------------------------------------------------

# tsconfig.json file

Always placed in the root of your project and you can customize what rules you want the TypeScript compiler to enforce.

{
  "compilerOptions": {
    "target": "es2017",
    "module": "commonjs",
    "strictNullChecks": true
  },
  "include": ["**/*.ts"]
}

"strictNullChecks" —> variables can only have null or undefined values if they are explicitly assigned those values.

"include" —> what files the compiler applies the rules to. ["**/*.ts"] —> the compiler should check every single file that has a .ts extension.

-------------------------------------------------------

# Enums

TypeScript automatically assigns: ExampleEnum.FirstValue = 0, ExampleEnum.SecondValue = 1, and ExampleEnum.ThirdValue = 2.

// Example 

enum Direction {
  North,
  South,
  East,
  West
}

let whichWayToArcticOcean: Direction;
whichWayToArcticOcean = Direction.North; // Works
whichWayToArcticOcean = Direction.Southeast; // Type error
whichWayToArcticOcean = West; // Wrong syntax

-------------------------------------------------------

# Enums and Tuples

enum Pet {
  Hamster,
  Rat,
  Chinchilla,
  Tarantula
}

let ordersArrayTS : [Pet,number][] = [
  [Pet.Rat, 2 ],
  [Pet.Chinchilla, 1 ],
  [Pet.Hamster, 2 ],
  [Pet.Chinchilla, 50 ]
]

-------------------------------------------------------

# String Enums

We recommend to always use string enums because numeric enums allow for some behaviors that can let bugs sneak into our code.
With string enums, variables cannot be assigned to strings at all!

enum DirectionNumber { North, South, East, West }
enum DirectionString { North = 'NORTH', South = 'SOUTH', East = 'EAST', West = 'WEST' }

-------------------------------------------------------

# String Enums continued

let birthdayBabies : { name : string , age : number , giftWish : string , success : boolean }[] = [
  {name: 'Liam', age: 0, giftWish: 'karate skills', success: false}, 
  {name: 'Olivia', age: 0, giftWish: 'a bright future', success:true}, 
  {name: 'Ava', age: 0, giftWish: '$0.25', success:true}
];

-------------------------------------------------------

# Enums

function getMaxPrice(price: PriceBracket) {
  switch (price) {
    case PriceBracket.Low:
      return 10.0;
    case PriceBracket.Medium:
      return 20.0;
    case PriceBracket.High:
      return 30.0;
    default:
      throw new Error('Invalid PriceBracket value');
  }
}

-------------------------------------------------------

# Type Aliases

type MyString = string;
let myVar: MyString = 'Hi'; // Valid code.

// This
let aCompany: { 
  companyName: string, 
  boss: { name: string, age: number }, 
  employees: { name: string, age: number }[], 
  employeeOfTheMonth: { name: string, age: number },  
  moneyEarned: number
};

// Becomes That
type Person = { name: string, age: number };
let aCompany: {
  companyName: string, 
  boss: Person, 
  employees: Person[], 
  employeeOfTheMonth: Person,  
  moneyEarned: number
};

// Other Example
type Coord = [number, number, string, number, number, string];
let codecademyCoordinates: Coord = [40, 43.2, 'N', 73, 59.8, 'W'];
let bermudaTCoordinates: Coord = [25, 0 , 'N' , 71, 0, 'W'];


-------------------------------------------------------

# Type Aliases

const orders = [
 [{
     name: "Miso Ramen",
     price: 15.99,
   },
   {
     name: "Gyoza and Rice",
     price: 7.99,
   },
 ],
 [
   {
     name: "Chicken and Waffles",
     price: 9.99,
   },
 ],
]
type Order = typeof orders[0][0];

-------------------------------------------------------

# Function Types

type StringsToNumberFunction = (arg0: string, arg1: string) => number;

// Cannot omit the parameter names in a function type annotation
// Cannot omit parentheses around the parameters in a function type annotation
type StringToNumberFunction = (string)=>number; // NO
type StringToNumberFunction = arg: string=>number; // NO NO NO NO

-------------------------------------------------------

# Generic Types

Allows us to use T within the type annotation as a type placeholder. 
Later, when the generic type is used, T is replaced with the provided type.

// getFilledArray('cheese', 3) evaluates to ['cheese', 'cheese', 'cheese']
function getFilledArray(value, n) {
  return Array(n).fill(value);
}

// Becomes
function getFilledArray<T>(value: T, n: number): T[] {
  return Array(n).fill(value);
}


-------------------------------------------------------

# Generic Functions

function getFilledArray<T>(value: T, n: number): T[] {
  return Array(n).fill(value);
}

let stringArray: string[];
let numberArray: number[];
let personArray: {name: string, age: number}[];
let coordinateArray: [number, number][];

// Write your code below:
stringArray = getFilledArray<string>('hi',6);
numberArray = getFilledArray<number>(9,6);
personArray = getFilledArray<{name: string, age: number}>({name: 'J. Dean', age: 24},6);
coordinateArray = getFilledArray<[number, number]>([3,4],6);

-------------------------------------------------------

# Union Types

// Example 1
let ID: string | number;
ID = 1; // number
ID = '001'; // or string
console.log(`The ID is ${ID}.`);

// Example 2
function getMarginLeft(margin: string | number) {
  return { 'marginLeft': margin };
}

-------------------------------------------------------

# Type Narrowing

type guard: using typeof

// Example
function formatValue(value: string | number) {
  if ( typeof value === 'string') {
    console.log(value.toLowerCase());
  }
  else if ( typeof value === 'number'){
    console.log(value.toFixed(2));
  }
}
formatValue('Hiya');
formatValue(42);

-------------------------------------------------------

# Type Unions and Arrays

Annotation: (type | type)[]

const dateNumber = new Date().getTime(); // returns a number
const dateString = new Date().toString(); // returns a string
const timesList: (string | number)[] = [dateNumber, dateString];

-------------------------------------------------------

# Unions with Literal Types

// Ensures that wherever changeLight() is called, that it gets passed only allowed stoplight colors
type Color = 'green' | 'yellow' | 'red';
function changeLight(color: Color) {
  // ...
}
changeLight('green');  // works
changeLight('purple');  // does not work

-------------------------------------------------------

# "in" and Type Guards

// Example
type Tennis = {
  serve: () => void;
}
type Soccer = {
  kick: () => void;
}
function play(sport: Tennis | Soccer) {
  if ('serve' in sport) {
    return sport.serve();
  }
  if ('kick' in sport) {
    return sport.kick();
  }
}

// Typescript infers type guards
// So function can be written instead as
function play(sport: Tennis | Soccer) {
  if ('serve' in sport) {
    return sport.serve();
  }
  else {   // same as doing: if('kick' in sport)
    return sport.kick();
  }
}
// Typescript infers type guards
// It can even do it w/o else statement IF there’s a return statement within the type guard
// So function can be written instead as
function play(sport: Tennis | Soccer) {
  if ('serve' in sport) {
    return sport.serve();
  }
  return sport.kick();
}

-------------------------------------------------------

# Interfaces and Types

// This
type Mail = {
  postagePrice: number;
  address: string;
}
const catalog: Mail = ...

// Same as this
interface Mail {
  postagePrice: number;
  address: string;
}
const catalog: Mail = ...

-------------------------------------------------------

# Interfaces vs Types: Principles

interface may only type objects.

type can type objects, primitives, and more.

interface 
 —> when we want our types to be constrained, so we’re more likely to write consistent code
 —> perfect match for writing object-oriented programs because these programs need many typed objects
 —> interface and class are a great match

-------------------------------------------------------

# Interfaces vs Types: How To

// Example 1
interface Robot {
  identify: (id: number) => void;
}
class OneSeries implements Robot {
  identify(id: number) {
    console.log(`beep! I'm ${id.toFixed(2)}.`);
  }
  answerQuestion() {
    console.log('42!');
  }
}

// Example 2
interface Directory {
  addFile: (name: string) => void;
  config: {
    default: {
      encoding: string;
      permissions: string;
    }
  }
}

-------------------------------------------------------

# Composed Types

// This
interface About {
  general: {
    id: number;
    name: string;
    version: {
      versionNumber: number;
    }
  }
}

// Becomes
interface About {
  general: General;
}
interface General {
  id: number;
  name: string;
  version: Version;
}
interface Version {
  versionNumber: number;
}

-------------------------------------------------------

# Extend Interfaces

// Example
interface Shape {
  color: string;
}
interface Square extends Shape {  // copy all the type members from Shape into Square
  sideLength: number;
}
const mySquare: Square = { sideLength: 10, color: 'blue' };

-------------------------------------------------------

# Index Signatures: Problem Statement

When typing objects in TypeScript, sometimes it’s not possible to know the property names for an object.
i.e. when we get back information from an outside data source/API

We still want to be able to type our objects. Dynamically?

-------------------------------------------------------

# Index Signatures

// Imagine we query a map API. The data might look like:
{
  '40.712776': true;
  '41.203323': true;
  '40.417286': false;
}
// We could write this object’s type like this
interface SolarEclipse {
  [latitude: string]: boolean;
} 

In the [latitude: string] syntax, the latitude name is purely for us, the developer.
As a human-readable name that will show up in potential error messages later.

-------------------------------------------------------

# Optional Type Members: Problem Statement

We wanna make some type members optional.

// Example
interface OptionsType {
  name: string;
  size?: string;   // optional type member
}
function listFile(options: OptionsType) {
  let fileName = options.name;
  if (options.size) {   // needed coz .size is optional
    fileName = `${fileName}: ${options.size}`;
  }
  return fileName;
}
listFile({ name: 'readme.txt' }); // works





