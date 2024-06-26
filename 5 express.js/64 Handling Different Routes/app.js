const express = require("express");

const app = express();

// Middleware that runs for every request to the server
app.use("/", (req, res, next) => {
  console.log("This always runs!");
  next();
});

// Middleware for handling requests to /add-product
app.use("/add-product", (req, res, next) => {
  console.log("In another middleware!");
  res.send('<h1>The "Add Product" Page</h1>'); // Sends an HTML response for /add-product
});

// Middleware for handling requests to /favicon.ico
app.use("/favicon.ico", (req, res, next) => {
  console.log("In favicon middleware!");
  res.send('<h1>The "Add Product" Page</h1>'); // Sends an HTML response for /favicon.ico
});

// Middleware that handles requests to the root URL
app.use("/", (req, res, next) => {
  console.log("In another middleware!");
  res.send("<h1>Hello from Express!</h1>"); // Sends an HTML response for the root URL
});

// Start the server and listen on port 3000
app.listen(3000);

/*
Additional Explanation:
- Added multiple middleware functions to handle different routes:
  - The first middleware runs for every request due to the root path "/". It logs a message and passes control to the next middleware using `next()`.
  - The second middleware specifically handles requests to "/add-product". It logs a message and sends an HTML response.
  - The third middleware handles requests to "/favicon.ico", logging a message and sending an HTML response.
  - The fourth middleware also runs for every request to the root path "/". It logs a message and sends a different HTML response.
- This setup demonstrates how to handle different routes and provide specific responses for each in Express.
*/
