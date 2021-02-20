const toWeirdCase = str => {
    let newStr = [];
    for (let i=0; i< str.length; i++){
        i % 2 === 0 
        ? newStr.push(str[i].toUpperCase()) 
        : newStr.push(str[i].toLowerCase())
    }
    return newStr.join('')
}
    
console.log(toWeirdCase('weird string case'));
console.log(toWeirdCase('my name is gurel ben shabat'));

