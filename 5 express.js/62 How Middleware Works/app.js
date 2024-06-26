const http = require("http");

const express = require("express");

const app = express();

// First middleware function: logs a message and passes control to the next middleware
app.use((req, res, next) => {
  console.log("In the middleware!");
  next();
});

// Second middleware function: logs a message and sends a response
app.use((req, res, next) => {
  console.log("In another middleware!");
  res.send("<h1>Hello from Express!</h1>"); // Sends an HTML response to the client
});

const server = http.createServer(app);

server.listen(3000);

/*
Additional Explanation:
- Modified the second middleware to send an HTTP response back to the client. This middleware now ends the request-response cycle by sending "<h1>Hello from Express!</h1>" as an HTML response.
- The `res.send()` method is used here to send the HTML content. Once this method is called, it completes the request handling, and no further middleware will execute for this request.
- This change demonstrates how Express can manage request flows, terminating them with a response when necessary.
*/
