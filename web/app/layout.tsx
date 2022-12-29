import { ReactNode } from 'react'
import './globals.css'
import Nav from '../components/Nav'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
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
