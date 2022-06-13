const { prisma } = require('../data')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET } = require('../utils')

const signupPlayer = async (parent, args) => {
  const password = await bcrypt.hash(args.password, 10)
  const player = await prisma.player.create({
    data: {
      ...args,
      password
    }
  })

  const token = jwt.sign({ playerId: player.id }, APP_SECRET)

  return {
    token,
    player
  }
}

const login = async (parent, args) => {
  const player = await prisma.player.findUnique({
    where: {
      email: args.email
    }
  })
  if (!player) {
    throw new Error('No player found')
  }

  const valid = await bcrypt.compare(args.password, player.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  const token = jwt.sign({ playerId: player.id }, APP_SECRET)

  return {
    token,
    player
  }
}

module.exports = {
  signupPlayer,
  login
}
