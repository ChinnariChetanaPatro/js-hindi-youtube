// Destructuring

const course={
    courseName:"Java Script",
    Price:"999",
    courseInstructor:"Hitesh Choudhary" 
}

// course.CourseInstructor

const{courseInstructor:instructor}=course

// console.log(courseInstructor);
console.log(instructor);

// Destructuring
// const navbar=({company})=>{

// }

// navbar(company="ccp")