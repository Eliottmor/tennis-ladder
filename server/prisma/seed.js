const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')
const players = require('./playersSeed')
const ladders = require('./laddersSeed')
const playersInLadder = require('./playersInLadderSeed')

const prisma = new PrismaClient()

async function main() {
  const password = await bcrypt.hash('test', 10)
  const playersWithPassword = players.map(player => {
    return {
      ...player,
      password
    }
  })
  
  await prisma.player.createMany({
    data: playersWithPassword
  })

  await prisma.ladder.createMany({
    data: ladders
  })

  await prisma.ladderPlayers.createMany({
    data: playersInLadder
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
