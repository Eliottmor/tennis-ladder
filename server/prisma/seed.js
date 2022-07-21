const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  const eliott = await prisma.player.upsert({
    where: { email: 'eliott@tennisladder.com' },
    update: {},
    create: {
      email: 'eliott@tennisladder.com',
      firstName: 'Eliott',
      lastName: 'Tennis',
      password: 'test'
    }
  })

  const today = new Date()
  const tenDaysLater = new Date()
  tenDaysLater.setDate(today.getDate() + 10)

  const uvFall = await prisma.ladder.upsert({
    where: { name: 'Utah Valley Fall' },
    update: {},
    create: {
      name: 'Utah Valley Fall',
      startDate: today,
      endDate: tenDaysLater
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
