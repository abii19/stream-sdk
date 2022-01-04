import { CONNECT_WALLET, DISCONNECT_WALLET } from "./actionTypes";

export const connectWallet = () => {
  return {
    type: CONNECT_WALLET,
  };
};
export const disconnectWallet = () => {
  return {
    type: DISCONNECT_WALLET,
  };
};
