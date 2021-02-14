let obj1 = {
    name: 'Gurel Ben Shabat'
}
let obj2 = {
    name: 'shilo Ben Shabat'
}
let obj3 = {
    name: 'meitav Ben Shabat'
}

let obj1Var = obj1;
let obj2Var = obj2;
let obj3Var = obj3;

let names = new Map();

names.set(obj1Var,205384159)
names.set(obj2Var,525252525)
names.set(obj3Var,999988747)

for (const name of names) {
    console.log(name[0],name[1]);    
}