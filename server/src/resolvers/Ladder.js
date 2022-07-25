const { prisma } = require('../data')

const id = (parent) => parent.id
const name = (parent) => parent.name
const startDate = (parent) => parent.startDate
const endDate = (parent) => parent.endDate
const players = (parent) => {
  return prisma.player.findMany({
    where: {
      ladders: {
        some: {
          ladderId: parent?.id
        }
      }
    }
  })
}

module.exports = {
  id,
  name,
  startDate,
  endDate,
  players
}
