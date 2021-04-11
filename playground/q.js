// let arr = [1,2,3,4,5,6]


// let random = arr => arr.sort(() => Math.random() - .5)
// // {
// //     let num = () => Math.floor(Math.random() * arr.length)
// //     let newArr = []
// //     for (let i = 0; i < arr.length; i++){
// //         newArr.push(num())
// //     }
// //     return console.log(newArr);
// // }
// console.log(random(arr));





let arr = [11,34,23,56,34,1,5,3]

const checkIndex = (arr, num) => {
    let res = []
    for (let {num1,num2} of arr){
        num1 + num2 === num ? res.push([arr.indexOf(num1),arr.indexOf(num2)]) : ''
    }
    return res
}


console.log(checkIndex(arr,2))








