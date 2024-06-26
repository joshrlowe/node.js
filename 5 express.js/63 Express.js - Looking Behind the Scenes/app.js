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

// Use app.listen() to start the server, making it simpler and more idiomatic for Express applications
app.listen(3000);

/*
Additional Explanation:
- Replaced `http.createServer(app)` and `server.listen(3000)` with `app.listen(3000)`.
- `app.listen(3000)` is a convenience method in Express that starts the HTTP server and begins listening for connections on the specified port (3000 in this case).
- This simplifies the code by removing the need to manually create an HTTP server using the `http` module.
- The functionality remains the same: the server listens on port 3000 and handles requests using the defined middleware.
*/
