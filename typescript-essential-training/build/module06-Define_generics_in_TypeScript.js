"use strict";
// Define generics in TypeScript
// Generics are code templates that you can define and reuse throughout your codebase
/**
 * Generics can:
    Provide more flexibility when working with types.
    Enable code reuse.
    Reduce the need to use the any type.
 */
function getArray(items) {
    return new Array().concat(items);
}
let numberArray = getArray([5, 10, 15, 20]);
numberArray.push(25); // OK
/** numberArray.push('This is not a number');  // Generates a compile time type check error **/
let stringArray = getArray(['Cats', 'Dogs', 'Birds']);
stringArray.push('Rabbits'); // OK
/** stringArray.push(30);                 // Generates a compile time type check error **/
function identity(value, message) {
    console.log(message);
    return value;
}
let returnNumber = identity(100, 'Hello!');
let returnString = identity('100', 'Hola!');
let returnBoolean = identity(true, 'Bonjour!');
returnNumber = returnNumber * 100; // OK
function identity_2(value, message) {
    let result = '';
    let typeValue = typeof value;
    if (typeof value === 'number') { // Is it a number?
        result = value + value; // OK
    }
    else if (typeof value === 'string') { // Is it a string?
        result = value + value; // OK
    }
    console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}`);
    return result;
}
let numberValue = identity_2(100, 'Hello');
let stringValue = identity_2('100', 'Hello');
console.log(numberValue); // Returns 200
console.log(stringValue); // Returns 100100
