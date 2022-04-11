function lengArr(arr) {
  let lengArr = [];
  for (let i = 0; i < arr.length; i++) {
    lengArr.push(arr[i].length);
  }
  return lengArr;
}
console.log(lengArr(["boo", "doooo", "hoo", "ro"]));
