 // Generate a random number between a given range
function GenerateNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(GenerateNum(20, 22));
console.log(GenerateNum(20, 22));

// Factorial function
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
      fact *= i;
    }
    return fact;
  }
}

console.log(factorial(7));

// Base class - Abstraction and Encapsulation
class Item {
  #id; // Private property
  constructor(id, title) {
    this.#id = id;
    this.title = title;
  }

  getId() {
    return this.#id; // Getter for private field
  }

  display() {
    console.log(`Item: ${this.title}`);
  }
}

// Derived class - Inheritance & Polymorphism
class Book extends Item {
  constructor(id, title, author) {
    super(id, title);
    this.author = author;
  }

  display() {
    console.log(`Book: ${this.title}, Author: ${this.author}`);
  }
}

class Magazine extends Item {
  constructor(id, title, issue) {
    super(id, title);
    this.issue = issue;
  }

  display() {
    console.log(`Magazine: ${this.title}, Issue: ${this.issue}`);
  }
}

// ✅ Testing
const b1 = new Book(1, "JavaScript Guide", "John Doe");
const m1 = new Magazine(2, "Tech Today", "Sept 2025");

b1.display(); // Book: JavaScript Guide, Author: John Doe
m1.display(); // Magazine: Tech Today, Issue: Sept 2025
