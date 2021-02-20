const  nextPerfectSquare = num => {
    let nextNum = Math.sqrt(num) + 1;
    return (nextNum ** 2 % 1) !== 0 ? -1 : nextNum ** 2;
}

// check
console.log(nextPerfectSquare(81));
console.log(nextPerfectSquare(9));
console.log(nextPerfectSquare(10));