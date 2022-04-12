const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];
const food2 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

function Compare(arr, arr2) {
  for (let i = 0; i < arr.length; i++) {
    if (!arr2.includes(arr[i])) {
      return false;
    }
  }
  return true;
}

console.log(Compare(food, food1));
console.log(Compare(food1, food2));
