const { prisma } = require('../data')

const createLadder = async (_parent, { name, startDate, endDate }) => {
  const foundLadder = await prisma.ladder.findUnique({
    where: {
      name
    }
  })

  if (foundLadder) throw new Error('Ladder with same name already exists.')

  const ladder = await prisma.ladder.create({
    data: {
      name,
      startDate,
      endDate
    }
  })

  return ladder
}

const addUserToLadder = async (_parent, { userId, ladderId }) => {
  const ladderPlayer = await prisma.ladderUsers.create({
    data: {
      userId: userId,
      ladderId: Number(ladderId)
    },
    include: {
      user: true,
      ladder: true
    }
  })

  return ladderPlayer
}

module.exports = {
  createLadder,
  addUserToLadder
}
