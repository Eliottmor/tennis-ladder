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

const createLadder = async (parent, { name, startDate, endDate }) => {
  const foundLadder = await prisma.ladder.findUnique({ 
    where: {
     name
    }
  })

  if (foundLadder) throw new Error('Ladder with same name already exists.')

  const ladder = await prisma.ladder.create({
    data: {
      name,
      startDate,
      endDate
    }
  })

  return ladder
}

const addPlayerToLadder = async (parent, { playerId, ladderId }) => {
  const ladderPlayer = await prisma.ladderPlayers.create({
    data: {
      playerId: Number(playerId),
      ladderId: Number(ladderId)
    },
    include: {
      player: true,
      ladder: true
    }
  })

  return ladderPlayer
}

module.exports = {
  signupPlayer,
  login,
  createLadder, 
  addPlayerToLadder
}
