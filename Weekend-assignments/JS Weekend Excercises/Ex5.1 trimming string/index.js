const trimmingString = str => str.trim().length > 2 
? str.trim().slice(1,str.trim().length-1) 
: str.trim()




// check
console.log(trimmingString('                  gurel ben shabat           '));
console.log(trimmingString('my name is'));
console.log(trimmingString('            boom boom babasim          '));
console.log(trimmingString('6758493091'));
console.log(trimmingString('            9309167584            '));
