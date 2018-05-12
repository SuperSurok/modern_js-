const firstName = 'Sergey';
const lastName = 'Lebedev';
const age = 36;
const str = 'Hello there, my name is Sergey';
const tags = 'web design, web development, programming';

let val;

val = firstName + lastName;

// Conacatenation
val = firstName + ' ' + lastName;

// Append
val = 'Pasha ';
val += 'Kashin';
val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = "That's awesome, I can't wait";

// length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = lastName.toLowerCase();

// Index char
val = firstName[2];

// indexOf()
val = firstName.indexOf('S');
val = firstName.lastIndexOf('r');

// charAt()
val = firstName.charAt('5');

// Get last char
val = firstName.charAt(firstName.length - 1);

// substring
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Sergey', 'Pasha');

// includes()
val = str.includes('Hello');


console.log(val);