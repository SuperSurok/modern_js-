let val;

const today = new Date();
let birthday = new Date('7-01-1981 04:00:00');
birthday = new Date('July 01 1981');
birthday = new Date('7/01/1981 04:00:00');


// Get date
val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

// Set date
birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);
console.log(birthday);