// ## Three ways to declare variables 

// Function scoped
// Can be changed in scope
// Mutable variable
// Available before declaration
// Example declared at line 10 of the function, it is available in line 1 too.
// > Unexpected var, use let or const instead.sonarlint(javascript:S3504)
var one = 1;


// Block Scoped {..}
// Can be changed in scope
// Mutable variable
// Only available after declaration
// Example declared at line 10 of the block, it will be available from line 10 down (not before).
let two = 2;


// Block Scoped {..} like 'let'
// Cannot be changed <-
// Only available after declaration
const three = 3;