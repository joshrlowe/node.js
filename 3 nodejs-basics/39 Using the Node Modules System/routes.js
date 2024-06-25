const fs = require("fs");

const requestHandler = (req, res) => {
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
};

// Export the request handler and additional text as an object
module.exports = {
  handler: requestHandler,
  someText: "Some Hardcoded Text",
};

// module.exports = requestHandler

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some Hardcoded Text';

// exports.handler = requestHandler;
// exports.someText = 'Some Hardcoded Text';

/* Additional Explanation:
 * - Exporting Multiple Properties: The module.exports object is used to export multiple properties from the module.
 * - handler: The requestHandler function is assigned to the 'handler' property.
 * - someText: A string is assigned to the 'someText' property.
 * - Alternative Export Methods: Commented out examples show different ways to export multiple properties from a module using module.exports and exports.
 */
