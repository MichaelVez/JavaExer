function IsLeap(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) console.log("leap");
      else {
        console.log("not leap");
      }
    } else console.log("leap");
  } else console.log("not leap");
}
