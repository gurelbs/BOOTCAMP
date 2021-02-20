const peopleOnTheBus = arr => {
    let peopleNum = 0;
    arr.forEach( people => peopleNum += people[0] - people[1]);
    return peopleNum >= 0 ? peopleNum : `number of peoples on the Bus can't be less then 0`
}
console.log(peopleOnTheBus([[8,0],[2,1],[5,7],[8,7],[5,0],[0,1]])); // 12
console.log(peopleOnTheBus([[8,0],[2,1],[15,7],[8,7],[5,7],[0,1]])); // 15
