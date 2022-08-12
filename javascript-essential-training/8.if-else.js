//#################################
// Boolean Logic with IF statements
//#################################
const httpStatus = 200;

if (httpStatus === 200) {
    console.log("OK!");
} else if (httpStatus === 400) {
    console.log("Error!");
} else {
    console.log("Unknown Status");
}

// Ternary
const message = httpStatus === 200 ? "OK :D" : "Error!";
console.log(message);
