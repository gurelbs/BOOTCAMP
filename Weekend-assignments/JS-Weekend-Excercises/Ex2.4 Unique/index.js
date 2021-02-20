const uniqNum = arr => {
    if (arr.length > 2){
        arr.sort((a,b) => a - b)
        return arr[0] === arr[1] ? arr.pop() : arr[0]
    } else {
        return 'less then 3 numbers to check'
    }
}


console.log(uniqNum([1,1,1,1,0.3,1,1,]));
console.log(uniqNum([1,1,1,1,3,1,1,]));
console.log(uniqNum([1,1,1,13,1]));
