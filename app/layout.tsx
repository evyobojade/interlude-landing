import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/components/LanguageProvider'
import CookieBanner from '@/components/CookieBanner'
import InstallPrompt from '@/components/InstallPrompt'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

export const metadata = {
  title: 'Interlüde — Turn your layover into a story',
  description: 'Meet fellow travelers during your layover. Explore cities together. Never miss your flight.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Interlüde',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Interlüde" />
        <meta name="theme-color" content="#0f0e17" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${playfair.variable} ${dmSans.variable}`}>
        <LanguageProvider>
          {children}
        <CookieBanner />
        <InstallPrompt />
        </LanguageProvider>
      </body>
    </html>
  )
}