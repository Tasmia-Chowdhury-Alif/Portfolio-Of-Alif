import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Tasmia Chowdhury Alif | Backend-Focused Fullstack Developer',
  description: 'Backend-focused fullstack developer specializing in Django, DRF, React.js, and scalable web systems. 592+ coding problems solved with strong DSA and competitive programming background.',
  keywords: ['Backend Developer', 'Fullstack Developer', 'Django', 'React', 'Python', 'REST API', 'Web Developer', 'Bangladesh'],
  authors: [{ name: 'Tasmia Chowdhury Alif' }],
  creator: 'Tasmia Chowdhury Alif',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Tasmia Chowdhury Alif | Backend-Focused Fullstack Developer',
    description: 'Backend-focused fullstack developer specializing in Django, DRF, React.js, and scalable web systems.',
    siteName: 'Alif Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tasmia Chowdhury Alif | Backend-Focused Fullstack Developer',
    description: 'Backend-focused fullstack developer specializing in Django, DRF, React.js, and scalable web systems.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f5f7' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
