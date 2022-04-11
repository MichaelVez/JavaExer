const people = ["Greg", "Mary", "Devon", "James"];
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}
// 2
people.shift();
console.log("--new arr--2");
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}
// 3
people.pop();
console.log("--new arr--3");
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}
// 4
people.unshift("Matt");
console.log("--new arr--4");
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// 5
people.push("Michael");
console.log("--new arr-- 5");
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}
//6
for (let i = 0; i < people.length; i++) {
  if (people[i] === "Mary") {
    console.log(people[i]);
    break;
  }
  console.log(i);
}
// 7
let newArr = people.slice(2, 5);
console.log(newArr);
// 8
function indexOfMary(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Mary") return i;
  }
}
console.log(indexOfMary(people));
// A better 9
function indexOfFoo(arr, string) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === string) return i;
  }
  return -1;
}
console.log(indexOfFoo(people, "Michael"));
console.log(indexOfFoo(people, "Foo"));
// 10
let people2 = ["Greg", "Mary", "Devon", "James"];
people2.splice(2, 1, "Elizabeth", "Artie");
console.log(people2);
// 11
let withBob = people2.concat("bob");
console.log(withBob);
