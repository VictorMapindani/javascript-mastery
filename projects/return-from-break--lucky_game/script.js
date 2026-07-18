

document.getElementById("playBtn").onclick = function () {
    const name = document.getElementById("nameInput").value;
    const guessNumber = Number(document.getElementById("guessNumber").value);
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const iAgree = document.getElementById("iAgree").checked;
    const result = document.getElementById("result");

    if (guessNumber === randomNumber && iAgree === true) {
        result.textContent = `
        Lucky Number Game
        ----------------
        ----------------
        Congratulations! You guessed the correct number!
        Player: ${name} 
        Your Guess: ${guessNumber}
        Lucky Number: ${randomNumber}.`;
    } 
    else if (guessNumber < 1 || guessNumber > 10) {
        result.textContent = `Please enter a number between 1 and 10, ${name}.`;
    }
    else if (!iAgree) {
        result.textContent = `You must agree to the terms and conditions, ${name}.`;
    }
    
    else {
        result.textContent = `
        Lucky Number Game
        ----------------
        ----------------
        Sorry, you guessed the wrong number. Better luck next time!
        Player: ${name} 
        Your Guess: ${guessNumber}
        Lucky Number: ${randomNumber}.
        Difference: ${Math.abs(guessNumber - randomNumber)}.
        Squared Difference: ${Math.pow(Math.abs(guessNumber - randomNumber), 2)}.`;
    }   
}

