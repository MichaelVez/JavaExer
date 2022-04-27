import {
  update as updateSnake,
  draw as drawSnake,
  SNAKE_SPEED,
  getSnakeHead,
  snakeIntersection,
} from "./snake.js";
import { outsideGrid } from "./grid.js";
import { update as updateFood, draw as drawFood } from "./food.js";
let gameOver = false;
let lastRenderTime = 0;

const gameBored = document.getElementById("game-bored");

function main(currentTime) {
  if (gameOver) {
    if (confirm("You lost press ok to reset")) {
      window.location = "./index.html";
    }
    return;
  }
  const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;
  window.requestAnimationFrame(main);
  if (secondSinceLastRender < 1 / SNAKE_SPEED) return;

  lastRenderTime = currentTime;
  update(gameBored);
  draw(gameBored);
}

window.requestAnimationFrame(main);

function update(gameBored) {
  updateSnake();
  updateFood();
  checkDeath();
}

function draw(gameBored) {
  gameBored.innerHTML = "";
  drawSnake(gameBored);
  drawFood(gameBored);
}
function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
