const getPlayerId = (req, authToken) => {
  if (req) {
    const authHeader = req.headers.authorization
    if (authHeader) {
      const token = authHeader.replace('Bearer ', '')
      if (!token) {
        throw new Error('No token found')
      }
      const { playerId } = getTokenPayload(token)
      return playerId
    }
  } else if (authToken) {
    const { playerId } = getTokenPayload(authToken)
    return playerId
  }

  throw new Error('Not authenticated')
}

module.exports = {
  getPlayerId
}