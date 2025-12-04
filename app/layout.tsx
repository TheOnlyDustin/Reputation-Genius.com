import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react'

import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' })

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
  twitter: {
    card: 'summary_large_image',
    title: 'Reputation Genius - AI-Powered Reputation Management',
    description: 'Transform your online presence with AI-powered reputation management for service businesses.',
    site: '@reputationgenius',
    creator: '@reputationgenius',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-background text-text-primary antialiased`}>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-KW5ZJDR4');`}
        </Script>
        <Script
          id="json-ld-organization"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Reputation Genius",
            "url": "https://reputation-genius.com",
            "logo": "https://storage.googleapis.com/msgsndr/Aq4SPW5yrSyHopkShcOW/media/67a9038e4325e13c49599a50.png",
            "description": "AI-Powered Reputation Management for Local Businesses",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-413-798-8836",
              "contactType": "customer service",
              "email": "contact@reputation-genius.com"
            },
            "sameAs": [
              "https://www.facebook.com/reputationgenius",
              "https://twitter.com/reputationgenius",
              "https://www.linkedin.com/company/reputationgenius",
              "https://www.instagram.com/reputationgenius"
            ]
          })}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KW5ZJDR4"
            height="0"
            width="0"
            className="hidden invisible"
          />
        </noscript>
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
