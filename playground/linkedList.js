class Node {
    constructor(data,next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor () {
        this.head = null;
        this.size = 0;
    }
    getFirst () {
        let current = this.head;
        current ? console.log(current.data) : console.log(null);
    }
    getLast () {
        let current = this.head;
        if (!current) return console.log(null);
        while (current){
            if (!current.next){
                console.log(current.data);
            }
            current = current.next
        }
    }
    insertDataFirst (data) {
        this.head = new Node(data, this.head);
        this.size++
    }
    insertDataLest (data) {
        let node = new Node(data);
        let current;
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node
        }
        this.size++
    }
    draw () {
        let current = this.head;
        let output = '';
        if (this.size === 0) return console.log(null);
        while (current) {
            output += current.data + ' => '
            console.log(output + 'null');
            current = current.next
        }
    }
    reverse () {
        let prev, next = null;
        let current = this.head;
        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
        return this.head

    }
    removeAt (index) {
        if (index > 0 && index > this.size) return;
        let current = this.head;
        let prev;
        let count = 0;
        if (index === 0) {
            this.head = current.next
        } else {
            while (count < index){
                count++;
                prev = current;
                current = current.next
            }
            prev.next = current.next
        }
        this.size--

    }
    clear () {
        this.head = null;
        this.size = 0;
        return this.head
    }

}
class CycleLinkedList extends LinkedList {
    insertDataLest (data) {
        let node = new Node(data);
        let current;
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node
        }
        data = this.head
        this.size++
    } 
    print () {
        let current = this.head;
        let output = '';
        if (this.size === 0) return console.log(null);
        while (current) {
            console.log(current);
            current = current.next
        }
    }
}
let linkedList = new LinkedList()
let circularLinkedList = new CycleLinkedList()
const arr = ['im the first item!',2,3,4,5,6,7,8,9,'im the last item!']
for (let num of arr){
    circularLinkedList.insertDataFirst(num)
}

// linkedList.getFirst() // im the first item!
// linkedList.getLast() // im the last item!

// linkedList.draw()
// linkedList.removeAt(8)

// linkedList.reverse();
// linkedList.removeAt(1)
// linkedList.draw()

// linkedList.clear()
// linkedList.draw()


const cycleLinkedList = linkedList => {
    let slow, fast = linkedList;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true
    }
    return false
}
circularLinkedList.reverse()
circularLinkedList.clear()
circularLinkedList.insertDataLest(10)
circularLinkedList.insertDataLest(20)
circularLinkedList.insertDataLest(30)
circularLinkedList.print()

// console.log(cycleLinkedList(linkedList));
// console.log(cycleLinkedList(circularLinkedList));