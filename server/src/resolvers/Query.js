const { prisma } = require('../data')

const players = (parent) => {
  return prisma.player.findMany({})
}

const currentPlayer = (_parent, _args, context) => {
  return prisma.player.findUnique({
    where: { id: Number(context?.playerId) }
  })
}

const ladders = (parent) => {
  return prisma.ladder.findMany({})
}

module.exports = {
  players,
  currentPlayer,
  ladders
}
