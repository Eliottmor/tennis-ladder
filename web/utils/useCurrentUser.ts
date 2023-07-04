'use client'
import { gql } from 'graphql-request'
import { clientRequest } from '@gql/client-gql-request'
import { useEffect, useState } from 'react'
import { User } from '../types/user'

const query = gql`
  query GetCurrentUser {
    currentUser {
      id
      image
      firstName
      lastName
      fullName
      phoneNumber
      email
      fallbackImgText
      ustaInfo {
        ustaNumber
        ntrpRating
      }
    }
  }
`

interface UseCurrentUserResult {
  isLoading: boolean
  currentUser: User | undefined
  error: unknown
}

export const useCurrentUser = (): UseCurrentUserResult => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState()
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    const getUser = async () => {
      try {
        setIsLoading(true)
        const data =  await clientRequest(query)
        setCurrentUser(data?.currentUser)
        setIsLoading(false)
      } catch (error) {
        setError(error)
        setIsLoading(false)
      }
    }
    getUser()
  }, [])

  return { isLoading, currentUser, error }
}