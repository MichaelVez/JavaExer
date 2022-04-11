function passwordTest(password) {
  if (password.length > 7) return "Strong";
  else return "Weak";
}
function passwordTest2(password) {
  password.length > 7 ? "Strong" : "Weak";
}
function passwordTest2(password) {
  return password && password.length > 7;
}
function advancePassword(password) {
  console.log(password.toLowerCase() !== password);
  return password.length > 7 && password.toLowerCase() !== password
    ? "Very Strong"
    : password.length > 7
    ? "Strong"
    : "Weak";
}
console.log(advancePassword("strongassword"));
