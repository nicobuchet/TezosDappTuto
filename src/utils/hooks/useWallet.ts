import { useState, useEffect } from "react";
import {
  disconnectWallet,
  getBalance,
  isConnected,
  setProvider,
} from "../../utils/taquito/main.taquito";

const useWallet = () => {
    const [currentUserBalance, setCurrentUserBalance] = useState<number>();
    const [currentWalletAddress, setCurrentWalletAddress] = useState<string>();
    const [isWalletConnected, setIsWalletConnected] = useState<boolean>(false);

    const initWallet = async () => {
        try {
            const wallet = await setProvider();
            const userAddress = await wallet.getPKH();

            setIsWalletConnected(true);
            setCurrentWalletAddress(userAddress);
            
            const balance = getBalance(userAddress);
            balance.then((res) => {
                setCurrentUserBalance(res.toNumber() * 10 ** -6);
            });
        } catch (error) {
            throw new Error("Error : " + error);
        }
    };

    const disconnect = () => {
        disconnectWallet();
        setIsWalletConnected(false);
        setCurrentWalletAddress(undefined);
        setCurrentUserBalance(undefined);
    }

    useEffect(() => {
        isConnected().then((res: boolean) => {
            res && initWallet();
        });
    }, []);

    return {
        currentUserBalance,
        currentWalletAddress,
        disconnect,
        initWallet,
        isWalletConnected,
    };
};

export default useWallet;
