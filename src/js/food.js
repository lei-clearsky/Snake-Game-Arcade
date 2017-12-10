// Food Class
export default class Food {
	constructor(boardSize) {
		this.boardSize = boardSize;
		this.location = null;
		this.generateFood();
	}

	removeFood() {
		const foodToBeEaten = this.location;
		const foodId = foodToBeEaten.x + '-' + foodToBeEaten.y;

		document.getElementById(foodId).classList.remove('snake-game__board-cell--food');
	}

	generateFood() {
		const boardSize = this.boardSize;
		const randomFood = {
			x: Math.floor(Math.random() * (boardSize - 1) + 1),
			y: Math.floor(Math.random() * (boardSize - 1) + 1)
		};
		const randomFoodId = randomFood.x + '-' + randomFood.y;

		document.getElementById(randomFoodId).classList.add('snake-game__board-cell--food');

		this.location = randomFood;
	}
}