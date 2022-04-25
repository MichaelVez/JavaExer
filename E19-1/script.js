// myChild.classList.add("start-here");
// console.log(myChild);
//new element!

let myText = document.querySelector(".start-here");
myText.innerHTML = "Main title";

let ul = document.querySelector("ul ul");
let myChild = document.createElement("li");
myChild.innerHTML = "sub title 4";
ul.appendChild(myChild);

let li = document.querySelectorAll("li");
li[li.length - 1].remove();
console.log(li);
let title = document.querySelector("title");
title.innerHTML = "Master of DOM";
let p = document.querySelector("p");
p.innerText = "World! Hello";
