import NavBar from '@/components/Navbar'
import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/sections/Footer'
import { regularFont } from '@/utils/fonts'
import AuthProvider from '@/utils/AuthProvider'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'GBDC - Save Lives',
  description:
    "GBDC is a dynamic web app revolutionizing blood donation, instantly linking heroes who give with lives that need saving. Seamlessly connecting donors and recipients, it's a beacon of hope in emergencies.",
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
