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

const login = async (parent, { password, email }) => {
  const player = await prisma.player.findUnique({
    where: { email }
  })

  const valid = await bcrypt.compare(password.trim(), player?.password || '')

  if (!valid || !player) {
    throw new Error('Invalid email or password')
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
