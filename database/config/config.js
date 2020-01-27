require("dotenv").config();

module.exports = {
  development: {
    username: process.env.POSTGRES_USERNAME_DEV,
    password: null,
    database: process.env.POSTGRES_DATABASE_DEV,
    host: "127.0.0.1",
    dialect: "postgres",
    seederStorage: "sequelize",
    operatorsAliases: false
  },
  test: {
    username: "root",
    password: null,
    database: "emosh_test",
    host: "127.0.0.1",
    dialect: "postgres",
    seederStorage: "sequelize",
    operatorsAliases: false
  },
  production: {
    username: process.env.POSTGRES_USERNAME_PROD,
    password: process.env.POSTGRES_PASSWORD_PROD,
    database: process.env.POSTGRES_DATABASE_PROD,
    host: process.env.POSTGRES_HOST_PROD,
    dialect: "postgres",
    seederStorage: "sequelize",
    operatorsAliases: false
  }
};
