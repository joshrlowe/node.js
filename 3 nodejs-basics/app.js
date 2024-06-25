const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req); // Log the request object to the console
    res.end(); // End the response to avoid hanging

    process.exit(); // Exit the Node.js process immediately
});

// The server listens on port 3000
server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

/* Additional Explanation:
 * - process.exit(): This method terminates the Node.js process immediately. 
 *   - A process exit code can be passed as an argument (e.g., process.exit(0) for a successful exit, or process.exit(1) for an error).
 *   - Using process.exit() in the request handler will stop the server after handling the first request.
 *   - Be cautious with process.exit() as it will terminate the process abruptly, potentially causing unsaved data or incomplete operations.
 */
