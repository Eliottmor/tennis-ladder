import { getServerSession } from 'next-auth'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import { GraphQLClient, request } from 'graphql-request'

export async function serverRequest(query, variables?) {
  const session = await getServerSession(authOptions)
  const requestHeaders = { userId: session?.user?.id || 'no id' }
  return request({ url: process.env.NEXT_PUBLIC_GRAPHQL_API_URL || '', document: query, variables, requestHeaders })
}

export const gqlClient = new GraphQLClient(process.env.GRAPHQL_API_URL || '')
