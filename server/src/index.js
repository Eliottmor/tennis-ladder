const { ApolloServer } = require('apollo-server')
const {
  ApolloServerPluginLandingPageGraphQLPlayground
} = require('apollo-server-core')
const { typeDefs } = require('./schema')
const { getPlayerId } = require('./utils')
const Query = require('./resolvers/Query')
const Player = require('./resolvers/Player')
const Mutation = require('./resolvers/Mutation')
const Ladder = require('./resolvers/Ladder')

const port = process.env.PORT || 4000

const resolvers = {
  Query,
  Mutation,
  Player,
  Ladder
}

const server = new ApolloServer({
  resolvers,
  typeDefs,
  context: ({ req }) => {
    return {
      ...req,
      playerId: req && req.headers.authorization ? getPlayerId(req) : null
    }
  },
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
})

server.listen({ port }, () =>
  console.log(`Server runs at: http://localhost:${port}`)
)
