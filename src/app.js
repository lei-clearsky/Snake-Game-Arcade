import GameEngine from './js/gameEngine.js';
import './scss/style.scss';

document.addEventListener('DOMContentLoaded', () => {
	GameEngine('snake-game', 30, 10, 5);
});