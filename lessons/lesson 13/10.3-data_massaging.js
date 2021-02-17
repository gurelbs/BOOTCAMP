const data = [
    {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
   ];

// 1
const allTheNames = arr => arr.map(el => el.name);
// console.log(allTheNames(data));
allTheNames(data)

// 2
const  bornBefore1990 = arr => {
    let bornBefore90 = [];
    let birthday;
    arr.forEach(el => {
    birthday = el.birthday
    birthday = birthday.slice(birthday.length-4);
    birthday < 1990 ? bornBefore90.push(el) : ''
    });
    return bornBefore90
}
// console.log(bornBefore1990(data));
bornBefore1990(data)

// another way

// const  bornBefore1990 = arr => {
//     return arr.filter(el => {
//         let split = el.birthday.split('-')
//         let birthday = split[split.length-1]
//         return birthday < 1990 ? el : ''
//     });
// }
// console.log(bornBefore1990(data));

// 3
const  allDifferentFoods = arr => {
    let allTheFood = {}
    arr.forEach(element => {
        element.favoriteFoods.meats.forEach( meats => {
            allTheFood[meats] ? allTheFood[meats]++ : allTheFood[meats] = 1
        })
        element.favoriteFoods.fish.forEach( fish => {
            allTheFood[fish] ? allTheFood[fish]++ : allTheFood[fish] = 1
        })
    });
    const sortable = Object.fromEntries(
        Object
        .entries(allTheFood)
        .sort(([,a],[,b]) => b - a )
    );
    return sortable
}

console.log(allDifferentFoods(data));