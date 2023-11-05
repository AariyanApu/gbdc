import NavBar from '@/components/Navbar'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import Footer from '@/sections/Footer'
import { regularFont } from '@/utils/fonts'
// const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GBDC - Give Blood, Save Lives',
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
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
