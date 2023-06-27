const { gql } = require('apollo-server')

const typeDefs = gql`
  scalar Date

  """
  A type that describes the tennis player.
  """
  type User {
    id: String!
    email: String!
    firstName: String
    lastName: String
    phoneNumber: String
    "Combination of first and last name"
    fullName: String
    "Profile image"
    image: String
    "Fall back text which is just first letter of first and last name"
    fallbackImgText: String
    ladders: [Ladder]
    ustaInfo: UstaInfo
  }

  """
  Usta information based on the user
  """
  type UstaInfo {
    "Usta Number"
    id: String
    ustaNumber: String
    ntrpRating: String
    user: User
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

  type LadderUsers {
    userId: String!
    ladderId: ID!
    user: User!
    ladder: Ladder!
  }

  type Set {
    setNumber: Int!
    matchWinnerScore: Int!
    matchLoserScore: Int!
    matchWinnerTiebreakScore: Int
    matchLoserTiebreakScore: Int
  }

  type Match {
    matchDate: Date!
    winnerOne: User
    loserOne: User
    sets: [Set]
  }

  type Query {
    players: [User!]!
    currentUser: User
    getUserById(userId: String!): User
    ladders: [Ladder!]!
  }

  input UpdateUserByIdInput {
    userId: String!
    firstName: String
    lastName: String
    email: String
    phoneNumber: String
    ntrpRating: String
    ustaNumber: String
  }

  input ReportMatchUsersByIdsInput {
    winnerOneId: String!
    loserOneId: String!
  }

  input ReportMatchSetsInput {
    setNumber: Int!
    matchWinnerScore: Int!
    matchLoserScore: Int!
    matchWinnerTiebreakScore: Int
    matchLoserTiebreakScore: Int
  }

  type Mutation {
    "Create a new ladder for players to join"  
    createLadder(name: String!, startDate: Date!, endDate: Date!): Ladder!
    addUserToLadder(userId: String!, ladderId: ID!): LadderUsers!
    updateUserById(input: UpdateUserByIdInput!): User
    reportMatch(usersInput: ReportMatchUsersByIdsInput!, setsInput: [ReportMatchSetsInput]!): Match
  }
`

module.exports = {
  typeDefs
}
