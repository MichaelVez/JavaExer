function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      //   counter + 1;
      counter += 1;
    }
  }
  return counter;
}
console.log(countOccurrences("ini mini miny moe", "n"));
// !What is wrong with this code?
// ?1. First find the line that contains the problem. Write it down.
//line 4 counter + 1 is does not incrise the value but only returns it
//? 2. Which debug method did you use to find the bug?
// breakpoint
//? 3. Explain the bug in your own words.
//counter needs to be updated to the correct syntax
//? 4. Fix the code and submit it all.
