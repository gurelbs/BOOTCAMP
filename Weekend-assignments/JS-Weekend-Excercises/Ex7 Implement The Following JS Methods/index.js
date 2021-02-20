let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// myFilter function
const myFilter = (arr, cb) => {
    let newArr = [];
    for (let elem of arr) {
     cb(elem) ? newArr.push(elem) : undefined
    }
    return newArr
  }
// check myFilter
console.log(myFilter(words,itsWork => itsWork.length > 7));
console.log(myFilter(words,word => word[word.length-1] === 't' || word[word.length-1] === 'e'));

// myForEach function
const myForEach = (arr,cb) => {
    for (let el of arr){
        cb(el)
    }
}
// check myForEach
myForEach(words, word => console.log(word+'!!!'))
myForEach(words, word => console.log(word.length > 6))

// myMap

const myMap = (arr,cb) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        newArr.push(cb(arr[i]))
    }
    return newArr
}

// check myMap function
console.log(myMap(words,word => word.length)); // (6) [5, 5, 5, 9, 11, 7]
console.log(words = myMap(words,word => word+=word));
console.log(myMap(words,word => word.length)); // (6) [10, 10, 10, 18, 22, 14]