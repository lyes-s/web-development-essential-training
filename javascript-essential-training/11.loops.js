/**
 * 
 */


//
const names = new Array("Justin", "Sarah", "Christopher");

// While Loop
console.log("=== While Loop ===");
let index = 0;
while (index < names.length) {
    console.log(`${index})`, `${names[index]}`);
    index++;
}

// For loop
console.log("=== For Loop ===");
for (let i = 0; i < names.length; i ++) {
    console.log(`${i})`, `${names[i]}`);
}

// For Of Loop
console.log("=== For Of ===");
for (let [i, name] of names.entries()) {
    console.log(`${i})`, `${name}`);
}

// Foreach loop
console.log("=== Foreach ===");
names.forEach((x, i) => console.log(`${i})`, `${x}`))

// do-while
let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// Expected output: "12345"

