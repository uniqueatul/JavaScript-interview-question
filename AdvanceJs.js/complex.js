
// --- Massive JavaScript Demonstration ---
// Covers: Closures, Classes, Async, Event Emitters, Recursion, Currying, Memoization, Generators,
// Prototypes, Data Structures, and More...

// Utility: Event Emitter Implementation
class EventEmitter {
    constructor() {
        this.events = {};
    }
    on(event, listener) {
        if (!this.events[event]) this.events[event] = [];
        this.events[event].push(listener);
    }
    emit(event, ...args) {
        if (this.events[event]) {
            for (const listener of this.events[event]) {
                listener(...args);
            }
        }
    }
}
const emitter = new EventEmitter();

// Closure: Counter with private state
function createCounter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        get: () => count
    };
}
const counter = createCounter();

// Recursion: Deep object traversal
function deepTraversal(obj, callback) {
    for (let key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            deepTraversal(obj[key], callback);
        } else {
            callback(key, obj[key]);
        }
    }
}

// Memoization Example
function memoize(fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) return cache[key];
        cache[key] = fn(...args);
        return cache[key];
    };
}
const slowFactorial = n => {
    if (n <= 1) return 1;
    return n * slowFactorial(n - 1);
};
const fastFactorial = memoize(slowFactorial);

// Currying Example
const multiply = a => b => a * b;

// Async/Await + Promises
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function fetchDataSimulation(url) {
    await delay(1000);
    return { url, data: `Sample data from ${url}` };
}

// Generator Example
function* idGenerator() {
    let id = 0;
    while (true) {
        yield ++id;
    }
}
const gen = idGenerator();

// Custom Data Structure: Priority Queue
class PriorityQueue {
    constructor() {
        this.items = [];
    }
    enqueue(element, priority) {
        this.items.push({ element, priority });
        this.items.sort((a, b) => a.priority - b.priority);
    }
    dequeue() {
        return this.items.shift();
    }
    isEmpty() {
        return this.items.length === 0;
    }
}

// Bringing it all together:
(async function main() {
    console.log("=== Complex JavaScript Demo ===");

    // Event Emitter
    emitter.on("greet", name => console.log(`Hello, ${name}!`));
    emitter.emit("greet", "Atul");

    // Closure
    console.log("Counter:", counter.increment(), counter.increment(), counter.get());

    // Recursion
    const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
    console.log("Deep Traversal:");
    deepTraversal(obj, (key, value) => console.log(key, value));

    // Memoization
    console.log("Factorial (Fast):", fastFactorial(10));

    // Currying
    console.log("Multiply:", multiply(5)(4));

    // Async Simulation
    const data = await fetchDataSimulation("https://example.com");
    console.log("Fetched:", data);

    // Generator
    console.log("Generated IDs:", gen.next().value, gen.next().value, gen.next().value);

    // Priority Queue
    const pq = new PriorityQueue();
    pq.enqueue("Low priority", 3);
    pq.enqueue("High priority", 1);
    pq.enqueue("Medium priority", 2);
    while (!pq.isEmpty()) {
        console.log("Dequeued:", pq.dequeue().element);
    }

    console.log("=== End of Complex Demo ===");
})();
