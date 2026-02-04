# Plain Javascript

warning: this page is a work in progress...

## Getting Started: Crash Course

### JavaScript - why

Because if you want to do any nice client side (in the user's browser) scripting, that's the your best option (at the time of writing, in 2014).
http://en.wikipedia.org/wiki/Client-side_scripting

### JavaScript - where

You can put the javascript code wherever you want in the page.
However, browsers load the content of a page from top to bottom, including the javascript. Some browsers do postpone the loading of javascript until all the HTML is loaded.
So to avoid any browser to be slowed down when loading your page, you might want to add your javascript at the end of your page, ie. before the closing `</body>` tag.
stackoverflow.com/questions/196702/where-to-place-javascript-in-a-html-file

### JavaScript - how

Write javascript directly in your html page
```javascript
<script type="text/javascript">
   ...some code here...
</script>
```

Write javascript in another file & reference this file in you html
```javascript
<script src="/path/to/your/javascriptfile.js"></script>
```

stackoverflow.com/questions/13829667/how-to-add-javascript-to-html-page

### JavaScript - when : execute code when HTML is loaded/ready

The DOM can only be manipulated once the document (HTML) has finished to be loaded.
JavaScript uses the window.onload function to check this
```javascript
<script type="text/javascript">
   window.onload = function(){
   ...some javascript code...
   };
</script>
```

#### jQuery has its equivalent (but better)

```javascript
<script type="text/javascript">
  jQuery(function(){
    ...some javascript or/and jQuery...
  });
  // equivalent to calling: $(document).ready(function(){ ..some js or/and jQuery.. });
</script>
```

More about this on http://api.jquery.com/ready/
The CSS sheets are loaded before the javascript only if they are declared before the javascript (above).
Almost all the javascript code you write must be surrounded by this "document ready" feature.
Except for the functions triggered by buttons for instance.

### JavaScript - where, how & when: my 2 cents http://stackoverflow.com/a/26115974/759452

### JavaScript - IE bugs: the console object

console.log() breaks in IE8 unless IE's Dev Tool is open.
A nice fix for any browser not supporting "console" object is to use a polyfill to fake it, see github.com/paulmillr/consolepolyfill
See stackoverflow.com/questions/7742781/why-javascript-only-works-after-opening-developer-tools-in-ie-once

### JavaScript - Comments

Javascript has block comments & also line comments
```javascript
<script type="text/javascript">
   /* ...some comments...
     ...some more commments...
   */
   // ...line ending comments...
   // ... more commments
</script>
```

It is advised to use line ending comments only because string literals can contain the string */

### JavaScript - Comment a function:

```javascript
<script type="text/javascript">
/**
  * Title of function/method
  * images to fit into a certain area.
  *
  * @param {Number} stepRangeInit initial value used for stepRange
  * @param {function} onSuccessCallBackFunc function to be called on success
  * @return {Object} { calculatedWidth, calculatedHeigth }
  *
  * [1] initialize stepRange
  * [1.a] stepRange multiplied by 3, see issue 8824
  *
  * [2] Convert String to number, see http://stackoverflow.com/q/1133770
  */
var myCoolFunction = function(stepRangeInit, onSuccessCallBackFunc){
  var stepRange = stepRangeInit || 0; /* [1] */
  stepRange = stepRange * 3; /* [1.a] */
  
  /* more code ... */
  
  var number = + valueAsString; /* [2] */
  /* more code ... */
}
</script>
```

Javascript - "use strict"; statement
Supported by IE10+ caniuse.com/#feat=use-strict
Browsers that don't support this statement, simply ignore it.
"places a program, or a function, in a 'strict' operating context. This strict context prevents certain actions from being taken and throws more exceptions."
It basically tries to help you write better javascript.
stackoverflow.com/q/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it
ejohn.org/blog/ecmascript-5-strict-mode-json-and-more

## Getting Started: Essentials

The standard that defines Javascript (aka JScript) is the 3rd edition or The ECMAScript Programming Language
ECMAScript 5.1 is the latest edition (at the time of writing) of the standard upon which JavaScript is based, was approved in 2011.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_5_support_in_Mozilla

### Javascript Good practices:

- Use unobstrusive javascript
  - Separation of concerns: no javascript directly in the HTML, but rather in a separate JS file
    - keeping javascript inside HTML files results in unnecessary duplication & much harder refactoring
    - see stackoverflow.com/questions/4478795/what-is-unobtrusive-javascript-in-layman-terms
- Do not put "just everything in one js file"
  - modularize your code
  - use a build process that concatenates & compresses your JS files if necessary
- Write code that is easy to read (self-explanatory) : avoid fancy stuff
- Add comments if you can't avoid complex code
  - format comments cleanly
- Define variables
  - Do not use global variables, but rather encapsulate (info hiding):
    - use 1 global object & use it as a namespace, ie. window.myApp
    - use IIFE
    - Always use 'var x =' when defining anything: whether its a number, string, function or object, & even when in the global scope. This makes the code much simpler/clearer.
  - Do not use "new" when creating variables, but rather {}, or [], or "'', and so on
  - Use this construction to initialize objects (leverage falsy values):
    - var myVar = myVar || {};
  - Define function expressions - not function statements
    - again use: var myCoolFunc = function(){ /* some code... */ };
- Comparison
  - Use type-safe comparison, that is: === and !==
  - User ternary operations
- Code conventions & format should be consistent
- Interactions with the UI
  - Keep all your styles in the CSS stylesheets
    - except special cases: ie. sliding animation
    - add/remove CSS classes to change an element's style
- Building a module or a library
  - use IIFE & the module pattern
  - check all good practices are used
  - if any 3rd party library dependency, try to code keeping in mind it should easily be removed
  - keep the "how to choose a library" criterias in mind
  - TBC: The javascript file structure "could" mirror server-side views - really? why? files are cached anyway!

Javascript - differences with java
javascript functions/methods can't be overriden
javascript functions/methods can't be overloaded
javascript do not have block scope
javascript only has function scope & global scope (window scope in a browser environment)
javascript has global variables
javascript has truthy & falsy values (some kind of default boolean variables interpretations)
javascript cannot explicitly cast - javascript does type coercion (some kind of implicit casting - more on this below)
javascript features are NOT supported by all browsers - one must investigate to find work arounds or graceful degradations

### JavaScript - Variable Names

A name is a made of a letter optionally followed by one or more letters, digits or underbars.
List of javascript reserved words

Javascript - Variable declaration:
See previous point "Javascript - Good practices" section for a summary on "variable declarations".
Both below syntaxes are valid - each as pros & cons - see dropshado.ws/post/17210606192/varry-var-var
```javascript
var firstName = 'James',
    lastName = 'McBerry',
    age = 32;

var firstName = 'James';
var lastName = 'McBerry';
var age = 32;
```

Javascript - Variable Scopes:
javascript does not have block scope
javascript only has function scope & global scope (window scope in a browser environment)
Inner functions have access to parameters & variables of the functions they are defined within (except for this & arguments) - from "javascript the good parts"

What does "var" do?
- If you're in a function then "var" will create a local variable
- If there is "no var", then the javascript engine looks up the scope chain until it finds the variable definition or hits the global scope (at which point it will create it)

http://stackoverflow.com/questions/1470488/what-is-the-function-of-the-var-keyword-in-ecmascript-262-3rdedition-javascript
http://stackoverflow.com/questions/500431/what-is-the-scope-of-variables-in-javascript
http://stackoverflow.com/questions/4363113/jquery-scope-inside-document-ready
http://stackoverflow.com/questions/11152977/global-javascript-variable-inside-document-ready
http://stackoverflow.com/questions/11819425/jquery-document-ready-and-function-scope

Javascript - Defining a global app object:
```javascript
var myApp = {}; // when outside of any function, it is then a global variable
// myApp is then available from any JSP or Tag, as long as it is loaded BEFORE

$(function(){
  var myApp = {}; // This is INCORRECT, myApp will be in the scope of the function
});

$(function(){
  myApp = {}; // Correct, myApp will be in the scope of window.myApp
});

$(function(){
  window.myApp = {}; // Correct & explicit, myApp will be in the scope of window.myApp
});
```

Javascript - iterating through an object:
```javascript
var myObj = {a: 1, b: 2}
for(var currKey in myObj){
  console.log('I am the key of the object', currKey, 'I am the value of the object', myObj[currKey])
}
```

Javascript - object good practices:
#### Use square brackets: allows using variables as keys (whether numbers or names)

Check if key exist in the object: keyName in objName will return true or false
Remove key:value pair: delete objName.keyName

#### Javascript - IIFE:

my 2 cents: http://stackoverflow.com/questions/2421911/what-is-the-purpose-of-wrapping-whole-javascript-filesin-anonymous-functions-li/26738969#26738969
IIFE stands for Immediately Invoked Function Expression. This technic is also called "Self Invoke
```javascript
(function(){
  // all your code here...
  bar = "bar !"; // "var" omitted: bar is in the global scope (window scope)
  var foo = "foo !"; // "var" present: foo is in the current function's scope
})();
console.log('bar is: ' + bar); // bar is reachable here
console.log('foo is: ' + foo); // foo is unreachable here (it's undefined)
```

The first opening bracket and its relevant closing bracket are used so that we can make a function expression even though the code starts with the word "function" which is the syntax to say we are declaring a function statement. see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions#Examples_2
Note that this function does not have a name, it is then an anonymous function.
We want a function expression because we want to be able to invoke the anonymous function, and an anonymous function statement cannot be invoked. Without it an error is thrown.
Then the second pair of bracket to immediately calls (invokes) this anonymous function: that is as soon as the Javascript interpreter reads it.

http://jsbin.com/vinokafiyore/1/edit?js,console - IIFE: 1st basic example
http://jsbin.com/vinokafiyore/3/edit?js,console - IIFE: 2nd basic example
http://stackoverflow.com/questions/2421911/what-is-the-purpose-of-wrapping-whole-javascript-files-inanonymous-functions-li

Javascript - statement vs expression
toread : http://www.2ality.com/2012/09/expressions-vs-statements.html
toread: http://stackoverflow.com/questions/1013385/what-is-the-difference-between-a-function-expression-vsdeclaration-in-javascrip
toread: http://stackoverflow.com/questions/336859/var-functionname-function-vs-function-functionname

Expression: Something which evaluates to a value. Example: 1+2/x
Statement: Line(s) of code which does something. Does not evaluate to a value. Example: if(){}
"An expression is any valid unit of code that resolves to a value."
"Conceptually, there are two types of expressions: those that assign a value to a variable and those that simply have a value."
"Wherever JavaScript expects a statement, you can also write an expression. Such a statement is called an expression statement. The reverse does not hold: you cannot write a statement where JavaScript expects an expression. For example, an if statement cannot become the argument of a function."
"Any expression that evaluates to a value can be included in a boolean operation", because every expression evaluates to a boolean value using truthy & falsy values.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements
http://stackoverflow.com/questions/12664230/is-boolean-expression-statement-the-same-as-ifboolean-expressionstat/
http://stackoverflow.com/questions/12703214/in-javascript-what-is-the-difference-between-a-statement-and-anexpression
http://stackoverflow.com/questions/19132/expression-versus-statement

### JavaScript - Truthy and Falsy variables

#### Falsy values

```javascript
false      // obviously
0          // The only falsy number
""         // the empty string
null
undefined
NaN
```

All the rest is truthy.
http://docs.nodejitsu.com/articles/javascript-conventions/what-are-truthy-and-falsy-values
http://james.padolsey.com/javascript/truthy-falsey/

Javascript - Variable declaration tips:
Check if the variable is already defined using javascript falsy values.
If the var is falsy, then initialize it.
```javascript
var myString = undefined || "" || "hello";
var myNumber = undefined || 0 || 125;
var myArray = undefined || ['first','second','third'];
var myObject = undefined || {'propOne':'this is cool'};
var anotherString = anotherString || "hi there";
var anotherNumber = anotherNumber || 9565;
var anotherArray = anotherArray || ['1st','2nd','3rd'];
var anotherObject = anotherObject || {'prop1':'this is badass'};
```

http://jsbin.com/jutaxehuciza/1/edit?js,console

### JavaScript - Variable Types

Use typeof to find out about the type of the variable.
typeof returns 'number', 'string', 'boolean', 'undefined', 'function', or 'object'.
Results returned by those variables when we output their type:
```javascript
var firstVar = {};            // is an object
var secondVar = [];           // Exception: is an object
var thirdVar = 0;             // is a number
var fourthVar = "";           // is a string
var fifthVar = function(){};  // is a function
var sixthVar = true;          // is a boolean
var seventhVar = null;        // Exception: is an object !
var eigthVar = undefined;     // is undefined
```

jsbin.com/jomasoyicalu/2/edit?js,console

Javascript allows to change the variable type on-the-fly
```javascript
var firstVar = {};            // firstVar is now an object
firstVar = "";                // firstVar is now an string
firstVar = 0;                 // firstVar is now an number
firstVar = function(){};      // firstVar is now an function
firstVar = true;              // firstVar is now an boolean
firstVar = undefined;         // firstVar is now an undefined
```

http://jsbin.com/jomasoyicalu/4/edit?js,console
developer.mozilla.org/en/docs/Web/JavaScript/Guide/Values,_variables,_and_literals
developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

### JavaScript - Type Coercion

Type coercion in short means implicit type conversion.
Type casting in short means explicit type conversion.
Coercion happens when 2 variables which are not of the same type are compared using "==" or "!=".
"==" and "!=" operators will compare for (in)equality after doing any necessary type conversions.
Javascript type conversions ~ Java type casting
Performances: === is not quicker if the types are the same. If types are not the same, === will be quicker because it won't try to do the conversion.

http://stackoverflow.com/questions/8857763/what-is-the-difference-between-casting-and-coercing
http://stackoverflow.com/questions/359494/does-it-matter-which-equals-operator-vs-i-use-in-javascript-comparisons
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is

### JavaScript - Numbers

All numbers are represented as 64-bit floating point (same as Java's double).
There is no separate integer type, so 2 is equal 2.0
The value NaN is the result of an operation that cannot produce a normal result. NaN is not equal to any value, including itself. Use isNaN( myVar) to find out if myVar is NaN.

### JavaScript - Operators

#### + adds or concatenates (make sure operands are numbers)

- subtracts only??
! logical not
/ divide. can produce a non integer result even if both operand are integers
* multiply
% remainder
&& logical AND with lazy evaluation
|| logical OR with lazy evaluation
|---|
+= adds or concatenates
-= subtraction only??
=== equal
!== not equal
>= greater or equal
<= less or equal
> greater
< less
#### Table of precedences

### JavaScript - String

JavaScript does not have a character type. To represent a character, make a string with just one character in it.
JavaScript's Strings are immutable, once created it cannot be modified.

String has a length property
```javascript
var myString = 'hello world';
alert('Variable myString is ' + myString.length + ' long.');
```

#### substring() method

```javascript
var myFullString = 'hello world';
var mySubString = myString.substring(0,5);
alert('myFullString is ' + myFullString + '. And mySubString is ' + mySubString);
```

Here is an example where the last characters (starting from the 5th) of an element's ID are assigned to a variable.
```javascript
var myFullString = $('#myElemId').id;
var mySubString = $('#myElemId').id.substring(5,($('#myElemId').id.length));
alert('myFullString is ' + myFullString + '. And mySubString is ' + mySubString);
```

#### String Contains

This is a work around since there is no such method in JavaScript
```javascript
if ( myString.indexOf("stringToSearch") != -1){
   alert('"stringToSearch" is present');
}
```

#### String Replace

```javascript
var mySentence = "dogs eat dogs";
alert( actionUrl.replace("dogs", "cats");
```

Javascript - check if String is empty or contains only spaces
```javascript
function isEmpty(str) {
  return (!str || 0 === str.length);
}
function isBlank(str) {
  return (!str || !str.replace(/ /g,''));
}
if ( isEmpty(searchTerm) || isBlank(searchTerm) ){
  ... do something ...
}
```

stackoverflow.com/questions/154059/how-do-you-check-for-an-empty-string-in-javascript
stackoverflow.com/questions/6623231/remove-all-white-spaces-from-text

Javascript - String comparison
As a first step you might want to:
1. Make sure the type is correct
  * Use a type-safe comparator: === or !==
  * Use typeof
#### 2. If ignoring case, use .toUpperCase() but not .toLowerCase()

  * see msdn.microsoft.com/en-us/library/bb386042.aspx
3. If ignoring accents, use the "remove diacritics" solution

In short: use the browsers' built-in .localeCompare() method, such as:
```javascript
return myFirstVar.localeCompare(mySecondVar);
```

Considering the current level of support provided by the javascript custom implementations I came across, we will probably never see anything getting any close to supporting all the characters & scripts (languages) supported by UTF8 nor by the browsers' native localeCompare() implementations. Hence I would rather use the browsers' native localeCompare() method. Yes, it does have the downside of beeing non-consistent across browsers but basic testing shows it covers a much wider range of characters, allowing solid & meaningful sort orders.
only remaining question: what UTF8 characters are supported by browsers' localeCompare() implementations ??
Full explanation stackoverflow.com/a/26295229/759452
http://blog.codinghorror.com/sorting-for-humans-natural-sort-order/

String comparison UTF8 specification
http://www.unicode.org/reports/tr10/ - "Unicode Collation Algorithm specification", "which details how to compare two Unicode strings while remaining conformant to the requirements of the Unicode Standard"
http://www.unicode.org/charts/ - UTF8 encoding charts for each language
my 2 cents : http://programmers.stackexchange.com/questions/257286/is-there-any-language-agnosticspecification-for-string-natural-sorting-order

Javascript - Custom String comparisons
http://www.davekoelle.com/alphanum.html
https://web.archive.org/web/20130929122019/http://my.opera.com/GreyWyvern/blog/show.dml/1671288
Alphanum http://www.davekoelle.com/files/alphanum.js , Fails at sorting consistently, see http://jsbin.com/tuminoxifuyo/1/edit?js,console
Natural Compare Lite https://github.com/litejs/natural-compare-lite : Fails at sorting consistently https://github.com/litejs/natural-compare-lite/issues/1 and http://jsbin.com/bevututodavi/1/edit?js,console , basic latin characters sorting http://jsbin.com/bevututodavi/5/edit?js,console
Natural Sort https://github.com/javve/natural-sort : Fails at sorting consistently, see issue https://github.com/javve/natural-sort/issues/7 and see basic latin characters sorting http://jsbin.com/cipimosedoqe/3/edit?js,console
Javascript Natural Sort https://github.com/overset/javascript-natural-sort : seems rather neglected since February 2012, Fails at sorting consistently, see issue https://github.com/overset/javascript-natural-sort/issues/16

Javascript - Browsers' native localeCompare() method
In the oldest implementations where we do not use the locales and options arguments "the locale and sort order used are entirely implementation dependent".
In other words, when using localeCompare such as stringOne.localeCompare(stringTwo): Firefox, Safari, Chrome & IE have a different sort order for Strings.

http://jsbin.com/beboroyifomu/1/edit?js,console - basic latin characters comparison with localeCompare() - works pretty nicely compare to any custom-made comparator
http://jsbin.com/viyucavudela/2/ - basic latin characters comparison with localeCompare() for testing on IE8
http://jsbin.com/beboroyifomu/2/edit?js,console - basic latin characters in string comparison : consistency check in string vs when a character is alone
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare - IE11+ supports the new locales & options arguments
https://code.google.com/p/v8/issues/detail?id=459 : highlight the sort order inconsistency across browser
http://msdn.microsoft.com/en-us/library/ie/s4esdbwz(v=vs.94).aspx - scroll down to localeCompare() method - IE6+ supports localeCompare without the locales and options arguments
http://stackoverflow.com/questions/51165/how-do-you-do-string-comparison-in-javascript
http://stackoverflow.com/questions/2802341/natural-sort-of-text-and-numbers-javascript
http://stackoverflow.com/questions/4373018/sort-array-of-numeric-alphabetical-elements-natural-sort/
http://stackoverflow.com/questions/4340227/sort-mixed-alpha-numeric-array
toread: http://sugarjs.com/arrays#sorting and also https://github.com/andrewplummer/Sugar

### JavaScript - if ...else if... else

```javascript
var myVar=10;
if(myVar>100){
   alert('myVar is greater than 100');
}
else if(myVar<=100 && myVar>20){
   alert('myVar is less than 100 but greater than 20');
}
else{
   alert('myVar is less than 20');
}
```

### JavaScript - ternary operator

```javascript
var myVar=5, output;
(myVar == 5) ? output="myVar equals 5" : output="myVar does not equal 5";

var myCoolVar = ($(.my-selector).hasClass("is-updated")) ? $(.my-selector).val() : 'no up-to-date value, sorry';
```

developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
stackoverflow.com/questions/10323829/javascript-ternary-operator-example-with-functions

### JavaScript - switch

The switch, while, for and do statements are allowed to have an optional label prefix that interacts with the break statement.

#### switch statement (simple)

```javascript
switch (myVar){
   case '1': alert('1');
   break;
   
   case '2': alert('2');
   break;

   default: alert('more than 2');
   break;
}
```

#### switch statement (equivalent of an OR)

```javascript
switch (myVar){
   case '1':
   case '2':
   case '3': alert ('1, 2 or 3');
   break;
   case '4':
   case '5':
   case '6': alert ('4, 5 or 6');
   break;
   default: alert('more than 6');
}
```

for, while, do...while, try...catch, throw, return, break

### JavaScript - Arrays

Declare a new array and populate it
```javascript
var myArray = ['Paulinha', 'Pep', 'Vitorio'];
```

#### Deprecated

```javascript
var myArray = new Array('Paulinha', 'Pep', 'Michel');
```

#### Array manipulation

```javascript
myArray.push('Jermane');   // Adds Jermane at the end of the array
myArray.unshift('Mel');    // Adds Mel at the beginning of the array
myArray.shift();           // removes the first element of the array
myArray.pop();             // removes the last element of the array
```

Split - Transform a string into an array according to a separator
```javascript
var cousinsString = 'Pauline Guillaume Clarisse', cousinsArray ;
cousinsArray = cousinsString.split(' ');
```

#### join() - Creates a chain of characters from an array

```javascript
var cousinsArray = ['Paulinha', 'Pep', 'Vitorio'], cousinsString ;
cousinsString = cousinsArray.join('-');
```

### JavaScript - Functions

In Javascript, Function is a standard data type in JavaScript, an object indeed; you can pass them around and copy them.
```javascript
alert();
prompt();
confirm();
parseInt();
parseFloat();
isNaN();
```

#### alert() is not a "real" function. It is a method of the window object. The window object is implicit.

```javascript
window.alert('Hello world!');     //same as:     alert('Hello world!');
```

#### parseInt() can be useful when javascript concatenates variables instead of adding them

```javascript
containerWidth = parseInt(containerWidth);
totalWidth = containerWidth+sideBannerWidth;
```

function syntax
```javascript
function myFunction(myVar1,myVar2,...,myVarX){
  ..some code...
}
```

simple function example
```javascript
function myWickedAlert(){
  alert("Welcome to Adrien's IT notes");
}
// later in the page
<input type="button" value="Click my Wicked Alert!" onclick="myWickedAlert()" />
// note: myWickedAlert() is a global call
```

#### simple function example (with return)

```javascript
function myWickedText(){
  return "Welcome to Adrien's IT notes";
}
// later in the code
<input type="button" value="Click me!" onclick="alert(myWickedText())" />
// note: myWickedText() is a global call
```

more on www.w3schools.com/js/js_functions.asp

JavaScript function invocation rules:
1. In a function called directly without an explicit owner object, like myFunction(), causes the value of this to be the default object (window in the browser).
2. In a function called using the method invocation syntax, like obj.myFunction() or obj['myFunction'](), causes the value of this to be obj.
3. If we want to override the value of this without copying the function to another object, we can use myFunction.apply(obj) or myFunction.call(obj).
4. When used as a constructor, like new MyFunction(), the value of this will be a brand new object provided by the JavaScript runtime. If we don't explictly return anything from that function, this will be considered its return value.
read more about these rules & on "correct" functions calls on devlicio.us - blogs - javascript 5 ways to call a function

Javascript - Execute Function at regular interval
```javascript
var callFunctionWithInterval = function (numberOfRepetitions, intervalInMs){
  (function myLoop (loopCount) {          
    setTimeout(function () {   
      alert('display this text at interval'); /* your code here */
      if (--loopCount) myLoop(loopCount); /* decrement loopCount and call myLoop again if loopCount > 0 */
    }, intervalInMs)
  })(numberOfRepetitions);
}
```

This uses the setTimeout to delay the call of a function (setTimeout is non-blocking)
```javascript
setTimeout(function () {   
  alert('display this text after 2000ms'); /* your code here */
}, 2000)
```

http://stackoverflow.com/questions/10312963/javascript-settimeout

Javascript - Loop through array with a "pause" in between each element
This is the original loop through array
```javascript
var myArray_length = myArray.length
for (var index=0; index<myArray_length; ++index) {
  var currentElement = myArray[index];
  if (currentElement != "" ) {
    alert(currentElement);
  }
}
```

This is the loop through array with a 3000ms "pause" in between each element
```javascript
var myArray_length = myArray.length
var index=0
var interval = setInterval(function() {
  var currentElement = myArray[index];
  if (currentElement != "" ) {
    alert(currentElement)
  }
  ++index;
  if(index >= myArray_length) clearInterval(interval);
}, 3000);
```

### JavaScript - Objects

The simple types of JavaScript are numbers, strings, booleans, null, and undefined. All other values are objects.
JavaScript numbers, strings and booleans are object-like (they have methods) but they are immutable.
JavaScript objects are mutable keyed collections.
JavaScript arrays, functions, regular expressions and objects are objects.
JavaScript objects are containers of properties, each property has a name and a value.

#### Object Literals

It provides a very convenient way to create new object values.
```javascript
var myEmptyObject = {};

var family = {
   self: 'Mr Me',
   sister: 'Auriane'
};
```

#### Objects can nest

```javascript
var family = {
  members: 2,
  self: {
    fname: 'Adrien',
    dob: 2000,
    lname: 'Tyson'
  },
  sister: {
    fname: 'Jacky',
    dob: 1950,
    lname: 'Brown'
  }
};
```

Identifiers are properties, here is how to access them
```javascript
family.sister;
family['sister'];
```

length is also a property, so you can do:
```javascript
family.length;
family['length'];
```

Add a new element to object
```javascript
family['uncle'] = 'james';
```

Browse through an object
```javascript
for (var id in family) {
   alert(family[id]);
}
```

Example of litteral object usage:
```javascript
function getCoords() {
   return { x: 12, y: 21 };
}
var coords = getCoords();
alert(coords.x); // 12
alert(coords.y); // 21
```

### JavaScript - Access/Modify HTML Form's Action

```javascript
var actionUrl = document.myFormName.action ;                    // gets the action of the form
document.myFormName.action = "yourDomain.com/page.jsp";         // assigns action to form submit
```

### JavaScript - Do something on Form submit

```javascript
<form name="myForm" action="./processForm.jsp" onsubmit="return validateForm();" method="post">
  ...some inputs and a submit button...
</form>
```

The form will call validateForm JavaScript function before to actually submit itself to the page in "action" attribute.
validateForm function can cancel the submission of the form by returning false

### JavaScript - get IE version

```javascript
// Returns the version of Internet Explorer or a -1 (indicating the use of another browser)
function getInternetExplorerVersion(){
  var rv = -1; // Return value assumes failure.
  if (navigator.appName == 'Microsoft Internet Explorer'){
    var ua = navigator.userAgent;
    var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
    }
  return rv;
}

function displayAlert(){
  var msg = "You're not using Internet Explorer.";
  var ver = getInternetExplorerVersion();
  if ( ver > -1 ){
    if ( ver <= 8.0 ){
      msg = "You're using Internet Explorer 8 or below" ;
    }
    else if ( ver >= 9.0 && ver < 10.0 ){
      msg = "You're using IE 9 or above";
    }
    else{
      msg = "You're using IE 10";
    }
  }
  alert( msg );
}
```

see also http://stackoverflow.com/questions/18405051/javascript-checking-if-current-web-browser-is-internetexplorer-working-with-ie/18405095#18405095

## DOM - HTML manipulation

### JavaScript - get elements in the document

#### The famous getElementById()

#### getElementById()

#### getElementsByName() - returns an array containing each element

#### getElementsByTagName() - returns an array containing a family of elements

```javascript
var allDivs = document.getElementsByTagName('div');
for (var i = 0, c = allDivs.length ; i < c ; i++) {
   alert('Element n° ' + (i + 1) + ' : ' + allDivs[i]);
}
```

### JavaScript - Browsing through nodes (element objects)

parentNode - Property to access an element's parent element
nodeName - Property containing the name of a node (in Upper case, use toLowerCase() to change case)
#### nodeType - Property containing the node type (a number)

firstChild and lastChild - Properties to access the first and last child of an element
childNodes - Properties returning all the children elements of a node
nextSibling and previousSibling - Properties to access next or previous node
nodeValue and data - Properties to access the text contained in an element. Applicable only on text elements
#### hasChildNodes() - Method returning true if the element has at least one child

insertBefore(insertedElement,beforeThatElement) - Method to insert element before another (must be applied on the parent element).
2 parameters: the 1st is the element to insert, the 2nd is the element before which the element will be inserted

#### JavaScript - createElement()

Create an element `<a>`
```javascript
var myLink = document.createElement('a');
myLink.id    = 'adrienItNotesLink';                                          // define attributes (id, href, title)
myLink.href  = 'https://sites.google.com/site/adrienitnotes/javascript';
myLink.title = 'Adrien\'s IT notes';
document.getElementById('myBigDiv').appendChild(newLink);
```

JavaScript - appendChild() - Add HTML Elements
#### appendChild() returns a reference pointing to the inserted object

```javascript
document.getElementById('myDiv').appendChild(elementToAdd);
```

JavaScript - removeChild() - Remove an element
This methods takes the element to be removed as a parameter
```javascript
var link = document.getElementsByTagName('a')[0];
link.parentNode.removeChild(link);
```

#### JavaScript - The Element object attributes: getAttribute() and setAttribute()

#### Example

```javascript
var link = document.getElementById('myLink');
var href = link.getAttribute('href');                          // We get the href attribute
link.setAttribute('href', 'http://www.siteduzero.com');        // Editing the href attribute
```

For most of elements such as `<a>`, we can access an attribute via a property
```javascript
var link = document.getElementById('myWickedLink');
var href = link.href;
link.href = 'http://www.deviantart.com';
```

#### Building a link

```javascript
newLink.id    = 'deviantArtLink';
newLink.href  = 'http://www.deviantart.com';
newLink.title = 'DeviantArt is an art community';
newLink.setAttribute('tabindex', '10');
```

Exceptions when modifying attributes:
class, you must use the attribute className
for, you must use the attribute htmlFor

JavaScript - createTextNode() - Add text nodes
```javascript
var someText = document.createTextNode("Le Site du Zéro");
element.appendChild(someText);
```

### JavaScript - innerHTML

Since HTML5, innerHTML is acknoledge by the W3C and can be used

1) Get an element's HTML code with innerHTML
```javascript
[...]
<div id="myCoolDiv">
  <p>Some text and <a>a link</a></p>
</div>
[...]
<script type="text/javascript">
  var div = document.getElementById('myCoolDiv');
  alert(div.innerHTML);
</script>
```

This returns `"<p>Some text and <a>a link</a></p>"` in the alert box
If tags are present, innerHTML returns them as plain text.

2) Add/Edit HTML content
```javascript
document.getElementById('myDiv').innerHTML = '<blockquote>Replace paragraph by quotation</blockquote>';
```

