// Function expression

// const greeting = function() {
//     return 'Welcome to the academy';
// };

// console.log(greeting());

// With arrow function - eliminate perkataan function but add arrow between () and {}

// const greeting = () => {
//     return 'Welcome to the academy';
// };

// console.log(greeting());

// The syntax gets shorter if the function has only one statement and the statement returns a value,
// then you can remove the braces and the return keyword

// const greeting = () => 'Welcome to javascript';
// console.log(greeting());

// Arrow function with parameters

const greeting = (user) => `Welcome to AAA ${user}`;
console.log(greeting('Sara'));