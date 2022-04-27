const storm = {
  superPower: "hey",
};
function printSuperPower() {
  console.log("my superpower is " + this.superPower);
}
storm.printSuperPower = printSuperPower;
storm.printSuperPower();
