import reduxConstants from "../constants/reduxConstants";

const initialState = {
  getAllProductsLoader: false,
  getAllProductsData: [],
  editProductsLoader: false,
  editProductsData: [],
};

export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    // ---------------- GET_ALL_PRODUCTS_REDUCER ---------------- //

    case reduxConstants.GET_ALL_PRODUCTS_LOAD:
      return { ...state, getAllProductsLoader: true };
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
    case reduxConstants.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        getAllProductsLoader: false,
        getAllProductsData: action.payload,
      };
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
    case reduxConstants.GET_ALL_PRODUCTS_FAIL:
      return { ...state, getAllProductsLoader: false };
    // ---------------------------------------------------------- //

    // ------------------ EDIT_PRODUCTS_REDUCER ---------------- //

    case reduxConstants.EDIT_PRODUCT_LOAD:
      return { ...state, editProductsLoader: true };
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
    case reduxConstants.EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        editProductsLoader: false,
        editProductsData: action.payload,
      };
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
    case reduxConstants.EDIT_PRODUCT_FAIL:
      return { ...state, editProductsLoader: false };
    // ---------------------------------------------------------- //

    // ------------------------- DEFAULT ------------------------ //
    default:
      return { ...state };
    // ---------------------------------------------------------- //
  }
};
