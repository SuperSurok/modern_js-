// FOR LOOPS
for (let i = 0; i < 10; i++) {
    if (i === 2) {
        console.log('2 is my favorite number');
        continue;
    }
    if (i === 5) {
        console.log('Stop the loop');
        break;
    }
    console.log('Number ' + i);
}

// WHITE LOOP
let i = 0;
while (i < 10) {
    console.log('Number ' + i);
    i++;
}

// DO WHILE
let j = 100;
do {
    console.log('Number ' + j);
    i++;
}
while (j < 10);


// LOOP THROUGH ARRAY
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
cars[1];
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

// FOREACH
cars.forEach((car, index, array) => {
    console.log(`${index} : ${car}`);
    console.log(array);
});

// MAP
const users = [
    { id: 1, name: 'Pasha' },
    { id: 2, name: 'Sasha' },
    { id: 3, name: 'Dasha' },
    { id: 4, name: 'Masha' }
];

const ids = users.map((user) => {
    return user.name;
});

console.log(ids);


// FOR IN LOOP
const user = {
    fistName: 'Sasha',
    lastName: 'Kashin',
    age: 40
};

for (let x in user) {
    console.log(`${x} : ${user[x]}`);
}