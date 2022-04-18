function calcAverage(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([85, 90, 92]));
// !What is wrong with this code?
// ?1. First find the line that contains the problem. Write it down.
//sum needs to be defined with initial value
//line 6 return's the sum and not avarage
// ?2. Which debug method did you use to find the bug?
//breakpoint
// ?3. Explain the bug in your own words.
//sum is returned and not the avarage
// ?4. Fix the code and submit it all.
