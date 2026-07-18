// ========================
// Lesson 3 - Data Types + Operators
// ========================

// Primitive Data Types
const name = "Victor";        // string
const age = 24;              // number
const isDeveloper = true;    // boolean
const salary = null;         // intentional empty value
let futureGoal;              // undefined

console.log("=== Primitive Types ===");
console.log(name, typeof name);
console.log(age, typeof age);
console.log(isDeveloper, typeof isDeveloper);
console.log(salary, typeof salary);
console.log(futureGoal, typeof futureGoal);

// Reference Types
const developer = {
  name: "Victor",
  age: 24,
  role: "Junior Developer",
  stack: ["JavaScript", "Next.js", "NestJS"],
};

console.log("=== Object ===");
console.table(developer);

const projects = [
  "Portfolio Website",
  "JavaScript Mastery",
  "Cloud Project (future)"
];

console.log("=== Array ===");
console.log(projects);

// ========================
// Arithmetic Operators (still Lesson 3)
// ========================

let students = 30;

console.log("=== Arithmetic ===");

students = students + 1;
students = students - 1;
students = students * 2;
students = students / 2;

console.log("Students after operations:", students);

// Modulus (remainder)
let remainder = students % 3;
console.log("Remainder:", remainder);

// Exponent
let squared = students ** 2;
console.log("Squared:", squared);

// Shorthand operators
students += 5;
students -= 2;
students *= 2;
students /= 2;

console.log("After shorthand:", students);

// Increment / Decrement
students++;
students--;

console.log("Final value:", students);

// Operator precedence
let result1 = 10 + 5 * 2;
let result2 = (10 + 5) * 2;

console.log("No parentheses:", result1);
console.log("With parentheses:", result2);