class Animal {
    constructor(name, sound) {
        this.name = name
        this.sound = sound
    }
    getName() { return this.name }
    getSound() { return this.sound }
    print() { console.log(`name: ${this.getName()}, sound :${this.getSound()}`); }
}

let animal1 = new Animal('dog', 'waf')
let animal2 = new Animal('lion', 'raaa')
let animal3 = new Animal('cat', 'meawu')

animal1.print()