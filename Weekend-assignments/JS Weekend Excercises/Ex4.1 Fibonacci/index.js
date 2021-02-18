const fibonacci = n => {
    let arr = [0,1];
    if (Number.isInteger(n) && n > 0){
        for (let i = 0; i < n; i++){
            arr.push(arr[i] + arr[i+1])
        }
    } else {
        return `${n} is not a valid number... \ntry again with valid number`
    }
    return arr
    .slice(0,arr.length - 2)
    .join(', ') 
}

// check
console.log(`
${fibonacci(35)}

${fibonacci(100)}

${fibonacci(-35)}

${fibonacci(0)}

${fibonacci(-1)}
`)

