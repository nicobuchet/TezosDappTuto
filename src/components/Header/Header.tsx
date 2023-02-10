import React, { useContext } from 'react'
import { WalletContext } from '../../context/Wallet.context'
import { getFormattedWalletAddress } from '../../utils/helpers/Wallet.helpers';
import {
    AppTitle,
    ConnectButton,
    HeaderWrapper,
    WalletBalanceLabel,
    WalletInfo
} from './Header.styled'

const Header = () => {
  const { 
    currentUserBalance,
    currentWalletAddress,
    disconnect,
    initWallet,
    isWalletConnected,
  } = useContext(WalletContext);

  return (
    <HeaderWrapper>
        <AppTitle>TicTacToe</AppTitle>
        <WalletInfo>
            {isWalletConnected && (
              <WalletBalanceLabel>{`Balance: ${currentUserBalance?.toFixed(2) || "--"} xtz`}</WalletBalanceLabel>
            )}
            <ConnectButton
              isConnected={isWalletConnected}
              onClick={isWalletConnected ? disconnect : initWallet}
            >
                {isWalletConnected ? 
                  getFormattedWalletAddress(currentWalletAddress || "") : 
                  "Connect Wallet"
                }
            </ConnectButton>
        </WalletInfo>
    </HeaderWrapper>
  )
}

export default Header;