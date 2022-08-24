const personPrototype = {
    greeting : function() {
        return `Hello ${this.firstName} ${this.lastName}`;
    }
};

// First approach
const sara = Object.create(personPrototype);
sara.firstName = 'Sara';
sara.lastName = 'Smith';

console.log(sara);
console.log(sara.greeting());

// Second approach
const alex = Object.create(personPrototype, {
    firstName : {value : 'Alex'},
    lastName : {value : 'Smith'}
});

console.log(alex);
console.log(alex.greeting());