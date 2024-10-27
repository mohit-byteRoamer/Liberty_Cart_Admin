import reduxConstants from "../constants/reduxConstants";

const initialState = {
  loginLoader: false,
  loginData: {},
};

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case reduxConstants.LOGIN_LOAD: {
      return {
        ...state,
        loginLoader: true,
      };
    }
    case reduxConstants.LOGIN_SUCCESS: {
      return {
        ...state,
        loginLoader: false,
        loginData: action.payload,
      };
    }
    case reduxConstants.LOGIN_FAIL: {
      return {
        ...state,
        loginLoader: false,
      };
    }
    default:
      return state;
  }
}

export default AuthReducer;
