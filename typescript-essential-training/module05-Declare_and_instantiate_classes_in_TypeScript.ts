// Declare and instantiate classes in TypeScript
class Car {
    // Hehehe ! L-YES dislike Static variables :p
    private static numberOfCars: number = 0;  // New static property
    private readonly _make: string;
    private _color: string;
    private _doors: number;

    constructor(make: string, color: string, doors: number) {
        this._make = make;
        this._color = color;
        this._doors = doors;
        Car.numberOfCars++; // Increments the value of the static property
    }

    // Accessors : public by default
    public get make(): string {
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
        } else {
            throw new Error('Doors must be an even number');
        }
    }

    public static getNumberOfCars(): number {
        return Car.numberOfCars;
    }

    // Methods
    accelerate(speed: number): string {
        return `${this.worker()} is accelerating to ${speed} MPH.`
    }

    brake(): string {
        return `${this.worker()} is braking with the standard braking system.`
    }

    turn(direction: 'left' | 'right'): string {
        return `${this.worker()} is turning ${direction}`;
    }

    // This function performs work for the other method functions
    worker(): string {
        return this._make;
    }    
    
}

let myCar1 = new Car('Cool Car Company', 'blue', 2);  // Instantiates the Car object with all parameters
console.log(myCar1.color);
// Instantiates the Car object with all parameters
let myCar2 = new Car('Galaxy Motors', 'blue', 2);
// Returns 2
console.log(Car.getNumberOfCars());

// =============

class ElectricCar extends Car {
    private _range: number;
    constructor(make: string, color: string, range: number, doors = 2) {
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
        console.log(this.worker() + " is charging.")
    }
    // Overrides the brake method of the Car class
    brake(): string {
        return `${this.worker()}  is braking with the regenerative braking system.`
    }
}

let spark = new ElectricCar('Spark Motors','silver', 124, 2);
let eCar = new ElectricCar('Electric Car Co.', 'black', 263);
console.log(eCar.doors);         // returns the default, 2
spark.charge();                  // returns "Spark Motors is charging"
console.log(spark.brake());      // returns "Spark Motors is braking with the regenerative braking system"
