# Module Summary

## Dynamic Routing

- **Dynamic Path Segments**:

  - You can pass dynamic path segments by adding a `:` to the Express router path.
  - This is useful for creating flexible and reusable routes in your application.

- **Extraction of Dynamic Data**:

  - The name you add after the `:` is the name by which you can extract the data on `req.params`.
  - For example, if you define a route as `/products/:productId`, you can access the `productId` value in your request handler using `req.params.productId`.

- **Optional (Query) Parameters**:
  - Optional parameters can be included in the URL as query parameters.
  - These parameters are added after a `?` in the URL and can be multiple, separated by `&`.
  - For example: `/products?param=value&b=2`.
  - You can extract these query parameters using `req.query.myParam`.

## More on Models

- **Cart Model**:

  - A Cart model was added which holds static methods only.
  - Static methods are methods that belong to the class itself, rather than to instances of the class.

- **Interacting Between Models**:

  - You can interact between models. For example, you can delete a cart item if a product is deleted.
  - This highlights the importance of understanding the relationships and interactions between different models in your application.

- **File Storage Limitations**:
  - Working with files for data storage is suboptimal for handling larger amounts of data.
  - As the data grows, file-based storage can become inefficient and slow.
  - This indicates a need for considering more robust storage solutions (like databases) for larger and more complex datasets.
