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

    // nested for loops will iterate over each cell in the 6 x 7 board
    for (let row = 0; row < ROWS; row++) {
        let currentRow = [];
        for (let col = 0; col < COLS; col++) {
            currentRow.push(' ');

            // id of cell will be concatenation of it's row and col "row,col"
            // this way we can identify each cell and handle moves/coloring them in
            let cell = document.createElement("div");
            cell.id = row.toString() + "," + col.toString();

            // allows us to style the cell by the cell class
            cell.classList.add("cell");
            cell.addEventListener("click", handleMove);
            document.getElementById("board").append(cell);
        }
        // builds the board row by row
        board.push(currentRow);
    }
}

// drop piece into column on click, and alternate turns
function handleMove(){
    if (gameOver) {
        return;
    }

    // cell clicked will be of form "row,col" from 2D board array
    let cellClicked = this.id.split(",");
    let col = parseInt(cellClicked[1])

    // the row to place the piece depends on current height of that column
    // column is full, if row (space left in col ) < 0
    let row = colHeights[col];
    if (row < 0) {
        return;
    }

    // after getting the valid location for the move we need to update the board
    let cell = document.getElementById(row.toString() + "," + col.toString());
    if (currentPlayer == playerYellow) {
        // populate the empty cell with CSS
        // player alternates every click
        currentPlayer = playerRed;
        cell.classList.add("yellow-piece");
    }
    else {
        currentPlayer = playerYellow;
        cell.classList.add("red-piece")
    }
    
    colHeights[col] -= 1;

    checkWinner();
}

// use sliding window to check horizontally, vertically, and both diagonals for 4 in a row
function checkWinner() {
    // Check horizontally
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col <= COLS - 4; col++) {
            if (
                board[row][col] != ' ' &&
                board[row][col] == board[row][col + 1] &&
                board[row][col] == board[row][col + 2] &&
                board[row][col] == board[row][col + 3]
            ) {
                declareWinner(board[row][col]);
                return;
            }
        }
    }

    // Check vertically
    for (let col = 0; col < COLS; col++) {
        for (let row = 0; row <= ROWS - 4; row++) {
            if (
                board[row][col] != ' ' &&
                board[row][col] == board[row + 1][col] &&
                board[row][col] == board[row + 2][col] &&
                board[row][col] == board[row + 3][col]
            ) {
                declareWinner(board[row][col]);
                return;
            }
        }
    }

    // Check diagonally (top-left to bottom-right)
    for (let row = 0; row <= ROWS - 4; row++) {
        for (let col = 0; col <= COLS - 4; col++) {
            if (
                board[row][col] != ' ' &&
                board[row][col] == board[row + 1][col + 1] &&
                board[row][col] == board[row + 2][col + 2] &&
                board[row][col] == board[row + 3][col + 3]
            ) {
                declareWinner(board[row][col]);
                return;
            }
        }
    }

    // Check diagonally (bottom-left to top-right)
    for (let row = 3; row < ROWS; row++) {
        for (let col = 0; col <= COLS - 4; col++) {
            if (
                board[row][col] != ' ' &&
                board[row][col] == board[row - 1][col + 1] &&
                board[row][col] == board[row - 2][col + 2] &&
                board[row][col] == board[row - 3][col + 3]
            ) {
                declareWinner(board[row][col]);
                return;
            }
        }
    }
}

// when winner is detected display message on screen and end game
function declareWinner(winner) {
    document.getElementById('winner').innerText = `${winner.toUpperCase()} wins!`;
    gameOver = true;
}

// reset board on button click
function resetGame() {
    // Clear the board
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            let cell = document.getElementById(row.toString() + "," + col.toString());
            cell.classList.remove("red-piece", "yellow-piece");
        }
    }

    // Reset variables
    currentPlayer = playerRed;
    gameOver = false;
    document.getElementById('winner').innerText = '';

    // Reset board array and colHeights
    renderBoard();
}

// Add event listener to the reset button
document.getElementById('resetButton').addEventListener('click', resetGame);


