 const sum = (...nums) => nums.reduce((a, b) => a + b, 0);
const multiply = (a, b, c) => a * b * c;

const curriedSum = curryVariadic(sum);
console.log(curriedSum(1)(2, 3)(4)());         // 10
console.log(curriedSum(2,3,4,5)(6)(7)());      // 27

const curriedMultiply = curryVariadic(multiply);
console.log(curriedMultiply(2)(3)(4)());       // 24
console.log(curriedMultiply(5)()()());         // still waiting, does NOT call fn yet
console.log(curriedMultiply(5)(6)(7)());       // 210
console.log(curriedMultiply(5,6)(7,8)());      // 210 (extra ignored)
console.log(curriedMultiply()()()());          // NaN for variadic, but for fixed arity it won’t run until enough args
