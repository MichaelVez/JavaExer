function calcArea(numRadius) {
  console.log("Formula: Pi*R^2 ");
  let numRadiusPow = numRadius ** 2;
  console.log(`${Math.PI} * ${numRadiusPow}  = `);
  console.log(`${Math.PI * numRadiusPow}`);
  console.log("Rounded:");
  console.log((Math.PI * numRadius ** 2).toFixed(2));
  return (Math.PI * numRadius ** 2).toFixed(2);
}
console.log(calcArea(2));
