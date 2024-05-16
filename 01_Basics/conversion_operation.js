let score = null



console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(valueInNumber);        
console.log(typeof valueInNumber);
console.log(typeof (valueInNumber));

//number convert
//33- can be converted
//33abc - can't be converted - NaN
// null = 0
//undefined = NaN


let isLoggedIn = ""
let loggedInValue = Boolean(isLoggedIn);
console.log(loggedInValue);

//1 = true, 0=false
//""=false "ccp"=true

let sum = 33
let stringSum = String(sum)
console.log(stringSum);
console.log(typeof(stringSum));