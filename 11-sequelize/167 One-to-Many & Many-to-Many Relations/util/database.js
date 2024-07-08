const Sequelize = require("sequelize");
const dbConfig = require("../config/dbConfig");

const sequelize = new Sequelize(
  dbConfig.db.database,
  dbConfig.db.user,
  dbConfig.db.password,
  {
    dialect: "mysql",
    host: dbConfig.db.host,
  },
);

module.exports = sequelize;
