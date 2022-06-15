import { AUTH } from '../constants/constants'

export const isAuthenticated = () => {
  if (typeof window == 'undefined') return
  const accessToken = localStorage.getItem(AUTH.token)
  if (!accessToken) return false
  return true
  // const token = JSON.parse(Buffer.from(accessToken.split('.')[1], 'base64'))
  // const epochTS = Math.round(new Date().getTime() / 1000)
  // return epochTS < token.exp
}
