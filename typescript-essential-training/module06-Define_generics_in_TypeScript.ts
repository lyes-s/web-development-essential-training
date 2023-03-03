// Define generics in TypeScript

// Generics are code templates that you can define and reuse throughout your codebase

/**
 * Generics can:
    Provide more flexibility when working with types.
    Enable code reuse.
    Reduce the need to use the any type.
 */

function getArray<T>(items : T[]) : T[] {
    return new Array<T>().concat(items);
}

let numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25);                           // OK
/** numberArray.push('This is not a number');  // Generates a compile time type check error **/

let stringArray = getArray<string>(['Cats', 'Dogs', 'Birds']);
stringArray.push('Rabbits');               // OK
/** stringArray.push(30);                 // Generates a compile time type check error **/

function identity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}

let returnNumber = identity<number, string>(100, 'Hello!');
let returnString = identity<string, string>('100', 'Hola!');
let returnBoolean = identity<boolean, string>(true, 'Bonjour!');

returnNumber = returnNumber * 100;   // OK
/** returnString = returnString * 100;   // Error: Type 'number' not assignable to type 'string' **/
/** returnBoolean = returnBoolean * 100; // Error: Type 'number' not assignable to type 'boolean' **/


type ValidTypes = string | number;
function identity_2<T extends ValidTypes, U> (value: T, message: U) {   // Return type is inferred
    let result: ValidTypes = '';
    let typeValue: string = typeof value;

    if (typeof value === 'number') {           // Is it a number?
        result = value + value;                // OK
    } else if (typeof value === 'string') {    // Is it a string?
        result = value + value;                // OK
    }

    console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}`);

    return result
}

let numberValue = identity_2<number, string>(100, 'Hello');
let stringValue = identity_2<string, string>('100', 'Hello');

console.log(numberValue);       // Returns 200
console.log(stringValue);       // Returns 100100


// ====================

// Declare a generic interface

interface Identity<T, U> {
    value: T;
    message: U;
}

let returnNumber_1: Identity<number, string> = {
    value: 25,
    message: 'Hello!'
}
let returnString_1: Identity<string, number> = {
    value: 'Hello!',
    message: 25
}

// Declare a generic interface as a function type

interface ProcessIdentity<T, U> {
    (value: T, message: U): T;
}

function processIdentity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}

let processor: ProcessIdentity<number, string> = processIdentity;
let returnNumber1 = processor(100, 'Hello!');   // OK
/** let returnString1 = processor('Hello!', 100);   // Type check error **/


// Declare a generic interface as a class type
interface ProcessIdentity2<T, U> {
    value: T;
    message: U;
    process(): T;
}

class ProcessIdentityy<X, Y> implements ProcessIdentity2<X, Y> {
    value: X;
    message: Y;
    constructor(val: X, msg: Y) {
        this.value = val;
        this.message = msg;
    }
    process() : X {
        console.log(this.message);
        return this.value
    }
}

let process = new ProcessIdentityy<number, string>(100, 'Hello');
process.process();           // Displays 'Hello'
// process.value = '100';       // Type check error



// Define a generic class 

class ProcessIdentityyy<T, U> {
    private _value: T;
    private _message: U;
    constructor(value: T, message: U) {
        this._value = value;
        this._message = message;
    }
    getIdentity() : T {
        console.log(this._message);
        return this._value
    }
}
let processo = new ProcessIdentityyy<number, string>(100, 'Hello');
processo.getIdentity();      // Displays 'Hello'


