// Global scope
var a = 1;
var b = 2;
const c = 3;

// function test() {
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('Function Scope: ', a, b, c);
// }

// test();

// if (true) {
//     var a = 7;
//     let b = 8;
//     const c = 9;
//     console.log('If Scope: ', a, b, c);
// }

for (let a = 0; a < 10; a++) {
    console.log(`Loop: ${a}`)
}

console.log('Global scope: ', a, b, c);