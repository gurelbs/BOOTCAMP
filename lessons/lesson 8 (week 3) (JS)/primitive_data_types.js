let str = `'this is  JS string'`;
console.log(`the type of ${str} is:`, typeof str);

let num = 26;
console.log(`the type of ${num} is:`, typeof num);

let obj = {
  fName: `gurel`,
  lName: `ben shabat`
}
console.log(`the type of ${obj.fName} is:`, typeof obj);

let bool = true
console.log(`the type of ${bool} is:`, bool);

let x;
console.log(`the type of ${x} is:`, x);

var foo = null;
console.log(`the type of ${foo} is:`, foo);

let sym1 = Symbol("Sym");
console.log(`the type of ${sym1.toString()} is:`, typeof sym1);