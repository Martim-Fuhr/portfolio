import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import StyledComponentsRegistry from './../lib/registry'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { PageWipe } from '@/components/motion/PageWipe'

const themeInit = `
try {
  var stored = localStorage.getItem('theme');
  var theme = stored === 'light' || stored === 'dark'
    ? stored
    : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  document.documentElement.dataset.theme = theme;
} catch (e) {
  document.documentElement.dataset.theme = 'dark';
}
`

export const metadata: Metadata = {
  title: 'Martim Fuhr',
  description: 'Seja bem-vindo à meu portfolio!',
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
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInit}
        </Script>
        <StyledComponentsRegistry>
          <PageWipe />
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
