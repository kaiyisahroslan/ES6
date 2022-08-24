// Global scope

var a = 1;
let b = 2;
const c = 3;

// Function scopes
// function test() {
//     var a = 4;
//     let b = 5;
//     const c = 6;

//     console.log('Function scope ', a, b, c);
// };
// test();

// Block level scope
if(true) {
    var a = 4;
    let b = 5;
    const c = 6;

    console.log('Block scope ', a, b, c);
}

console.log('Global scope ', a, b, c);

// DO NOT USE VAR AT ALL

// because var with the same name in block scope will overwrite the value in global scope : inaccurate