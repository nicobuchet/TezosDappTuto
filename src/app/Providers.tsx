import React, { FC, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import GameProvider from '../context/Game.context'
import WalletProvider from '../context/Wallet.context'
import { main } from './styles/theme.styled'

type ProvidersProps = {
    children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider theme={main}>
      <WalletProvider>
        <GameProvider>
          {children}
        </GameProvider>
      </WalletProvider>
    </ThemeProvider>
  )
}

export default Providers