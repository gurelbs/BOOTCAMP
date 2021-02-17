let library = [
    {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true
    },
    {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true
    },
    {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false
    }
    ];

const readBook = arr => arr.forEach(el => {
    let answer = `'${el.title}' - By ${el.author}\nreadingStatus: ${el.readingStatus}`
    el.readingStatus !== false ? console.log(answer) : ''
})

readBook(library)
