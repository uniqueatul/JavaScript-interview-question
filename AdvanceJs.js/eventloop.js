console.log('Start');

setTimeout(function timeout() {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(function promise() {
  console.log('Promise');
});

console.log('End');
