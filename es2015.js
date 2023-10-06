// LET AND CONST

const PI = 3.14;
// it will not work if you try to change pi. But if we use var we can change it to anything.

//----------------------------------------------------------------
//1. What is the difference between var and let?
//var - Can reassign and redeclare. But you can't redeclare using the let. Let creates block-scope.

//----------------------------------------------------------------
//2. What is the difference between var and const?
//Var - It's function scoped, but constant cannot be changed once declared (immutable). Const has a block-scope too.

//----------------------------------------------------------------
//3. What is the difference between let and const?
// You cannot redeclare or reassign using the const but you can redeclare with let.

//----------------------------------------------------------------
//4. What is hosting?
// Variables are "hoisted" to the top of their declaring scope, meaning you can access their names with an undefined value before they are used. Function declarations are also hoisted and can be called before they are defined in the code.

//ARROW FUNCTIONS

//1. ES5 Map Callback

// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }

//ES2015 version
const DOUBLE = arr => arr.map(val => val * 2);

//----------------------------------------------------------------
//2. Refactor the following function to use arrow functions

// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
//   }

const SQUAREANDFINDEVENTS = numbers => numbers.map(num => num ** 2).filter(square => square % 2 === 0);

//REST AND SPREAD

//1. ES5 function that takes a variable number of arguments(refactor it into ES2015)

// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

const FILTEROUTODDS = (...args) => args.filter(v => v % 2 === 0);

//2. FindMin

const FINDMIN = (...args) => Math.min(...args);

//3. mergeObjects

let mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

//4. doubleAndReturnArgs

 let doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(val => val * 2)];

 //5. slice and dice

 /** remove a random element in the items array
and return a new array without that item. */
 let removeRandom = items => {
    let index = Math.floor(Math.random() * items.length);
    return [...items.slice(0, index), ...items.slice(index + 1)];
 }

//----------------------------------------------------------------

/** remove a random element in the items array
and return a new array without that item. */
let extend = (arr1, arr2) => {
    return [...arr1, ...arr2];
}

//----------------------------------------------------------------
/** Return a new object with all the keys and values
from obj and a new key/value pair */
let addKeyvak = (obj, key, val) => {
let newObject = { ...obj }
    newObject[key] = val;
    return newObject;
}
//----------------------------------------------------------------
/** Return a new object with a key removed. */
let removeKey = (obj, key) => {
let removeObjKey = {...obj}
delete obj[key];
return removeObjKey;
}
//----------------------------------------------------------------
/** Combine two objects and return a new object. */

let combine = (obj1, obj2) => {
    return {...obj1, ...obj2}
}
//----------------------------------------------------------------
/** Return a new object with a modified key and value. */

let update = (obj, key, val) => {
    let updatedObj = {...obj}
    updatedObj[key] = val;
    return updatedObj;
}

// OBJECT ENHANCEMENTS

//1. Same key values

function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}

//----------------------------------------------------------------
//2. Computed property names

let favoriteNum = 9;

let instructor = {
    firstName: "Ozge",
    [favoriteNum]: "This is my favorite number!"
}

//----------------------------------------------------------------
//3. Object Methods

let instructor2 = {
    firstName: "Colt",
    sayHi() {
        return "Hi!"
    },
    sayBye() {
        return this.firstName + " says bye";
    }
}

//----------------------------------------------------------------
//4. createAnimal function

const D = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
D.bark()  //"Woooof!"

const S = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
S.bleet() //"BAAAAaaaa"

function createAnimal(species, verb, noise) {
    return {
        species: species,
        [verb]() {
            return noise;
        }
    }
}

//----------------------------------------------------------------
