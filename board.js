class Board {
	
	constructor() {
		this.cells = [...Array(3)].map(r => []);
	}

	renderBoard() {
		let boardString = '';

		for (let r = 0; r < 3; r++) {
			for (let c = 0; c < 3; c++) {
				if (!this.cells[r][c]) {
					boardString += '-';
				} else if (this.cells[r][c] === 1) {
					boardString += 'O';
				} else if (this.cells[r][c] === -1) {
					boardString += 'X';
				}

				if (c === 2) {
					boardString += '\n';
				} else {
					boardString += '|';
				}
			}
		}

		console.log(boardString);
	}

	isFull() {
		for (let r = 0; r < 3; r++) {
			for (let c = 0; c < 3; c++) {
				if (!this.cells[r][c]) {
					return false;
				}
			}
		}

		return true;
	}

	userPlay(r, c) {
		if (!this.cells[r][c]) {
			this.cells[r][c] = 1;
		} else {
			throw 'Cell is already occupied!';
		}
	}

	AIPlay() {
		let placed = false;

		if (!this.isFull()) {
			while (!placed) {
				let r = Math.floor(Math.random() * 3);
				let c = Math.floor(Math.random() * 3);

				if (!this.cells[r][c]) {
					this.cells[r][c] = -1;
					placed = true;
					this.hasWin(r, c);
				}
			}
		} else {
			throw 'Board is full!';
		}
	}

	hasWin(r, c) {
		let horizontalSum = 0;
		let verticalSum = 0;
		let majorDiagSum = 0;
		let minorDiagSum = 0;

		for (let c = 0; c < 3; c++) {
			horizontalSum += this.cells[r][c];
		}

		for (let r = 0; r < 3; r++) {
			verticalSum += this.cells[r][c];
		}

		for (let r = 0; r < 3; r++) {
			for (let c = 0; c < 3; c++) {
				if (r === c) {
					majorDiagSum += this.cells[r][c];
				} 

				if (r === 2 - c) {
					minorDiagSum += this.cells[r][c];
				}
			}
		}

		if (horizontalSum === 3 || verticalSum === 3 || majorDiagSum === 3 || minorDiagSum === 3) {
			this.winner = 'User';
			return true;
		}

		if (horizontalSum === -3 || verticalSum === -3 || majorDiagSum === -3 || minorDiagSum === -3) {
			this.winner = 'AI';
			return true;
		}

		return false;
	}
}

module.exports = Board;