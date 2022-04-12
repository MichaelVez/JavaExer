// function lengArr(arr) {
//   let lengArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     lengArr.push(arr[i].length);
//   }
//   return lengArr;
// }
function lengArr(arr) {
  let lengArr = [];
  while (arr.length !== 0) {
    lengArr.push(arr.shift().length);
  }
  return lengArr;
}
console.log(lengArr(["boo", "doooo", "hoo", "ro"]));
