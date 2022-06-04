const { ApolloServer } = require('apollo-server')
const { typeDefs } = require('./schema')
const { getPlayerId } = require('./utils');
const Query = require('./resolvers/Query')
const Player = require('./resolvers/Player')
const Mutation = require('./resolvers/Mutation')

const port = process.env.PORT || 4000;

const resolvers = {
  Query,
  Mutation, 
  Player
}

const server = new ApolloServer({
  resolvers,
  typeDefs,
  context: ({ req }) => {
    return {
      ...req,
      playerId: 
        req && req.headers.authorization ? getPlayerId(req) : null
    }
  }
});

server.listen({ port }, () => console.log(`Server runs at: http://localhost:${port}`));
