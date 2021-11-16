let playerX = 'X';
let playerO = 'O';
let gameOver = false;

const board = [
	['_', '_', '_'],
	['_', '_', '_'],
	['_', '_', '_'],
];

function checkWinner() {
	for (let row = 0; row < 3; row++) {
		if (board[row][0] == board[row][1] && board[row][1] == board[row][2]) {
			if (board[row][0] == 'X') {
				gameOver = true;

				messageField.textContent = 'player X wins ';
				for (i = 0; i < cells.length; i++)
					if (cells[i].dataset.row == row) cells[i].classList.add('winbox');

				restartButton.classList.remove('hide');
			} else if (board[row][0] == 'O') {
				gameOver = true;

				messageField.textContent = 'player O wins ';
				for (i = 0; i < cells.length; i++)
					if (cells[i].dataset.row == row) cells[i].classList.add('winbox');
				restartButton.classList.remove('hide');
			}
		}
	}
	for (let col = 0; col < 3; col++) {
		if (board[0][col] == board[1][col] && board[1][col] == board[2][col]) {
			if (board[0][col] == 'X') {
				gameOver = true;

				messageField.textContent = 'player X wins ';
				for (i = 0; i < cells.length; i++)
					if (cells[i].dataset.col == col) cells[i].classList.add('winbox');

				restartButton.classList.remove('hide');
			} else if (board[0][col] == 'O') {
				gameOver = true;

				messageField.textContent = 'player O wins ';
				for (i = 0; i < cells.length; i++)
					if (cells[i].dataset.col == col) cells[i].classList.add('winbox');

				restartButton.classList.remove('hide');
			}
		}
	}
	if (board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
		if (board[0][0] == 'X') {
			gameOver = true;

			messageField.textContent = 'player X wins ';

			for (i = 0; i < cells.length; i++) {
				if (cells[i].dataset.row == 0 && cells[i].dataset.col == 0)
					cells[i].classList.add('winbox');
				if (cells[i].dataset.row == 1 && cells[i].dataset.col == 1)
					cells[i].classList.add('winbox');
				if (cells[i].dataset.row == 2 && cells[i].dataset.col == 2)
					cells[i].classList.add('winbox');
			}

			restartButton.classList.remove('hide');
		} else if (board[0][0] == 'O') {
			gameOver = true;

			messageField.textContent = 'player O wins ';

			for (i = 0; i < cells.length; i++) {
				if (cells[i].dataset.row == 0 && cells[i].dataset.col == 0)
					cells[i].classList.add('winbox');
				if (cells[i].dataset.row == 1 && cells[i].dataset.col == 1)
					cells[i].classList.add('winbox');
				if (cells[i].dataset.row == 2 && cells[i].dataset.col == 2)
					cells[i].classList.add('winbox');
			}

			restartButton.classList.remove('hide');
		}
	} else if (board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
		if (board[0][2] == 'X') {
			gameOver = true;

			messageField.textContent = 'player X wins ';

			for (i = 0; i < cells.length; i++) {
				if (cells[i].dataset.row == 0 && cells[i].dataset.col == 2)
					cells[i].classList.add('winbox');
				if (cells[i].dataset.row == 1 && cells[i].dataset.col == 1)
					cells[i].classList.add('winbox');
				if (cells[i].dataset.row == 2 && cells[i].dataset.col == 0)
					cells[i].classList.add('winbox');
			}

			restartButton.classList.remove('hide');
		} else if (board[0][2] == 'O') {
			gameOver = true;

			messageField.textContent = 'player O wins ';

			for (i = 0; i < cells.length; i++) {
				if (cells[i].dataset.row == 0 && cells[i].dataset.col == 2)
					cells[i].classList.add('winbox');
				if (cells[i].dataset.row == 1 && cells[i].dataset.col == 1)
					cells[i].classList.add('winbox');
				if (cells[i].dataset.row == 2 && cells[i].dataset.col == 0)
					cells[i].classList.add('winbox');
			}

			restartButton.classList.remove('hide');
		}
	}

	if (isMovesLeft(board) === false) {
		messageField.textContent = "IT'S TAI ";
		restartButton.classList.remove('hide');
	}
}

/*----- DOM -----*/

let cells = document.querySelectorAll('.cell');
let xTurn = document.querySelector('.player-turn > .player-x');
let circleTurn = document.querySelector('.player-turn > .player-o');
let messageField = document.querySelector('.winner');

/* play game */

