// Access external libraries from TypeScript 
import dotenv from 'dotenv';
import { Identity } from './identity'

export function returnGreeting (greeting: string) {
    let greetingLength = getLength(greeting);
    console.log(`The message from GreetingsLength_module is ${greeting}. It is ${greetingLength} characters long.`);
}

function getLength(message: string): number {
    return message.length
}

const result = dotenv.config();

if (result.error) {
    throw result.error;
}

console.log(result.parsed);  // Returns { DB_HOST: 'localhost', WEB_HOST: 'staging.adventure-works.com' }
console.log(process.env.DB_HOST);
console.log(process.env.WEB_HOST);

let returnNumber: Identity<number, string> = {
    value: 25,
    message: 'Hello!'
}

console.log(returnNumber);