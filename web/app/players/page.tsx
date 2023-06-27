import { gql } from 'graphql-request'
import { serverRequest } from '@gql/server-gql-request'
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
  const data = await serverRequest(GetAllPlayers)

  return (
    <PlayersPage players={data?.players} />
  )
}