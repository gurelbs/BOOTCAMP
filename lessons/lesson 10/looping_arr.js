let populations = [9000000,328200000,28000000,82000000];

function world(population){
  const worldPopulation = 7900000000;
  return `${(population / worldPopulation * 100).toFixed(2)}%`
}

const populationPercentages = populations => {
  let percentages = [];
  for (let i=0; i < populations.length; i++){
    percentages.push(world(populations[i])) 
  }
  return console.log(percentages);
}

populationPercentages(populations)


