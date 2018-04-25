var moment = require('moment');
var math = require('mathjs');

console.log('index.js is working');

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));


var name = "Billi;alsdjf;kladsfj;aldsfjlds";
var birthDate = "August 17th";

console.log(`${name} was born on ${birthDate}`);

// use math.js
math.sqrt(-4); // 2i
console.log(math.sqrt(-4));
console.log('hello');
