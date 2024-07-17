# Working with Errors

## When an Error is Thrown

**Synchronous Code: `try-catch`**

1. **Usage**:

   - Wrap code blocks that might throw errors in a `try` block.
   - Handle errors in the `catch` block.

2. **Advantages**:

   - Immediate handling of errors.
   - Keeps the error handling code close to the error-throwing code.

3. **Example**:

   ```javascript
   try {
     // Code that might throw an error
   } catch (error) {
     // Handle the error
   }
   ```

**Asynchronous Code: `then().catch()`**

1. **Usage**:

   - Chain a `catch` method to a promise to handle any errors that occur in the asynchronous operation.

2. **Advantages**:

   - Provides a clear, chainable way to handle errors in promise-based asynchronous code.

3. **Example**:

   ```javascript
   asyncFunction()
     .then((result) => {
       // Handle result
     })
     .catch((error) => {
       // Handle error
     });
   ```

**Asynchronous Code: `async-await` with `try-catch`**

1. **Usage**:

   - Use `try-catch` blocks around `await` expressions in asynchronous functions.

2. **Advantages**:

   - More readable and synchronous-looking code.
   - Consolidates error handling for asynchronous code in one place.

3. **Example**:

   ```javascript
   async function asyncFunction() {
     try {
       const result = await asyncOperation();
       // Handle result
     } catch (error) {
       // Handle error
     }
   }
   ```

## Direct Handling vs. Express Error Handling

1. **Directly Handle Error**:

   - Used for immediate error handling logic that doesn't need to propagate further.
   - Examples include logging errors, displaying error messages to users, or performing cleanup tasks.

2. **Use Express Error Handling Function**:

   - Middleware for handling errors in an Express application.
   - Allows centralized error handling logic and consistent error responses.
   - Example:

     ```javascript
     app.use((error, req, res, next) => {
       res.status(500).json({ message: error.message });
     });
     ```

## When No Error is Thrown

1. **Validate Values**:

   - Ensure input values and conditions are validated to prevent errors.
   - This can include type checking, range validation, and required field checks.

2. **Throw Error**:

   - Explicitly throw an error if validation fails.
   - Helps maintain consistent error handling flow.
   - Example:

     ```javascript
     if (!isValid) {
       throw new Error("Validation failed");
     }
     ```

3. **Directly Handle "Error"**:
   - Handle non-exceptional error conditions, such as user input errors or missing data.
   - Provide user feedback or retry mechanisms.

# Different Types of Errors

## Technical/Network Errors

- **Examples**:

  - MongoDB server is down.
  - Network connectivity issues.
  - API endpoint not reachable.

- **Handling**:
  - Show error page to the user.
  - Log the error for further investigation.
  - Implement retry mechanisms or alternative actions if possible.

## "Expected" Errors

- **Examples**:

  - File can't be read.
  - Database operation fails (e.g., unique constraint violation).

- **Handling**:
  - Inform the user about the error.
  - Provide possible solutions or retry options.
  - Log the error for debugging purposes.

## Bugs/Logical Errors

- **Examples**:

  - User object used when it doesn't exist.
  - Incorrect business logic or data manipulation.

- **Handling**:
  - Fix the error during development.
  - Add tests to prevent recurrence.
  - Refactor code to improve clarity and robustness.

# Summary

- **Synchronous Errors**: Use `try-catch` blocks for immediate error handling.
- **Asynchronous Errors**: Use `then().catch()` or `async-await` with `try-catch` for handling asynchronous errors.
- **Validation**: Always validate inputs to prevent errors and handle validation failures appropriately.
- **Different Error Types**:
  - Handle technical/network errors by informing users and logging the issue.
  - Manage expected errors by providing user feedback and logging.
  - Fix bugs and logical errors during development and add preventive measures like tests.

Understanding these principles and properly implementing error handling mechanisms ensures robust, user-friendly, and maintainable applications.
