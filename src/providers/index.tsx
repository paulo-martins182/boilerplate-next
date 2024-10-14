'use client'
import GlobalStyles from '@/styles/global'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  )
}
