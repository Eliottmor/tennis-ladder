import { gql } from 'graphql-request'
import { gqlRequest } from '../../gql-client'
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
  const data = await gqlRequest(GetAllLadders)
  
  return (
    <LaddersPage ladders={data?.ladders} />
  )
}