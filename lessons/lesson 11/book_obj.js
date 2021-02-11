let book = {
  name: '`the old man and the sea`',
  genre: 'Novel',
  author: 'Ernest Hemingway',
  release_date: 1952
}


const bookMsg = book => {
  return `the book ${book.name} was written by ${book.author} in the year ${book.release_date}.\
  The genre of the book is ${book.genre}`
}

console.log(bookMsg(book));