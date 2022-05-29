const { prisma } = require('./data.js');

const Player = {
  id: (parent, args, context, info) => parent.id,
  email: (parent) => parent.email,
  fullName: (parent) => parent.fullName
}

const Query = {
  players: (parent, args) => {
    return prisma.player.findMany({})
  },
  player: (parent, { id }) => {
    return prisma.player.findFirst({
      where: { id: Number(id)}
    })
  }
}

const Mutation = {
  createPlayer: (parent, { email, fullName }) => {
    return prisma.player.create({
      data: {
        email,
        fullName
      }
    })
  }
}

const resolvers = { Player, Query, Mutation }

module.exports = {
  resolvers
}
