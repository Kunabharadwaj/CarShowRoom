import './globals.css'
import { Navbar } from '@/Components'
import {Footer }from '@/Components'

export const metadata = {
  title: 'Car Hub',
  description: 'Discover best cars in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
