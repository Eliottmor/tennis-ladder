const { prisma } = require('../data')

const id = (parent) => parent?.id || parent?.ladder.id
const name = (parent) => parent.name || parent?.ladder.name
const startDate = (parent) => parent.startDate
const endDate = (parent) => parent.endDate
const players = (parent) => {
  return prisma.ladder.findUnique({
    where: { id: parent.id }
  }).users()
}

module.exports = {
  id,
  name,
  startDate,
  endDate,
  players
}
