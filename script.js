// script.js
document.addEventListener("DOMContentLoaded", () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 3;

    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const message = document.getElementById('message');
    const attemptsDisplay = document.getElementById('attempts');

    guessButton.addEventListener('click', () => {
        let userGuess = parseInt(guessInput.value);
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            message.textContent = "Please enter a valid number between 1 and 100.";
            return;
        }

        attempts--;

        if (userGuess === randomNumber) {
            message.textContent = `Congratulations! You guessed the right number: ${randomNumber}.`;
            guessButton.disabled = true;
        } else if (attempts === 0) {
            message.textContent = `Sorry, you're out of attempts. The number was ${randomNumber}.`;
            guessButton.disabled = true;
        } else {
            if (userGuess < randomNumber) {
                message.textContent = "Too low!";
            } else {
                message.textContent = "Too high!";
            }
        }

        attemptsDisplay.textContent = `Attempts left: ${attempts}`;
    });

    guessInput.addEventListener('input', () => {
        guessInput.value = guessInput.value.replace(/[^0-9]/g, '');
    });

    attemptsDisplay.textContent = `Attempts left: ${attempts}`;
});