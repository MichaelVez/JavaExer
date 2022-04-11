const arr = [1, 7, 3, 0, -5, 7, 3, 9];
// for (let i = 0; i < arr.length; i++) console.log(arr[i]);
function arrayLength(arr) {
  let count = 0;
  for (let i = 0; arr[i] !== undefined; i++) {
    count++;
  }
  console.log(count);
}
function arraySum(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += arr[i];
  }
  return count;
}
function arrayMulti(arr) {
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    count *= arr[i];
  }
  return count;
}
arrayLength(arr);
