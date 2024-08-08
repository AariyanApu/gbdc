import NavBar from '@/components/Navbar'
import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/sections/Footer'
import { regularFont } from '@/utils/fonts'
import { Analytics } from '@vercel/analytics/react'
import AuthProvider from '@/auth/AuthProvider'

export const metadata: Metadata = {
  title: 'GBDC - Give Blood, Save Life',
  description:
    "GBDC is a dynamic web app revolutionizing blood donation, instantly linking heroes who give with lives that need saving. Seamlessly connecting donors and recipients, it's a beacon of hope in emergencies.",
  manifest: '/manifest.json',
  viewport:
    'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
  metadataBase: new URL('https://www.gbdcbangladesh.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={regularFont.className}>
        <AuthProvider>
          <NavBar />
          {children}
          <Footer />
          <Analytics />
        </AuthProvider>
      </body>
    </html>
  )
}
