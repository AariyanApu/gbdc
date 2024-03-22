import NavBar from '@/components/Navbar'
import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/sections/Footer'
import { regularFont } from '@/utils/fonts'
import AuthProvider from '@/utils/AuthProvider'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'GBDC - Give Blood, Save Life',
  description:
    "GBDC is a dynamic web app revolutionizing blood donation, instantly linking heroes who give with lives that need saving. Seamlessly connecting donors and recipients, it's a beacon of hope in emergencies.",
  manifest: '/manifest.json',
  viewport:
    'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
  openGraph: {
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
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
