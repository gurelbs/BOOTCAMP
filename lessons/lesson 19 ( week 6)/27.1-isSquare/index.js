function Square(a, b, c, d){
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
   }

Square.prototype.isSquare = function(){
    return this.a === this.b && this.a === this.c && this.a === this.d
}

let newSquare1 = new Square(4,4,4,4)
let newSquare2 = new Square(4,4,4,5)
console.log(newSquare1.isSquare(),newSquare2.isSquare());
