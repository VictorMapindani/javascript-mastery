// ==============================
// Lesson 6 - Constants (const)
// ==============================

/*
  🎯 GOAL OF THIS LESSON:

  Learn how to use "const" to create values that:
  - cannot be changed
  - stay fixed throughout the program
  - prevent accidental modification
*/

// ------------------------------
// CONSTANT VALUE (FIXED)
// ------------------------------

// PI is a mathematical constant (never changes)
const PI = 3.14159;

// ------------------------------
// VARIABLES THAT CAN CHANGE
// ------------------------------

// We leave these as "let" because they change based on user input
let radius;
let circumference;

/*
  ❌ This would cause an error:
  PI = 420.69;
  Because const values cannot be reassigned
*/

// ------------------------------
// USER INTERACTION (DOM EVENT)
// ------------------------------

/*
  When the user clicks the button:
  1. Get radius from input field
  2. Convert it to a number
  3. Calculate circumference
  4. Display result on screen
*/

document.getElementById("mySubmit").onclick = function () {

  // Step 1: get user input
  radius = document.getElementById("myText").value;

  // Step 2: convert string → number
  radius = Number(radius);

  /*
    Step 3: apply formula

    Circumference of circle:
    C = 2 × π × r
  */
  circumference = 2 * PI * radius;

  // Step 4: show result in HTML
  document.getElementById("myH3").textContent =
    `Circumference: ${circumference} cm`;

  // Debugging (developer view)
  console.log("Radius:", radius);
  console.log("Circumference:", circumference);
};