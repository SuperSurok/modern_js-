// FUNCTION DECLARARIONS
function greet(firstName = 'John', lastName = 'Doe') {
    // if (typeof firstName === 'undefined') { firstName = 'John'; };
    // if (typeof lastName === 'undefined') { lastName = 'John'; }
    // console.log('Hello');
    return 'Hello ' + firstName + ' ' + lastName;
}
// console.log(greet());

// FUNCTION EXPRESSIONS
const square = function(x) {
    return x * x;
};

// console.log(square(3));

// IMMEDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
// (function(name) {
//     console.log('Hello ' + name);
// })('Brad');

// PROPERTY METHODS
const todo = {
    add: function() {
        console.log('Add to do..');
    },
    edit: function(id) {
        console.log(`Edit to do ${id}`);
    }
}

todo.delete = function() {
    console.log('Delete todo...')
}

todo.add();
todo.edit(22);
todo.delete();