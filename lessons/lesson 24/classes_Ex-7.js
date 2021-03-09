class Room {
    constructor(roomID, level, amount) {
        this.roomID = roomID
        this.level = level
        this.amount = amount
        this.isFree = true
    }
    amountOfPeople(amount) {
        return amount <= this.amount ? this.isFree = true : this.isFree
    }
    print() {
        console.log(`roomID: ${this.roomID}\nlevel:${this.level}\namount: ${this.amount}\nisFree: ${this.isFree}`);
    }
}

class Hotel {
    constructor(rooms) {
        this.rooms = [rooms]
    }
    isExist(id) {
        return this.rooms.find(room => room.roomID === id)
    }
    addRoom(room) {
        if (this.isExist(room.roomID)) return false
        this.rooms.push(room)
        return true
    }
    addNewRoom(roomID, level, amount) {
        return this.addRoom(new Room(roomID, level, amount))

    }
    removeRoom(id) {
        const index = this.rooms.indexOf(this.isExist(id));
        if (index > -1) {
            this.rooms.splice(index, 1);
            return true;
        }
        return false;
    }
    checkFreeRooms(amount) {
        return this.rooms.filter((room) => room.amount >= amount && room.isFree);
    }
    checkIn(id, amount) {
        const rm = this.isExist(id);
        if (rm && rm.amount >= amount) {
            rm.isFree = false;
            return true;
        }
        return false;
    }
    HighRoomFree() {
        const free = this.rooms.filter(room => room.isFree);
        const srt = free.sort((a, b) => b.level - a.level);
        return srt
            .filter((room) => room.level === srt[0].level)
            .sort((a, b) => b.amount - a.amount);
    }
    getAllRooms(isFree) {
        return this.rooms
            .filter((room) => room.isFree === isFree)
            .sort((a, b) => a.roomId - b.roomId);
    }
    print() {
        console.log(this.rooms);
    }
}


const room1 = new Room(1, 3, 2);
const room2 = new Room(3, 4, 5);
const room3 = new Room(3, 4, 5);
const room4 = new Room(3, 4, 5);
// hotel1.addRoom(room2)
// hotel1.addRoom(room3)


let hotel1 = new Hotel(room1)

hotel1.addNewRoom(3, 4, 5)
hotel1.addNewRoom(2, 4, 5)
hotel1.addNewRoom(3, 4, 5)
    // hotel1.print()
hotel1.removeRoom(3)
    // hotel1.print()
    // console.log(hotel1.checkFreeRooms(2));
    // console.log(hotel1.checkFreeRooms(5));
    // console.log(hotel1.checkIn(2, 3));
    // console.log(hotel1.HighRoomFree());

// hotel.addNewRoom(2, 4, 4);
// hotel.addNewRoom(7, 3, 5);
// console.log(hotel.addRoom(room2));
console.log(hotel1.getAllRooms(true));