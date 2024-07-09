// Import the MongoDB package
const mongodb = require("mongodb");

// Import the getDb function from the database utility file for database operations
const getDb = require("../util/database").getDb;

// Define the Product class to encapsulate product data and database operations
class Product {
  // Constructor initializes a new instance of the Product class with properties
  constructor(title, price, description, imageUrl) {
    this.title = title; // Set the product title
    this.price = price; // Set the product price
    this.description = description; // Set the product description
    this.imageUrl = imageUrl; // Set the product image URL
  }

  // Method to save the product instance to the database
  save() {
    const db = getDb(); // Get the database connection
    return db
      .collection("products") // Access the "products" collection
      .insertOne(this) // Insert the current product instance
      .then((result) => {
        console.log(result); // Log the result of the operation
      })
      .catch((err) => {
        console.log(err); // Log any errors that occur during the operation
      });
  }

  static fetchAll() {
    const db = getDb(); // Get the database connection
    return db
      .collection("products") // Access the "products" collection
      .find() // Find all documents in the collection without any filter
      .toArray() // Convert the result to an array
      .then((products) => {
        console.log(products); // Log the products fetched from the database
        return products; // Return the array of products
      })
      .catch((err) => {
        console.log(err); // Log any errors that occur during the fetch operation
      });
  }

  static findById(prodId) {
    const db = getDb(); // Get the database connection
    return db
      .collection("products") // Access the "products" collection
      .find({ _id: new mongodb.ObjectId(prodId) }) // Find a product by its ID
      .next() // Return the next document in the result set
      .then((product) => {
        console.log(product); // Log the product fetched from the database
        return product; // Return the product
      })
      .catch((err) => {
        console.log(err); // Log any errors that occur during the fetch operation
      });
  }
}

// Export the Product class to be used in other parts of the application
module.exports = Product;
