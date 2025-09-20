// Base class - Abstraction and Encapsulation using private field
class Item {
  #id; // Private property (Encapsulation)

  constructor(id, title) {
    this.#id = id;
    this.title = title;
  }

  // Getter for private field
  getId() {
    return this.#id;
  }

  // Method - Abstraction
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

  // Overriding method - Polymorphism
  display() {
    console.log(`Book: ${this.title}, Author: ${this.author}`);
  }
}

// Another derived class
class Magazine extends Item {
  constructor(id, title, issue) {
    super(id, title);
    this.issue = issue;
  }

  // Overriding method - Polymorphism
  display() {
    console.log(`Magazine: ${this.title}, Issue: ${this.issue}`);
  }
}

// Library class - uses objects and encapsulation
class Library {
  constructor() {
    this.items = []; // stores Book or Magazine objects
  }

  // Add item to library
  addItem(item) {
    this.items.push(item);
  }

  // Display all items
  showItems() {
    console.log("Library Contents:");
    this.items.forEach(item => item.display());
  }
}

// ----- Usage Example (Object Creation) -----
const library = new Library();

const book1 = new Book(1, "The Alchemist", "Paulo Coelho");
const mag1 = new Magazine(2, "National Geographic", "July 2025");

// Using encapsulated method to get ID
console.log("Book ID:", book1.getId());

// Adding objects to library
library.addItem(book1);
library.addItem(mag1);

// Showing all items (demonstrates polymorphism)
library.showItems();
