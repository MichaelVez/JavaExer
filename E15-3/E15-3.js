function getSumOfEven(arr) {
  //   return arr[2] + arr[4] + arr[6] + arr[8] + arr[10];
  return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
}
console.log(getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// !What is wrong with this code?
// ?1. First find the line that contains the problem. Write it down.
//line 2 adds arr[10] which is undefined
// ?2. Which debug method did you use to find the bug?
//breakpoint,log result
// ?3. Explain the bug in your own words.
//count started from 2 which is the third index of the array
//to count all even, start the count from 1 which is the first even index
// ?4. Fix the code and submit it all.
