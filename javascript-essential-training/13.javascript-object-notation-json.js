/**
 * JavaScript Object Notation (JSON)
 * 
 * Javascript is used extensively in modern web development
 *      - Client-Server : JavaScript runs in the browser and communicate to remote server over a network. 
 * 
 * Many communicatuion protocols and storage systems rely on text
 *      - Requirements : Data should be transferable in text format, easy for humans to read (debug)
 * 
 * Collection of name-value pairs : Comparable to Objects. 
 * 
 * Ordered List of values : Comparable to arrays.
 */

// Serialization
const book = {
    title: "1984",
    author: "George Orwell",
    isAvailable: false,
    
    checkIn: function() {
        this.isAvailable = true;
    },

    checkOut: function() {
        this.isAvailable = false;
    }
};

let bookJson = JSON.stringify(book, null, '\t');
console.log("Book Serialization :", bookJson);

// Deserialization
const jsonObj = '{ "title" : "Becoming Senior Software Advocate!", "author" : "Ice Tea", "isAvailable" : "false" }';
let boook = JSON.parse(jsonObj);
console.log("Book Deserialization. Title: %s, Author: %s, Is it Available? : %s", boook.title, boook.author, boook.isAvailable);

// Collection of objects
const books = [
    {
        title: "1984",
        author: "George Orwell",
        isAvailable: true
    },
    {
        title: "Becoming Senior Software Advocate!",
        author: "Ice Tea",
        isAvailable: false
    }
]

let booksObj = JSON.stringify(books, null, '\t');
console.log("Books Serialization : ", booksObj);