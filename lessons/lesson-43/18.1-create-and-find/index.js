const express= require('express')
const cors = require("cors")
const path = require("path")
const productsRouter = require('./routers/products.js')
const app = express()

// app.use(cors())
app.use(express.json())
app.use(productsRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`server run at http://localhost:${PORT}`))