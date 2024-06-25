const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

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
 * - URL Handling: The code checks the URL of the incoming request using req.url and provides different responses based on the URL.
 * - Handling Root URL: If the URL is '/', it serves an HTML form that allows the user to submit a message.
 * - HTML Form: The form uses the POST method to submit data to the /message URL.
 * - res.end(): The response is ended after serving the form or the default HTML page, ensuring no further modifications are made to the response.
 */
