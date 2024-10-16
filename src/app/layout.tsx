import React from 'react'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/registry'

import './globals.css'
import { Providers } from '@/providers'

const poppinsFont = Poppins({
  weight: ['400', '500', '600', '700', '900'],
  subsets: ['latin'],
  display: 'swap'
})
export const metadata: Metadata = {
  title: 'Boilerplate',
  description: 'Test development Boilerplate'
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
            <div className="content_page" style={{ height: '100vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem'}}>
      

              {children}
            </div>
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
