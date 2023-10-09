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


//DESTRUCTURING

//1. Object destructuring

//What does the following code return/print?
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

//What does the following code return/print?
let planetFacts = {
    numPlanet: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanet, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); // ? {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

//What does the following code return/print?
function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // your name is Alejandro and you like purple
  getUserData({firstName: "Melissa"}) // Your name is Melissa and you like green.
  getUserData({}) // Your name is undefined and you like green.

//----------------------------------------------------------------
//2. Array Destructuring

//What does the following code return/print?
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi

//What does the following code return/print?
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); // raindrops on roses
  console.log(whiskers); // whiskers on kittens
  console.log(aFewOfMyFavoriteThings); // ['Bright copper kettles', 'warm woolen mittens', 'Brown paper packages tied up with strings']

//What does the following code return/print?
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // [10, 30, 20]

//----------------------------------------------------------------
//3. ES2015 Refactoring

//Object

let obj = {
    numbers: {
        a:1,
        b:2
    }
};

let {a, b} = obj.numbers;

//Array

[arr[0], arr[1]] = [arr[1], arr[0]];

//----------------------------------------------------------------

//raceResults() write a function called raceResults which a single array argument. It should return an object with the keys first, second, third and rest.
// one line function should use an arrow function, destructuring enhanced object assignment(same key/value shortcut)
raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']);

let receResults = ([first, second, third, ...rest]) => ({first, second, third, rest});

//MAPS AND SETS

//1. Quick questions
//#1 - What does the following code return?

new Set([1,1,2,2,3,4]) // {1, 2, 3, 4}

//#2 - What does the following code return?

[...new Set("referee")].join("") // 'ref'

//#3 What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false); // {Array(3) => true, Array(3) => false}

//----------------------------------------------------------------

//2. hasDuplicate - Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

let hasDuplicate = arr => new Set(arr).size !== arr.length;

//----------------------------------------------------------------

//3. vowelCount - Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the sting

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

function vowel(char) {
    return "aeiou".includes(char);
}

function vowelCount(string) {
    let vowelMap = new Map();
    for (let char of string) {
        let lowerCasedChar = char.toLowerCase();
        if (vowel(lowerCasedChar)) {
            if(vowelMap.has(lowerCasedChar)) {
                vowelMap.set(lowerCasedChar, vowelMap.get(lowerCasedChar) + 1);
            } else {
                vowelMap.set(lowerCasedChar, 1) 
            }
        }
    }
    return vowelMap;
}

