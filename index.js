const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const routes = require('./routes');
const typeDefsRaw = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const app = express();

const typeDefs = gql`
  ${typeDefsRaw}
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.use('/api', routes);

const PORT = 3000;

app.listen(PORT, () =>
  console.log(
    `Express is live at localhost:${PORT} and graph endpoint at localhost:${PORT}${server.graphqlPath}`,
  ),
);
