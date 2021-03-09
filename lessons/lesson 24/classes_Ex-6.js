class Room {
    constructor(roomID, level, amount) {
        this.roomID = roomID
        this.level = level
        this.amount = amount
        this.isFree = false
    }
    amountOfPeople(amount) {
        return amount <= this.amount ? this.isFree = true : this.isFree
    }
    print() {
        console.log(`roomID: ${this.roomID}\nlevel:${this.level}\namount: ${this.amount}\nisFree: ${this.isFree}`);
    }
}


// let room1 = new Room(3, 2, 4)

// console.log(room1);

// console.log((room1.amountOfPeople(5)));
// console.log((room1.amountOfPeople(4)));


// room1.print()

module.exports = Room