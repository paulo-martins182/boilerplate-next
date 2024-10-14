import React from 'react'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/registry'

import './globals.css'
import { Providers } from '@/providers'
import { Sidebar } from '@/components/Sidebar'

const poppinsFont = Poppins({
  weight: ['400', '500', '600', '700', '900'],
  subsets: ['latin'],
  display: 'swap'
})
export const metadata: Metadata = {
  title: 'Prolog Shop',
  description: 'Test development Prolog Shop'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={poppinsFont.className}>
        <StyledComponentsRegistry>
          <Providers>
            <div className="content_page">
              <Sidebar />

              <div className="content_layout">{children}</div>
            </div>
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
