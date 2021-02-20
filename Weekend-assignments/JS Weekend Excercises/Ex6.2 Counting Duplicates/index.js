const duplicates = str => {
        const result = [];
        let strArr = str
            .toLowerCase()
            .split('')
            .sort()
            .join('')
            .match(/(.)\1+/g);
        strArr !== null ? strArr.forEach(char => result.push(char[0])) : 0
        return result.length;
}
// check
console.log(duplicates('aaaaaaaaabbcdefghabcdse'));
console.log(duplicates('hello world'));
console.log(duplicates('jav script'));

// another answer with set() and regEx 

// const duplicate2 = str => new Set(str.toLowerCase().match(/(.)(?=.*\1)/gi)).size

// check
// console.log(duplicate2('abcdefg'));
// console.log(duplicate2('abBbcddddefg'));
