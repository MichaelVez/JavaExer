const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

function charCount(arr) {
  let myArr = [...arr];
  for (let i = 0; i < myArr.length; i++) {
    myArr[i] = myArr[i].split("");
  }
  const newarr = myArr.flat();
  const myobj = {
    add(key) {
      if (myobj[key] === undefined) myobj[key] = 1;
      else myobj[key]++;
    },
  };
  let timesshowing = 0;
  let maxLetter = "a";
  for (let i = 0; i < newarr.length; i++) {
    myobj.add(newarr[i].toLowerCase());
    if (myobj[newarr[i]] > timesshowing) {
      timesshowing = myobj[newarr[i]];
      maxLetter = newarr[i].toLowerCase();
    }
  }
  delete myobj.add;
  delete myobj[" "];
  myobj.mostfreq = { maxLetter, timesshowing };
  return myobj;
}

console.log(charCount(array));
