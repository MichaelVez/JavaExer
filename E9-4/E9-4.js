function hashTag(n) {
  for (let i = 0; i < n; i++) {
    let hash = "#";
    for (let j = 0; j < i; j++) {
      hash += "#";
    }
    let space = n - i - 1;
    for (let j = 0; j < space; j++) {
      hash += " ";
    }
    console.log(`'${hash}'`);
  }
}
hashTag(5);
hashTag(1);
hashTag(10);
