// Import the MongoDB module and MongoClient class
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

// Import database configuration from dbConfig file
const dbConfig = require("../config/dbConfig");

// Declare a variable to hold the database connection
let _db;

/**
 * Function to connect to MongoDB database using MongoClient.
 * @param {Function} callback - A callback function that is called after the connection is successful.
 */
const mongoConnect = (callback) => {
  // Use MongoClient to connect to the database with the connection string constructed from dbConfig
  MongoClient.connect(
    // Construct the MongoDB connection string using credentials and parameters from dbConfig
    `mongodb+srv://${dbConfig.db.username}:${dbConfig.db.password}@${dbConfig.db.host}/?retryWrites=true&w=majority&appName=${dbConfig.db.appName}`,
  )
    .then((client) => {
      // Log connection success message
      console.log("Connected!");
      // Store the database connection in _db for use across the application
      _db = client.db(); // Optionally, a specific database name can be passed as an argument
      callback(); // Execute the callback function to signal successful connection
    })
    .catch((err) => {
      // Log any errors that occur during the connection attempt
      console.log(err);
      throw err; // Rethrow the error to handle it in the calling code
    });
};

const getDb = () => {
  // Check if the database connection exists
  if (_db) {
    // Return the existing connection if it exists
    return _db;
  }
  // If no connection exists, throw an error
  throw "No database found!";
};

exports.mongoConnect = mongoConnect; // Export the mongoConnect function for use in other files
exports.getDb = getDb; // Export the getDb function for use in other files
