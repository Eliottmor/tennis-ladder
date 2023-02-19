import { gql } from 'graphql-request'
import { gqlRequest } from '../../gql-client'
import PlayersPage from './playersPage'

const GetAllPlayers = gql`
  {
    players {
      id
      email
      fullName
      image
      phoneNumber
      fallbackImgText
      ladders {
        id
        name
      }
    }
  }
`

export default async function Players() {
  const data = await gqlRequest(GetAllPlayers)

  return (
    <PlayersPage players={data?.players} />
  )
}