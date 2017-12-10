import GameEngine from './js/gameEngine.js';
import './scss/style.scss';

document.addEventListener('DOMContentLoaded', () => {
	// container, boardSize, fps, snakeSize
	GameEngine('snake-game', 10, 10, 5);
});