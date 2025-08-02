// Simulate a fake API call using a Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("✅ Data received!");
    }, 2000); // waits 2 seconds
  });
}

// Async function to handle the async operation
async function getData() {
  console.log("⏳ Fetching data...");
  try {
    const result = await fetchData(); // waits for the Promise to resolve
    console.log(result); // prints: ✅ Data received!
  } catch (error) {
    console.log("❌ Error fetching data:", error);
  }
}

// Call the async function
getData();
