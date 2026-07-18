// ====================================================
// Mini User Profile App
//
// Objective:
// 1. Capture user input
// 2. Convert age to a number
// 3. Store user information
// 4. Calculate year of birth
// 5. Display the profile on the webpage
// ====================================================

// A constant value that never changes
const CURRENT_YEAR = 2026;

// Wait for the user to click the button
document.getElementById("submitBtn").onclick = function () {

    // Get the user's name from the input field
    const username = document.getElementById("nameInput").value;

    // Get the user's age and convert it to a number
    const age = Number(document.getElementById("ageInput").value);

    // Calculate the user's approximate birth year
    const birthYear = CURRENT_YEAR - age;

    // Store related information inside one object
    const user = {
        username: username,
        age: age,
        birthYear: birthYear
    };

    // Display the information on the webpage
    document.getElementById("profileOutput").textContent =
`========== USER PROFILE ==========

Name       : ${user.username}
Age        : ${user.age}
Birth Year : ${user.birthYear}

Welcome, ${user.username}!`;

    // Display the object in the browser console
    console.log(user);
};