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


module.exports = {
  id,
  email,
  fullName,
  ladders
}