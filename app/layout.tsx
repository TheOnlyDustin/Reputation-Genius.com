import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react'

import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  title: 'Reputation Genius - AI-Powered Reputation Management for Local Businesses',
  description: 'Transform your online presence with AI-powered reputation management, automated follow-up systems, and comprehensive review management for service businesses.',
  keywords: 'reputation management, online reviews, AI chatbot, business automation, local SEO, review management',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Reputation Genius - AI-Powered Reputation Management',
    description: 'Transform your online presence with AI-powered reputation management for service businesses.',
    type: 'website',
    url: 'https://reputation-genius.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-background text-text-primary antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
