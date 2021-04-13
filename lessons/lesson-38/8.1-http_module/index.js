const https = require('https')

https.get('https://api.nasa.gov/planetary/apod?api_key=2eDgjDuk5f4LAwWJsjIiBGWffx1FGP5qNip6yZew', res => {
    let data = ''
    res.on('data', chunk => data += chunk)
    res.on('end', () => {
        let parseData = JSON.parse(data)
        let { explanation } = parseData
        console.log(explanation);
    })
})