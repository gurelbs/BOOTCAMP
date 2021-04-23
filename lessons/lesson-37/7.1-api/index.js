// 1
const axios = require('axios')
const url = 'https://api.nasa.gov/planetary/apod?api_key=Oub6zR2lq5dSGTcATxtjrKAXq3243crwL7PS0D7S'
let fetchDataWithAxios = async () => {
    let {data} = await axios.get(url)
    console.log(data.explanation);
}
// fetchDataWithAxios()

// 2
const request = require('request');
const fetchDataWithRequest = () => {
    request.get(url, async (err,res,body) => {
        let {explanation} = await JSON.parse(body)
        console.log(explanation);
    })
}
// fetchDataWithRequest()

// 3
const fetch = require('node-fetch');
const fetchDataWithFetchNode = async () => {
    let res = await fetch(url)
    let { explanation } = await res.json()
    console.log(explanation);
}
fetchDataWithFetchNode()