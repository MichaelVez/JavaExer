const book = {
  bookName: "Lazy and tired",
  year: "2022",
  author: "Michael",
  description: "my book description lorem...",
  newYorkTimesRate: "10 out of 10",
};
function aboutTheBook(obj) {
  return `The book ${obj.bookName} was written by ${obj.author} in
the year ${obj.year}`;
}
console.log(aboutTheBook(book));
