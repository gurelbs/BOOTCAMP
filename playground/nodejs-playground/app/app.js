const express = require('express')
const app = express()
const {findUser, createUser} = require('./util')

let data = {name: 'gurel'}
app.use(express.json())
app.get('/api/users', (req,res) => {
    const user = findUser()
    // res.status(200).
    res.json(data)
})
app.get('/api/users/:id', (req,res) => {
    res.send(req.params.id)
    console.log(req.params.id)
})

app.post('/api/users', (req, res) => {
    try {
    data = req.body
    res.json(data)
    console.log(
        createUser(),
        req.body
    );  
    } catch (e) {
        data = {"error": e.message}
        res
        .status(400)
        .json(data)
    }
})
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`server run at http://localhost:${PORT}`))