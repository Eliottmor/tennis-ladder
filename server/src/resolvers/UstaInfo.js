const { prisma } = require('../data')

const id = (parent) => parent.id
const ustaNumber = (parent) => parent.ustaNumber
const ntrpRating = (parent) => parent.ntrpRating
const user = (parent) => {
  return prisma.user.findUnique({
    where: { id: parent.userId }
  })
}


module.exports = {
  id,
  ustaNumber,
  ntrpRating,
  user
}