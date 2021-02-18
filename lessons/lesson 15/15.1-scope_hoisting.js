// 1

// we get 1 and after that we get 2 because a is equal 1 and its var. so it will be print at global level

function funcA() {
    console.log(a);
    console.log(foo());
    var a = 1;
    function foo() {
    return 2;
    }
   }
   funcA();

//    after i check the the function im understand that 'a' is defined inside the function and we log it before initialization so its print undefined


// 2
// first we get 'Colin Ihrig' and after the console log will print Aurelio De Rosa 
var fullName = 'John Doe';
var obj = {
 fullName: 'Colin Ihrig',
 prop: {
 fullName: 'Aurelio De Rosa',
 getFullName: function () {
 return this.fullName;
 }
 }
};
console.log(obj.prop.getFullName());
let test = obj.prop.getFullName;
console.log(test());

// after checking the function i realised that first we get Aurelio De Rosa and after we get undefined because 'this' is refer to the inner obj (prop). if we change 'this' to obj we get 'Colin Ihrig' twice


// 3

// we get undefined twice because we log a and b out of the function we set them up 
function funcB() {
 let a = b = 0;
 a++;
 return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);

// after running the function and some research i understend that the var 'b' is set in the global scop when its declare like this: a = b = X

// 4
// we get '2' twice because when the function itself go up to the first of the file, and we declare the same function twice and  whichever function is defined last takes precedence 
function funcC() {
    console.log("1");
   }
   funcC();
   function funcC() {
    console.log("2");
   }
   funcC();


// 5
// first we get error and after we get 1 because var has global scope 
// function funcD1() {
//     d = 1;
//    }
//    funcD1();
//    console.log(d);
//    function funcD2() {
//     var e = 1;
//    }
//    funcD2();
//    console.log(e);

// after check the function and some research i realise that this function is 'The Horror of Implicit Globals' :(
// first its print 1 and after we get error because

// 6
// we get "Value of f in local scope: 1" twice
function funcE() {
    console.log("Value of f in local scope: ", f);
   }
   console.log("Value of f in global scope: ", f);
   var f = 1;
   funcE();
// after check i realise that the first function f = undefined because f is not available inside the function 