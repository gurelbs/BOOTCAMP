// // 1
// // we dont get anything because we dont log nothing 
// // var b = 1;
// // function someFunction(number) {
// //  function otherFunction(input) {
// //  return b;
// //  }
// //  b = 5;
// //  return otherFunction;
// // }
// // var firstResult = someFunction(9);
// // var result = firstResult(2);
// // after run the function if we log the var 'result' we get 5  because b = 5 is in the global scop


// // 2
// // we get 1 
// // var a = 1;
// // function b2() {
// //  a = 10;
// //  return;
// //  function a() { }
// // }
// // b2();
// // console.log(a);
// // b2 function return nothing and because var a = 1 outside the function we get 1
// // if we log a inside the function we get both 10 and 1 because there are not the same variables although they have the same name

// // 3
// // we probably get 1 and 2 after 100ms
// let i;
// for ( i = 0; i < 3; i++) {
//     const log = () => {
//         console.log(i);
//     }
//     setTimeout(log, 100);
// } 
// // after check the function i see that we get 3 three times
// // because i is bound to the same variable outside of the function.
// // var has create a property on the global object


















// function greet(what){
//     return function (name){
//         console.log(`${what} ${name}`);
//     }
// }



// const sayHello = greet('Hello')
// const sayHey= greet('Hi')

// sayHello('nice')
// sayHey('nice')


function counter(){
    let count = 0;
    return function incrementCounter(){
        count++
        console.log(count);
    }
}
const counter1 = counter()
const counter2 = counter()

counter1()
counter1()
counter1()

counter2()
counter2()
counter2()

const counter3 = counter1

counter3()
counter3()














