import type { Metadata, Viewport } from 'next'
import { headers } from 'next/headers'
import { Geist, Instrument_Serif } from 'next/font/google'
import { getLocalizedMetadata } from '@/lib/metadata'
import { siteConfig } from '@/lib/site-config'
import './globals.css'

const geist = Geist({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-geist',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  ...getLocalizedMetadata('en'),
  metadataBase: siteConfig.origin,
  applicationName: siteConfig.name,
  creator: siteConfig.name,
  publisher: siteConfig.name,
  icons: {
    icon: [
      { url: '/luma-icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/luma-icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/luma-icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/luma-apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#F7F5F0',
  width: 'device-width',
  initialScale: 1,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const requestHeaders = await headers()
  const locale = requestHeaders.get('x-luma-locale') === 'tr' ? 'tr' : 'en'

  return (
    <html lang={locale} className={`${geist.variable} ${instrumentSerif.variable}`}>
      <body>{children}</body>
    </html>
  )
}
