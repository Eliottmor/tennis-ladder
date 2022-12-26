/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState, useContext, useCallback, useMemo, useEffect } from 'react'
import { AUTH } from './constants/constants'

const PlayerContext = createContext({
  signIn: () => {},
  signOut: () => {},
  player: null
})

// eslint-disable-next-line react/prop-types
const PlayerContextProvider = ({ children }) => {
  const [player, setPlayer] = useState()

  const signOut = useCallback(() => {
    localStorage.removeItem(AUTH.token)
    localStorage.removeItem(AUTH.player)
    setPlayer(null)
  }, [])

  const signIn = useCallback((player, token) => {
    localStorage.setItem(AUTH.token, token)
    localStorage.setItem(AUTH.player, JSON.stringify(player))
    setPlayer(player)
  })

  useEffect(() => {
    const restorePlayer = () => {
      const player = localStorage.getItem(AUTH.player)
      if (player) {
        const decodedPlayer = JSON.parse(player)
        setPlayer(decodedPlayer)
      }
    }
    restorePlayer()
  }, [])

  const contextValue = useMemo(
    () => ({
      signIn,
      signOut,
      player
    }),
    [signIn, signOut, player]
  )

  return <PlayerContext.Provider value={contextValue}>{children}</PlayerContext.Provider>
}

export const usePlayerContext = () => {
  const context = useContext(PlayerContext)

  if (context === undefined) {
    throw new Error('usePlayerContext was used outside of its Provider')
  }

  return context
}

export default PlayerContextProvider
