// Solution with eval 
const calc = (operator, num1,num2) => {
    return (operator === '+' || operator === '-' || operator === '/' || operator === '*')
    ? eval(`${num1}${operator}${num2}`)
    : `operator not found...`
}

// Solution without eval 
const calc2 = (operator, num1,num2) => {
    return operator === '+' ? num1 + num2 
    : operator === '-' ? num1 - num2
    : operator === '*' ? num1 * num2
    : operator === '/' ? num1 / num2
    : `I can't calculate ${num1}${operator}${num2}... operator not found`
}

// check Solution
console.log(`\nSolution with eval:\n`);
console.log(calc('*',5,7));
console.log(calc('+',5,7));
console.log(calc('-',5,7));
console.log(calc('/',5,7));
console.log(`\nSolution without eval:`);
console.log(calc2('*',50,7));
console.log(calc2('+',50,7));
console.log(calc2('-',50,7));
console.log(calc2('/',49,7));