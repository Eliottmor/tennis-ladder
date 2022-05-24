const { players } = require('./data.js')

const resolvers = {
  Player: {
    id: (parent, args, context, info) => parent.id,
    email: (parent) => parent.email,
    fullName: (parent) => parent.fullName
  },

  Query: {
    players: (parent, args) => {
      return players
    },
    player: (parent, { id }) => {
      return players.find(player => Number(id) === player.id)
    }
  },

  Mutation: {
    enrollPlayer: (parent, { email, fullName }) => {
      players.push({
        id: players.length + 1,
        email: email,
        fullName: fullName
      })
      return players[players.length - 1]
    }
  }
}

module.exports = {
  resolvers
}