
// 1
// getSum([1,2,3][5,66,23]);

// 2
// debugger

// 3
// the function get 2 element, but they not separate with comma

// 4
function getSum(arr1, arr2){
    let sum = 0;
    for (let i=0; i < arr1.length; i++){
        sum += arr1[i];
    }
    for (let i=0; i < arr2.length; i++){
        sum += arr2[i];
    }
    return sum
}

console.log(getSum([1,2,3],[5,66,23]));