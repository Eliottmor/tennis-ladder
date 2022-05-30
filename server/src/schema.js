const { gql } = require('apollo-server')

const typeDefs = gql`
  type Player {
    id: ID!
    email: String!
    fullName: String!
  }

  type Query {
    players: [Player!]!
    player(id: ID!): Player
  }

  type Mutation {
    createPlayer(email: String!, fullName: String!): Player
  }
`

module.exports = {
  typeDefs
}
