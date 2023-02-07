import { gql } from 'graphql-request'
import { client } from '../../gql-client'
import LaddersPage from './laddersPage'

const GetAllLadders = gql`
  {
    ladders {
      id
      name
      startDate
      endDate
    }
  }
`

export default async function Ladders() {
  const gqlClient = await client()
  const data = await gqlClient.request(GetAllLadders)
  
  return (
    <LaddersPage ladders={data?.ladders} />
  )
}