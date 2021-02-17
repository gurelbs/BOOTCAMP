let populations = [9000000,328200000,28000000,82000000];

function world(population){
  const worldPopulation = 7900000000;
  return `${(population / worldPopulation * 100).toFixed(2)}%`
}

const populationPercentages = populations => {
  let percentages = [];
  let index = 0;
  while(index < populations.length) {
    percentages.push(world(populations[index]));
    index++
  }
  return console.log(percentages);
}

populationPercentages(populations)
// 2

// for loop = for sure ! Because I can implement the variables inside the loop :)