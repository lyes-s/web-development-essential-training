//##################
// Data Types in JS
//##################

/*
 * Simple Type System : Number (float), String, Boolean, Date, Function, Array and Object
 * Special Types :  NaN, 
 *                  null (variable that is defined but is missing a value), 
 *                  undefined (variable that refers to something that doesn't exist, and the variable isn't defined to be anything)
 * Checking Type :
 *                  typeof operator : returns a string of the data type primitive
 *                  instanceof operator : returns a boolean of if a value matches the data type
 * 
 * Equality Gotchas :
 *                  == type coerced
 *                  === type respected (recommeded)
 *                  
 */

let number = 1;
console.log("Is 1 Instance of Number ?", new Number(number) instanceof Number);
console.log("1 Is Type of ?", typeof number);
let number2 = 0
console.log("Is Number-2 equals to an empty String based on type coercion ? ", number2 == '');
console.log("Is Number-2 equals to an empty String based on type respected ? ", number2 === '');