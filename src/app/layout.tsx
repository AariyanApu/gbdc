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
  title: {
    default: 'GBDC - Give Blood, Save Life | Blood Donation Organization Bangladesh',
    template: '%s | GBDC - Blood Donation Bangladesh'
  },
  description:
    'GBDC is Bangladesh\'s leading blood donation organization, connecting donors with recipients in emergencies. Join our mission to save lives through voluntary blood donation.',
  keywords: [
    'blood donation',
    'blood donor',
    'blood bank',
    'Bangladesh blood donation',
    'emergency blood',
    'voluntary blood donation',
    'save lives',
    'GBDC',
    'blood donation organization',
    'blood donation campaign'
  ],
  authors: [{ name: 'GBDC Team' }],
  creator: 'GBDC',
  publisher: 'GBDC',
  manifest: '/manifest.json',
  viewport:
    'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
  metadataBase: new URL('https://www.gbdcbd.org'),
  alternates: {
    canonical: 'https://www.gbdcbd.org'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.gbdcbd.org',
    title: 'GBDC - Give Blood, Save Life | Blood Donation Organization Bangladesh',
    description: 'Join GBDC\'s mission to save lives through voluntary blood donation in Bangladesh. Connect with donors, find blood in emergencies, and be a hero.',
    siteName: 'GBDC',
    images: [
      {
        url: '/assets/banner/banner.webp',
        width: 1200,
        height: 630,
        alt: 'GBDC Blood Donation Organization'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GBDC - Give Blood, Save Life | Blood Donation Bangladesh',
    description: 'Join GBDC\'s mission to save lives through voluntary blood donation in Bangladesh.',
    images: ['/assets/banner/banner.webp']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "GBDC",
  "description": "Bangladesh's leading blood donation organization connecting donors with recipients in emergencies",
  "url": "https://www.gbdcbd.org",
  "logo": "https://www.gbdcbd.org/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Emergency Blood Request",
    "areaServed": "Bangladesh",
    "availableLanguage": ["English", "Bengali"]
  },
  "areaServed": {
    "@type": "Country",
    "name": "Bangladesh"
  },
  "knowsAbout": [
    "Blood Donation",
    "Emergency Blood Services",
    "Voluntary Blood Donation",
    "Blood Bank Services"
  ],
  "sameAs": [
    "https://www.facebook.com/gbdcbd",
    "https://www.twitter.com/gbdcbd"
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
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
