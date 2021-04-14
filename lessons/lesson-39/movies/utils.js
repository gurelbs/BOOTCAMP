const fs = require('fs')

const dataJSON = () => {
    const currentData = fs.readFileSync('database.json')
    return JSON.parse(currentData.toString())
}
const findMovie = (id) => {
    const currentData = fs.readFileSync('database.json')
    const parseData = JSON.parse(currentData.toString())
    const currentMovie = parseData.findIndex(movie => movie.id === id)
    const movie = parseData[currentMovie]
    return movie
} 
const findIndex = (id) => {
    const currentData = fs.readFileSync('database.json')
    const parseData = JSON.parse(currentData.toString())
    const currentIndexNumber = parseData.findIndex(movie => movie.id === id)
    return currentIndexNumber
} 
const updateMovie = (id, newObj) => {
    let index = findIndex(id)
    let data = dataJSON()
    data.splice(index,1,newObj)
    console.log(data);
    return fs.writeFileSync('database.json', JSON.stringify(data))
} 
const deleteMovie = id => {
    let index = findIndex(id)
    let data = dataJSON()
    data.splice(index,1)
    return fs.writeFileSync('database.json',JSON.stringify(data))
}
module.exports = {
    findMovie,
    updateMovie,
    findIndex,
    dataJSON,
    deleteMovie
}