This replaces the paragraph present in the div.

3) Only add HTML content
```javascript
document.getElementById('myDiv').innerHTML += ' and <strong>a highlighted section</strong>.';
```

4) Do NOT use += in a loop !
innerHTML slows down code execution.
A better option is to concatenate the text in a variable and append it after the loop.
```javascript
var text = '';
while( /* condition */ ) {
  text += 'your text here. ';
}
element.innerHTML = text;
```

### JavaScript - Clone nodes

#### Syntax

```javascript
elementObject.cloneNode(boolean);
```

if boolean is "false" it doesn't include the child nodes and if its "true" then it will include the child nodes

#### Example

```javascript
function functionClone(){
  var clonenode = button.cloneNode(true);
  alert("created clone node"+clonenode);
  document.getElementById("button").disabled=true;
}
```

#### JavaScript - Replace a node: replaceChild()

#### Syntax

```javascript
replaceChild(newElement,elementToReplace)
```

### JavaScript - Events

#### Node types table:

1 - Element node
2 - Attribute node
3 - Text node
4 - CDATA passage node

#### Events table:

| Event Name | Action to trigger it |
|---|---|
| click | Click on the element |
| dblclick | Double click on the element |
| mouseover | Put the cursor above the element |
| mouseout | Remove the cursor from above the element |
| mousedown | Hold down the left button of the mouse on the element |
| mouseup | Release the left button of the mouse on the element |
| mousemove | Move the cursor on the element |
| keydown | Hold down a keyboard's key on the element |
| keyup | Release a keyboard's key on the element |
| keypress | Hit a keyboard's key on the element |
| focus | "Target" the element |
| blur | "Untarget" the element |
| change | Change an element's value. Specific to forms (input, checkbox, ...) |
| select | Select a textfield's content (input, textarea, ...) |

