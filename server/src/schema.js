const { gql } = require('apollo-server')

const typeDefs = gql`
  scalar Date

  """
  A type that describes the tennis player.
  """
  type User {
    id: ID!
    email: String!
    firstName: String!
    lastName: String!
    "Combination of first and last name"
    fullName: String!
    ladders: [Ladder]
  }

  """
  A tennis ladder that a player can sign up to join.
  """
  type Ladder {
    id: ID!
    name: String!
    startDate: Date!
    "Date the ladder ends"
    endDate: Date!
    players: [User]
  }

  type LadderPlayers {
    userId: ID!
    ladderId: ID!
    user: User!
    ladder: Ladder!
  }

  type Query {
    players: [User!]!
    currentUser: User
    ladders: [Ladder!]!
  }

  type Mutation {
    "Create a new ladder for players to join"  
    createLadder(name: String!, startDate: Date!, endDate: Date!): Ladder!
    addPlayerToLadder(playerId: ID!, ladderId: ID!): LadderPlayers!
  }
`

module.exports = {
  typeDefs
}
