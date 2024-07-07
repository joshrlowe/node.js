const mysql = require("mysql2");
const dbConfig = require("../config/dbConfig");

const pool = mysql.createPool({
  host: dbConfig.db.host,
  user: dbConfig.db.user,
  password: dbConfig.db.password,
  database: dbConfig.db.database,
});

module.exports = pool.promise();
