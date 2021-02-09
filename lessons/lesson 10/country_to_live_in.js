const countryToLiveIn = (language, isIsland, population, country) => {
  String(language)
  String(country);
  Boolean(isIsland)
  Number(population);
  return (language === 'ENGLISH'.toLowerCase() && population < 50000000 && isIsland === false) ?
  `You should live in ${country} !` : `${country} does not meet your criteria`;
}

let saraCoice = countryToLiveIn('english', false, 49000000, 'Finland')

console.log(saraCoice);