import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Reputation Genius - AI-Powered Reputation Management for Local Businesses',
  description: 'Transform your online presence with AI-powered reputation management, automated follow-up systems, and comprehensive review management for service businesses.',
  keywords: 'reputation management, online reviews, AI chatbot, business automation, local SEO, review management',
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
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
