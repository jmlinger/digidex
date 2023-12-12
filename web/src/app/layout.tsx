import Nav from './components/nav'
import { DigimonFilterContextProvider } from './contexts/filterContext'
import './globals.css'
import { Lato } from 'next/font/google'

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  display: 'swap',
  variable: '--font-bio-rhyme',
})

export const metadata = {
  title: 'Digidex',
  description: 'Find out how to make delicious cocktails',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${lato.className} overflow-x-hidden bg-newblue-950`}>
        <DigimonFilterContextProvider>
          <Nav />
          {children}
        </DigimonFilterContextProvider>
      </body>
    </html>
  )
}
