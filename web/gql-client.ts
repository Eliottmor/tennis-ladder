import { unstable_getServerSession } from 'next-auth'
import { authOptions } from './pages/api/auth/[...nextauth]'
import { GraphQLClient } from 'graphql-request'

export const client = async () => {
  const session = await unstable_getServerSession(authOptions)
  console.log(session)
  const client = new GraphQLClient(process.env.GRAPHQL_API_URL, {
    headers: {
      userId: session?.user?.id
    }}
  )
  return client
}
