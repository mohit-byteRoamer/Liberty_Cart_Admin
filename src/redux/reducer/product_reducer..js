import reduxConstants from "../constants/reduxConstants";

const initialState = {
  createProductLoader: false,
  createProductData: {},
  updateProductLoader: false,
  updateProductData: {},
  deleteProductLoader: false,
  deleteProductData: {},
  getProductDetailLoader: false,
  getProductDetailData: {},
  getAllProductsLoader: false,
  getAllProductsData: [],
};

export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    // ----------------- CREATE_PRODUCT_REDUCER ----------------- //
    case reduxConstants.CREATE_PRODUCT_LOAD:
      return { ...state, createProductLoader: true };
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
    case reduxConstants.CREATE_PRODUCT_SUCCESS:
      return { ...state, createProductLoader: false, createProductData: action.payload };
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
    case reduxConstants.CREATE_PRODUCT_FAIL:
      return { ...state, createProductLoader: false };
    // ---------------------------------------------------------- //

    // ---------------- GET_ALL_PRODUCTS_REDUCER ---------------- //
    case reduxConstants.GET_ALL_PRODUCTS_LOAD:
      return { ...state, getAllProductsLoader: true };
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
    case reduxConstants.GET_ALL_PRODUCTS_SUCCESS:
      return { ...state, getAllProductsLoader: false, getAllProductsData: action.payload };
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
    case reduxConstants.GET_ALL_PRODUCTS_FAIL:
      return { ...state, getAllProductsLoader: false };
    // ---------------------------------------------------------- //

    // --------------- GET_PRODUCT_DETAIL_REDUCER -------------- //
    case reduxConstants.GET_PRODUCT_DETAIL_LOAD:
      return { ...state, getProductDetailLoader: true };
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
    case reduxConstants.GET_PRODUCT_DETAIL_SUCCESS:
      return { ...state, getProductDetailLoader: false, getProductDetailData: action.payload };
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
    case reduxConstants.GET_PRODUCT_DETAIL_FAIL:
      return { ...state, getProductDetailLoader: false };
    // ---------------------------------------------------------- //

    // ------------------ UPDATE_PRODUCT_REDUCER ---------------- //
    case reduxConstants.UPDATE_PRODUCT_LOAD:
      return { ...state, updateProductLoader: true };
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
    case reduxConstants.UPDATE_PRODUCT_SUCCESS:
      return { ...state, updateProductLoader: false, updateProductData: action.payload };
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
    case reduxConstants.UPDATE_PRODUCT_FAIL:
      return { ...state, updateProductLoader: false };
    // ---------------------------------------------------------- //

    // ------------------ DELETE_PRODUCT_REDUCER ---------------- //
    case reduxConstants.DELETE_PRODUCT_LOAD:
      return { ...state, deleteProductLoader: true };
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
    case reduxConstants.DELETE_PRODUCT_SUCCESS:
      return { ...state, deleteProductLoader: false, deleteProductData: action.payload };
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
    case reduxConstants.DELETE_PRODUCT_FAIL:
      return { ...state, deleteProductLoader: false };
    // ---------------------------------------------------------- //

    // ------------------------- DEFAULT ------------------------ //
    default:
      return { ...state };
    // ---------------------------------------------------------- //
  }
};
