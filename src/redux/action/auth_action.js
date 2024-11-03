import reduxConstants from "../constants/reduxConstants";

// Login Action
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
// -------------------------------------------------------- //

// Logout Action
export const logoutActionLoad = (payload) => ({
  type: reduxConstants.LOGOUT_LOAD,
  payload,
});

export const logoutActionSuccess = (payload) => ({
  type: reduxConstants.LOGOUT_SUCCESS,
  payload,
});

export const logoutActionsFail = () => ({
  type: reduxConstants.LOGOUT_FAIL,
});
// -------------------------------------------------------- //