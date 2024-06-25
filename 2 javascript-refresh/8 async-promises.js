const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, 1500);
  });
};

// What is asynchronous code?
setTimeout(() => {
  console.log("Timer is done!");
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData(); // Returning another promise
    })
    .then((text2) => {
      console.log(text2);
      return fetchData(); // Returning yet another promise
    })
    .then((text3) => {
      console.log(text3);
    })
    .catch((error) => {
      console.error(error);
    });
}, 2000); // Waits 2 seconds before executing the code inside the callback
// Asynchronous code executes after a delay, allowing other code to run in the meantime.

// Synchronous code executes sequentially, without delays.
console.log("Hello!");
console.log("Hi!");

/* Expected Output:
 * Hello!
 * Hi!
 * Timer is done!
 * Done!
 * Done!
 * Done!
 *
 * Explanation:
 * Node.js handles asynchronous operations without blocking the main execution thread.
 * Synchronous code runs first, followed by asynchronous callbacks when they are ready.
 */

/* Handling Asynchronous Code:
 * There are several ways to manage asynchronous operations in JavaScript:
 * 1. Callbacks
 * 2. Promises
 * 3. Async/Await
 *
 * Callbacks can lead to deeply nested code, known as "callback hell".
 * Promises provide a cleaner, more manageable way to handle asynchronous operations.
 * Using .then() chains allows us to avoid callback hell by providing a more linear and readable structure.
 */

/* Explanation of Promises:
 * A Promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
 * Promises can be in one of three states: pending, fulfilled, or rejected.
 * - Pending: The initial state, neither fulfilled nor rejected.
 * - Fulfilled: The operation completed successfully.
 * - Rejected: The operation failed.
 *
 * Usage:
 * const promise = new Promise((resolve, reject) => {
 *   // asynchronous operation
 *   if (successful) {
 *     resolve(value);
 *   } else {
 *     reject(error);
 *   }
 * });
 *
 * promise.then((result) => {
 *   // handle successful completion
 * }).catch((error) => {
 *   // handle failure
 * });
 */
