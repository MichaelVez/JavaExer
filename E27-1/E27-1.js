function getNumWithPromise(n) {
  return (myNumPro = new Promise(function (resolve, reject) {
    if (n >= 10) resolve();
    else reject();
  })
    .then(() => {
      console.log("greater than 10");
    })
    .catch(() => console.log("less than 10")));
}
getNumWithPromise(15);
getNumWithPromise(5);
