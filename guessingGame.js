// Generate a random number between min and max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Global variables
const minNumber = 1;
const maxNumber = 25;
let targetNumber = getRandomNumber(minNumber, maxNumber);
let guessCount = 0;

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const feedback = document.getElementById('feedback');
    const guessCountDisplay = document.getElementById('guessCount'); // Get guess count display element

    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < minNumber || guess > maxNumber) {
        // Invalid guess
        feedback.innerHTML = 'Please enter a valid number between 1 and 100.';
    } else {
        // Increment guess count
        guessCount++;
        guessCountDisplay.innerHTML = `Guess count: ${guessCount}`; // Update guess count display

        if (guess === targetNumber) {
            // Correct guess
            feedback.innerHTML = `Congratulations! ${guess} is correct! You guessed ${guessCount} times.`;
            targetNumber = getRandomNumber(minNumber, maxNumber); // Generate a new target number
            guessCount = 0; // Reset guess count
            guessCountDisplay.innerHTML = ''; // Clear guess count display
        } else if (guess < targetNumber) {
            // Guess is too low
            feedback.innerHTML = `${guess} is too low. Try again.`;
        } else {
            // Guess is too high
            feedback.innerHTML = `${guess} is too high. Try again.`;
        }
    }

    // Clear the input field
    guessInput.value = '';
}
