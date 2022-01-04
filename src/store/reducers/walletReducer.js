import { CONNECT_WALLET, DISCONNECT_WALLET } from "../actions/actionTypes";

const initialState = {
  isWalletConnected: false,
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONNECT_WALLET:
      return {
        ...state,
        isWalletConnected: true,
      };
    case DISCONNECT_WALLET:
      return {
        ...state,
        isWalletConnected: false,
      };
    default:
      return state;
  }
};

export default walletReducer;
