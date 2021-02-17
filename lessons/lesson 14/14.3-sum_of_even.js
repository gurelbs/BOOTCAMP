// 1
// arr[10] is undefined

// 2
// console.log(arr[10]);

// 3
// array index is start in 0, so when we log arr[10] we get undefined 

// 4
function getSumOfEven(arr){
    return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
   }
console.log(getSumOfEven([1,2,3,4,5,6,7,8,9,10]));