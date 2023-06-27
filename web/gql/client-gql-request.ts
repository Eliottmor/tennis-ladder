'use client'
import request from 'graphql-request'
import { getSession } from 'next-auth/react'

export async function clientRequest(query, variables?) {
  const session = await getSession()
  return request(process.env.NEXT_PUBLIC_GRAPHQL_API_URL, query, variables, { userId: session?.user?.id })
}
