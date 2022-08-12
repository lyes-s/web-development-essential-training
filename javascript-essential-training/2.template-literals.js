//##########################################
// Using template literals to format strings
//##########################################

// Constant declaration. No change in the future
const textToPrint = "This my first JS project :D";

// Variable declaration. Could change in the future
let str3 = "JavaScript";

let bool1 = true;

// This Is a Single Line Comment
console.log("Hello World !", `${textToPrint}`);

/**
 * This Is a Multi Line Comment
 */
console.log("Hello World ! %s", textToPrint);

// Concatenation with Template Literals
console.log(`I am writing code in ${str3}`);

// 1 + 1 is 2
console.log(`1 + 1 is ${1 + 1}`);

// The opposite of true is false
console.log(`The opposite of true is ${!bool1}`);