const express = require('express')
const handlebars  = require('express-handlebars');
const axios = require('axios');
const app = express()

app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.get('/' , async (req,res) => {
    const api = 'https://api.nasa.gov/planetary/apod?api_key=2eDgjDuk5f4LAwWJsjIiBGWffx1FGP5qNip6yZew'
    const { data } = await axios.get(api)
    const { title, explanation, url, hdurl, date } = data
    res.render('home', {
        title: title,
        explanation: explanation,
        url: url,
        hdurl: hdurl,
        date: date,
    })
})
app.listen(3000, () => console.log(`server run at http://localhost:3000`))