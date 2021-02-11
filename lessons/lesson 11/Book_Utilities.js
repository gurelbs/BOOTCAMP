// 1
let book_1 = {
  name: '`the old man and the sea`',
  genre: 'Novel',
  author: 'Ernest Hemingway',
  release_date: 1952
}
let book_2 = {
  name: '`Killers of the Flower Moon`',
  genre: 'Drama',
  author: 'David Grann',
  release_date: 2018
}
// 2
let bookUtils = {
  // 3
  getFirstPublished(first, second) {
    return first.release_date > second.release_date ? second.release_date : first.release_date
  },
  // 4
  setNewEdition(book,edition) {
    return Object.defineProperty(book, 'latestEdition', {value: edition})
  },
  // 5
  setLanguage(book,language) {
    return Object.defineProperty(book, 'language', {value: language})
  },
  // 6
  setTranslation(book,language,translator) {
    return Object.defineProperty(book, 'translation', {value: {
      language: language,
      translator: translator
    }})
  },
  // 7
  setPublisher(book,name,location) {
    return Object.defineProperty(book, 'publisher', {value: {
      name: name,
      location: location
    }})
  },
  // 8
  isSamePublisher(book1,book2) {
    let x1 = book1.publisher.name;
    let x2 = book1.publisher.location;
    let y1 = book2.publisher.name;
    let y2 = book2.publisher.location;
    return x1 === y1 && x2 === y2 
      ? `same publisher name & same publisher location` 
      : x1 === y1 && x2 !== y2
      ? `same publisher name & different publisher location`
      : x1 !== y1 && x2 === y2
      ? `different publisher name & same publisher location`
      : `different publisher name & different publisher location`

  }
}
console.log(bookUtils.getFirstPublished(book_1,book_2));

bookUtils.setNewEdition(book_1,2000)
console.log(book_1.latestEdition);

bookUtils.setLanguage(book_2,'spanish')
console.log(book_2.language);

bookUtils.setTranslation(book_2,'hebrew','gurel ben shabat')
console.log(book_2.translation.language,book_2.translation.translator);

bookUtils.setPublisher(book_1, 'keter', 'israel');
console.log(book_1.publisher.name,book_1.publisher.location);

bookUtils.setPublisher(book_2, 'kete', 'israel');
console.log(book_2.publisher.name,book_2.publisher.location);

console.log(bookUtils.isSamePublisher(book_1,book_2));