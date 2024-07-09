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
    // Database saving logic will be implemented here
  }
}

// Export the Product class to be used in other parts of the application
module.exports = Product;

// Note: The commented-out code below is an alternative approach using Sequelize ORM
// for defining the Product model. It's kept for reference or future use.
/*
const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: Sequelize.STRING, // Define the title field with type string
  price: {
    type: Sequelize.DOUBLE, // Define the price field with type double
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING, // Define the imageUrl field with type string
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING, // Define the description field with type string
    allowNull: false,
  },
});
*/
