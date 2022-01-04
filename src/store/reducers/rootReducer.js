import { combineReducers } from "redux";
import packageReducer from "./packageReducer";
import walletReducer from "./walletReducer";

const rootReducer = combineReducers({
  packages: packageReducer,
  wallet: walletReducer,
});
export default rootReducer;
