

//-------------------------------------------------------//

— Javascript multiline string —

`x is a long
sentence in
one string`

//-------------------------------------------------------//

— Javascript OR —

|| 

//-------------------------------------------------------//

— Javascript: let vs const —

let allows the variable to be reassigned multiple times, while const creates a variable that cannot be reassigned after it has been assigned a value

//-------------------------------------------------------//

— Javascript: arrays —
        
// forEach
danceMoves.forEach( move => performDanceMove(<something>))

const keys = Object.keys(events); // dynamically get all the properties of an object
keys.forEach( (eventKey) => {
  // do something
});
    
// filter()
myArray.filter(song => song !== action.payload);  // "song" is the current item, it get removed if equal to action.payload

const favRecipes = allRecipes.filter( (recipe) => {
  return recipe.id !== 18 // do something
})

const favoriteRecipes = state.favoriteRecipes.filter( (recipe) => {
  return recipe.id !== action.payload.id; 
})

// array.slice()
const removeItemAtIndex = (list, index) => {
 //const arrStart = list.slice(0,index);
 //const arrEnd = list.slice(index+1);
 return [ ...list.slice(0,index) , ...list.slice(index+1) ];
};

The spread syntax (...) and array methods such as .map(), .slice(), and .filter() can be used to immutably update the state of a complex app.

//-------------------------------------------------------//

— Javascript: Promise vs Callback —

A promise is when the wife asks you to do the dishes and you say "sure honey I'll do that"

A callback is when you tell her "hey honey I finished those dishes"

An await is when she asks you to do the dishes and she's standing there in the kitchen tapping her foot

//-------------------------------------------------------//

— Javascript: Iterate Over Object —

for (let itemName in cart) {
  // do something with itemName
}

https://stackoverflow.com/a/43392879/759452

//-------------------------------------------------------//

— Javascript:  —

const remindMeLater = (task) => {
  return () => {
    return remindMeTo(task);
  }
}

const reminder = remindMeLater('get groceries');
console.log( reminder() );


//-------------------------------------------------------//

— Javascript: Switch Case —

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