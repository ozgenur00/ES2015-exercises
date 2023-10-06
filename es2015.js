// let and const

const PI = 3.14;
// it will not work if you try to change pi. But if we use var we can change it to anything.

//1. What is the difference between var and let?
//var - Can reassign and redeclare. But you can't redeclare using the let. Let creates block-scope.

//2. What is the difference between var and const?
//Var - It's function scoped, but constant cannot be changed once declared (immutable). Const has a block-scope too.

//3. What is the difference between let and const?
// You cannot redeclare or reassign using the const but you can redeclare with let.

//4. What is hosting?
// Variables are "hoisted" to the top of their declaring scope, meaning you can access their names with an undefined value before they are used. Function declarations are also hoisted and can be called before they are defined in the code.

//arrow functions

//1. ES5 Map Callback

// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }

//ES2015 version
const DOUBLE = arr => arr.map(val => val * 2);

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

