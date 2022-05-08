const myObj = {
  name: "foo",
  printName: function () {
    console.log(this.name);
  },
  delayPrintName1: function () {
    setTimeout(this.printName.bind(myObj), 1000);
  },
};
myObj.delayPrintName1();
