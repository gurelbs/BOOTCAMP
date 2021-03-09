let arr = ['my','name','gurel','is']
let mapArr = arr => arr.map(w => w[0].toUpperCase() + w.slice(1,w.length))
let sortArr = arr => arr.sort()
const functionPromise = () => 
    new Promise((resolve,reject) => 
        setTimeout(() => 
            arr.every(w => typeof w === 'string') ? resolve('YESSSSS') : reject('NOOOOOO'), 500))

functionPromise()
    .then( () => mapArr(arr))
    .then(data => sortArr(data))
    .then(data => console.log(data))
    .catch( err =>  console.error(err))