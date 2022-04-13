const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];
function getNames(arr) {
  const names = [];
  for (let obj in arr) {
    names.push(arr[obj].name);
  }
  return names;
}
// console.log(getNames(data));
function getOldPeople(arr) {
  return arr.filter(function (obj) {
    return obj.birthday.slice(-4) < 1990;
  });
}
// console.log(getOldPeople(data));
function foods(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    for (let type in arr[i].favoriteFoods) {
      for (let j = 0; j < arr[i].favoriteFoods[type].length; j++) {
        if (obj[arr[i].favoriteFoods[type][j]] === undefined) {
          obj[arr[i].favoriteFoods[type][j]] = 1;
        } else obj[arr[i].favoriteFoods[type][j]]++;
      }
    }
  }
  return obj;
}

// console.log(foods(data));
