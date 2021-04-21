const {MongoClient} = require('mongodb')
const path = require('path')
const uri = 'mongodb://127.0.0.1:27017'

MongoClient.connect(uri, {useNewUrlParser: true} ,async (err, client) => {
    if (err) console.log(('there is some error...'))
    const DB = await client.db('e-commerce')
    try {
        // let products = DB.collection('products').find()
        console.log(`connected to ${DB.databaseName} mongoDB`);
    } catch (e) {
        console.log(e);
    }
})