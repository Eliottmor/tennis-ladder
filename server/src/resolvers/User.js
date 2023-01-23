const { prisma } = require('../data')

const id = (parent) => parent.id
const email = (parent) => parent.email
const fullName = (parent) => `${parent.firstName} ${parent.lastName}`
const ladders = (parent) => {
  return prisma.ladder.findMany({
    where: {
      users: {
        some: { userId: parent?.id }
      }
    }
  })
}
const image = (parent) => parent.image
const fallbackImgText = (parent) => `${parent.firstName?.charAt() || ''}${parent.lastName?.charAt() || ''}`


module.exports = {
  id,
  email,
  fullName,
  ladders,
  image,
  fallbackImgText
}