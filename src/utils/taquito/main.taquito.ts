import { BeaconWallet } from "@taquito/beacon-wallet";
import { TezosToolkit } from "@taquito/taquito";

export const tezos = new TezosToolkit(
  process.env.REACT_APP_RPC_ADDRESS as string
);

const options = {
  name: "TicTacToe",
  preferredNetwork: process.env.REACT_APP_NETWORK as string,
};

const network = {
  type: process.env.REACT_APP_NETWORK as string,
  name: "TicTacToe",
  rpcUrl: process.env.REACT_APP_RPC_ADDRESS as string,
};

// @ts-ignore
export const wallet = new BeaconWallet(options);

/**
 * Request user permission to connect to wallet
 * @returns BeaconWallet object
 */
export const setProvider = async () => {
  const activeAccount = await wallet.client.getActiveAccount();

  if (activeAccount) {
    tezos.setProvider({ wallet });
    return wallet;
  }
  // @ts-ignore
  await wallet.requestPermissions({ network });
  tezos.setProvider({ wallet });
  return wallet;
};

/**
 * Returns if user's wallet is connected
 * @returns boolean
 */
export const isConnected = async () => {
  const activeAccount = await wallet.client.getActiveAccount();
  if (activeAccount) {
    tezos.setProvider({ wallet });
    return true;
  }
  return false;
};

/**
 * This will disconnect user's wallet
 * and clear all active accounts
 * @returns void
 */
export const disconnectWallet = async () => {
  try {
    await wallet.clearActiveAccount();
    tezos.setWalletProvider(wallet);
  } catch (error) {
    throw new Error("Error : " + error);
  }
};

/**
 * Get user XTZ Balance from user wallet
 * @param from address of the user to get balance from
 * @returns promise | boolean
 */
export const getBalance = (from: string) => {
  try {
    return tezos.tz.getBalance(from);
  } catch (error) {
    throw new Error("Error : " + error);
  }
};
