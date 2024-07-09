const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const dbConfig = require("../config/dbConfig");
let _db;

/**
 * Function to connect to MongoDB database using MongoClient.
 * @param {Function} callback - A callback function that is called after the connection is successful.
 */
const mongoConnect = (callback) => {
  MongoClient.connect(
    `mongodb+srv://${dbConfig.db.username}:${dbConfig.db.password}@${dbConfig.db.host}/?retryWrites=true&w=majority&appName=${dbConfig.db.appName}`,
  )
    .then((client) => {
      console.log("Connected!");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
