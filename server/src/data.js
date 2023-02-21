const { PrismaClient } = require('../../prisma/src/generated/prisma')

const prisma = new PrismaClient()

module.exports = {
  prisma
}
