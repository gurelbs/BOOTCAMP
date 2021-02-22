class LinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
    }
    append (value) {
        const newNode = { value, next: null };
        if (this.tail) this.tail.next = newNode;
        this.tail = newNode;
        if (!this.head) this.head = newNode;
    }
    prepend (value) {
        const newNode = { value, next: this.head };
        this.head = newNode;
        if (!this.tail) this.tail = newNode;
    }
    toArray(){
        let elements = [];
        let current = this.head;
        while (current){
            elements.push(current);
            current = current.next;
        }
        return elements;
    }
}
let linkedList1 = new LinkedList();

linkedList1.append(1);
linkedList1.append(2);
linkedList1.append(3);
linkedList1.append(4);
linkedList1.prepend(10);


console.log(linkedList1.toArray());

