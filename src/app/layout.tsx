import type { Metadata } from 'next'
import './globals.css'

import StyledComponentsRegistry from './../lib/registry'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Martim Fuhr',
  description: 'Welcome to my Portfolio',
  icons: {
    icon: '/favicon/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <StyledComponentsRegistry>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </StyledComponentsRegistry>
    </html>
  )
}
