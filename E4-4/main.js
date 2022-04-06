function Boom(n) {
  for (let i = 1; i < n + 1; i++) {
    let num = i + "";
    if (i % 7 == 0 && num.indexOf(7) > -1) console.log("Boom Boom");
    else {
      if (i % 7 == 0) console.log("Boom");
      else console.log(i);
    }
  }
}
Boom(100);
