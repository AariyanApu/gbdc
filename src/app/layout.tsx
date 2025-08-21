import NavBar from '@/components/Navbar'
import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/sections/Footer'
import { Analytics } from '@vercel/analytics/react'
import AuthProvider from '@/auth/AuthProvider'
import { Toaster } from 'react-hot-toast'
import { Inter } from 'next/font/google'
import AppBar from '@/components/AppBar'

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'GBDC - Give Blood, Save Life',
  description:
    "GBDC is a dynamic web app revolutionizing blood donation, instantly linking heroes who give with lives that need saving. Seamlessly connecting donors and recipients, it's a beacon of hope in emergencies.",
  manifest: '/manifest.json',
  viewport:
    'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
  metadataBase: new URL('https://www.gbdcbd.org'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <NavBar />
          <AppBar />
          {children}
          <Toaster />
          <Footer />
          <Analytics />
        </AuthProvider>
      </body>
    </html>
  )
}
