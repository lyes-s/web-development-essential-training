// What is an interface?

// You can use interfaces to describe an object, naming and parameterizing the object's types, and to compose existing named object types into new ones.
// This simple interface defines the two properties and a method of an Employee object.

interface Me {
    firstName: string;
    lastName?: string;
    fullName(): string;
}

let employee: Me = {
    firstName: "Emil",
    lastName: "Andersson",
    fullName(): string {
        return this.firstName + " " + this.lastName;
    },
}
/**
 * employee.firstName = 10;  //* Error - Type 'number' is not assignable to type 'string'
 */

console.log(employee.fullName());

// ================

interface IceCream {
    flavor: string;
    scoops: number;
    doWork?(): void;
}

// Extends an Interface
// Able to extends multiple interfaces
interface Sundae extends IceCream {
    sauce: 'chocolate' | 'caramel' | 'strawberry';
    nuts?: boolean;
    whippedCream?: boolean;
    instructions?: boolean;
}

let myIceCream: Sundae = {
    flavor: 'vanilla',
    scoops: 2,
    sauce: 'caramel',
    nuts: true,
    doWork: function (): void {
        throw new Error("Function not implemented.");
    }
}

function tooManyScoops(dessert: Sundae) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    } else {
        return 'Your order will be ready soon!';
    }
}
console.log(tooManyScoops({flavor: 'vanilla', scoops: 5, sauce: 'caramel'}));

// ===================


const fetchURL = 'https://jsonplaceholder.typicode.com/posts'

// Interface describing the shape of our json data
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

async function fetchPosts(url: string) {
    let response = await fetch(url);
    let body = await response.json();
    return body as Post[];
}

async function showPost() {
    let posts = await fetchPosts(fetchURL);
    for (const post of posts) {
        console.log('Post #' + post.id)
        // If the userId is 1, then display a note that it's an administrator
        console.log('Author: ' + (post.userId === 1 ? "Administrator" : post.userId.toString()))
        console.log('Title: ' + post.title)
        console.log('Body: ' + post.body)   
    }
}

showPost();