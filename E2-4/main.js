function todayIs() {
  let d1 = new Date();
  let day = d1.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wensday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let month = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `Today is ${days[day]} the ${d1.getDate()} of ${
    month[d1.getMonth()]
  }, ${d1.getFullYear()} `;
}
console.log(todayIs());
