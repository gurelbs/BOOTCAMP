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