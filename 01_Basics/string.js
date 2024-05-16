// const name = "ccp"
// const repoValue = 50
// const accountId = abcde
// console.log(`Hello my name is ${name} and my repo count is ${repoValue}`);

const gameName = new String('c cp c ps')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('c'));

const newString = gameName.substring(0,4) // the index 4 is not included here
console.log(newString);

const anotherString = gameName.slice(-5,2)
console.log(anotherString);

const newStringOne = "    ccp    "
console.log(newStringOne);
console.log(newStringOne.trim());
console.log();

const url = "https://ccp.cpm/chetana%20patro"
console.log(url.replace('%20','_'));
console.log(url.includes('sundar'));
console.log(gameName.split(' '));

