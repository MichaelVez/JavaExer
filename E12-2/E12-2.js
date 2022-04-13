const candyStore1 = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

function getCandyy(candyStore, id) {
  return candyStore.candies.find((isid) => {
    return isid.id === id;
  });
}

function getPrice(candyStore, id) {
  const candyprice = getCandyy(candyStore, id);
  return candyprice.price;
}

function addCandy(candyStore, id, name, price) {
  candyStore.candies.push({ name: name, id: id, price: price, amount: 1 });
}

function buy(candyStore, id) {
  for (let candyInd in candyStore.candies) {
    if (candyStore.candies[candyInd].id === id) {
      if (candyStore.candies[candyInd].amount > 0) {
        candyStore.cashRegister += candyStore.candies[candyInd].price;
        candyStore.candies[candyInd].amount--;
      }
    }
  }
}

console.log(candyStore1);
