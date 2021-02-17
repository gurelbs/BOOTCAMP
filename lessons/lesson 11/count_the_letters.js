// arr to obj with count

const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

arrToObj = arr => {
  let obj = {};
  let newArr = arr
    .join('')
    .toLowerCase('')
    .split('')
    .filter(str => /\S/.test(str))
    .sort()
    .join('')
    for(let x = 0; x < newArr.length; x++) {
      let char = newArr.charAt(x);
      obj[char] = (isNaN(obj[char]) ? 1 : obj[char] + 1);
  }
  return console.log(obj);
}

arrToObj(array)


// str to obj with count

// const str = "Hello Good Day Your Welcome hotdog hamburgers"
// strToObj = str => {
//   let obj = {};
//   let newArr = str
//     .toLowerCase('')
//     .split('')
//     .filter(str => /\S/.test(str))
//     .sort()
//     .join('')
//     for(let x = 0; x < newArr.length; x++) {
//       let char = newArr.charAt(x);
//       obj[char] = (isNaN(obj[char]) ? 1 : obj[char] + 1);
//   }
//   return console.log(obj);
// }

// strToObj(str)

// str to obj with count simple sulotion
 
// const str = "Hello Good Day Your Welcome hotdog hamburgers"

// const count = str => {  
//   let count = {};
//   str.split('').forEach( s => count[s] ? count[s]++ : count[s] = 1);
//   return count;
// }

// console.log(count(str));