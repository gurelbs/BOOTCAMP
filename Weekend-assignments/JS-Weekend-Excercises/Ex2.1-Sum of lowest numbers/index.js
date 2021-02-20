const sumOfLowest = arr => {
    let newArr = [];
    if (arr.length > 3) {
        arr.forEach(num => {
            if (num > -1 && num % 1 === 0){
                newArr.push(num)
            }
        })
    } 
    newArr.sort((a,b) => a - b)
    return (newArr[0] + newArr[1]) || 'please check again with minimum 4 positive integers numbers. \nfloats or non-positive integers should not passed'
}


console.log(sumOfLowest( [100,-20,-30, -343445353, -3453445]));
console.log(sumOfLowest( [100,20,30, 343445353, 3453445]));