const urlApi = `https://swapi.dev/api/people`
const $ = x => document.createElement(x)
const table = $('table')
const h1 = $('h1')
h1.textContent = 'star wars api'
document.body.appendChild(h1)

let dataArr = []
const fetchData = async () => {
    try {
        for (let i = 1; i <= 16; i++){
            const peoples = await fetch(`${urlApi}/${i}/`)
            const peopleData = await peoples.json()
            const world = await fetch(peopleData.homeworld)
            const worldData = await world.json()
            dataArr.push({
                name: peopleData.name,
                height: peopleData.height,
                hair: peopleData.hair_color,
                planet: { name: worldData.name, population: worldData.population}
            })
        }
        displayData()
    } catch (error) {
        h1.textContent = error
        console.error(error);
    }
}
const displayData = () => {
    let trHeader = $('tr')
    let tableHeaderNames = [...Object.keys(dataArr[0]),...Object.getOwnPropertyNames(dataArr[0].planet)]
    tableHeaderNames.splice(3,3,'world name', 'world population')
    tableHeaderNames.forEach( tableHeaderName => {
        let th = $('th')
        th.textContent = tableHeaderName
        trHeader.appendChild(th)
    })
    table.appendChild(trHeader)
    dataArr.forEach( people => {
        let peopleDetails = [...Object.values(people), ...Object.values(people.planet)];
        peopleDetails.splice(3,1)
        let trBody = $('tr')
        peopleDetails.forEach(val => {
        let td = $('td')
        td.textContent = val
        trBody.appendChild(td)
        table.appendChild(trBody)
    })})
    document.body.appendChild(table)
}

fetchData()