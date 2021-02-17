// 1

let array = [1,2,3,140,5,6,7,8,9,10,13,0.65]

const maxNum = arr => arr.reduce((acc,num) => acc > num ? acc : num)
console.log(maxNum(array));

// 2
const evenNumbersSum = arr => {
    let filter = arr.filter(num => num % 2 === 0)
    return filter.reduce((acc,num) => acc + num)
}
console.log(evenNumbersSum(array));

// 3
const average = arr => {
    let arrLength = arr.length
    let sumOfAll = arr.reduce((acc,num) => acc + num)
    return sumOfAll / arrLength
}
console.log(average(array));