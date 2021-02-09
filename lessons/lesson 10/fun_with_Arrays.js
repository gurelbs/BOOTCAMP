//1
let arr = Array(100)
arr.fill({fName: 'fun',lName: 'ben shabat'},0,arr.length);
console.log(arr);

//2
let arrOfNum = Array.from({length: arr.length}, (v,i) => i+1)
console.log(arrOfNum);

//3
let onlyObjValue = {
  fName: 'gurel',
  lName: 'ben shabat'
}
console.log(Object.values(onlyObjValue));

//4
let arrToObj = Object.assign({}, arr);
console.log(arrToObj);

//5
console.log(Array.isArray(arr));

//6a
let newArr2 = [...arr].splice(0,100,`won't effect`)
console.log(arr);

//6b
let newArr3 = arr.splice(0,100,'will effect')
console.log(arr);