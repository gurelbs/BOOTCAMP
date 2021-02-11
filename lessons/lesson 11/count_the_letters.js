const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

arrToObj = arr => {
  let newArr = []
  for (let i=0;i<arr.length;i++){
    newArr.push(...arr[i].toLowerCase().split(''))
  }
  return newArr
}
console.log(arrToObj(array));