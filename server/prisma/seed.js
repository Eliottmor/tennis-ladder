const { PrismaClient } = require('@prisma/client')
const users = require('./usersSeed')
const ladders = require('./laddersSeed')
const usersInLadder = require('./usersInLadderSeed')

const prisma = new PrismaClient()

async function main() {
  await prisma.user.createMany({
    data: users
  })

  await prisma.ladder.createMany({
    data: ladders
  })

  await prisma.ladderUsers.createMany({
    data: usersInLadder
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
