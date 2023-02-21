import { getServerSession } from 'next-auth'
import { authOptions } from './pages/api/auth/[...nextauth]'
import { GraphQLClient, request } from 'graphql-request'

export async function serverRequest(query, variables?) {
  const session = await getServerSession(authOptions)
  return request(process.env.GRAPHQL_API_URL, query, variables, { userId: session?.user?.id })
}

export const gqlClient = new GraphQLClient(process.env.GRAPHQL_API_URL)
