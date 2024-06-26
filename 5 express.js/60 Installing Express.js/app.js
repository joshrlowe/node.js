const http = require("http");

// Load the 'express' module which is a web framework for Node.js
const express = require("express");

// Create an Express application. This object is used to configure the server.
const app = express();

// Create an HTTP server that uses the Express app to handle requests.
const server = http.createServer(app);

server.listen(3000);

/*
Additional Explanation:
- The `express` module is used to simplify server setup and request handling in Node.js. 
  Express provides a robust set of features for web and mobile applications.
- An Express app (`app`) is created by calling `express()`. This app object configures the server 
  and is essentially a series of middleware function calls.
- The `http.createServer()` function takes a request listener as an argument, which is the Express app (`app`) in this case. 
  This means that the Express app handles all HTTP requests.
- The `server.listen(3000)` tells the server to start listening on port 3000. This is where the server
  will receive requests. Using this port, you can access the server locally via `http://localhost:3000` in your web browser.
- The Express application (`app`) acts as a callback function for the HTTP server. It is designed to handle 
  all HTTP requests at a basic level, but you can extend its functionality with additional routes, middleware, and more.
*/
