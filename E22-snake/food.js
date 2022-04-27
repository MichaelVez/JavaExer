import { onSnake, expendSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";
let food = getRandomFoodPosition();
const Expensin_rate = 1;
export function update() {
  if (onSnake(food)) {
    expendSnake(Expensin_rate);
    food = getRandomFoodPosition();
  }
}

export function draw(gameBored) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBored.appendChild(foodElement);
}
function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}
