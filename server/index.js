const express = require("express");
const routes = require("../routes");

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app });

// server.use("/api", routes);

module.exports = server;