### JavaScript - Events specific to the `<form>` tag:

| Event Name | Action to trigger it |
|---|---|
| submit | Send the form |
| reset | Reinitialize the form |

### JavaScript - this

Property pointing to the object currently used.
If you call this property when an event is triggered, the pointed object will be the element which triggered the event.

### JavaScript - Block the default action of some events

"return false;" blocks the default action of the event that triggered it

#### Example

```javascript
<a href="www.deviantart.com" onclick="alert('You clicked'); return false;">Click me!</a>
```

This will stop the click event from redirecting you to another page

You can use this technic to create link just to attribute them onclick event instead of redirecting the user to a new page.
```javascript
<a href="#" onclick="alert('You clicked'); return false;">Click me!</a>
```

#### Deprecated

```javascript
<a href="javascript: alert('Vous avez cliqué !');">Cliquez-moi !</a>
```

### JavaScript - Redirect or link

see http://stackoverflow.com/questions/503093/how-can-i-make-a-redirect-page-in-jquery-javascript

Javascript open link in new tab
```javascript
var win = window.open(hrefLink, '_blank');
win.focus()
```

## DOM-2 according to web standards

#### JavaScript - addEventListener()

#### Three parameters:

Event name (without letters "on").
The function to execute
A boolean : use the capture phase (true) or bubbling phase (false).

