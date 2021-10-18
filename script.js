let playerX = "X";
let playerO = "O";
let currentPlayer;
let roundWon = false;

const boardBoxes = ["", "", "", "", "", "", "", "", ""];

const posibleWins = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

let cells = document.querySelectorAll(".cell");
let xTurn = document.querySelector(".player-turn > .player-x");
let circleTurn = document.querySelector(".player-turn > .player-o");

// player choice one or two player
const gameBegin = document.querySelector(".game-start");
const gameOption = document.querySelectorAll(".game-start > div");
const gameboard = document.querySelector(".container > .main");
let playerChose;
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
});

// play game

let restartButton = document.querySelector(".restart-game");
let circle;
xTurn.classList.toggle("heighlight");

cells.forEach((cell) => {
	cell.addEventListener("click", fillBox, { once: true });
});

function fillBox(cell) {
	cell = cell.target;

	if (
		playerChose == "one-player" &&
		roundWon === false &&
		cell.textContent == ""
	) {
		boardBoxes.splice(cell.id, 1, playerX);
		cell.innerText = playerX; // change x to current user

		checkWin();
		robot(); // robot turn
	} else if (playerChose == "two-players" && roundWon === false) {
		currentPlayer = circle ? playerO : playerX;
		boardBoxes.splice(cell.id, 1, currentPlayer);
		cell.innerText = currentPlayer; // change x to current user

		checkWin(); // check win two times
		swapPlayer();
	}
}

function swapPlayer() {
	circle = !circle;
	xTurn.classList.toggle("heighlight");
	circleTurn.classList.toggle("heighlight");
}

let winningArea = document.querySelector(".winner");

function checkWin() {
	for (i = 0; i < posibleWins.length; i++) {
		let currentRound = posibleWins[i];
		let a = boardBoxes[currentRound[0]];
		let b = boardBoxes[currentRound[1]];
		let c = boardBoxes[currentRound[2]];
		if (a == "X" && b == "X" && c == "X") {
			roundWon = true;
			winningArea.textContent = "player X wins ";
			// heighlight match boxes
			cells[currentRound[0]].classList.add("winBox");
			cells[currentRound[1]].classList.add("winBox");
			cells[currentRound[2]].classList.add("winBox");
			restartButton.classList.remove("hide");
			break;
		} else if (a == "O" && b == "O" && c == "O") {
			roundWon = true;
			winningArea.textContent = "player O wins";
			// heighlight match boxes
			cells[currentRound[0]].classList.add("winBox");
			cells[currentRound[1]].classList.add("winBox");
			cells[currentRound[2]].classList.add("winBox");
			restartButton.classList.remove("hide");
			break;
		}
	}

	let finish = boardBoxes.every((box) => {
		return box != "";
	});
	if (finish && !roundWon) {
		winningArea.textContent = "it's Tai";
		restartButton.classList.remove("hide");
	} else if (finish) restartButton.classList.remove("hide");
}

// AI
function robot() {
	let randomN = Math.floor(Math.random() * 9);
	let finished = boardBoxes.every((box) => {
		return box != "";
	});
	if (boardBoxes[randomN] == "" && !roundWon) {
		boardBoxes.splice(randomN, 1, "O");
		cells[randomN].classList.add("robot");
		cells[randomN].innerText = "O";

		return "O";
	} else if (!finished && !roundWon) robot();
	checkWin(); // check win two times
}

/* for (i=0 ; i<boardBoxes.length;i++){
	let index;
	for(j=0; j<3; j++){
		if ()
		posibleWins[i][j]
	}
	
} */
