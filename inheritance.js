// Parent constructor
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound`);
};

// Child constructor
function Dog(name, breed) {
  Animal.call(this, name); // Inherit properties
  this.breed = breed;
}

// Inherit methods
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Add new method
Dog.prototype.bark = function () {
  console.log(`${this.name} barks`);
};

// Usage
const myDog = new Dog("Buddy", "Labrador");
myDog.speak(); // Buddy makes a sound
myDog.bark();  // Buddy barks
