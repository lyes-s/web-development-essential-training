// Develop typed functions by using TypeScript
export {}

// Named functions
function addNumbers (x: number, y: number): number {
    return x + y;
}
console.log(addNumbers(1, 2));

// Anonymous functions
let addNumbers_2 = function (x: number, y: number): number {
    return x + y;
}
console.log(addNumbers_2(1, 2));


// Arrow functions
let addNumbers_3 = (x: number, y: number): number => x + y;
console.log(addNumbers_3(1, 2));



// Rest Parameters
let addAllNumbers = (firstNumber: number, ...restOfNumbers: number[]): number => {
    let total: number =  firstNumber;
    for(const element of restOfNumbers) {
       if(isNaN(element)){
          continue;
       }
       total += Number(element);
    }
    return total;
 }

 console.log(addAllNumbers(1, 2, 3, 4, 5, 6, 7));


 // Deconstructed object parameters
 interface Message {
    text: string;
    sender: string;
 }
 
 function displayMessage({text, sender}: Message) {
     console.log(`Message from ${sender}: ${text}`);
}
 
displayMessage({sender: 'Christopher', text: 'hello, world'});



// Define function types
type calculator = (x: number, y: number) => number;
let addNumbers_4: calculator = (x: number, y: number): number => x + y;
let subtractNumbers: calculator = (x: number, y: number): number => x - y;

console.log(addNumbers_4(1, 2));
console.log(subtractNumbers(1, 2));

let doCalculation = (operation: 'add' | 'subtract'): calculator => {
    if (operation === 'add') {
        return addNumbers_4;
    } else {
        return subtractNumbers;
    }
}

console.log(doCalculation('add')(1, 2))