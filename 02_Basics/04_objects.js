
// // singletone object
// const tinderUser = new Object();

const tinderUser = {};
tinderUser.id = "vishva123";
tinderUser.name = "vishva";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);


const regularUser = {
    email: "vishva@gmail.com",
    fullName: {
        userFullName: "vishvajit",
        lastName: "wani"
    }
}
// console.log(regularUser.fullName.lastName);

const obj1 = {1: "A", 2: "B"}
const obj2 = {3: "A", 4: "B"}
const obj4 = {5: "A", 6: "B"}

// // combine the two objects using Object.assign()
// const obj3 = { obj1, obj2}
const obj3 = Object.assign(obj1, obj2, obj4);
// console.log(obj3);

const obj5 = Object.assign({} ,obj1, obj2, obj4);
// console.log(obj5);

// // combine the two objects using spread ...
const obj6 = {...obj1, ...obj2, ...obj4};
// console.log(obj6);



// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));



/////////////////////////////////////////
const course = {
    courseName: "JS in Hindi",
    price: "999",
    courseInstructor: "Vishvajit"
}

//De-structuring
const {courseName} = course;
console.log(courseName);
            //OR
const {courseName : Name} = course;
console.log(Name);



// json Data format
// {
//     "name": "Vishvajit",
//     "age": "23",
//     "gender": "Male"
// }
