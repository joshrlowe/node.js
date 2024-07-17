# Module Summary: Types of Errors & Handling Errors

## Types of Errors & Handling Errors

### Differentiating Between Errors

- **Technical Errors**: These are errors that occur due to system or network issues. They are usually unexpected and include scenarios such as server downtime, network failures, or missing files.
- **Expected Errors**: These are errors anticipated by the application logic, typically due to invalid user input or expected edge cases. Examples include form validation errors or resource not found errors.

### Error Handling Techniques

- **Custom if-checks**: Use conditional statements to check for specific error conditions and handle them appropriately within the code.

  ```javascript
  if (!user) {
    throw new Error("User not found");
  }
  ```

- **Try-Catch Blocks**: Wrap code that may throw errors within a try block and handle any errors in the catch block.

  ```javascript
  try {
    // Code that may throw an error
  } catch (error) {
    console.error(error);
  }
  ```

- **Promise .then().catch()**: Handle errors in asynchronous operations by chaining a catch method to a promise.

  ```javascript
  asyncFunction()
    .then((result) => {
      // Handle result
    })
    .catch((error) => {
      console.error(error);
    });
  ```

- **Express Error Handling Middleware**: Use Express.js middleware to catch and handle errors throughout the application.

  ```javascript
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
  });
  ```

## Errors & Status Codes

### Setting Appropriate HTTP Status Codes

- **Purpose**: Setting the correct HTTP status code in responses helps communicate the nature of the error to the client (e.g., browser or API consumer).
- **Categories of Status Codes**:
  - **Success (2xx)**: Indicates that the request was successfully received, understood, and accepted.
    - Example: `200 OK`, `201 Created`
  - **Redirection (3xx)**: Indicates that further action needs to be taken by the user agent in order to fulfill the request.
    - Example: `301 Moved Permanently`, `302 Found`
  - **Client-side Errors (4xx)**: Indicates errors caused by the client, such as invalid requests.
    - Example: `400 Bad Request`, `404 Not Found`
  - **Server-side Errors (5xx)**: Indicates errors caused by the server.
    - Example: `500 Internal Server Error`, `502 Bad Gateway`

### Importance of Setting Status Codes

- **Clarification**: Setting the correct status code provides clarity on what went wrong, which is crucial for debugging and user experience.
- **Does Not Indicate Incompleteness**: Setting status codes does not imply that the response is incomplete or that the application has crashed; rather, it provides structured feedback on the result of the request.

### Examples

- **Successful Response**:

  ```javascript
  res.status(200).json({ message: "Success!" });
  ```

- **Client Error Response**:

  ```javascript
  res.status(404).json({ message: "Resource not found" });
  ```

- **Server Error Response**:

  ```javascript
  res.status(500).json({ message: "Internal Server Error" });
  ```

### Summary

Understanding and handling different types of errors effectively ensures that applications are robust and user-friendly. Utilizing proper error handling techniques and setting appropriate HTTP status codes are critical for clear communication and maintaining the reliability of web applications.
