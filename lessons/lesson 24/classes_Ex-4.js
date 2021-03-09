class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    getX() { return this.x }
    getY() { return this.y }

    addToX(x) { return this.x += x }
    addToY(y) { return this.y += y }

    setX(x) { return this.x = x }
    setY(y) { return this.y = y }

    addPoint(point) {
        if (point instanceof Point) {
            this.setX(this.addToX(point.getX()))
            this.setY(this.addToY(point.getY()))
        }
        return point
    }
    isSame(point) {
        return point.getX() === this.getX() && point.getY() === this.getY() ? true : false
    }
    print() {
        console.log(`x: ${this.getX()}, y: ${this.getY()}`);
    }
}

let num1 = new Point(4, 2)
let num2 = new Point(4, 2)

// num2.setY(5)
// num2.setX(5)
// num1.addToX(5)
// num1.addToY(5)

// console.log(num1);

// num1.addPoint(num2)
console.log(num1.isSame(num2));
num1.print()