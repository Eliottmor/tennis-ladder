const prisma = require('../data')

const id = (parent) => parent.id
const email = (parent) => parent.email
const fullName = (parent) => `${parent.firstName} ${parent.lastName}`
const ladders = (parent) => {
  return prisma.user.findUnique({
    where: { id: parent.id }
  }).ladders()
}
const image = (parent) => parent.image
const fallbackImgText = (parent) => `${parent.firstName?.charAt() || ''}${parent.lastName?.charAt() || ''}`
const ustaInfo = (parent) => {
  return prisma.ustaInfo.findUnique({
    where: { userId: parent.id }
  })
}

const matches = (parent) => {
  return prisma.match.findMany({
    where: {
      OR: [
        { winnerOneId: parent.id },
        { winnerTwoId: parent.id },
        { loserOneId: parent.id },
        { loserTwoId: parent.id },
      ]
    },
    include: {
      sets: true,
      winnerOne: true,
      loserOne: true
    }
  },
  )
}


module.exports = {
  id,
  email,
  fullName,
  ladders,
  image,
  fallbackImgText,
  ustaInfo,
  matches
}