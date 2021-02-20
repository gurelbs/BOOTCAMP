const longest = str => str 
    .trim()
    .split(' ')
    .sort((a,b) => a.length - b.length)
    .pop()

// check
console.log(longest('my name is gurel ben shabat coooooooooooooooooool worrrrrrrd '));