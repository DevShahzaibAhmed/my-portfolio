import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LayoutRouter } from 'next/dist/server/app-render/entry-base'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <Navbar toggleSidebar={undefined}/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}