#### Example

```javascript
<span id="clickme">Cliquez-moi !</span>
<script type="text/javascript">
  var el = document.getElementById('clickme');
  el.addEventListener('click', function() { alert("Vous m'avez cliqué !"); }, false);
</script>
```

#### Capture and Bubbling

```javascript
<div id="capt1">
  <span id="capt2">Click me for the capture phase.</span>
</div>
```

capture
The div's event triggers first and then the span's event will trigger.

bubbling
The span's event triggers first and then the div's event will trigger.

IE<9 as well as event without DOM or with DOM-0 handle ONLY the bubbling phase.
This is why we usually put the addEventListener's last parameter to false
Read more on www.w3.org - event flow

#### JavaScript - removeEventListener()

Any event removal with DOM-2 is done using the same parameters as the one used during its creation.
However, it does not work with anonymous functions.
All DOM-2 events created with an anonymous function cannot be removed.
#### Example

```javascript
el.removeEventListener('click', myFunction, false);
```

JavaScript - addEventListener() & removeEventListener(): for version IE<9
#### attachEvent() & detachEvent() - same as other standards methods except that the third parameter does not exist and the event must be prefixed by "on"

#### Example

```javascript
el.attachEvent('onclick', function() {   // Create the event
  alert('Tadaaaam !');
});
el.detachEvent('onclick', function() {   // Remove the event passing the same params
  alert('Tadaaaam !');
});
```

