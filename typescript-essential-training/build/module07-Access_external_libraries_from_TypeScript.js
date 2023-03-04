"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnGreeting = void 0;
// Access external libraries from TypeScript 
const dotenv_1 = __importDefault(require("dotenv"));
function returnGreeting(greeting) {
    let greetingLength = getLength(greeting);
    console.log(`The message from GreetingsLength_module is ${greeting}. It is ${greetingLength} characters long.`);
}
exports.returnGreeting = returnGreeting;
function getLength(message) {
    return message.length;
}
const result = dotenv_1.default.config();
if (result.error) {
    throw result.error;
}
console.log(result.parsed); // Returns { DB_HOST: 'localhost', WEB_HOST: 'staging.adventure-works.com' }
console.log(process.env.DB_HOST);
console.log(process.env.WEB_HOST);
let returnNumber = {
    value: 25,
    message: 'Hello!'
};
console.log(returnNumber);
