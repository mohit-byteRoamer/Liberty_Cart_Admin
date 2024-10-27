import reduxConstants from "../constants/reduxConstants";

export const logInActionLoad = (payload) => ({
  type: reduxConstants.LOGIN_LOAD,
  payload,
});

export const logInActionSuccess = (payload) => ({
  type: reduxConstants.LOGIN_SUCCESS,
  payload,
});

export const logInActionsFail = () => ({
  type: reduxConstants.LOGIN_FAIL,
});
