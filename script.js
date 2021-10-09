let playerOne = "X";
let playerTwo = "O";
let currentPlayer = playerOne;

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

cells.forEach((cell) => {
	cell.addEventListener("click", fillCell, { once: true });
});

function fillCell(cell) {
	cell = cell.target;
	cell.innerText = "X";
	console.log(cell);
}
