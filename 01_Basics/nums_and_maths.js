const score = 400;
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(typeof(balance.toString()));
// console.log(balance.toString().length)
// console.log(balance.toFixed(2));
const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000000
// console.log(hundreds.toLocaleString());          //foreign technique of putting comas
// console.log(hundreds.toLocaleString('en-IN'));   //Indian technique of putting comas

// **********************MATHS******************

// console.log(Math);
// console.log(Math.abs(-4));  //to make negative numbers positive
// console.log(Math.round(4.3));
// console.log(Math.round(4.7));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(5.9));
// console.log(Math.max(1,2,3,4,5));
// console.log(Math.min(1,2,3,4,5));

// console.log(Math.random());
// console.log(Math.floor(Math.random()*10)+1);

const min= 10;
const max= 20

console.log(Math.floor(Math.random() * (max-min + 1)+ min))