import React, { FC, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { main } from './styles/theme.styled'

type ProvidersProps = {
    children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider theme={main}>{children}</ThemeProvider>
  )
}

export default Providers