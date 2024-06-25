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
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString(); // Concatenate and convert the body to string
      const message = parsedBody.split("=")[1]; // Extract the message value
      console.log(message); // Log the extracted message
      fs.writeFileSync("message.txt", message); // Write the message to a file

      // Redirecting after writing the message
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end(); // End the response after redirecting
    });

    return;
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
 * - Data Events: The 'data' event is emitted whenever a new chunk of data is received in the request body. We collect these chunks in the 'body' array.
 * - End Event: The 'end' event is emitted when all data has been received. We process the collected chunks here.
 * - Buffer.concat(body): This method is used to concatenate all the chunks into a single Buffer object, which is then converted to a string.
 * - Parsing the Body: The parsedBody.split('=')[1] extracts the value of the 'message' field from the form data.
 * - Writing to File: fs.writeFileSync('message.txt', message) writes the extracted message to 'message.txt'.
 * - Redirection: After writing to the file, the response is redirected to the root URL with status code 302.
 */
