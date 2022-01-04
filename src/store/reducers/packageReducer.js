import {
  BUY_PACKAGE,
  START_STREAM,
  PAUSE_STREAM,
  RESUME_STREAM,
  CANCEL_STREAM,
  CLEAR_DATA,
} from "../actions/actionTypes";

const initialState = {
  boughtPackage: {},
  isPackageBought: false,
  status: null,
};

const packageReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PACKAGE:
      return {
        ...state,
        boughtPackage: action.payload,
        isPackageBought: true,
      };
    case START_STREAM:
      return {
        ...state,
        status: "streaming",
      };
    case PAUSE_STREAM:
      return {
        ...state,
        status: "paused",
      };
    case RESUME_STREAM:
      return {
        ...state,
        status: "streaming",
      };
    case CANCEL_STREAM:
      return {
        ...state,
        status: "cancelled",
      };
    case CLEAR_DATA:
      return {
        boughtPackage: {},
        isPackageBought: false,
        status: null,
      };
    default:
      return state;
  }
};

export default packageReducer;
