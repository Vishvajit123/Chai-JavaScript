// console.log(2 == 2);  // true
// console.log(2 > 4);  // false
// console.log(2 < 4);  // true
// console.log(2 >= 4); //false
// console.log(2 <= 5); //true
// console.log(2 != 2); // false





// console.log("2" > 1); //true
// console.log("02" > 1); // true
// console.log("4" - 1); // 3
// console.log(0 == false); // true
// console.log("5" == 5); // true
// console.log("5" - 2);  // 3  (String "5" is coerced to number 5)
// console.log("5" + 2);  // "52"  (Here `+` is used for concatenation, so 2 is coerced to a string)

// Note 
// JavaScript automatically converts (or coerces) the string "2" to a number. Since "2" is a valid number when converted, it becomes the number 2.

//  No, type coercion in JavaScript doesn't only happen in console.log. It occurs in many scenarios where different data types interact, depending on the operation or comparison. Here are a few common cases where JavaScript performs automatic type coercion:

// 1. Comparison Operations (==, >, <, etc.):
// When comparing values of different types, JavaScript often tries to convert them into the same type.
// console.log("2" > 1); //true






// console.log(null > 0);  // false 
// console.log(null == 0); // false 
// console.log(null >= 0); // true
// console.log(undefined == 0); //false
// Note
/* 1. console.log(null > 0); // false
How JavaScript handles it:
When null is compared using the > operator, JavaScript coerces null to a number.
null is converted to 0.
The comparison becomes 0 > 0, which is false because 0 is not greater than 0.
Result: false.
2. console.log(null == 0); // false
How JavaScript handles it:
In loose equality (==), JavaScript does not coerce null to a number.
Instead, null can only be equal to undefined when using ==, according to the rules of equality in JavaScript.
Therefore, null == 0 is false because null is not considered equal to 0.
Result: false.
3. console.log(null >= 0); // true
How JavaScript handles it:
When null is compared using the >= operator, JavaScript again coerces null to a number.
null is converted to 0.
The comparison becomes 0 >= 0, which is true because 0 is equal to 0.
Result: true.
*/




//  ===
console.log("2" === 2); //false  
console.log("2" == 2); //true