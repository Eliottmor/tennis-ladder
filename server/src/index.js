const { ApolloServer } = require('apollo-server')
const {
  ApolloServerPluginLandingPageGraphQLPlayground
} = require('apollo-server-core')
const { typeDefs } = require('./schema')
const { getPlayerId } = require('./utils')
const Query = require('./resolvers/Query')
const User = require('./resolvers/User')
const Mutation = require('./resolvers/Mutation')
const Ladder = require('./resolvers/Ladder')
const Date = require('./resolvers/custom-scalars/date')
const UstaInfo = require('./resolvers/UstaInfo')

const port = process.env.PORT || 4000

const resolvers = {
  Query,
  Mutation,
  User,
  Ladder,
  Date,
  UstaInfo
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
