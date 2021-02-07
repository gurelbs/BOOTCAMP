function describeCountry(country,population,capitalCity){
  return `${country} has ${population} people and its capital city is ${capitalCity}`
}

let israel = describeCountry('israel','9.2 million', 'Jerusalem')
let usa = describeCountry('usa','328.2 million', 'Washington, D.C')
let china = describeCountry('china','1.393 Billions', 'Beijing')

console.log(`${israel}\n${usa}\n${china}`);