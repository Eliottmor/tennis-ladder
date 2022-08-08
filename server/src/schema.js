const { gql } = require('apollo-server')

const typeDefs = gql`
  scalar Date

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
    players: [Player]
  }

  type AuthPayload {
    token: String
    player: Player
  }

  type LadderPlayers {
    playerId: ID!
    ladderId: ID!
    player: Player!
    ladder: Ladder!
  }

  type Query {
    players: [Player!]!
    currentPlayer: Player
    ladders: [Ladder!]!
  }

  type Mutation {
    "Creates a new tennis player with password that is supplied."
    signupPlayer(
      email: String!
      password: String!
      firstName: String!
      lastName: String!
    ): AuthPayload
    "Login the tennis player"
    login(email: String!, password: String!): AuthPayload
    createLadder(name: String!, startDate: Date!, endDate: Date!): Ladder!
    addPlayerToLadder(playerId: ID!, ladderId: ID!): LadderPlayers!
  }
`

module.exports = {
  typeDefs
}
