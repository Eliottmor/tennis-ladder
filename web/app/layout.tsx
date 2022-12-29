import { ReactNode } from 'react'
import { unstable_getServerSession } from 'next-auth/next'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import './globals.css'
import Nav from '../components/Nav'

interface LayoutProps {
  children: ReactNode
}

export default async function Layout({ children }: LayoutProps) {
  const session = await unstable_getServerSession(authOptions)
  console.log(session)

  return (
    <html lang='en'>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <head></head>
      <body>
        <header>
          <Nav />
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
