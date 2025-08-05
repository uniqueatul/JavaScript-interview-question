function debounce(func, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer); // Cancel the previous timer
    timer = setTimeout(() => {
      func.apply(this, args); // Call the original function after delay
    }, delay);
  };
}

function fetchData(query) {
  console.log("API Call with query:", query);
}

const debouncedFetch = debounce(fetchData, 300);

// Simulating typing
debouncedFetch("a");
debouncedFetch("ab");
debouncedFetch("abc");
// Only "abc" will be logged after 300ms
