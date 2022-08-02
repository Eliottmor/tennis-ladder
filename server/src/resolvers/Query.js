const { prisma } = require('../data')

const players = (parent) => {
  return prisma.player.findMany({})
}

const player = (parent, { id }) => {
  return prisma.player.findFirst({
    where: { id: Number(id) }
  })
}

const ladders = (parent) => {
  return prisma.ladder.findMany({})
}

module.exports = {
  players,
  player,
  ladders
}
