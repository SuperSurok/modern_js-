const id = 100;

// Equal to
// if (id == 100) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // Not equal to
// if (id != 101) {
//     console.log('CORRECR');
// } else {
//     console.log('INCORRECT');
// }

// // Equal to value & type
// if (id === 100) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // Equal to value & type
// if (id !== 100) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// Test if undefind
// if (typeof id !== 'undefined') {
//     console.log(`The ID is ${id}`);
// } else {
//     console.log('NO ID');
// }

// GREATER OR LESS THAN
// if (id > 100) {
//     console.log(`The ID is ${id}`);
// } else {
//     console.log('NO ID');
// }

// IF ELSE
// const color = 'red';
// if (color === 'red') {
//     console.log('Color is red');
// } else if (color === 'blue') {
//     console.log('Color id blue');
// } else {
//   console.log('Color is not red or blue')
// }

// LOGICAL OPERATORS

// AND &&
const name = 'Sergey';
const age = 36;
if (age > 0 && age < 12) {
    console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}

// OR ||
if (age < 16 || age < 65) {
    console.log(`${name} can not run in race`);
} else {
    console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// WITHOUT BRACES is bad practice
if (id === 100)
    console.log('CORRECT');
else
    console.log('INCORRECT');