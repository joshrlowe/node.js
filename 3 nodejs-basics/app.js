const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers); // Log the request URL, method, and headers
  res.end(); // End the response to avoid hanging
});

// The server listens on port 3000
server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

/* Additional Explanation:
 * - req.url: This property contains the URL of the incoming request.
 * - req.method: This property contains the HTTP method of the incoming request (e.g., GET, POST).
 * - req.headers: This property contains an object representing the headers of the incoming request.
 *
 * By logging req.url, req.method, and req.headers, you can see detailed information about each incoming request, which is useful for debugging and understanding the requests your server receives.
 */