let restartButton = document.querySelector('.restart-game');
xTurn.classList.toggle('heighlight');

cells.forEach((cell) => {
	cell.addEventListener('click', markCell, { once: true });
});

function markCell(cell) {
	cell = cell.target;

	if (gameOver === false && cell.textContent == '') {
		board[+cell.dataset.row].splice(+cell.dataset.col, 1, playerX);

		cell.textContent = playerX;

		robot();
		checkWinner();
	}
}

/* MiniMax Algorithm */

class Move {
	constructor() {
		let row, col;
	}
}

// This function returns true if there are moves
// remaining on the board else it'll return  false
function isMovesLeft(board) {
	for (let i = 0; i < 3; i++)
		for (let j = 0; j < 3; j++) if (board[i][j] == '_') return true;

	return false;
}

function evaluate(b) {
	// Checking for Rows for X or O victory.
	for (let row = 0; row < 3; row++) {
		if (b[row][0] == b[row][1] && b[row][1] == b[row][2]) {
			if (b[row][0] == playerO) return +10;
			else if (b[row][0] == playerX) return -10;
		}
	}

	// Checking for Columns for X or O victory.
	for (let col = 0; col < 3; col++) {
		if (b[0][col] == b[1][col] && b[1][col] == b[2][col]) {
			if (b[0][col] == playerO) return +10;
			else if (b[0][col] == playerX) return -10;
		}
	}

	// Checking for Diagonals for X or O victory.
	if (b[0][0] == b[1][1] && b[1][1] == b[2][2]) {
		if (b[0][0] == playerO) return +10;
		else if (b[0][0] == playerX) return -10;
	}

	if (b[0][2] == b[1][1] && b[1][1] == b[2][0]) {
		if (b[0][2] == playerO) return +10;
		else if (b[0][2] == playerX) return -10;
	}

	// Else if none of them have
	// won then return 0
	return 0;
}

// This is the minimax function. It
// considers all the possible ways
// the game can go and returns the
// value of the board
function minimax(board, depth, isMax) {
	let score = evaluate(board);

	// If Maximizer has won the game
	// return his/her evaluated score
	if (score == 10) return score;

	// If Minimizer has won the game
	// return his/her evaluated score
	if (score == -10) return score;

	// If there are no more moves and
	// no winner then it is a tie
	if (isMovesLeft(board) == false) return 0;

	// If this maximizer's move
	if (isMax) {
		let best = -1000;

		// Traverse all cells
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				// Check if cell is empty
				if (board[i][j] == '_') {
					// Make the move
					board[i][j] = playerO;

					// Call minimax recursively
					// and choose the maximum value
					best = Math.max(best, minimax(board, depth + 1, !isMax));

					// Undo the move
					board[i][j] = '_';
				}
			}
		}
		return best;
	}

	// If this minimizer's move
	else {
		let best = 1000;

		// Traverse all cells
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				// Check if cell is empty
				if (board[i][j] == '_') {
					// Make the move
					board[i][j] = playerX;

					// Call minimax recursively and
					// choose the minimum value
					best = Math.min(best, minimax(board, depth + 1, !isMax));

					// Undo the move
					board[i][j] = '_';
				}
			}
		}
		return best;
	}
}

// This will return the best possible
// move for the player
function findBestMove(board) {
	let bestVal = -1000;
	let bestMove = new Move();
	bestMove.row = -1;
	bestMove.col = -1;

	// Traverse all cells, evaluate
	// minimax function for all empty
	// cells. And return the cell
	// with optimal value.
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			// Check if cell is empty
			if (board[i][j] == '_') {
				// Make the move
				board[i][j] = playerO;

				// compute evaluation function
				// for this move.
				let moveVal = minimax(board, 0, false);

				// Undo the move
				board[i][j] = '_';

				// If the value of the current move
				// is more than the best value, then
				// update best
				if (moveVal > bestVal) {
					bestMove.row = i;
					bestMove.col = j;
					bestVal = moveVal;
				}
			}
		}
	}

	return bestMove;
}

// unbeated AI gamer
function robot() {
	if (isMovesLeft(board)) {
		let bestMove = findBestMove(board);

		board[bestMove.row].splice(bestMove.col, 1, playerO);

		for (i = 0; i < cells.length; i++) {
			if (
				cells[i].dataset.row == bestMove.row &&
				cells[i].dataset.col == bestMove.col
			) {
				cells[i].classList.add('robot');
				cells[i].textContent = playerO;
			}
		}
	}
}
