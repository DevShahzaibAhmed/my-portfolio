import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LayoutRouter } from 'next/dist/server/app-render/entry-base'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


export const metadata: Metadata = {
  title: 'Shahzaib Ahmed',
  description: 'Personal Portfolio WebSite',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}

