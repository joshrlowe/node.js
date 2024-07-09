const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

class Product {
  constructor(title, price, description, imageUrl, id) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this._id = id; // Set the product ID
  }

  save() {
    const db = getDb();
    let dbOp; // Variable to hold the database operation promise
    if (this._id) {
      // If the product already has an ID, it exists, so update it
      // Convert _id from string to ObjectId for MongoDB and update the product
      dbOp = db
        .collection("products")
        .updateOne({ _id: new mongodb.ObjectId(this._id) }, { $set: this });
    } else {
      // If the product doesn't have an ID, it's new, so insert it
      dbOp = db.collection("products").insertOne(this);
    }
    // Return the promise from the database operation
    return dbOp
      .then((result) => {
        // console.log(result); // Log the result of the database operation
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection("products")
      .find()
      .toArray()
      .then((products) => {
        return products;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static findById(prodId) {
    const db = getDb();
    return db
      .collection("products")
      .find({ _id: new mongodb.ObjectId(prodId) })
      .next()
      .then((product) => {
        return new Product(
          product.title,
          product.price,
          product.description,
          product.imageUrl,
          product._id,
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = Product;
