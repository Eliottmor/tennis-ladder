const { gql } = require('apollo-server')

const typeDefs = gql`
"""
A type that describes the tennis player. 
"""
  type Player {
    id: ID!
    email: String!
    firstName: String!
    lastName: String!
     "Combination of first and last name"
    fullName: String!
  }

  type AuthPayload {
    token: String
    player: Player
  }

  type Query {
    players: [Player!]!
    player(id: ID!): Player
  }

  type Mutation {
    "Creates a new tennis player with password that is supplied."
    signupPlayer(email: String!, password: String!, firstName: String!, lastName: String!): AuthPayload
    "Login the tennis player"
    login(email: String!, password: String!): AuthPayload
  }
`

module.exports = {
  typeDefs
}
