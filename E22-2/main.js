let c1 = document.querySelector("#c1");
let c2 = document.querySelector("#c2");
let img1 = document.querySelectorAll("img")[0];
let img2 = document.querySelectorAll("img")[1];
c1.addEventListener("click", () => {
  img1.classList.toggle("show");
});
c2.addEventListener("click", () => {
  img2.classList.toggle("show");
});