Add a click event to an element - Cross Browser version
```javascript
function addEvent(el, event, func) {
  if(el.addEventListener) {              // if el has method addEventListener()
    el.addEventListener(event, func, false);
  }
  else {                                 // if el does not have method addEventListener()
    el.attachEvent('on'+event, func);
  }
}

addEvent(element, 'click', function() {
  ...your code...
});
```

### JavaScript - The Event object

https://developer.mozilla.org/fr/DOM/event

#### Access to events

events can be accessed only when a function is executed by an event
Internet Explorer (versions < 9) - Event only accessible using window.event
No need to use an argument in the function executed by the event

Internet browser compatibility code:
```javascript
e = e || window.event;
```

Add an event to an element

DOM-0
```javascript
el.onclick = function(e) {           // e is a reference to the Event object
  alert(e.type)                      // Displays the event type (click, mouseover, ...)
};
```

DOM-2
```javascript
el.addEventListener('click', function(e) {   // e is a reference to the Event object
  alert(e.type)                              // displays the event type (click, mouseover, ...)
}, false);
```

event.target & event.srcElement
event.target: to get a reference to the element for which the event has been triggered (like the "this" for events without the DOM or with DOM-1)
event.srcElement: IE<9 only, does the same as event.target but for IE<9

#### Example

