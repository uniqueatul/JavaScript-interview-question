// Simulate an asynchronous operation (e.g., fetching data)
function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Data loaded!");
    }, 2000);
  });
}

// An async function using await
async function loadData() {
  console.log("Loading...");
  const result = await fetchData();
  console.log(result);
}

// Call the async function
loadData();
