/**
 * Functrion Naming :   Use Alphabets, numbers, $ and _ (No other special characters allowed).
 *                      sayHello$() // valid
 *                      say-Hi() // invalid
 *  
 * Function ".name" property :  retuns the name of the function. 
 *                              returns "anonymous" for anonymous functions.
 * 
 * If no return statement is defined, the rerturned result is undefined. 
 * 
 * @param {*} name 
 */
function printHello (name) {
    console.log("Hello", name);
}

// Method invocation with World as param to print
printHello("World!");

// Method invocation with method name
printHello(printHello.name);

// Anonymous Function
// Default return value is Undefined
let show = () => console.log("I'm an Anonymous function !");
show(); 

// Arrow Function
const add = (a, b) => a + b;
console.log(add(1, 3));