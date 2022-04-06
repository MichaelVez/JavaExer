let team1JognAvg = (89 + 120 + 103) / 3;
console.log(team1JognAvg);
let team2MikeAvg = (116 + 94 + 123) / 3;
console.log(team2MikeAvg);
if (team1JognAvg == team2MikeAvg) console.log("Draw!");
else {
  if (team1JognAvg > team2MikeAvg)
    console.log(
      `John's team wins with ${team1JognAvg} score and mikes score is ${team2MikeAvg} `
    );
  else
    console.log(
      `Mikes's team wins with ${team2MikeAvg} score, and John's score is${team1JognAvg}  `
    );
}
