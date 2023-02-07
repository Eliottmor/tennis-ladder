import { gql } from 'graphql-request'
import { client } from '../../../gql-client'

const query = gql`
  query GetUserById($userId: String!) {
    getUserById(userId:$userId) {
      id
      email
    }
  }
`

export default async function Profile({ params }) {
  const userId = params?.userId
  const gqlClient = await client()
  const { getUserById } = await gqlClient.request(query, { userId })

  return (
    <div className='p-16'>
      <div>
        {getUserById?.id}
      </div>
      {getUserById?.email}
    </div>
  )
}