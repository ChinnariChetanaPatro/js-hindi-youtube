// ARRAYS

// const myArr = [0,1,2,3,4,5,true,"ccp"]
const myArr = [0,1,2,3,4,5]
console.log(myArr[6]);
console.log(myArr[7]);
//deep copy and shallow copy

const myHeros = ["shaktimaan", "naagraj"]
const myarr2 = new Array(1,2,3,4)
console.log(myarr2[1]);

//Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)  ////9 will be inserted at the start
  
// myArr.shift()
// console.log(myArr);  //0 (the 0th element)will be deleted

// console.log(myArr.includes(23));
// console.log(myArr.indexOf(9));  //if value does not exist, index will be -1 always

const newArr = myArr.join()
console.log(myArr);
console.log(newArr); //values will be same 
console.log(typeof(newArr)); //the type will be changed to string

//slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1,3) //index 1 is included but index 3 is not included
console.log(myn1);
console.log("B ",myArr);
const myn2 = myArr.splice(1,3)
console.log(myn2);  //index 3 is included here 
console.log("C ",myArr); //the elemnts of indices 1,2,3 will be deleted










