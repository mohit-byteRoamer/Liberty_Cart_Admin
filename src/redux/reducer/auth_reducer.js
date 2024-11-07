import reduxConstants from "../constants/reduxConstants";

const initialState = {
  loginLoader: false,
  loginData: {},
};

export function AuthReducer(state = initialState, action) {
  switch (action.type) {
    // Login Reducer

    case reduxConstants.LOGIN_LOAD: {
      return { ...state, loginLoader: true };
    }
    case reduxConstants.LOGIN_SUCCESS: {
      return { ...state, loginLoader: false, loginData: action.payload };
    }
    case reduxConstants.LOGIN_FAIL: {
      return { ...state, loginLoader: false };
    }
    // -------------------------------------------------------- //

    // Logout Reducer
    case reduxConstants.LOGOUT_LOAD: {
      return { ...state };
    }
    case reduxConstants.LOGOUT_SUCCESS: {
      return { ...state };
    }
    case reduxConstants.LOGOUT_FAIL: {
      return { ...state };
    }
    // -------------------------------------------------------- //
    // -------------------------------------------------------- //
    // Default
    default:
      return state;
  }
}