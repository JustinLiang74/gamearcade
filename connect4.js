// Constants for rows and columns
const ROWS = 6;
const COLS = 7;
const RED = 'red';
const YELLOW = 'yellow';

// Get reference to the board element
const boardElement = document.getElementById('board');

// Create empty game board
let board = [];
for (let i = 0; i < ROWS; i++) {
    board[i] = [];
    for (let j = 0; j < COLS; j++) {
        board[i][j] = null;
    }
}

let currentPlayer = RED; // Start with red player

// Function to render the game board
function renderBoard() {
    boardElement.innerHTML = '';
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            if (board[i][j] === null) {
                cell.classList.add('empty');
            } else {
                cell.classList.add(board[i][j]);
            }
            cell.dataset.row = i;
            cell.dataset.col = j;
            boardElement.appendChild(cell);
        }
    }
}

function handleMove(event) {
    const col = event.target.dataset.col;
    const row = findEmptyRow(parseInt(col));

    if (row !== -1) {
        // Drop the piece into the lowest available row in the column
        const cell = boardElement.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        cell.classList.remove('empty');
        cell.classList.add(currentPlayer);
        board[row][col] = currentPlayer;

        if (checkWin(row, col)) {
            document.getElementById('message').innerText = `${currentPlayer.toUpperCase()} wins!`;
            boardElement.removeEventListener('click', handleMove);
        } else {
            currentPlayer = currentPlayer === RED ? YELLOW : RED;
            document.getElementById('message').innerText = `Player ${currentPlayer.toUpperCase()}'s turn`;
        }
    }
}


function findEmptyRow(col) {
    for (let i = ROWS - 1; i >= 0; i--) {
        if (board[i][col] === null) {
            return i;
        }
    }
    return -1; // Column is full
}


function resetGame() {
    board = [];
    for (let i = 0; i < ROWS; i++) {
        board[i] = [];
        for (let j = 0; j < COLS; j++) {
            board[i][j] = null;
        }
    }
    currentPlayer = RED;
    renderBoard();
    document.getElementById('message').innerText = `Player ${currentPlayer.toUpperCase()}'s turn`;
    boardElement.addEventListener('click', handleMove);
}

// Add event listener for the reset button
document.getElementById('resetButton').addEventListener('click', resetGame);

// Add event listener for the game board cells
boardElement.addEventListener('click', handleMove);

// Call renderBoard to display the initial empty board
renderBoard();
