class Person {
    constructor() {
        this.all = []
    }
    getAll() {
        return this.all;
    }
    addStudent(sID, lID) {
        let lec = this.getLecturer().filter(l => l.id === lID)
    }
}