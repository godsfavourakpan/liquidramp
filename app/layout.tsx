import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LiquidRamp - On-Ramp Dashboard',
  description: 'LiquidRamp - Your trusted on-ramp solution for digital assets',
  generator: 'Next.js',
  keywords: ['crypto', 'on-ramp', 'digital assets', 'trading', 'dashboard'],
  authors: [{ name: 'LiquidRamp Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
