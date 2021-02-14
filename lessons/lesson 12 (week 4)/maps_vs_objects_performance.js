// 1
let myObj = {};
console.time('for loop')
for (let i = 1; i<=1000000; i++){
    myObj[i] = i;
}
console.timeEnd('for loop')


let newMap = new Map();
console.time('Map object')
for (let i = 1; i<=1000000; i++){
    newMap.set(i,`im ${i}`)
}
console.timeEnd('Map object')

// 2
console.time('hasOwnProperty')
console.log(myObj.hasOwnProperty(1000000));
console.timeEnd('hasOwnProperty')

console.time('map has')
console.log(newMap.has(1000000));
console.timeEnd('map has')

// 3

console.time('define single Property')
myObj.cool = `addddddd!`
console.log(myObj.cool);
console.timeEnd('define single Property')


console.time('map set single Property')
newMap.set('nice','my value is nice!');
console.log(newMap.get('nice'));
console.timeEnd('map set single Property')

console.time('delete single Property with object')
delete myObj[100]
console.timeEnd('delete single Property with object')

console.time('delete single Property with map')
delete newMap.delete(3)
console.timeEnd('delete single Property with map')