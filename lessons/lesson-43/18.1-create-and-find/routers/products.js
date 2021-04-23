require('./../DB/mongoose.js') // connect to mongo with mongoose
const express = require('express') 
const Product = require('./../models/product')
const router = new express.Router()
const {macBook,dellSoundBar,screen} = require('./../DB/defaultProducts')
const data = [ macBook, dellSoundBar, screen]

router.post('/api/products', async (req,res) => {
    const product = await new Product(req.body);
    try {
        await product.save()
        data.push(product)
        res.status(201).send(`product created`)                
    } catch (e) {
        res.status(400).send(e.message)
    }
})
router.get('/api/products', async (req, res) => {
    const product = await Product.find({})
    try {
        res.status(200).json(product)
    } catch (e) {
        res.status(500).send('there is some error...', e.massege)
    }
})
router.get('/api/products/filter', async (req,res) => {
    try {
        if (req.query !== {}){
            let isActive = Object.entries(req.query)[0]
            let [key, value] = isActive
            const activeProducts = await Product.find({ [key]: value }).exec()
            res.status(200).send(activeProducts)
        }
        res.status(500).send('i can`t find that...')
    } catch (e) {
        res.status(500).send('there is some error...', e.massege)
    }
})

router.get('/api/products/filter/price', async (req,res) => {
    try {
        if (req.query !== {}){
            const { low, high } = req.query
            const productsByPrice = await Product.find({ "details.price": { $gte: low, $lte: high}})
            res.status(200).send(productsByPrice)
        }
    } catch (e) {
        res.status(500).send('there is some error...', e.massege)
    }
})
router.get('/api/products/:id', async (req,res) => {
    const id = req.params.id
    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).send()
        }
        res.status(200).json(product) 
    } catch (e) {
        res.status(500).send('product not founded\n' + e.message) 
    }
})

module.exports = router