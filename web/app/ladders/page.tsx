import { gql } from 'graphql-request'
import { serverRequest } from '../../server-gql-request'
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
  const data = await serverRequest(GetAllLadders)
  
  return (
    <LaddersPage ladders={data?.ladders} />
  )
}