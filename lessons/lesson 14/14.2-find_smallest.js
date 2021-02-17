

// 1
// findSmalest(512,66, 300)

// 2
// Execution the function and get the error: findSmalest is not defined

// 3
// Spelling mistake when call the function: findSmalest instead of findSmallest.
// the function use bigger then ( > ) instead of smaller then ( < )

// 4
function findSmallest(a, b, c){
 if (a < b && a < c){
 return a;
 } else if (b < a && b < c) {
 return b;
} else {
 return c;
 }
}
console.log(findSmallest(1000,66, 200));