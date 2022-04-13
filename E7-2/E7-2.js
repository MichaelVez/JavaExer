const string = "The more you know, the more you know that you dont know";
function lastOcc(string) {
  let lastoc = 0;
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
    if (string[i] === "y")
      if (string[i + 1] === "o")
        if (string[i + 2] === "u") {
          lastoc = i;
        }
  }
  return lastoc;
}
console.log(lastOcc(string));
