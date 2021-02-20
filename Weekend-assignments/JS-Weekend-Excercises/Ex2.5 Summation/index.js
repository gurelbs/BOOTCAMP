const summation = num => {
    let answer = 0;
    if (num % 1 === 0 && num > 0){
        for (let i = 1; i <= num; i++){
            answer += i
        }
    }
    return answer || 'please check again with integer and positive number'
}

// check
console.log(summation(10));
console.log(summation(-10));