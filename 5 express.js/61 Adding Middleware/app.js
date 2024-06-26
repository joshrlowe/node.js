const http = require("http");

const express = require("express");

const app = express();

// First middleware function: logs a message and passes control to the next middleware
app.use((req, res, next) => {
  console.log("In the middleware!");
  next(); // Allows the request to continue to the next middleware in line
});

// Second middleware function: logs another message. Does not pass control forward.
app.use((req, res, next) => {
  console.log("In another middleware!");
});

const server = http.createServer(app);

server.listen(3000);

/*
Additional Explanation:
- Added two middleware functions using `app.use()`. These functions are used to handle requests by executing their code in sequence.
- The first middleware logs "In the middleware!" and calls `next()` to pass control to the next middleware.
- The second middleware logs "In another middleware!". It does not call `next()`, which means it ends the middleware chain unless it sends a response.
- These middleware functions enhance the application's ability to manage requests sequentially, allowing for logging, request modification, response sending, and more.
*/
