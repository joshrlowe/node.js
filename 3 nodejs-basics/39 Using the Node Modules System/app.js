const http = require("http");
const routes = require("./routes");

console.log(routes.someText); // Log the 'someText' property from the routes module

const server = http.createServer(routes.handler); // Use the 'handler' property as the request handler

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

/* Additional Explanation:
 * - Logging Properties: The 'someText' property from the routes module is logged to demonstrate how to access properties exported from a module.
 * - Using the Request Handler: The 'handler' property from the routes module is used as the request handler for the HTTP server.
 */
