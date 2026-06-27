// ==============================
// Lesson 4 - User Input
// ==============================

/*
  🎯 GOAL OF THIS FILE:

  1. Wait for user to type their name
  2. Detect when user clicks the button
  3. Capture input value
  4. Display personalized greeting on screen
*/

// ------------------------------
// EASY WAY (NOT USED IN REAL APPS)
// ------------------------------

/*
let username = window.prompt("What's your username?");
console.log(username);
*/

// ------------------------------
// PROFESSIONAL WAY (REAL WEB DEV)
// ------------------------------

// Variable to store user input
let username;

// ------------------------------
// STEP 1: Detect button click
// ------------------------------

document.getElementById("mySubmit").onclick = function () {

  /*
    STEP 2: Get value from input field

    .value means:
    👉 whatever the user typed inside the input box
  */
  username = document.getElementById("myText").value;

  /*
    STEP 3: Update the webpage dynamically

    textContent means:
    👉 change visible text inside HTML element
  */
  document.getElementById("myH1").textContent =
    `Hello ${username}`;

  /*
    STEP 4: Debugging (developer only)

    This helps us see what the user entered in console
  */
  console.log("User entered:", username);
};