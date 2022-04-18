function getSum(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
}
// getSum([1, 2, 3][(5, 66, 23)]);
getSum([1, 2, 3], [5, 66, 23]);
// !What is wrong with this code?
//? 1. First find the line that contains the problem. Write it down.
//calling get some with invalid values(not array)
//? 2. Which debug method did you use to find the bug?
// breakpoint
//? 3. Explain the bug in your own words.
//sum is const and cannot be assigned a value
// sum is not returned
//? 4. Fix the code and submit it all.
