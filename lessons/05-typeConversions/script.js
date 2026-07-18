// ==============================
// Lesson 5 - Type Conversion
// ==============================

/*
  🎯 GOAL OF THIS LESSON:

  Learn how to convert data types so JavaScript can
  correctly process values in different situations.

  This is important because:
  - User input is always a string
  - APIs return mixed data types
  - We often need numbers for calculations
*/

// ------------------------------
// EXAMPLE 1: USER INPUT CONVERSION
// ------------------------------

let age = window.prompt("How old are you?");

/*
  Important:
  window.prompt() ALWAYS returns a STRING
*/

console.log("Before conversion:", age, typeof age);

// Convert string → number
age = Number(age);

// Now we can do math correctly
age = age + 1;

console.log("After conversion:", age, typeof age);

// ------------------------------
// EXAMPLE 2: TYPE CONVERSION TEST
// ------------------------------

let x = "pizza";
let y = "pizza";
let z = "pizza";

/*
  Convert values into different types
*/

// String → Number
x = Number(x);

// String → String (no change)
y = String(y);

// String → Boolean
z = Boolean(z);

console.log("x:", x, typeof x); // NaN (Not a Number)
console.log("y:", y, typeof y); // "pizza"
console.log("z:", z, typeof z); // true