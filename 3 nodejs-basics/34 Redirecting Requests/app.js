const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    // Handling root URL
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>',
    );
    res.write("</html>");
    return res.end(); // End the response for the root URL
  }

  if (url === "/message" && method === "POST") {
    // Handling the /message URL with POST method
    // Synchronously write a dummy text to message.txt
    fs.writeFileSync("message.txt", "DUMMY TEXT");
    // Set status code to 302 (Found) for redirection
    res.statusCode = 302;
    // Set Location header to redirect to root URL
    res.setHeader("Location", "/");
    return res.end(); // End the response after redirecting
  }

  // Handling other URLs
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  res.end(); // End the response for other URLs
});

// The server listens on port 3000
server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

/* Additional Explanation:
 * - Method Handling: The code checks the HTTP method of the request using req.method to provide different responses based on the method.
 * - Writing to File: fs.writeFileSync() is used to synchronously write a dummy text to a file named message.txt.
 * - Redirection: The status code is set to 302 to indicate a temporary redirection, and the Location header is set to '/' to redirect the client back to the root URL.
 * - Synchronous vs Asynchronous: fs.writeFileSync() is a synchronous method, blocking the execution until the file operation is complete. Alternatively, fs.writeFile() can be used for non-blocking asynchronous file operations.
 */
