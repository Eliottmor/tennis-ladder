const prisma = require('../src/data')
const users = require('./usersSeed')
const ladders = require('./laddersSeed')
const usersInLadder = require('./usersInLadderSeed')

async function main() {
  await prisma.ladder.createMany({
    data: ladders
  })

  await prisma.user.create({
    data: users[0]
  })

  await prisma.user.create({
    data: users[1]
  })

  await prisma.user.create({
    data: users[2]
  })

  await prisma.user.create({
    data: users[3]
  })

  await prisma.ustaInfo.create({
    data: {
      userId: 'clc9fmosa00039p56h616vlm1',
      ntrpRating: '4.5',
      ustaNumber: '222763281'
    }
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
