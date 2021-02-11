const candyStore = {
  candies: [
  {
    name: "mint gum",
    id: "as12f",
    price: 2,
    amount: 2
  },
  {
    name: "twix",
    id: "5hd7y",
    price: 5,
    amount: 4
    },
  ],
  cashRegister: 200
}

// 1
function getCandy(candyStore, id){
  let obj;
  for (let i=0; i<candyStore.candies.length; i++){
    candyStore.candies[i].id === id ? obj = candyStore.candies[i] : `didn't find`
  }
  return obj
} 

console.log(getCandy(candyStore,'as12f'));

//2
function getPrice(candyStore, id){
  let obj ;
  for (let i=0; i<candyStore.candies.length; i++){
    candyStore.candies[i].id === id ? obj = candyStore.candies[i] + console.log(obj.price) : console.log(`didn't find`);
  }
  
} 

console.log(getPrice(candyStore,'5hd7X'));

// 3 
function addCandy(candyStore, id, name, price){
  candyStore.candies.push({
    name: name,
    id: id,
    price: 1
    },)
}

console.log(addCandy(candyStore,'blabla','mamtak',10));
console.log(candyStore.candies);

//4 
function buy(candyStore, id){
  let obj;
  for (let i=0; i<candyStore.candies.length; i++){
    candyStore.candies[i].id === id ? obj = candyStore.candies[i] : `didn't find`
  }
  obj.amount >= 1 ? (obj.amount -= 1) + (candyStore.cashRegister += obj.price) : console.log('empty stock');
}

console.log(buy(candyStore,'5hd7y'));
console.log(candyStore);

