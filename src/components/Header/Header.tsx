import React from 'react'
import {
    AppTitle,
    ConnectButton,
    HeaderWrapper,
    WalletBalanceLabel,
    WalletInfo
} from './Header.styled'

const Header = () => {
  return (
    <HeaderWrapper>
        <AppTitle>TicTacToe</AppTitle>
        <WalletInfo>
            <WalletBalanceLabel>Balance: 1.2 xtz</WalletBalanceLabel>
            <ConnectButton>Connect Wallet</ConnectButton>
        </WalletInfo>
    </HeaderWrapper>
  )
}

export default Header;