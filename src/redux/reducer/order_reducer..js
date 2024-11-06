import reduxConstants from "../constants/reduxConstants";

const initialState = {
  getAllOrdersLoader: false,
  getAllOrdersData: [],
};

export const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    // ---------------- GET_ALL_ORDERS_REDUCER ---------------- //

    case reduxConstants.GET_ALL_ORDERS_LOAD: {
      return { ...state, getAllOrdersLoader: true };
    }

    case reduxConstants.GET_ALL_ORDERS_SUCCESS: {
      return {
        ...state,
        getAllOrdersLoader: false,
        getAllOrdersData: action.payload,
      };
    }

    case reduxConstants.GET_ALL_ORDERS_FAIL: {
      return { ...state, getAllOrdersLoader: false };
    }
    // -------------------------------------------------------- //
    // ------------------------ DEFAULT ----------------------- //
    default:
      return state;
  }
};
