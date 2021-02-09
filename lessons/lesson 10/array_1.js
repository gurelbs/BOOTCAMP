const people = ["Greg", "Mary", "Devon", "James"];
// 1

for(let i = 0; i < people.length; i++){
  console.log(people[i]);
}

// 2
let shiftFronArr = () => {
  people.shift()
  console.log(people);
}
shiftFronArr()

// 3 
let popFromArr = () => {
  people.pop()
  console.log(people);
}
popFromArr()

// 4
let unshiftFromArr = () => {
  people.unshift('matt')
  console.log(people);
}
unshiftFromArr()

// 5
people.push('gurel');  
console.log(people);

// 6
let loopWithStop = () => {
  for (let i=0; i < people.length;i++){
    console.log(people[i]);
    if (people[i] === 'Mary') return
  }
}
loopWithStop()

// 7
let people2 = [...people]
console.log(people2.slice(2,4));

// 8 
console.log(people.indexOf('Mary'));

// 9
console.log(people.indexOf('Foo'));

// 10
people.shift()
people.unshift('Greg')
people.pop()
people.push('James')
people.splice(2,1,'Elizabeth', 'Artie')
console.log(people);

//11
let withBob = [...people,'bob']
console.log(withBob);