class PointWorld {
    constructor() {
        this.list = []
    }
    sortArr() {
        return this.list.sort((a, b) => b - a)
    }
    uniq() {
        return [...new Set([...this.list])]
    }
    exist(point) {
        return this.list.includes(point) ? point : false
    }
}

let arr1 = new PointWorld()
arr1.list = [3, 6, 6, 665, 232, -23, 1]
console.log(arr1);
arr1.sortArr()
console.log(arr1);
let arr2 = arr1.uniq()
console.log(arr2);

console.log(arr1.exist(2));