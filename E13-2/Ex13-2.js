const foods = [
  "falafel",
  "sabich",
  "hummus",
  "pizza with extra pineapple",
  "aa",
  "zz",
];

const newfood = foods.sort();
// console.log(newfood);
const newfood2 = foods.sort().reverse();
// console.log(newfood2);
const foodsWithUpperCase = [
  "aa",
  "zz",
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];
const foodsWithUpperCase2 = foodsWithUpperCase.sort((a, b) => {
  if (a.toLocaleLowerCase() < b.toLocaleLowerCase()) return -1;
  if (a.toLocaleLowerCase() > b.toLocaleLowerCase()) return 1;
  return 0;
});
// console.log(foodsWithUpperCase2);
const foodsWithUpperCase3 = foodsWithUpperCase.sort((a, b) => {
  if (a.toLocaleLowerCase() > b.toLocaleLowerCase()) return -1;
  if (a.toLocaleLowerCase() < b.toLocaleLowerCase()) return 1;
  return 0;
});
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];
const longWord = words.sort((a, b) => {
  if (a.length < b.length) return 1;
  if (a.length > b.length) return -1;
  return 0;
});
console.log(longWord);
