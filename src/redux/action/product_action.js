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

// ---------------- EDIT_PRODUCTS_ACTION ----------------- //
export const editProductActionLoad = (payload) => ({
  type: reduxConstants.EDIT_PRODUCT_LOAD,
  payload,
});

export const editProductActionSuccess = (payload) => ({
  type: reduxConstants.EDIT_PRODUCT_SUCCESS,
  payload,
});

export const editProductActionFail = (payload) => ({
  type: reduxConstants.EDIT_PRODUCT_FAIL,
  payload,
});
// ------------------------------------------------------- //
