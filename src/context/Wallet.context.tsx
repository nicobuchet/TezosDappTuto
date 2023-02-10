import React, { createContext, ReactNode } from "react";
import useWallet from "../utils/hooks/useWallet";

type WalletContextProps = {
  currentUserBalance: number | undefined;
  currentWalletAddress: string | undefined;
  disconnectWallet: () => void;
  initWallet: () => void;
  isWalletConnected: boolean;
};

type WalletProviderProps = {
  children: ReactNode;
};

export const WalletContext = createContext({} as WalletContextProps);

const WalletProvider = ({ children }: WalletProviderProps) => {
  const {
    currentUserBalance,
    currentWalletAddress,
    disconnectWallet,
    isWalletConnected,
    initWallet,
  } = useWallet();

  return (
    <WalletContext.Provider
      value={{
        currentUserBalance,
        currentWalletAddress,
        disconnectWallet,
        initWallet,
        isWalletConnected,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export default WalletProvider;
