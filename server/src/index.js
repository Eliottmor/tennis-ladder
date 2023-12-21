const { ApolloServer } = require('apollo-server-express')
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core')
const express = require('express')
const http = require('http')
const cors = require('cors')
const {
  ApolloServerPluginLandingPageGraphQLPlayground
} = require('apollo-server-core')
const { typeDefs } = require('./schema')
const Query = require('./resolvers/Query')
const User = require('./resolvers/User')
const Mutation = require('./resolvers/Mutation')
const Ladder = require('./resolvers/Ladder')
const Date = require('./resolvers/custom-scalars/date')
const UstaInfo = require('./resolvers/UstaInfo')

const resolvers = {
  Query,
  Mutation,
  User,
  Ladder,
  Date,
  UstaInfo
}

const app = express()
app.use(cors())
app.use(express.json())

const httpServer = http.createServer(app)

const startApolloServer = async (app, httpServer) => {
  const server = new ApolloServer({
    resolvers,
    typeDefs,
    context: ({ req }) => {
      return {
        ...req,
        userId: req && req.headers.userid
      }
    },
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground(), ApolloServerPluginDrainHttpServer({ httpServer })]
  })

  await server.start()
  server.applyMiddleware({ app })
}

startApolloServer(app, httpServer)

module.exports = httpServer
