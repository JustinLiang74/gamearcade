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
            // add empty cell to row 
            currentRow.push(' ');

            // id of cell will be concatenation of it's row and col ["row,col", ...]
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

// TODO handleMove, checkWinner, declareWinner, resetGame

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


