const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers); // Log the request URL, method, and headers

  // Writing HTML response
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");

  res.end(); // End the response to avoid hanging
  // Cannot change response beyond this point
});

// The server listens on port 3000
server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

/* Additional Explanation:
 * - res.write(): This method is used to send a chunk of the response body to the client. It can be called multiple times before res.end().
 * - Writing HTML: By calling res.write() with HTML strings, you can construct an HTML response dynamically.
 * - res.end(): This method signals to the server that all response headers and body have been sent, effectively ending the response. No further modifications to the response can be made after calling res.end().
 */
