import reduxConstants from "../constants/reduxConstants";

const initialState = {
  getAllProductsLoader: false,
  getAllProductsData: [],
};

export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    // ---------------- GET_ALL_PRODUCTS_REDUCER ---------------- //

    case reduxConstants.GET_ALL_PRODUCTS_LOAD:
      return { ...state, getAllProductsLoader: true };
    case reduxConstants.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        getAllProductsLoader: false,
        getAllProductsData: action.payload,
      };
    case reduxConstants.GET_ALL_PRODUCTS_FAIL:
      return { ...state, getAllProductsLoader: false };

    // ---------------------------------------------------------- //
    // ------------------------- DEFAULT ------------------------ //

    default:
      return { ...state };
    // ---------------------------------------------------------- //
  }
};
