const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  const eliott = await prisma.player.upsert({
    where: { email: 'eliott@tennisladder.com' },
    update: {},
    create: {
      email: 'eliott@tennisladder.com',
      fullName: 'Eliott',
    }
  })
}

main()
.catch(e => {
  console.error(e)
  process.exit(1)
})
.finally(async () => {
  await prisma.$disconnect()
})
