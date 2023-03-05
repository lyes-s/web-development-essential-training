"use strict";
let x; //* Explicitly declares x as a number type
let y = 1; //* Implicitly declares y as a number type
let z; //* Declares z without initializing it
let a = 0; // Explicite declares a as number type and init it.
// Types and subtypes in TypeScript
// Any : 
// ====
// All types in TypeScript are subtypes of a single top type called the any type. 
// The any type is the one type that can represent any JavaScript value with no constraints. 
// All other types are categorized as primitive types, object types, or type parameters. 
// These types introduce various static constraints on their values.
// Primitive types :
// ===============
// The primitive types are the boolean, number, string, void, null, and undefined types along with user-defined enumeration or enum types. 
// The void type exists purely to indicate the absence of a value, such as in a function with no return value. 
// The null and undefined types are subtypes of all other types. 
// It isn't possible to explicitly reference the null and undefined types. Only the values of those types can be referenced, using the null and undefined literals.
// Boolean 
let flag;
let yes = true;
let no = false;
// Number and BigInteger types
let x_2;
let y_2 = 0;
let z_2 = 123.456;
// BigInt literals are not available when targeting lower than ES2020.
// let big: bigint = 100n;
// String type
let s;
let empty = "";
let abc = 'abc';
let firstName = "Mateo";
let sentence = `My name is ${firstName}. I am new to TypeScript.`;
console.log(sentence);
// Object types and type parameters :
// ================================
// The object types are all class, interface, array, and literal types (anything that isn't a primitive type.)
// Class and interface types are introduced through class and interface declarations and are referenced by the name given to them in their declarations. 
// Class and interface types may be generic types that have one or more type parameters.
// The enum type
// =============
// Enums allow you to specify a list of available options. 
// They're especially useful when you have a set of values that a particular variable type may take. 
// Let's imagine you have field in an external database called ContractStatus, which contains the numbers 1, 2, or 3, that represent the following contact statuses: Permanent, Temp, and Apprentice. 
// We'll create an enum with these values, and explore the TypeScript support.
// By default, enum values begin with a value of 0, so Permanent is 0, Temp is 1, and Apprentice is 2. 
// If you want the values to start with a different value, in this case 1, specify that in the enum declaration. 
// Make the following edits to have the enum start the values at 1.
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 1] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 2] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 3] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
let employeeStatus = ContractStatus.Temp;
console.log(employeeStatus);
// To display the name associated with the enum value
console.log(ContractStatus[employeeStatus]);
// Any type
// ========
// The any type is the one type that can represent any JavaScript value with no constraints
let randomValue = 10;
randomValue = 'Mateo'; // OK
randomValue = true; // OK
// Because randomValue is registered as any, all of the following examples are valid TypeScript and will not generate a compile-time error.
console.log(randomValue.name); // Logs "undefined" to the console
randomValue(); // Returns "randomValue is not a function" error
randomValue.toUpperCase(); // Returns "randomValue is not a function" error
// Unknown type
// ===========
// While flexible, the any type can cause unexpected errors. To address this issue, TypeScript introduced the unknown type.
// The unknown type is similar to the any type in that any value is assignable to type unknown. 
// However, you can't access any properties of an unknown type, nor can you call or construct them.
let randomValue_2 = 10;
randomValue_2 = true;
randomValue_2 = 'Mateo';
/* console.log(randomValue_2.name);  // Error: Object is of type unknown
randomValue_2();                  // Error: Object is of type unknown
randomValue_2.toUpperCase();      // Error: Object is of type unknown */
// Type assertion (Cast)
// =====================
// If you need to treat a variable as a different data type, you can use a type assertion. 
// A type assertion tells TypeScript you've performed any special checks that you need before calling the statement. 
// It tells the compiler "trust me, I know what I’m doing." 
// A type assertion is like a type cast in other languages, but it performs no special checking or restructuring of data. 
// It has no runtime effect and is used purely by the compiler.
// Type assertions have two forms. One is the as-syntax:
let castValueToString = randomValue.toUpperCase();
console.log(castValueToString);
// The other version is the "angle-bracket" syntax:
let castValueToString_v2 = randomValue.toUpperCase();
console.log(castValueToString_v2);
// Type guards
// ===========
// You may be familiar with using typeof and instanceof in JavaScript to test for these conditions. 
// TypeScript understands these conditions and will change type inference accordingly when used in an if block.
// string 	typeof s === "string"
// number 	typeof n === "number"
// boolean 	typeof b === "boolean"
// undefined 	typeof undefined === "undefined"
// function 	typeof f === "function"
// array 	Array.isArray(a)
// Union types
// ===========
// A union type describes a value that can be one of several types. This flexibility can be helpful when a value isn't under your control (for example, values from a library, an API, or user input.)
// The any type can also accept different types, so why would you want to use a union type? The union type restricts the assignment of values to the specified types in the union, whereas the any type has no restrictions. Another reason is Intellisense support.
// A union type uses the vertical bar or pipe (|) to separate each type. In the following example, multiType can be a number or a boolean:
let multiType;
multiType = 20; //* Valid
multiType = true; //* Valid
//multiType = "twenty";   //* Invalid
function add(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add('one', 'two')); //* Returns "onetwo"
console.log(add(1, 2)); //* Returns 3
console.log(add('one', 2)); //* Returns error
let newManager = {
    employeeID: 12345,
    age: 34,
    stockPlan: true
};
let myResult;
myResult = "incomplete"; //* Valid
myResult = "pass"; //* Valid
let diceRoll;
diceRoll = 1; //* Valid
diceRoll = 2; //* Valid
let currentType;
currentType = true;
currentType = false;
currentType = "maybe";
// Collection types in TypeScript
// Arrays
// TypeScript, like JavaScript, allows you to work with arrays. 
// Arrays can be written in one of two ways. In the first, you use the type of the elements followed by square brackets ([ ]) to denote an array of that element type:
let list = [1, 2, 3];
// The second way uses a generic Array type, using the syntax Array<type>:
let list_2 = [1, 2, 3];
let list_3 = new Array();
list_3.push.apply(list);
// Tuples
// Having an array of the same value types is useful, but sometimes you have an array that contains values of mixed types. For that purpose, TypeScript provides the Tuple type. 
// To declare a Tuple, use the syntax variableName: [type, type, ...].
let person1 = ['Marcia', 35];
