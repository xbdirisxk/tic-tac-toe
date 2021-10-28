let playerX = "X";
let playerO = "O";
let currentPlayer;
let gameOver = false;

const board = [
	["_", "_", "_"],
	["_", "_", "_"],
	["_", "_", "_"],
];

function checkWinner() {
	for (let row = 0; row < 3; row++) {
		if (board[row][0] == board[row][1] && board[row][1] == board[row][2]) {
			if (board[row][0] == "X") {
				gameOver = true;
				console.log("GAME OVER");
				// winningArea.textContent = "player X wins ";
				// heighlight match node
				return 10;
			} else if (board[row][0] == "O") {
				gameOver = true;
				console.log("GAME OVER");
				// winningArea.textContent = "player O wins ";
				// ...
				return -10;
			}
		}
	}
	for (let col = 0; col < 3; col++) {
		if (board[0][col] == board[1][col] && board[1][col] == board[2][col]) {
			if (board[0][col] == "X") {
				gameOver = true;
				console.log("GAME OVER");
				// ...
				return 10;
			} else if (board[0][col] == "O") {
				gameOver = true;
				console.log("GAME OVER");
				// ..
				return -10;
			}
		}
	}
	if (board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
		if (board[0][0] == "X") {
			gameOver = true;
			console.log("GAME OVER");
			// ...
			return 10;
		} else if (board[0][0] == "O") {
			gameOver = true;
			console.log("GAME OVER");
			// ..
			return -10;
		}
	} else if (board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
		if (board[0][2] == "X") {
			gameOver = true;
			console.log("GAME OVER");
			// ...
			return 10;
		} else if (board[0][2] == "O") {
			gameOver = true;
			console.log("GAME OVER");
			// ..
			return -10;
		}
	}

	// add game TAI

	return 0;
}

/*------old-code------*/

let cells = document.querySelectorAll(".cell");
let xTurn = document.querySelector(".player-turn > .player-x");
let circleTurn = document.querySelector(".player-turn > .player-o");

/* player choice one or two player */

// const gameBegin = document.querySelector(".game-start");
// const gameOption = document.querySelectorAll(".game-start > div");
const gameboard = document.querySelector(".container > .main");
/* let playerChose;
gameOption.forEach((option) => {
	option.addEventListener("click", () => {
		if (option.id == "one-player") {
			playerChose = "one-player";
			gameBegin.classList.add("hide");
			winningArea.classList.remove("hide");
			gameboard.classList.remove("hide");
		} else if (option.id == "two-players") {
			playerChose = "two-players";
			gameBegin.classList.add("hide");
			winningArea.classList.remove("hide");
			gameboard.classList.remove("hide");
		}
	});
}); */

/* play game */

let restartButton = document.querySelector(".restart-game");
let circle;
xTurn.classList.toggle("heighlight");

cells.forEach((cell) => {
	cell.addEventListener("click", fillBox, { once: true });
});

function fillBox(cell) {
	cell = cell.target;
	/* if (playerChose == "one-player" &&gameOver === false &&cell.textContent == "") 
		{boardBoxes.splice(cell.id, 1, playerX);
		cell.innerText = playerX;
		checkWin();robot(); }  */
	if (gameOver === false) {
		currentPlayer = circle ? playerO : playerX;

		board[+cell.dataset.row].splice(+cell.dataset.col, 1, currentPlayer);

		cell.textContent = currentPlayer;

		checkWinner();
		swapPlayer();
	}
}

function swapPlayer() {
	circle = !circle;
	xTurn.classList.toggle("heighlight");
	circleTurn.classList.toggle("heighlight");
}

let winningArea = document.querySelector(".winner");

// AI
/* function robot() {
	let randomN = Math.floor(Math.random() * 9);
	let gameFinished = boardBoxes.every((box) => {
		return box != "";
	});
	if (boardBoxes[randomN] == "" && !gameOver) {
		boardBoxes.splice(randomN, 1, "O");
		cells[randomN].classList.add("robot");
		cells[randomN].innerText = "O";

		return "O";
	} else if (!gameFinished && !gameOver) robot();
	checkWin(); // check win two times
} */
