const express = require('express')
const axios = require('axios')
const app = express()
const fs = require('fs')
const { v4: uuid } = require('uuid');

const { findMovie ,updateMovie, deleteMovie,dataJSON } = require('./utils.js')
let data = []
if (!fs.existsSync('database.json')) fs.writeFileSync('database.json', JSON.stringify(data))

app.use(express.json())

app.get('/', (req, res) => {
    res.send('<h1>hello to the movie api app</h1>')
})
app.get('/api/movies', (req, res) => {
    try {
        res.send(dataJSON())
    } catch (e) {
        res.json({"error": e})
    }
})

app.post('/api/movies', (req, res) => {
    try {
        let movie1 = {
            id: uuid(),
            title: 'boss',
            year: 2017,
            rating: 3.4,
            genre: 'drama',
            length: 121
        }
        let movie2 = {
            id: uuid(),
            title: 'joker',
            year: 2019,
            rating: 4.5,
            genre: 'drama',
            length: 150
        }
        let loadFirstData = [movie1,movie2]
        data.push(...loadFirstData)
        fs.writeFileSync('database.json', JSON.stringify(data))
        res.json(data)
    } catch (e) {
        res.json({"error" : e.message})
    }
})

app.get('/api/movies/:id', (req, res) => {
    try {
        let movie = findMovie(req.params.id)
        res.json(movie)
    } catch (e) {
        res.json({"error" : e.message})
    }
})
app.put('/api/movies/:id', (req, res) => {
    try {
        let id = req.params.id
        let movie = findMovie(id)
        const newMovie = {
            ...movie,
            title: ' -- title changed -- ',
            itemChanged: true
        }
        updateMovie(id,newMovie)
        res.json('movie changed')
    } catch (e) {
        res.json({"error" : e.message})
    }
})

app.delete('/api/movies/:id', (req, res) => {
    try {
        deleteMovie(req.params.id)
        res.json("movie deleted")
    } catch (e) {
        res.json({"error" : e.message})
    }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`server run at http://localhost:${PORT}`))