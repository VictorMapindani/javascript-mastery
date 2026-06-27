// ========================
// Lesson 2 - Variables
// ========================

const firstName = "Victor";
let age = 24;
let isDeveloper = true;

console.log("Developer Profile:");
console.log(firstName);
console.log(age);
console.log(isDeveloper);

// Real-world object usage
const developer = {
  firstName: firstName,
  age: age,
  role: "Junior Developer",
  stack: "JavaScript",
};

console.table(developer);