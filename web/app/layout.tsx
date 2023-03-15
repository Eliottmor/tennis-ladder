import { ReactNode } from 'react'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import './globals.css'
import Nav from '@ui/Nav'

interface LayoutProps {
  children: ReactNode
}

export default async function Layout({ children }: LayoutProps) {
  const session = await getServerSession(authOptions)

  return (
    <html lang='en'>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <head></head>
      <body>
        <header>
          <Nav session={session} />
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
