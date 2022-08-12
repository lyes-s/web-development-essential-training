//########
// Arrays
//########

let garbageArray = new Array("ABC", true, 1);

console.log("Garbage Array Lenght", garbageArray.length);
console.log("Garbage Array Last Element", garbageArray[garbageArray.length - 1]);
console.log("Garbage Array First Element", garbageArray[0]);

// Add an Element to the end of an Array
// && Return the length of the new Array 
let arrayLenght = garbageArray.push("I Have No Idea What Is This!");
console.log("Array After Adding a New Element with PUSH : %s. New Length = %d", garbageArray, arrayLenght);

// Remove The Last Element
// && Return the Removed Element
let removedElement = garbageArray.pop();
console.log("Array After Removing an Element with POP : %s. Removed Element : %s", garbageArray, removedElement);

// Sort an Array
garbageArray.sort();
console.log(garbageArray);

// Remove an Element at the begin of an Array 
// && Return the Removed Element
let shifttedElement = garbageArray.shift();  
console.log("Array After Removing an Element with Shift : %s. Shiftted Element : %s", garbageArray, shifttedElement);

// Add an Element at the begin of an Array 
// && Return the Length of the new Array
let arrayNewLenght = garbageArray.unshift(1);  
console.log("Array After Adding an Element with Unshift : %s. New Length = %d", garbageArray, arrayNewLenght);

// Find an Element
const elementFound = garbageArray.find(element => element < 10);
console.log("Element Found with a Predicat (Element < 10) is : ", elementFound);

// Concatenation of 02 Arrays 
let arr1 = ["A", true, 2];
let arr2 = ["B", false, 3];
console.log("Concat Arr1 and Arr2 in this Order", arr1.concat(arr2));
console.log("Concat Arr2 and Arr1 in this Order", arr2.concat(arr1));