```javascript
[...]
<span id="clickme">Click me!</span>
[...]
<script type="text/javascript">
  function addEvent(el, event, func) { // reuse our function for DOM-2 events
    if (el.addEventListener) {
      el.addEventListener(event, func, false);
    } else {
      el.attachEvent('on'+event, func);
    }
  }
  var clickme = document.getElementById('clickme');
  addEvent(clickme, 'click', function(e) {
    var target = e.srcElement || e.target;
    target.innerHTML = 'You clicked!';
  });
</script>
```

Some events applied to a parent element can propagate them-selves to children elements. This is the case for mouseover, mouseout and mousemove.
target always returns the element that triggered the event (which can be a child).

event.currentTarget
Returns the origin element of the event, not its children (in contrast with event.target)
Does not work on IE<9

event.clientX & event.clientY - cursor position
Cursor position according to the top left corner of the web page OR the screen itself
Since the cursor position changes at each move of the mouse, the most relevant event in most of cases is mousemove

```javascript
[...]
<div id="position"></div>
[...]
<script type="text/javascript">
  var pos = document.getElementById('position');
    document.addEventListener('mousemove', function(e) {
    pos.innerHTML = 'Pos X: ' + e.clientX + 'px<br/>Pos Y: ' + e.clientY + 'px';
  }, false);
</script>
```

