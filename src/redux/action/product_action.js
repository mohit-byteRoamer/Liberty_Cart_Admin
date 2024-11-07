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
