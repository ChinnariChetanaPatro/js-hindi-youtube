// const tinderUser = new Object()

// console.log(tinderUser); //empty object

const tinderUser = {}
 tinderUser.id = "12596tusr"
 tinderUser.name = "Brad"
 tinderUser.isLoggedIn = false

 // console.log(tinderUser);

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
console.log(obj3);
// console.log(obj4);








