const { prisma } = require('../data');

const players = (parent) => {
  return prisma.player.findMany({})
}

const player = (parent, { id }) => {
  return prisma.player.findFirst({
    where: { id: Number(id)}
  })
}

module.exports = {
  players,
  player
}