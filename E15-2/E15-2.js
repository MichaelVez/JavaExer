function findSmallest(a, b, c) {
  if (a > c && b > c) {
    return c;
  } else if (b > a && c > a) {
    return a;
  } else {
    return b;
  }
}
// findSmalest(52, 66, 2);
findSmallest(52, 66, 2);
// !What is wrong with this code?
// ?1. First find the line that contains the problem. Write it down.
//* miss spell on line 10 to call func
// ?2. Which debug method did you use to find the bug?
// * breakpoint - step by step to analyze the if statements
// ?3. Explain the bug in your own words.
// a > b > c is invalid syntax, values need to be compared with && operator
// ?4. Fix the code and submit it all.
