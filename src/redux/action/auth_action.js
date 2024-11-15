import reduxConstants from "../constants/reduxConstants";

// --------------------- LOGIN ACTION --------------------- //
export const logInActionLoad = (payload) => ({
  type: reduxConstants.LOGIN_LOAD,
  payload,
});

export const logInActionSuccess = (payload) => ({
  type: reduxConstants.LOGIN_SUCCESS,
  payload,
});

export const logInActionsFail = (payload) => ({
  type: reduxConstants.LOGIN_FAIL,
  payload,
});
// -------------------------------------------------------- //

// -------------------- LOGOUT ACTION --------------------- //
export const logoutActionLoad = (payload) => ({
  type: reduxConstants.LOGOUT_LOAD,
  payload,
});

export const logoutActionSuccess = (payload) => ({
  type: reduxConstants.LOGOUT_SUCCESS,
  payload,
});

export const logoutActionsFail = (payload) => ({
  type: reduxConstants.LOGOUT_FAIL,
  payload,
});
// -------------------------------------------------------- //
