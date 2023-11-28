import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/config/auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'An Example of AuthJS'
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session} basePath='/auth'>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
