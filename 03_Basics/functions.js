// function sayMyName(){
//     console.log("C");
//     console.log("H");
//     console.log("E");
//     console.log("T");
//     console.log("A");
//     console.log("N");
//     console.log("A");
    
// }

// // reference -- saymyname after the ()it's called execution
// sayMyName()

//num1 and num2 - parameters
// function addTwoNumbers(num1, num2){
// console.log(num1+num2);
// }


// 3,5 are arguments inside the()
// addTwoNumbers(3,5)

// addTwoNumbers(3,"4")

// const result=addTwoNumbers(3,5)
// console.log("Result: ",result); //undefined


// function addTwoNumbers(num1, num2){

// //    let result = num1+ num2
// //    return result
// //    console.log("ccp"); //unreachable code after return statement


// return num1+num2   

// }

//     const result=addTwoNumbers(3,5)
//     console.log("Result: ",result); 


// function loginUserMessage(userName) {
//     // if(userName === undefined)
//         if(!userName)

//         {
//             console.log("Please enter a username");
//             return
//         }
//     return `${userName} just logged in`
    
// }

// console.log(loginUserMessage("ccp"));
// console.log(loginUserMessage()); //undefined when you don't pass any argument


function calculateCartPrice(val1,val2, ...num1) { //... rest operator - to paas multiple values
    return num1
    
}

console.log(calculateCartPrice(200,400,500,2000))


// object handling
const user={
    userName :"ccp",
    price:656
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    userName: "sam",
    price: 698
})


// passing array

const myNewArray = [200,500,900,300]

function returnSecondValue(getArray){
    return getArray[1]
} 
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,8900,10000,699]));