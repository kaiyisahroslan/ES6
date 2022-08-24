// The constructor method is a special method
// It has to have the exact name "constuctor"
// It is executed automatically when a new object is created
// It is used to initialize object properties
// If you do not define a constructor method, js will add an empty constructor method

// Js classes are templates for js objects
// Js class is not an object

// Syntax
// class ClassName {
//     constructor() {
//     }
// }

// This is a class with two initial properties
// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     };
// };

// // We can use classes to create objects
// const student_1 = new Student('Sara', 20);
// const student_2 = new Student('John', 23);

// console.log(student_1, student_2);


class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
    dob() {
        let date = new Date();
        return date.getFullYear() - this.age;
    }
};

let student_1 = new Student('Sara', 1990);
document.body.innerHTML = `${student_1.name} is ${student_1.dob()}`;