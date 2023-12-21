const { ApolloServer } = require('apollo-server-express')
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core')
const express = require('express')
const http = require('http')
const cors = require('cors')
const {
  ApolloServerPluginLandingPageGraphQLPlayground
} = require('apollo-server-core')
const { typeDefs } = require('./src/schema')
const Query = require('./src/resolvers/Query')
const User = require('./src/resolvers/User')
const Mutation = require('./src/resolvers/Mutation')
const Ladder = require('./src/resolvers/Ladder')
const Date = require('./src/resolvers/custom-scalars/date')
const UstaInfo = require('./src/resolvers/UstaInfo')

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
