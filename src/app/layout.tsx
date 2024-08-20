import type { Metadata } from 'next'
import './globals.css'
import StyledComponentsRegistry from './../lib/registry'

import dynamic from 'next/dynamic'

const HeaderDynamic = dynamic(() => import('@/components/Header'), {
  ssr: false,
})

const FooterDynamic = dynamic(() => import('@/components/Footer'), {
  ssr: false,
})

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
    <html lang="pt-BR">
      <StyledComponentsRegistry>
        <body>
          <HeaderDynamic />
          {children}
          <FooterDynamic />
        </body>
      </StyledComponentsRegistry>
    </html>
  )
}
