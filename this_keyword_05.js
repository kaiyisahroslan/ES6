// In method, this refers to the owner object
// (When a function is a property of an objet => its called method)
// Alone, it refers to the global object (window)
// In a function, it refers to the global object (window)
// Methods like call() and apply() can refer this to any object

const user_1 = {
    firsName : 'Sara',
    lastName : 'Smith',
    id : 100,
    fullName : function() {
        return this.firsName + ' ' + this.lastName;
    }
}

const user_2 = {
    firsName : 'Alex',
    lastName : 'Doe',
    id : 101,
    fullName : function() {
        return this.firsName + ' ' + this.lastName;
    }
}

// In an object method, this refers to the "owner" of the method
// The user object is the owner of the fullName method
console.log(user_1);
console.log(user_1.fullName());

console.log(user_2);
console.log(user_2.fullName());

// this alone
// In a browser window is the global object

const a = this;
console.log(a);

// this in a function
// In js function, the owner of the function is the default binding for this
// So, in a function this refers to the global object (window)

function myFunc() {
    return this;
}

console.log(myFunc());

// Function binding

// The call() and apply() are predefined js methods
// They can both be used to call an object method with another object as argument

const customer = {
    fullName : function() {
        return this.firsName + ' ' + this.lastName;
    }
}

const customer_1 = {
    firsName : 'Sara',
    lastName : 'Smith'
}

const test = customer.fullName.call(customer_1);
console.log(test);