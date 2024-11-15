import reduxConstants from "../constants/reduxConstants";

// --------------- GET_ALL_PRODUCTS_ACTION --------------- //
export const getAllProductsActionLoad = (payload) => ({
  type: reduxConstants.GET_ALL_PRODUCTS_LOAD,
  payload,
});

export const getAllProductsActionSuccess = (payload) => ({
  type: reduxConstants.GET_ALL_PRODUCTS_SUCCESS,
  payload,
});

export const getAllProductsActionFail = (payload) => ({
  type: reduxConstants.GET_ALL_PRODUCTS_FAIL,
  payload,
});
// ------------------------------------------------------- //

// ------------- GET_PRODUCT_DETAIL_ACTION --------------- //
export const getProductDetailActionLoad = (payload) => ({
  type: reduxConstants.GET_PRODUCT_DETAIL_LOAD,
  payload,
});

export const getProductDetailActionSuccess = (payload) => ({
  type: reduxConstants.GET_PRODUCT_DETAIL_SUCCESS,
  payload,
});

export const getProductDetailActionFail = (payload) => ({
  type: reduxConstants.GET_PRODUCT_DETAIL_FAIL,
  payload,
});
// ------------------------------------------------------- //

// -------------- UPDATE_PRODUCT_ACTION ------------------ //
export const updateProductActionLoad = (payload) => ({
  type: reduxConstants.UPDATE_PRODUCT_LOAD,
  payload,
});

export const updateProductActionSuccess = (payload) => ({
  type: reduxConstants.UPDATE_PRODUCT_SUCCESS,
  payload,
});

export const updateProductActionFail = (payload) => ({
  type: reduxConstants.UPDATE_PRODUCT_FAIL,
  payload,
});
// ------------------------------------------------------- //

// --------------- DELETE_PRODUCT_ACTION ----------------- //
export const deleteProductActionLoad = (payload) => ({
  type: reduxConstants.DELETE_PRODUCT_LOAD,
  payload,
});

export const deleteProductActionSuccess = (payload) => ({
  type: reduxConstants.DELETE_PRODUCT_SUCCESS,
  payload,
});

export const deleteProductActionFail = (payload) => ({
  type: reduxConstants.DELETE_PRODUCT_FAIL,
  payload,
});
// ------------------------------------------------------- //
