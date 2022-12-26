import { AUTH } from '../constants/constants'

export const isAuthenticated = () => {
  if (typeof window == 'undefined') return
  const accessToken = localStorage.getItem(AUTH.token)
  if (!accessToken) return false
  return true
}
