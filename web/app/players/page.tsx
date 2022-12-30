import { gql } from 'graphql-request'
import { client } from '../../gql-client'

const GetAllPlayers = gql`
  {
    players {
      id
      email
    }
  }
`

export default async function Players() {
  const gqlClient = await client()
  const data = await gqlClient.request(GetAllPlayers)
  console.log(data)
  return (<div className='p-12'>{data?.players.map(player => <div key={player?.id}>{player?.email}</div>)}</div>)
}