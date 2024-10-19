"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

// console.log("Hitesh")


let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

// console.log(typeof undefined); // undefined
// console.log(typeof null); // object


// ////////////////////////////////////////
// DataTypes
/* Primitive DataTypes  
    There are 7 Types : 
        String, Number, Boolean, null, undefined, 
        Symbol- if we want to make a value unique then we use Symbol
        BigInt - used to handle Big Values
    
        eg for Symbol
            const id = Symbol("123");
            const anotherId = Symbol("123");
            console.log(id == anotherId); //false coz its unique
            console.log(id === anotherId); //false coz its unique

        eg for BigInt 
            const bigNumber = 2222222223332323454363464565n
            
// note - All the Primitive DataTypes are callByValue



// Non-Primitive (Reference)(UserDefine) DataType
    // Array, Objects , Functions
    
    //Array
    const heros = ["Tanos", "naagraj", "doga"];
    console.log(typeof heros); //Object


    //object
    const student = {
        name: "Vishva",
        age: "23",
        gender: "Male"
        }
        console.log(typeof student); //object

    // function    
    const myFunction = function(){
        console.log("Hello World");
    }
        console.log(typeof myFunction); //function Obj
*/
