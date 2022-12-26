import './globals.css'

interface RootLayoutProps {
  children: JSX.Element
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <body>{children}</body>
    </html>
  )
}
