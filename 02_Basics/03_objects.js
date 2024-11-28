// Object Literals
// define an object
const jsUser = {
    name: "vishvajit",
    "fullName": "Vishvajit Sandip Wani",
    age: 23,
    location: "Pune",
    email: "vishvajit1234@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Saturday"]
}

// //print the Object
console.log(jsUser);

// // access an object
// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser.fullName);


// //manupulate the values ojects
jsUser.email = "wanivishvajit1234@gmail.com";
// console.log(jsUser.email);


// console.log(jsUser);
// Object.freeze(jsUser);     //now u can't change the values of objects
jsUser.email = "Vishwajit.Wani@zmail.com";
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js User");
}

jsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());
