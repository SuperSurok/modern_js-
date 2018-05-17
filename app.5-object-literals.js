'use strict';

const person = {
    firstName: 'Sergey',
    lastName: 'Lebedev',
    age: 36,
    email: 'lebedev_sergey81@mail.ru',
    hobbies: ['music', 'swimming'],
    addres: {
        city: 'Saint-P',
        state: 'Saint-P'
    },
    getBirthYear: function() {
        return 2018 - this.age;
    }
};

let val;
val = person;

// Get specific value
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies[1];
val = person.addres.state;
val = person.addres['city'];
val = person.getBirthYear();

console.log(val);

const people = [
    { name: 'Pasha', age: 30 },
    { name: 'Sasha', age: 23 }
];

for (let i = 0; i < people.length; i++) {
    console.log(people[i].name);
}