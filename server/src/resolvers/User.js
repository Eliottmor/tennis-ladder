const { prisma } = require('../data')

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


module.exports = {
  id,
  email,
  fullName,
  ladders,
  image,
  fallbackImgText,
  ustaInfo
}