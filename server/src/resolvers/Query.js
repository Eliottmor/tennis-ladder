const { prisma } = require('../data')

const players = (parent) => {
  return prisma.user.findMany({})
}

const currentUser = (_parent, _args, context) => {
  return prisma.user.findUnique({
    where: { id: context?.userId }
  })
}

const ladders = (parent) => {
  return prisma.ladder.findMany({})
}

module.exports = {
  players,
  currentUser,
  ladders
}
