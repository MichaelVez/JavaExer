function returnScore(number) {
  if (0 <= number && number < 65) return "F";
  if (65 <= number && number < 70) return "D";
  if (70 <= number && number < 80) return "C";
  if (80 <= number && number <= 89) return "B";
  return "A";
}
