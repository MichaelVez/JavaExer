let form = document.querySelector("#signupform");
let inputs = document.querySelectorAll("input");
let popup = document.querySelector("#popup");
let backr = document.querySelector(".darken");
let popup_infodisplay = document.querySelectorAll("h2");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  popup.style.display = "block";
  backr.style.display = "block";
  popup_infodisplay[0].innerText = `Name: ${inputs[0].value}`;
  popup_infodisplay[1].innerText = `Age: ${inputs[1].value}`;
  popup_infodisplay[2].innerText = `Email: ${inputs[2].value}`;
  popup_infodisplay[3].innerText = `Adress: ${inputs[3].value}`;
  popup_infodisplay[4].innerText = `Agree 2 Stuff: ${inputs[4].checked}`;
  console.log(e);
});
let save = document.querySelector("#saveall");
let change = document.querySelector("#change");
save.addEventListener("click", (e) => {
  console.log("here");
  popup.style.display = "none";
  backr.style.display = "none";
  form.style.display = "none";
  let thanks = document.createElement("h1");
  thanks.innerText = "Thank you for signing up";
  thanks.style.textAlign = "center";
  document.body.appendChild(thanks);
});
change.addEventListener("click", () => {
  popup.style.display = "none";
  backr.style.display = "none";
});
