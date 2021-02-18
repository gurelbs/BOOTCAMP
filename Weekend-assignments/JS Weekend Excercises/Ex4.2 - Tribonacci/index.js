const tribonacci = (signature,n) => {
    let arr = [...signature];
    if (Number.isInteger(n) && n > 0){
        for (let i = 0; i < n; i++){
            arr.push(arr[i] + arr[i+1] + arr[i+2])
        }
    } else {
        return `${n} is not a valid number... \ntry again with valid number`
    }
    return arr
    .slice(0,arr.length - 3)
    .join(', ')
}
// check
console.log(`
signature is [1,1,1] ---> ${tribonacci([1,1,1],10)}

signature is [0,0,1] ---> ${tribonacci([0,0,1],10)}

signature is [1,0,0] --->  ${tribonacci([1,0,0],10)}

signature is [0,0,0] --->  ${tribonacci([0,0,0],10)}
`)
