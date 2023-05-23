//------------------------------------------------------------------------------

// Step 1: Write code that defines a constructor function called Car that creates a new object with the following properties: make, model, and year.

// Create car constructor function
function Car(make, model, year) {

// Assigning make, model, and year properties to the new object Car.
this.make = make;
this.model = model;
this.year = year;
}

//------------------------------------------------------------------------------

// Step 2: Add a method called getDescription to the Car prototype, which returns a string containing information about the car.

// Adding getDescription method to the Car prototype.
Car.prototype.getDescription = function() {

// Returning a string with car information.
return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
};

//------------------------------------------------------------------------------

// Step 3: Define the ElectricCar function as a subclass of Car. Include an additional property called range that represents the range of the electric car in miles.

// Defining the ElectricCar constructor function as a subclass of Car.
function ElectricCar(make, model, year, range) {

// Calling the Car constructor to initialize inherited properties.
Car.call(this, make, model, year);

// Assigning the range property to the new object.
this.range = range;
}

//------------------------------------------------------------------------------

// Step 4: Have the ElectricCar prototype override the getDescription method of the Car prototype with a new implementation that includes information about the range of the electric car.

// Setting up the prototype chain for ElectricCar and Car.
ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;
  
// Overriding the getDescription method in the ElectricCar prototype.
ElectricCar.prototype.getDescription = function() {

// Calling the parent's getDescription method and adding range information.
return `${Car.prototype.getDescription.call(this)}, Range: ${this.range} miles`;
};

//------------------------------------------------------------------------------

// Step 5: Create an instance of ElectricCar with the make "Tesla", model "Model S", year 2019, and range 300, and the getDescription method is called on the instance. The output will be a string containing the make, model, year, and range of the electric car.

// Creating an instance of ElectricCar with the specified values.
var myElectricCar = new ElectricCar("Tesla", "Model S", 2019, 300);
  
// Calling the getDescription method on the instance and printing the output.
console.log(myElectricCar.getDescription());
  