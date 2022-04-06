let numofchild = prompt("How many siblings do you have?");
if (parseInt(numofchild) === 1) console.log("1 sibling!");
else {
  if (numofchild > 1) console.log(`More than 1 sibling`);
  else {
    console.log("no siblings");
  }
}
