import {
  BUY_PACKAGE,
  START_STREAM,
  PAUSE_STREAM,
  RESUME_STREAM,
  CANCEL_STREAM,
  CLEAR_DATA,
} from "./actionTypes";

export const buyPackage = (data) => {
  return {
    type: BUY_PACKAGE,
    payload: data,
  };
};

export const startStream = () => {
  return {
    type: START_STREAM,
  };
};
export const pauseStream = () => {
  return {
    type: PAUSE_STREAM,
  };
};
export const resumeStream = () => {
  return {
    type: RESUME_STREAM,
  };
};
export const cancelStream = () => {
  return async (dispatch) => {
    dispatch({
      type: CANCEL_STREAM,
    });
    setTimeout(() => {
      dispatch({
        type: CLEAR_DATA,
      });
    }, 2000);
  };
};
