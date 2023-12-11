import type { Metadata } from 'next'
import './globals.css'
import { Header } from './components/Layout'

export const metadata: Metadata = {
  title: 'Annvision',
  description: 'Annual vision app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='m-0 overflow-hidden bg-black-100'>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
