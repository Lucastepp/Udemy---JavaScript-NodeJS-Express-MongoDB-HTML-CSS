


//It is possible to use like this =

const math = require('./027 - JavaScript - NodeJS - Module Exports II Test');

console.log(math.square(9));
console.log(math.PI);



// Or can use destructuring to do that =

const {square, PI} = require('./027 - JavaScript - NodeJS - Module Exports II Test');

console.log(square(9))
console.log(PI);

