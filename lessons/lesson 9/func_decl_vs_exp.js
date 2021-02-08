function percentageOfWorld1(population){
  const worldPopulation = 7900;
  return `${(population / worldPopulation * 100).toFixed(2)}%`
}
let israel = percentageOfWorld1(9);
let usa = percentageOfWorld1(328.2);
let yemen  = percentageOfWorld1(28.5)  

console.log(`
  isral population is ${israel} from world Population
  usa population is ${usa} from world Population
  yemen population is ${yemen} from world Population
`);

percentageOfWorld2 = percentageOfWorld1;

let saudiArabia = percentageOfWorld2(33.7);
let turkey = percentageOfWorld2(82);
let india  = percentageOfWorld2(1353)

console.log(`
  saudiArabia population is ${saudiArabia} from world Population
  turkey population is ${turkey} from world Population
  india population is ${india} from world Population
`);
