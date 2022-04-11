const obj = {
  name: "michael",
  last: "vez",
  age: "23",
  city: "beersheva",
};
function reverseobj(obj1) {
  const obj = { ...obj1 };
  for (let k in obj) {
    const key = k;
    const value = obj[k];
    obj[value] = obj[k];
    delete obj[k];
    obj[value] = key;
  }
  return obj;
}
const res = reverseobj(obj);
console.log(res);
