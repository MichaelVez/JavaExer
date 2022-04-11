const book1 = {
  name: "name1",
  author: "author1",
  year: "2012",
};
const book2 = {
  name: "name2",
  author: "author2",
  year: "2018",
};
// 2
const bookUtils = {
  getFirstPublished(bookarg1, bookarg2) {
    return Math.max(bookarg1.year, bookarg2.year);
  },
  setNewEdition(book, editYear) {
    book.latestEdition = editYear;
  },
  setLanguage(book, newLang) {
    book.language = newLang;
  },
  setTranslation(book, translator, language) {
    book.translation = {
      translator: translator,
      language: language,
    };
  },
  setPublisher(book, name, location) {
    book.publisher = { name: name, location: location };
  },
  isSamePublisher(book, book2) {
    return (
      book.publisher.name === book2.publisher.name &&
      book.publisher.location === book2.publisher.location
    );
  },
};

// 3
const res = bookUtils.getFirstPublished(book1, book2);
// console.log(res);

// 4
// console.log(book1);
bookUtils.setNewEdition(book1, 2015);
// console.log(book1);
//5
bookUtils.setLanguage(book1, "Spanish");
console.log(book1);
bookUtils.setLanguage(book1, "english");
console.log(book1);
bookUtils.setTranslation(book1, "tran-pro", "korean");
console.log(book1);
bookUtils.setPublisher(book1, "HozaaLaor", "Beer Sheva");
bookUtils.setPublisher(book2, "HozaaLaor", "Beer Sheva");
console.log(bookUtils.isSamePublisher(book1, book2));
