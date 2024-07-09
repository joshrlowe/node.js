// Import the mongoConnect function from the database utility file
const mongoConnect = require("../util/database");

// Define the Product class to model the product data structure
class Product {
  // Constructor for creating a new instance of Product
  constructor(title, price, description, imageUrl, id) {
    this.title = title; // Title of the product
    this.price = price; // Price of the product
    this.description = description; // Description of the product
    this.imageUrl = imageUrl; // Image URL of the product
    // Note: The 'id' parameter is accepted but not used
  }

  // Placeholder for the save method to save product data to the database
  save() {
    // Implementation should go here
  }
}

// The following code is commented out and represents an alternative
// approach using Sequelize ORM for defining the Product model
/*
const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: Sequelize.STRING, // Title field of type string
  price: {
    type: Sequelize.DOUBLE, // Price field of type double
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING, // Image URL field of type string
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING, // Description field of type string
    allowNull: false,
  },
*/

module.exports = Product;
