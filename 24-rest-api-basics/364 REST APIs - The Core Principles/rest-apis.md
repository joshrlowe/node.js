# What are REST APIs?

**REST** (Representational State Transfer) is an architectural style for designing networked applications. It relies on a stateless, client-server communication protocol—almost always HTTP, e.g., not storing any sessions.

**API** (Application Programming Interface) is a set of rules that allows one piece of software to talk to another. It defines the kinds of calls or requests that can be made, how to make them, the data formats that should be used, and the conventions to follow.

So, a **REST API** is an API that adheres to the principles of REST. It's a way to interact with web services in a simple, scalable, and decoupled manner.

## Core Principles of REST APIs

1. **Statelessness**:

   - Each request from a client to the server must contain all the information the server needs to understand and process the request. This means no client context is stored on the server between requests.
   - Example: When making a request to get user data, the server doesn’t remember the previous requests. Each request is independent.

2. **Client-Server Architecture**:

   - The client (user's machine) and the server (where the API resides) are separate entities that communicate over a network.
   - The client handles the user interface and user state, while the server handles data storage and processing. This separation allows for scalability and flexibility.

3. **Uniform Interface**:

   - A standardized way of communicating between the client and the server, simplifying and decoupling the architecture. This is typically done using HTTP methods:
     - **GET**: Retrieve data from the server.
     - **POST**: Send data to the server to create a new resource.
     - **PUT**: Update an existing resource on the server.
     - **DELETE**: Remove a resource from the server.
   - Example: To get user data, you might make a `GET` request to `https://api.example.com/users/123`.

4. **Resource-Based**:

   - Everything in a REST API is considered a resource, and each resource is identified by a URI (Uniform Resource Identifier).
   - Example: In an e-commerce system, resources might include `/products`, `/orders`, `/users`, each accessible via unique URIs.

5. **Representations**:

   - Clients interact with resources using representations, such as JSON or XML. The server sends back the current state of the resource in the requested format.
   - Example: A `GET` request to `/products/1` might return a JSON representation of the product:

     ```json
     {
       "id": 1,
       "name": "Laptop",
       "price": 1200
     }
     ```

6. **Layered System**:

   - A client doesn’t need to know whether it’s directly connected to the end server or an intermediary. Intermediaries (like load balancers or caches) can improve system scalability and security.

7. **Cacheable**:

   - Responses from the server should indicate whether they are cacheable or not. This allows clients to store responses and reuse them to improve performance.
   - Example: Responses can include HTTP headers like `Cache-Control` to specify caching behavior.

8. **Code on Demand (Optional)**:
   - Servers can extend client functionality by transferring executable code. This is optional and not commonly used.
   - Example: Sending JavaScript code to a client to execute within a web application.

## Example of a REST API Interaction

Imagine you're building a to-do list application. You want to interact with the server to manage your tasks.

- **Create a new task**:
  - `POST /tasks`
  - Body: `{ "title": "Buy groceries", "completed": false }`
- **Retrieve all tasks**:
  - `GET /tasks`
- **Update a task**:
  - `PUT /tasks/1`
  - Body: `{ "title": "Buy groceries", "completed": true }`
- **Delete a task**:
  - `DELETE /tasks/1`

Each interaction follows the REST principles, ensuring that the API is easy to use, scalable, and maintainable.

In summary, REST APIs allow different systems to communicate over the web using standard HTTP methods and URIs. They are designed to be stateless, resource-based, and follow a uniform interface, making them versatile and widely used in web development.
