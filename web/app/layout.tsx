import './globals.css'
import Nav from '../components/Nav'

interface RootLayoutProps {
  children: JSX.Element
}

export default function RootLayout({ children }: RootLayoutProps) {
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
