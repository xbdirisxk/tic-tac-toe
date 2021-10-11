let playerX = "X";
let playerO = "O";
let currentPlayer;

const boardBoxes = ["", "", "", "", "", "", "", "", ""];

const posibleWins = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 5],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

let cells = document.querySelectorAll(".cell");
let xTurn = document.querySelector(".player-turn > .player-x");
let circleTurn = document.querySelector(".player-turn > .player-o");

cells.forEach((cell) => {
	cell.addEventListener("click", fillCell, { once: true });
});

let circle;
xTurn.classList.toggle("heighlight");
function fillCell(cell) {
	cell = cell.target;
	currentPlayer = circle ? playerO : playerX;
	boardBoxes.splice(cell.id, 1, currentPlayer);
	cell.innerText = currentPlayer; // change x to current user

	checkWin();
	swapPlayer();
}

function swapPlayer() {
	circle = !circle;
	xTurn.classList.toggle("heighlight");
	circleTurn.classList.toggle("heighlight");
}

function checkWin() {
	let roundWon = false;
	for (i = 0; i < posibleWins.length; i++) {
		let currentRound = posibleWins[i];
		let a = boardBoxes[currentRound[0]];
		let b = boardBoxes[currentRound[1]];
		let c = boardBoxes[currentRound[2]];
		if (a == "X" && b == "X" && c == "X") {
			console.log("game over X WINs");
			break;
		} else if (a == "O" && b == "O" && c == "O") {
			console.log("game over O WINs");
			break;
		}
		console.log("there is no match");
	}

	if (roundWon) {
		// announce if there is winner
	}
}

function announceWinner() {
	// fill in future
}
