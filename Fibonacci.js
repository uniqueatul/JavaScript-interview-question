// function printFibonacci(n) {
//   let a = 0, b = 1;
//   console.log(a);
//   if (n > 1) console.log(b);

//   for (let i = 2; i < n; i++) {
//     let next = a + b;
//     console.log(next);
//     a = b;
//     b = next;
//   }
// }

// printFibonacci(10);

// function fibonacci(n) {
//   if (n <= 0) return [];
//   if (n === 1) return [0];
//   if (n === 2) return [0, 1];

//   const fib = [0, 1];
//   for (let i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   return fib;
// }




// function printFibonacci(n) {
//   let a = 0, b = 1;
//   console.log(a);
//   if (n > 1) console.log(b);

//   for (let i = 2; i < n; i++) {
//     let next = a + b;
//     console.log(next);
//     a = b;
//     b = next;
//   }
// } 

// printFibonacci(10);


function memoizedFib() {
  const cache = {};

  function fib(n) {
    if (n in cache) return cache[n];
    if (n <= 1) return n;

    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  }

  return fib;
}

const fib = memoizedFib();
console.log(fib(10)); // 55