event.relatedTarget - only use with mouseover and mouseout events
With mouseout event, relatedTarget provides the element object on which the cursor just came
With mouseover event, relatedTarget provides the element object the cursor just left
IE<9 : use fromElement and toElement

event.keyup, event.keydown & event.keypress
These events trigger when a key is pressed or released

event.keyup and event.keydown
have the attributs "keyCode" and "which"
CANNOT detect multiple keys pressed
"which" is NOT supported by IE<9

event.keypress
Has the attribut "which" only
which is NOT supported by IE<9 - "keyCode" must be used instead

## JavaScript - Manipulate the CSS

### JavaScript - Modify the style

Inline style (properties of the style attribute) have the priority on any property coming from a style sheet.
Using the style attribute is the simplest and the most popular technic to modify the CSS of an HTML element.
```javascript
el.style.width = '150px';
```

In Javascript, hyphens characters are forbidden in properties names
```javascript
el.style.background-color = 'blue';     // does not work
el.style.backgroundColor = 'blue';      // this is the convention
```

### JavaScript - Access CSS values of an element

el.style only returns the CSS values of the CSS properties applied via the "style" attribute
#### getComputedStyle() gets the real CSS values of an element

```javascript
<style type="text/css">
  #text { color: red; }
</style>
<span id="text"></span>
<script type="text/javascript">
  var text = document.getElementById('text'),
  color = getComputedStyle(text, null).color;
  alert(color);
</script>
```

use currentStyle() for IE<9 to get the "real" CSS values of an element
```javascript
<style type="text/css">
  #text { color: red; }
</style>
<span id="text"></span>
<script type="text/javascript">
  var text = document.getElementById('text'),
  color = text.currentStyle.color;
  alert(color);
</script>
```

All the values obtained using getComputedStyle() or currentStyle are read-only.

Attributes of type "offset" table:
| Attribute | Contains |
|---|---|
| offsetWidth | Total width (width + padding + border) of the element |
| offsetHeight | Total height (height + padding + border) of the element |
| offsetLeft | Position according to the left side of its parent element (useful if element is in absolute position) |
| offsetTop | Position according to the top side of its parent element (useful if element is in absolute position) |
| offsetParent | Contains the element object parent according to which is positioned the current element (useful if element is in absolute or relative position) |

### JavaScript - Authentication and Cookies

w3schools.com - js cookies
thinkvitamin.com - how to create totally secure cookies
pajhome.org.uk - protecting passwords
repoze-who-jscrypto - JavaScript Authentication Library
