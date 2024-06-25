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
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];

    // Listening to the 'data' event to collect chunks of data
    req.on("data", (chunk) => {
      body.push(chunk);
      console.log(chunk); // Log each chunk of data received
    });

    // Listening to the 'end' event to process the complete data
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString(); // Concatenate and convert the body to string
      const message = parsedBody.split("=")[1]; // Extract the message value
      console.log(message); // Log the extracted message

      // Write the message to a file asynchronously
      fs.writeFile("message.txt", message, (err) => {
        if (err) {
          console.error(err); // Log any errors that occur during file writing
        }
        // Redirecting after writing the message
        res.statusCode = 302; // Set status code to 302 for redirection
        res.setHeader("Location", "/"); // Set Location header to redirect to root URL
        res.end(); // End the response after redirecting
      });
    });
  }

  // Handling other URLs
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
});

// The server listens on port 3000
server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

/* Additional Explanation:
 * - fs.writeFile("message.txt", message, callback): This method writes data to a file asynchronously. It takes a callback function that is executed once the file write operation is complete.
 * - Asynchronous File Writing: Unlike fs.writeFileSync, which blocks the execution until the file is written, fs.writeFile performs the operation asynchronously, allowing the server to handle other tasks in the meantime.
 * - Error Handling in File Writing: The callback function for fs.writeFile includes an error parameter (err) that allows you to handle any errors that occur during the file write operation.
 * - res.statusCode = 302 and res.setHeader("Location", "/"): These lines set the response status code to 302 (for redirection) and the 'Location' header to '/', instructing the client to navigate back to the root URL after the POST request is processed.
 */
