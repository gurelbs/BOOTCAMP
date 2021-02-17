const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

const compateTwoArr = (arr1,arr2) => {
    let same = []
    for (let i = 0; i < arr1.length; i++){
        for (let j = 0; j < arr2.length; j++){
         if (arr1[i] === arr2[j]) same.push(arr1[i])
        }
    }
    return same.length !== 0 ? same : false
}

console.log(compateTwoArr(food,food1));