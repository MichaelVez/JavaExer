function myFunc(color) {
  switch (color) {
    case "yellow":
    case "pink":
    case "orange":
      return "light color";
    case "blue":
    case "purple":
    case "brown":
      return "dark color";
    default:
      "Unknown color";
  }
}
console.log(myFunc("brown"));
