// Array methods
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 1 }, new Date()];

let val;

// Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get single value
val = numbers[3];
val = numbers[0];
// Insert into array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(36);

// MUTATING ARRAY
// Add on to end
numbers.push(250);
// Add to on front
numbers.unshift(120);
// Take of from end
numbers.pop();
// Take of from front
numbers.shift();
// Splice values
numbers.splice(1, 3);
// Reverse
numbers.reverse();

// Conacatenate array
val = numbers.concat(numbers2);

// Sorting
val = fruit.sort();
val = numbers.sort();

// Use the "compare function"
val = numbers.sort(function(a, b) {
    return a - b;
});

// Reverse sort
val = numbers.sort(function(a, b) {
    return b - a;
});

// Find
function under50(num) {
    return num < 50;
}

val = numbers.find(under50);
console.log(numbers);
console.log(val);