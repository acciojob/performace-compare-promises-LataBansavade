// Array of API URLs to fetch data from


// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// Function to fetch data from an API URL and measure time taken
async function fetchData(url) {
  const startTime = Date.now();
  const response = await fetch(url);
  const endTime = Date.now();
  const timeTaken = endTime - startTime;
  return timeTaken;
}

// Function to display time taken for Promise.all() and Promise.any()
async function displayTimeTaken() {
  const promiseAllStartTime = Date.now();
  const allPromises = apiUrls.map(fetchData);
  const allResults = await Promise.all(allPromises);
  const promiseAllEndTime = Date.now();
  const promiseAllTimeTaken = promiseAllEndTime - promiseAllStartTime;

  const promiseAnyStartTime = Date.now();
  const anyPromises = apiUrls.map(fetchData);
  await Promise.any(anyPromises).catch(() => {}); // Promise.any may reject if all promises reject
  const promiseAnyEndTime = Date.now();
  const promiseAnyTimeTaken = promiseAnyEndTime - promiseAnyStartTime;

  // Display time taken in the respective HTML elements
  document.getElementById('output-all').innerText = `${promiseAllTimeTaken} ms`;
  document.getElementById('output-any').innerText = `${promiseAnyTimeTaken} ms`;
}

// Call the function to display time taken
displayTimeTaken();

