myFunc = function (n) {
  console.dir(n.target.nextElementSibling);
};
let userinput = document.querySelectorAll("input");
let inputs = document.querySelectorAll("input");
let res = new Array(6);
inputs.forEach((el, i) => {
  el.addEventListener("keyup", (event) => {
    if (i < 5) inputs[i + 1].focus();
    res[i] = userinput[i].value;
    console.log(userinput[i].value);
    console.log(res);
    if (res.includes(undefined) === false) {
      console.log("finish");
      for (let i = 0; i < 6; i++) {
        inputs[i].value = "";
      }
    }
  });
});
