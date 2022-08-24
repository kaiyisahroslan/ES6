// Object literals

// const student = {
//     firstName : 'Sara',
//     lastName : 'Smith',
//     age : 20
// };

// console.log(student.firstName);

// Constructor function - need to start with upper case

// do not do like this

// function Student() {
//     this.firstName = 'Sara';
//     this.lastName = 'Smith';
//     this.age = 20;
// };

// const sara = new Student();
// console.log(sara);

// do like this (3 dots under S means constructor)

function Student(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
};

const student_1 = new Student('Sara', 'Smith', 20);
console.log(student_1);