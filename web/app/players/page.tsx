import { gql } from 'graphql-request'
import { client } from '../../gql-client'
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
  const gqlClient = await client()
  const data = await gqlClient.request(GetAllPlayers)

  return (
    <PlayersPage players={data?.players} />
  )
}