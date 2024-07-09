// Import the getDb function from the database utility file for database operations
const getDb = require("../util/database").getDb;

// Define the Product class to encapsulate product data and database operations
class Product {
  // Constructor initializes a new instance of the Product class with properties
  constructor(title, price, description, imageUrl, id) {
    this.title = title; // Set the product title
    this.price = price; // Set the product price
    this.description = description; // Set the product description
    this.imageUrl = imageUrl; // Set the product image URL
    this.id = id; // Set the product ID (optional for new products)
  }

  // Method to save the product instance to the database
  save() {
    const db = getDb(); // Get the database connection
    db.collection("products") // Access the "products" collection
      .insertOne(this) // Insert the current product instance
      .then((result) => {
        console.log(result); // Log the result of the operation
      })
      .catch((err) => {
        console.log(err); // Log any errors that occur during the operation
      });
  }
}

// Export the Product class to be used in other parts of the application
module.exports = Product;
