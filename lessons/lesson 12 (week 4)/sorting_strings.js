let foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

// a1
foods = foods.sort()
console.log(foods);

// a2
foods = foods.reverse()
console.log(foods);

let foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
];
   
console.log(foodsWithUpperCase);
// b1
   foodsWithUpperCase = foodsWithUpperCase.map(word => {
    return word.toLowerCase()
   })

   console.log(foodsWithUpperCase.sort());
//    b2
   console.log(foodsWithUpperCase.reverse());

//    c1
let words = ["apple", "supercalifragilisticexpialidocious","hi", "zoo"];


words.sort((a,b) => b.length - a.length)
console.log(words);

// c2 -optional

words.sort((a,b) => a.length - b.length)
console.log(words);