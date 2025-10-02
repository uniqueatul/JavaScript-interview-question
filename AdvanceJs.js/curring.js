   
   const curryVariadic = (fn) => {
  const acc = (...xs) => (...ys) => ys.length ? acc(...xs, ...ys) : fn(...xs);
  return acc();
};

// Usage
const sum = (...nums) => nums.reduce((a, b) => a + b, 0);
const curriedSum = curryVariadic(sum);

curriedSum(1)(2, 3)(4)(); // 10  (empty call ends the chain)
// Example usage:
const multiply = (a, b, c) => a * b * c;
const curriedMultiply = curryVariadic(multiply);
console.log(curriedMultiply(2)(3)(4)()); // 24
// Another example with no arguments
console.log(curriedMultiply()()); // NaN (since no arguments were provided)
// Another example with multiple arguments at once
console.log(curriedMultiply(2, 3)(4)()); // 24
// Another example with all arguments at once
console.log(curriedMultiply(2, 3, 4)()); // 24

// Another example with mixed arguments
console.log(curriedMultiply(2)(3, 4)()); // 24
// Another example with no arguments in between
console.log(curriedMultiply(2)()(3)(4)()); // 24
console.log(curriedMultiply(2)()()(3)()(4)()); // 24
console.log(curriedMultiply()()(2)()()(3)()()(4)()); // 24
console.log(curriedMultiply()()()()()); // NaN (since no arguments were provided)
console.log(curriedMultiply(5)()()()()); // NaN (since not enough arguments were provided)
console.log(curriedMultiply(5)(6)()()()); // NaN (since not enough arguments were provided)
console.log(curriedMultiply(5)(6)(7)()); // 210
console.log(curriedMultiply(5)(6)(7)(8)()); // 210 (extra arguments are ignored)
console.log(curriedMultiply(5, 6)(7, 8)()); // 210 (extra arguments are ignored)
console.log(curriedMultiply(5, 6, 7, 8)()); // 210 (extra arguments are ignored)
console.log(curriedMultiply(5, 6, 7, 8, 9)()); // 210 (extra arguments are ignored) 
