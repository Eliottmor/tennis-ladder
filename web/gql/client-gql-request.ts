'use client'
import request from 'graphql-request'
import { getSession } from 'next-auth/react'

export async function clientRequest(query, variables?) {
  const session = await getSession()
  const requestHeaders = { userId: session?.user?.id || 'no id' }
  return request({ url: process.env.NEXT_PUBLIC_GRAPHQL_API_URL || '', document: query, variables, requestHeaders })
}
