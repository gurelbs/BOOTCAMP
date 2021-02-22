class Rectangle {
    constructor(_width,_height,_color) {
        this.width = _width;
        this.height = _height;
        this.color = _color
    }
    getArea(){
        return this.height * this.height
    }

}


let myRectangle1 = new Rectangle(5,3,'blue')
let myRectangle2 = new Rectangle(15,13,'gold')

// console.log(myRectangle1.getArea());
// console.log(myRectangle2.getArea());



class Square {
    constructor (_width){
        this.width = _width
        this.height = _width
    }
    static equals (a,b) {
        return a.width * a.height === b.width * b.height
    }
}


let squar1 = new Square(8)
let squar2 = new Square(8)

// console.log(Square.equals(squar1,squar2));

class Person  {
        constructor(_name,_age){
            this.name = _name
            this.age = _age
        }
        describe (){
            console.log(`i'm ${this.name} and im ${this.age} yers old`);            
        }
    }

class Programmer extends Person {
    constructor(_name,_age, _years) {
        super(_name,_age)
        this.years = _years
    }
    code (){
        console.log(`${this.name} is coding`);
    }
}


let person1 = new Person('balagan', 30);
// let programmer1 = new Programmer('gurel',26,2)

// programmer1.describe()

// const dev = [
//     new Programmer('nice',40,12),
//     new Programmer('work',20,2),
// ]


// for (let developer of dev){
//     developer.code()
// }

class Animal {
    constructor (name) {
        this.name = name;
    }
    makeSound () {
        console.log(`sound !`);
    }

}


let a1 = new Animal('dog')


class Dog extends Animal {
    constructor (name){
        super (name)
    }

    makeSound () {
        console.log(`WofWofWofWofWof`);
    }
}

let a2 = new Dog()
// a1.makeSound()
// a2.makeSound()


class Node {
    constructor (el) {
        this.el = el;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0
    }
    addLast (el) {
        let node = new Node(el)
        let current;
        if (this.head === null) {
            this.head = node;
        } else  {
        current = this.head
        while (current.next) {
            current = current.next;
        }
            current.next = node;
        }
        this.size++
    }
    print() {
        let current = this.head;
        while(current){
            console.log(current.el);
            current = current.next
        }
    }
}

let linkedList = new LinkedList();
linkedList.addLast(1);
linkedList.addLast(2);
linkedList.addLast(3);
linkedList.addLast(4);
linkedList.addLast(5);
linkedList.addLast(6);

linkedList.print()