const { prisma } = require('../data')

const id = (parent) => parent.id
const email = (parent) => parent.email
const fullName = (parent) => `${parent.firstName} ${parent.lastName}`
const ladders = (parent) => {
  return prisma.player.findUnique({
    where: { id: parent?.id }
  }).ladders()
}

module.exports = {
  id, 
  email,
  fullName,
  ladders
}