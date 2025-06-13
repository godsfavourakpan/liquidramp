import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LiquidRamp - On-Ramp Dashboard',
  description: 'LiquidRamp - Your trusted on-ramp solution for digital assets',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
