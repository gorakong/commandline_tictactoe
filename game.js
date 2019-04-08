let Board = require ('./board.js');
let readlineSync = require ('readline-sync');

let board = new Board();

while (!board.isFull() && !board.winner) {

	let userInput = readlineSync.question('Specify row & col you wish to place token in this format: r,c: ').split(',');
	let r = userInput[0];
	let c = userInput[1];

	try {
		board.userPlay(r, c);

		if (!board.hasWin(r, c)) {
			board.AIPlay();
		}

		board.renderBoard();

	} catch(err) {
		console.error(err);
	}
}

if (board.winner) {
	console.log('Game Over! Winner is: ', board.winner);
} else {
	console.log('Game Over! Tied game');
}