// 1
const obj = {
  name: "mike",
  age: "23",
  dog: "yes",
};
let arr = Array(100).fill(obj, 0);
// console.log(arr);

// 2
const newArr = Array.from({ length: 100 }, (v, i) => i + 1);
// console.log(newArr);

// 3
const newArr2 = Array.from(obj, (obj) => Object.values(obj));
console.log(newArr2);
// console.log(Object.values(obj));
// 4
console.log(Object.assign({}, newArr));
const obj2 = { ...obj, ...newArr };
// 5
console.log(Array.isArray(arr));

// 6
//* wont effect
const arr2 = [...arr];

//* effect orginal array
const arr3 = arr;
