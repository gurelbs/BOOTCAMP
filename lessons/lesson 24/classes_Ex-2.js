class Car {
    constructor(brand, speed) {
        this.brand = brand
        this.speed = speed
    }
    getBrand() { return this.brand }
    getSpeed() { return this.speed }
    print() { console.log(`Brand: ${this.getBrand()}, Speed: ${this.getSpeed()}`) }
    setSpeed(speed) { this.speed = speed }
}

let car1 = new Car('volvo', 125)
let car2 = new Car('lamborgini', 225)
let car3 = new Car('wolkswagen', 100)
let car4 = new Car('subaro', 290)

let arrOfCar = [car1, car2, car3, car4]

const sortBySpeed = arrOfCar.reduce((max, car) => max.speed > car.speed ? max : car)
const sortByMaxSpeed = arrOfCar.sort((a, b) => a.getSpeed() - b.getSpeed())

car1.print(); // Brand: volvo, Speed: 125
car1.setSpeed(150) // car1 speed is now 150
car1.print(); // Brand: volvo, Speed: 150

console.log(sortBySpeed); // array sorted by speed
console.log(sortByMaxSpeed); // Car { brand: 'lamborgini', speed: 225 }