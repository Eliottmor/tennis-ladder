const { PrismaClient } = require('../../prisma/src/generated/prisma')

let prisma = new PrismaClient()

export default prisma