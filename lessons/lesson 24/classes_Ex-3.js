class SortNumber {
    constructor() {
        this.numList = []
    }
    isNotPrime(num) {
        if (num === 0 || num === 1) {
            return true
        }
        for (let i = 2; i < num / 2; i++) {
            if (num % i === 0) {
                return true
            }
        }
        return false
    }
    addNum(num) {
        if (!this.isNotPrime(num) && !this.numList.includes(num)) {
            this.numList.push(num)
        }
    }
    removeNum(num) {
        let l = this.numList.length
        if (this.numList.includes(num)) this.numList.splice(this.numList.indexOf(num), 1)
        return l > this.numList.length ? true : false
    }
    getAll() {
        return this.numList
    }
    print() {
        console.log(this.numList.join(', '));
    }
    share(sortNumber) {
        let counter = 0
        sortNumber.forEach(el => this.getAll().includes(el) ? counter++ : counter)
        return counter
    }
    union(sortNumber) { return [...new Set([...sortNumber, ...this.getAll()])] }
}

let arr1 = new SortNumber()
let arr2 = new SortNumber()


arr1.addNum(3)
arr1.addNum(5)
arr1.addNum(10)
arr1.addNum(2)
console.log(arr1);
// arr1.addNum(200)
// arr1.addNum(300)
// arr1.addNum(500)
// arr1.addNum(100)

// arr2.addNum(100)
// arr2.addNum(100)
// arr2.addNum(400)

// console.log(arr1);
// console.log(arr2);


// let share1 = arr1.share(arr2.getAll())
// console.log(share1);

// let union1 = arr1.union(arr2.getAll())
// console.log(union1);