// constants for rows and columns, colors
const ROWS = 6;
const COLS = 7;
const RED = 'red';
const YELLOW = 'yellow';

var playerRed = RED
var playerYellow = YELLOW
var currentPlayer = playerRed

var gameOver = false;

// keep track of remaining space left in columns
var colHeights = [];
var board;

window.onload = function() {
    renderBoard();
}

// function to render the game board
function renderBoard() {
    board = [];
    colHeights  = [5, 5, 5, 5, 5, 5, 5];

    for (let row = 0; row < ROWS; row++) {
        let currentRow = [];
        for (let col = 0; col < COLS; col++) {
            // JS
            currentRow.push(' ');
            // HTML
            let cell = document.createElement("div");
            cell.id = row.toString() + "-" + col.toString();
            cell.classList.add("cell");
            cell.addEventListener("click", handleMove);
            document.getElementById("board").append(cell);
        }
        board.push(currentRow);
    }
}

// TODO handleMove, checkWinner, declareWinner, resetGame

// drop piece into column on click, and alternate turns
function handleMove(){
    return
}

// use sliding window to check horizontally, vertically, and both diagonals for 4 in a row
function checkWinner(){
    return
}

// when winner is detected display message on screen and end game
function declareWinner(){
    return
}

// reset board on button click
function resetGame(){
    return
}


