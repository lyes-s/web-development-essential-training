function Product(name, price) {
    this.name = name;
    this.price = price;
    return this;
  }
  
  function Food(name, price) {
    this.product = Product.call(this, name, price);
    this.category = 'food';
    this.delete = true;
  }
  
  let food = new Food('cheese', 5);
  
  // Print a property value in an object
  console.log(food.product.name);

  // Property Check
  console.log("name" in food);

  // Property Ownership Check
  console.log(food.hasOwnProperty("name"));

  // Delete propertu
  console.log(delete food.delete);

  // Retrieve all properties : The JavaScript for...in statement loops through the properties of an object.
  for (let property in food) {
    console.log(property + ": " + food[property]);
  }

  // Retrieve all keys of an object : attributes name
  console.log("Food Keys : " + Object.keys(food).join(", "));

  // Check object property enumerability 
  console.log("Is 'name' property enumerable in 'Food' ? " + food.propertyIsEnumerable("name"));

  // ================================

  // Object property attributes
  // By adding a new non-existing property => below = false - ALL !
  // L-YES dislike defining dynamic properties. 
  const dataPropertyDescriptor = {
    // could not be enumerable. Default to true
    enumerable: true,
    // could not be changed or deleted.
    configurable: true,
    // readOnly or not ?
    writable: false
  };

  // Define Get and Set for an attribute.
  const accessorPropertyDescriptor = {
    get: function() {return this.category},
    set: function(category) {this.category = category},
    enumerable: true,
    configurable: true
  };
  
  Object.defineProperty(food, "category", dataPropertyDescriptor);

  // unable to delete it due to the configurable property. It fail without error. 
  delete food.category;

  // Define Accessor Property attribute : Get Set
  Object.defineProperty(food, "category", accessorPropertyDescriptor);

  // instead defining multiple defineproperty, it is possible to use defineproperties.

  const propertiesDesctiptor = {
    _category:{
        // could not be enumerable. Default to true
        enumerable: true,
       // could not be changed or deleted.
       configurable: false,
       // readOnly or not ?
       writable: false
    }, 
    category: {
        get: function() {return this.category},
        set: function(category) {this.category = category},
        enumerable: true,
        configurable: true
    }
  };

  Object.defineProperties(food, propertiesDesctiptor);

    // Read property attribute
    let descriptor = Object.getOwnPropertyDescriptor(food, "category");

  // ================================

  // Object Extensibility ???

  const product = {
    name: "product"
  };
  
  // is Extensible ?
  console.log("Is Product Extensible ? " + Object.isExtensible(product));
  
  // Present Extensibility : To not add new properties/functions etc.... Does this affect inheritance ? 
  Object.preventExtensions(product);
  
  // Sealing an object prevents extensions and makes existing properties non-configurable. By default : false.
  // Sealed class itself can inherit from a base class.
  // Sealed classes are always leafs.
  Object.seal(food);

  // Freezing an object prevents extensions and makes existing properties non-writable and non-configurable.
  Object.freeze(food);

  // ================================ 

  // Prototype : we can add new variables and methods to the existing objects dynamically, which will be accessible to all the objects created using the function. Aka : wrong design :p
  console.log("Prototype Of Food ? " + Object.getPrototypeOf(food));

  // Adding propereties Prototype to an Object
  function Flight(airline, flightnumber) {
    this.airline = airline;
    this.flightnumber = flightnumber;
  }
  // Miracle ! 
  Flight.prototype = {
    display: function() {
        console.log(this.airline + " " + this.flightnumber)
    },
    toString: function() {
        return this.airline + " " + this.flightnumber;
    }
  };