// Import the MongoDB module and MongoClient class
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

// Import database configuration from dbConfig file
const dbConfig = require("../config/dbConfig");

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
    .then((result) => {
      // Log connection success message
      console.log("Connected!");
      // Invoke the callback function with the result (client object) on successful connection
      callback(result);
    })
    .catch((err) => {
      // Log any errors that occur during connection
      console.log(err);
    });
};

// Export the mongoConnect function to be used in other parts of the application
module.exports = mongoConnect;
