# Module Summary: Express.js

## What is Express.js?

- **Definition**: Express.js is a Node.js framework that adds utility functions, tools, and a clear set of rules for building applications.
- **Extensibility**: It's highly extensible and allows other packages to be plugged into it as middleware.

## Routing

- **Filtering Requests**: You can filter requests by path and method.
- **Path Matching**:
  - If filtered by method, paths are matched exactly.
  - Otherwise, the first segment of a URL is matched.
- **Express.Router**: Use `express.Router` to split your routes across files elegantly.

## Middleware, next(), and res()

- **Middleware Functions**:
  - Express.js relies heavily on middleware functions, which can be easily added using the `use()` method.
  - Middleware functions handle a request and should call `next()` to forward the request to the next function in line or send a response.

## Serve Files

- **Serving Content**:
  - You're not limited to serving dummy text as a response.
  - You can use `sendFile()` to serve HTML files and other types of files to users.
- **Static Serving**:
  - If a request is made directly for a file (e.g., a .css file), you can enable static serving for such files using `express.static()`.
