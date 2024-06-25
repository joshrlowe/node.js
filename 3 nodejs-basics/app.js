// Import the 'http' module to create an HTTP server
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    console.log(req); // Log the request object to the console
    res.end(); // End the response to avoid hanging
});

// The server listens on port 3000
server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

/* Explanation:
 * - The 'http' module is built into Node.js and allows for creating an HTTP server.
 * - http.createServer() creates a new server instance. The callback function is executed whenever the server receives a request.
 * - The 'req' object represents the incoming request and contains details such as headers, method, and URL.
 * - The 'res' object represents the outgoing response that will be sent back to the client.
 * - server.listen(3000) starts the server and makes it listen on port 3000 for incoming connections.
 * - Adding res.end() ensures that the response is properly ended, preventing the server from hanging.
 * - The optional callback function in server.listen() logs a message when the server starts listening on the specified port.
 */
