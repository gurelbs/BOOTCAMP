const school = {
    teachers: [
    {
    id: 1,
    name: "Pinchas",
    subjects: ["chemistry", "biology", "physics"],
    students: [],
    capacityLeft: 3,
    },
    {
    id: 2,
    name: "Williams",
    subjects: ["history", "ethics"],
    students: [],
    capacityLeft: 2,
    },
    ],
    students: [
    {
    id: 10,
    name: "Jennifer",
    age: 20,
    },
    {
    id: 11,
    name: "Howard",
    age: 23,
    },
    {
    id: 12,
    name: "Old-Timmy",
    age: 86,
    },
    {
    id:13,
    name: "Houston",
    age: 21,
    },
    ],
    findPerson: (type, id) => {
        return school[type].find( person => person.id === id)
    },
    assignStudent(id, subject) {
        let findStudents = school.findPerson('students',id);
        let findTeachers = school.findPerson('teachers',id);
        this.students.forEach(student => {
            if (id === student.id) {
                this.teachers.forEach( teacher => {
                    teacher.subjects.map(el => {
                        if (subject === el) {
                            if (teacher.capacityLeft > 0){
                                teacher.students.push(student.name)
                                teacher.capacityLeft -= 1
                            } else {
                                console.log(`Sorry,no available teachers left`);
                            }
                        }
                    })
                }); 
            }
        });        
    },
    assignTeachersSubject(teacherId, subject){
        this.teachers.forEach(teacher => {
            if (teacher.id === teacherId) {
                if (!teacher.subjects.includes(subject)){
                    teacher.subjects.push(subject)
                }
            }
        })
    },
    deleteTeachersSubject(teacherId, subject){
        this.teachers.forEach(teacher => {
            if (teacher.id === teacherId) {
                if (teacher.subjects.includes(subject)){
                    teacher.subjects.splice(teacher.subjects.indexOf(subject),1)
                }
            }
        })
    }
};

// 1
console.log(school.findPerson('students',12));

// 2
school.assignStudent(11,'history');
school.assignStudent(12,'chemistry');
school.assignStudent(13,'history');
// 3
school.assignTeachersSubject(1,'JavaScript');
school.assignTeachersSubject(1,'tensor Flow');
school.assignTeachersSubject(1,'Machine Learning');
school.assignTeachersSubject(2,'Machine Learning');
school.assignTeachersSubject(1,'raspberry pi');
// 4
school.deleteTeachersSubject(1,'chemistry');
school.deleteTeachersSubject(1,'biology');
school.deleteTeachersSubject(1,'physics');

school.deleteTeachersSubject(2,'history');
school.deleteTeachersSubject(2,'ethics');

console.log(school);