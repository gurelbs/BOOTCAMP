const express = require('express')
const cors = require('cors')
const fs = require('fs')
const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/users', async (req,res) => {
    const json = 'data.json'
    const exists = fs.existsSync(json)
    if (exists){
        const readFile = fs.readFileSync(json)
        const data = JSON.parse(readFile.toString())
        return res.send(data)
    }
})
app.post('/api/create', (req,res) => {
    const {name} = req.body
    console.log(name);
    fs.writeFileSync('data.json', JSON.stringify({name: `hello from the BACKEND, ${name}`}))
    res.send(name)
})

const PORT = 5000 || process.env.PORT
app.listen(PORT,() => console.log(`server run at http://localhost:${PORT}`))