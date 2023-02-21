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

const updateUserById = async (_parent, { input }) => {
  const { userId, firstName, lastName, phoneNumber, email, ustaNumber, ntrpRating } = input
  const user = await prisma.user.update({
    where: { id: userId },
    data: {
      firstName,
      lastName,
      email,
      phoneNumber,
      ustaInfo: {
        upsert: {
          create: { ustaNumber, ntrpRating },
          update: { ustaNumber, ntrpRating }
        }
      }
    }
  })

  return user
}

module.exports = {
  createLadder,
  addUserToLadder,
  updateUserById
}
