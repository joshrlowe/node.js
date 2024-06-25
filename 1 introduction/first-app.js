// Import the file system module from Node.js
const fs = require("fs");

// Write a message to 'hello.txt', creating or overwriting the file
fs.writeFileSync("hello.txt", "Hello from Node.js");

/* Explanation of fs.writeFileSync:
 * - The first parameter is the path to the file.
 * - The second parameter is the data to write to the file.
 * This function synchronously writes data to the file, replacing the file if it already exists.
 */
