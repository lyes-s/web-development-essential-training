"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Named functions
function addNumbers(x, y) {
    return x + y;
}
console.log(addNumbers(1, 2));
// Anonymous functions
let addNumbers_2 = function (x, y) {
    return x + y;
};
console.log(addNumbers_2(1, 2));
// Arrow functions
let addNumbers_3 = (x, y) => x + y;
console.log(addNumbers_3(1, 2));
// Rest Parameters
let addAllNumbers = (firstNumber, ...restOfNumbers) => {
    let total = firstNumber;
    for (const element of restOfNumbers) {
        if (isNaN(element)) {
            continue;
        }
        total += Number(element);
    }
    return total;
};
console.log(addAllNumbers(1, 2, 3, 4, 5, 6, 7));
function displayMessage({ text, sender }) {
    console.log(`Message from ${sender}: ${text}`);
}
displayMessage({ sender: 'Christopher', text: 'hello, world' });
let addNumbers_4 = (x, y) => x + y;
let subtractNumbers = (x, y) => x - y;
console.log(addNumbers_4(1, 2));
console.log(subtractNumbers(1, 2));
let doCalculation = (operation) => {
    if (operation === 'add') {
        return addNumbers_4;
    }
    else {
        return subtractNumbers;
    }
};
console.log(doCalculation('add')(1, 2));
