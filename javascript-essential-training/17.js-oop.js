
  class Human {

    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    get name() {
        return this.#name;
    }
    set name(name) {
        this.#name = name;
    }

    get age() {
        return this.#age;
    }
    set age(age) {
        this.#age = age;
    }

    toString() {
        return this.#name + " " + this.#age;
    }

  }

class Imbecile extends Human {
    
    constructor(name, age) {
        super(name, age);
        Object.seal(this);
    }

    toString() {
        return "Hola ! " + super.toString();
    }

}

let x = new Imbecile("Marcus", 60);

console.log("Is he a humain ? ", x instanceof Human);
console.log("His Info ? ", x.toString());
Imbecile.prototype.middlename = "O.K";
console.log("Is Middle Name in Imbecile Info ? ", x.hasOwnProperty("middlename"));


// Object destructuring 
let student = {
    firstname: "JJ",
    lastname: "OO",
    score: 90
};
const {firstname: fname, lastname: lname, score:s} = student;
console.log(fname + ", " + lname + " : " + s);

// Array Destructuring 
const courses = new Array("Angular", "React", "Node");
const [c1, c2, c3] = courses;
console.log("Array Destructuring : " + c1 + ", " + c2 + ", " + c3);

// Map and Sets
let scoreMap = new Map();
scoreMap.set("Maths", 90);
scoreMap.set("Physics", 95);

for (let [key, value] of scoreMap) {
    console.log("Entry in Map : ", key, value);
}

console.log("Maths Exists ? ", scoreMap.has("Maths"));

// Clear the Map
scoreMap.clear();

let scoreSet = new Set();
scoreSet.add(90);
scoreSet.add(95);

// Clear the Set
scoreSet.clear();


