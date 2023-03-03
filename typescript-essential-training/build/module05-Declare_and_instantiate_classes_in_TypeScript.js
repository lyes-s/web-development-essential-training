"use strict";
// Declare and instantiate classes in TypeScript
class Car {
    constructor(make, color, doors) {
        this._make = make;
        this._color = color;
        this._doors = doors;
        Car.numberOfCars++; // Increments the value of the static property
    }
    // Accessors : public by default
    get make() {
        return this._make;
    }
    get color() {
        return 'The color of the car is ' + this._color;
    }
    set color(color) {
        this._color = color;
    }
    get doors() {
        return this._doors;
    }
    set doors(doors) {
        if ((doors % 2) === 0) {
            this._doors = doors;
        }
        else {
            throw new Error('Doors must be an even number');
        }
    }
    static getNumberOfCars() {
        return Car.numberOfCars;
    }
    // Methods
    accelerate(speed) {
        return `${this.worker()} is accelerating to ${speed} MPH.`;
    }
    brake() {
        return `${this.worker()} is braking with the standard braking system.`;
    }
    turn(direction) {
        return `${this.worker()} is turning ${direction}`;
    }
    // This function performs work for the other method functions
    worker() {
        return this._make;
    }
}
// Hehehe ! L-YES dislike Static variables :p
Car.numberOfCars = 0; // New static property
let myCar1 = new Car('Cool Car Company', 'blue', 2); // Instantiates the Car object with all parameters
console.log(myCar1.color);
// Instantiates the Car object with all parameters
let myCar2 = new Car('Galaxy Motors', 'blue', 2);
// Returns 2
console.log(Car.getNumberOfCars());
// =============
class ElectricCar extends Car {
    constructor(make, color, range, doors = 2) {
        super(make, color, doors);
        this._range = range;
    }
    get range() {
        return this._range;
    }
    set range(range) {
        this._range = range;
    }
    charge() {
        console.log(this.worker() + " is charging.");
    }
    // Overrides the brake method of the Car class
    brake() {
        return `${this.worker()}  is braking with the regenerative braking system.`;
    }
}
let spark = new ElectricCar('Spark Motors', 'silver', 124, 2);
let eCar = new ElectricCar('Electric Car Co.', 'black', 263);
console.log(eCar.doors); // returns the default, 2
spark.charge(); // returns "Spark Motors is charging"
console.log(spark.brake()); // returns "Spark Motors is braking with the regenerative braking system"
