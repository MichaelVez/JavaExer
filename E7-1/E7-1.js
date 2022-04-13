function removeDupes(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newarr.indexOf(arr[i]) === -1) newarr.push(arr[i]);
  }
  return newarr;
}
console.log(removeDupes([1, 2, 3, 4, 4, 4, 5, 5, 6, 1]));
