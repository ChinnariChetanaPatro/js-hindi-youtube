// const tinderUser = new Object()

// console.log(tinderUser); //empty object
// for Tinder app
const tinderUser = {}
 tinderUser.id = "12596tusr"
 tinderUser.name = "Brad"
 tinderUser.isLoggedIn = false

 // console.log(tinderUser);
//for another app
 const regularUser ={
    email: "anonymous@gmail.com",
    fullname:{
        userFullName:{
            firstName: "Chinnari",
            middleName: "Chetana",
            lastName: "Patro"

        }
    }
 }

//  console.log(regularUser.fullname);
//Assigning objects
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c", 4:"d"}
// const obj3 = {obj1,obj2}
// const obj3 = Object.assign(obj1,obj2)
// const obj4 = Object.assign({},obj1,obj2)
// console.log(obj3);
// console.log(obj4);


//spreading
const obj3 = {...obj1,...obj2}
// console.log(obj3);
// console.log(obj4);

const users = [
    {
       id:1,
       mail:"c@gmail.com"   

    },
    {
        id:2,
        mail:"h@gmail.com"
    },
    {
        id:3,
        mail:"e@gmail.com"
    }
]
// console.log(users[1].mail);
console.log(tinderUser);
console.log(Object.keys(tinderUser)); //to print the keys
console.log(Object.values(tinderUser)); //to print the values
console.log(Object.entries(tinderUser)); //to print the entries in terms of array


console.log(tinderUser.hasOwnProperty('isLoggedIn'));





