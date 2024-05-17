// singleton Object.create
// if object is made from constructor it will be a singleton itherwise not


// myArray = ["c", "c", "p"]
// myArray[0] //accessed by index i.e key can't be defined only values can be defined
//object literals
//in object both keys and values can be defined
const mySym = Symbol("key1")


const JsUser = {
    name: "ccp",
    // 0: "chetna",
    "full name":"Chinnari Chetana Patro",
    //to access such values console.log(JsUser["full name"]); method is used
    // mySym: "myKey1", //it's a string rn not a key 
    [mySym]: "myKey1",  //use sq bracket for using as a symbol
    location:"bhubaneswar",
    email: "ccp@google.com",
    isLoggedin: false,              //boolean
    lastLogIn: ["mon","sat"]        //array
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
console.log(typeof(JsUser.mySym)); 

JsUser.email = "ccp@chatgpt.com"  //overwriting the value
// Object.freeze(JsUser)
JsUser.email = "ccp@microsoft.com"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello coder");
}
JsUser.greetingTwo = function(){
    console.log(`Hello coder, ${this.name}`);
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
