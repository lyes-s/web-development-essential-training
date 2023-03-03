"use strict";
// What is an interface?
let employee = {
    firstName: "Emil",
    lastName: "Andersson",
    fullName() {
        return this.firstName + " " + this.lastName;
    },
};
/**
 * employee.firstName = 10;  //* Error - Type 'number' is not assignable to type 'string'
 */
console.log(employee.fullName());
let myIceCream = {
    flavor: 'vanilla',
    scoops: 2,
    sauce: 'caramel',
    nuts: true,
    doWork: function () {
        throw new Error("Function not implemented.");
    }
};
function tooManyScoops(dessert) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    }
    else {
        return 'Your order will be ready soon!';
    }
}
console.log(tooManyScoops({ flavor: 'vanilla', scoops: 5, sauce: 'caramel' }));
