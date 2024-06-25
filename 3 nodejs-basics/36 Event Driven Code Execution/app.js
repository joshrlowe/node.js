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
      fs.writeFileSync("message.txt", message); // Write the message to a file

      // Redirecting after writing the message
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end(); // End the response after redirecting
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
 * - Event-Driven Execution: Node.js is built on an event-driven architecture, meaning it uses events to handle asynchronous operations.
 * - If the result of req.on("end", callback) was not returned, then the subsequent code for handling other URLs would execute and be returned as a response, despite that not being the intent when we send a POST request to /message.
 * - req.on("data", callback): The 'data' event is triggered when a new chunk of data is available in the request body. The callback function receives each chunk.
 * - req.on("end", callback): The 'end' event is triggered when all chunks of data have been received. The callback function processes the complete data.
 * - Buffer.concat(body): This method concatenates all the chunks in the 'body' array into a single Buffer object, which is then converted to a string.
 * - fs.writeFileSync("message.txt", message): This method writes the extracted message to 'message.txt'. It is a synchronous operation, meaning it blocks further execution until the file is written.
 * - res.statusCode = 302 and res.setHeader("Location", "/"): These lines set the status code to 302 (indicating a redirect) and the 'Location' header to '/', redirecting the client to the root URL after the message is processed.
 */
