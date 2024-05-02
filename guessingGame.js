function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const minNumber = 1;
const maxNumber = 25;
let targetNumber = getRandomNumber(minNumber, maxNumber);
let guessCount = 0;
const maxGuesses = 5;

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const feedback = document.getElementById('feedback');
    const guessCountDisplay = document.getElementById('guessCount');

    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < minNumber || guess > maxNumber) {
        // invalid guess
        feedback.innerHTML = 'Please enter a valid number between 1 and 25.';
    } else {
        guessCount++;
        const remainingGuesses = maxGuesses - guessCount;
        guessCountDisplay.innerHTML = `Guesses left: ${remainingGuesses}`;

        if (guess === targetNumber) {
            feedback.innerHTML = `Congratulations! ${guess} is correct! You guessed ${guessCount} times.`;
            // reset game
            targetNumber = getRandomNumber(minNumber, maxNumber);
            guessCount = 0;
            guessCountDisplay.innerHTML = '';
        } else if (remainingGuesses === 0) {
            // no more guesses left, player loses
            feedback.innerHTML = `Sorry, you ran out of guesses. The correct number was ${targetNumber}. Try again.`;
            // reset game
            targetNumber = getRandomNumber(minNumber, maxNumber);
            guessCount = 0;
            guessCountDisplay.innerHTML = '';
        } else if (guess < targetNumber) {
            feedback.innerHTML = `${guess} is too low. You have ${remainingGuesses} guesses left. Try again.`;
        } else {
            feedback.innerHTML = `${guess} is too high. You have ${remainingGuesses} guesses left. Try again.`;
        }
    }
    
    guessInput.value = '';
}
