require("dotenv").config();

module.exports = {
  development: {
    username: "postgres",
    password: null,
    database: "emosh_development",
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: false
  },
  test: {
    username: "root",
    password: null,
    database: "emosh_test",
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: false
  },
  production: {
    username: process.env.POSTGRES_USERNAME_PROD,
    password: process.env.POSTGRES_PASSWORD_PROD,
    database: process.env.POSTGRES_DATABASE_PROD,
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: false
  }
};
