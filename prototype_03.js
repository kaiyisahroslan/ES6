// Object literals

// const user = {
//     name : 'Sara',
//     age : 20
// };

// console.log(user);

// Prototype : an object that is associated with every function and object by default with every 
// function and object by default in js

// The prototype object is the special type of object which has additional properties and method
// attached to it

// All properties and methods would be shared accedd all the object instances then het created by
// constructir function

// Constructor function

// function User() {
//     this.name = 'Sara';
//     this.age = 30;
// };

// const user_1 = new User();
// user_1.gender = 'female';
// console.log(user_1);

// const user_2 = new User();
// console.log(user_2);

// Prototype

// function Student() {
//     this.name = 'Sara';
//     this.age = 20;
// };

// Student.prototype.gender = 'female'; // set it to all without taking space in database - macam default

// const student_1 = new Student();
// console.log(student_1);

// const student_2 = new Student();
// console.log(student_2);

// How to get access to obj prototype

function Student() {
    this.name = 'Sara';
    this.age = 20;
};

const student_1 = new Student();

console.log(student_1.prototype); // undefined
console.log(Student.prototype); // object
console.log(student_1.__proto__); // object