const { PrismaClient } = require('../../prisma/src/generated/prisma')
const users = require('./usersSeed')
const ladders = require('./laddersSeed')
const usersInLadder = require('./usersInLadderSeed')

const prisma = new PrismaClient()

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
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
