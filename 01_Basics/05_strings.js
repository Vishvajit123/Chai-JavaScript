const name = "Vishvajit";
const marks = "24";

// console.log(`My name is ${name} and marks are ${marks}`);
// console.log(name[0]);
// console.log(name.toUpperCase());



const gameName = new String("WorldWar");
// console.log(gameName[0]);
// console.log(gameName.toUpperCase());
// console.log(gameName);
console.log(gameName.charAt(2));  //find which char is pressent in that index
console.log(gameName.indexOf('l'));  // find the index of that char
console.log(gameName.__proto__);      
console.log(gameName.substring(0, 4));  //print the only char from 0 index to 4 
console.log(gameName.slice(0, 5));      //print the only char from 0 index to 4

// console.log(gameName.split(0, 4))

const newName = "   Vishvajit Wani   ";
console.log(newName.trim())  //remove extraspaces

const url = "https://vishvajit.com/vishvajit%20wani";
console.log(url.replace('%20' , '-')) //replace the item
console.log(url.includes('vedant')); //check that name is present or not

const fullName = "vishvajit-sandip-wani";
console.log(fullName.split('-'));   //saperate using that -