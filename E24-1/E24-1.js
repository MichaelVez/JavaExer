function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}
let mySq = new Square(1, 2, 1, 2);
let mySq2 = new Square(2, 2, 2, 2);
Square.prototype.show = function show() {
  return this.a === this.b && this.a === this.d && this.a === this.c;
};
console.log(mySq.show());
console.log(mySq2.show());
