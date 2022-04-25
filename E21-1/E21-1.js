let input = document.querySelectorAll("input");
console.dir(input[0]);
let button = document.querySelectorAll("button");
console.dir(button);
let myH1 = document.createElement("h1");
document.body.appendChild(myH1);
function myFnc() {
  if (myH1.classList.contains("show")) {
    myH1.classList.remove("show");
    myH1.style.transform = "rotate:180deg";
  } else {
    myH1.classList.add("show");
    myH1.style.transform = "rotate:180deg";
  }
  if (parseInt(input[0].value) !== NaN && parseInt(input[0].value) >= 18) {
    myH1.style.color = "blue";
    myH1.innerText = "Over 18";
  }
  if (parseInt(input[0].value) !== NaN && parseInt(input[0].value) < 18) {
    myH1.innerText = "Under 18";
  }
}
button[0].addEventListener("click", myFnc);
