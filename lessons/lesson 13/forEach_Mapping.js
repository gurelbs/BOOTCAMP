const arr1 = [1,2,3,4,5,6,7,8,9,10]

// 1a
const doubleValues1 =  arr => [...arr,...arr].sort()
doubleValues1(arr1)
// 1b
const doubleValues2 =  arr => {
    let newArr = []
    arr.map(num => newArr.push(num * 2))
    return newArr
}
console.log(doubleValues2(arr1));

// 2
const onlyEvenValues = arr => {
    let newArr = []
    arr.forEach(e => e % 2 === 0 ? newArr.push(e) : '')
    return newArr
}
console.log(onlyEvenValues(arr1));

// 3
const showFirstAndLast = arr => [arr[0].toString(),arr[arr.length-1].toString()]
console.log(showFirstAndLast(arr1));

// 4
const str = "heello good day Yvvvvvvvvvvvour Weuuuuuuuuuuuulcome hotdaaaaaaog hamburgers";
const  vowelCount = str => {
  let splitString = str.split('');
  let obj = {};
  let vowels = "aeiou";
  splitString.forEach( letter => {
    if (vowels.indexOf(letter.toLowerCase()) !== -1 ){
      letter in obj ? obj[letter]++ : obj[letter] = 1;
    }   
 });
 return obj;    
}
console.log(vowelCount(str));

// 5
const capitalize = str => {
  let newArr = [];
  str.split(' ').forEach(word => newArr.push(word[0].toUpperCase() + word.slice(1)))
  return newArr.join(' ')
}

console.log(capitalize('my name is gurel ben shabat'));

// 6
const shiftLetters = str => {
  let newArr = [];
  str.split('').forEach( char => {
    char = char.charCodeAt(0)+1
    newArr.push(String.fromCharCode(char))
  })
  return newArr.join('')
}
console.log(shiftLetters('gurel ben shabat'));

// 7
const swapCase = str => {
  let newArr = []
  str.split(' ').forEach((word, i) => {
    i % 2 === 0 ? newArr.push(word.toUpperCase()) : newArr.push(word)
  })
  return newArr.join(' ')
}

console.log(swapCase('na na banana balagagab kan'));