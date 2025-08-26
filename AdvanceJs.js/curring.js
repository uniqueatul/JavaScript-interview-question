const curryVariadic = (fn) => {
  const acc = (...xs) => (...ys) => ys.length ? acc(...xs, ...ys) : fn(...xs);
  return acc();
};

// Usage
const sum = (...nums) => nums.reduce((a, b) => a + b, 0);
const curriedSum = curryVariadic(sum);

curriedSum(1)(2, 3)(4)(); // 10  (empty call ends the chain)
