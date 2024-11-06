import reduxConstants from "../constants/reduxConstants";

// ------------------- GET ALL ORDERS ------------------- //
export const getAllOrderActionLoad = (payload) => ({
  type: reduxConstants.GET_ALL_ORDERS_LOAD,
  payload,
});
export const getAllOrderActionSuccess = (payload) => ({
  type: reduxConstants.GET_ALL_ORDERS_SUCCESS,
  payload,
});
export const getAllOrderActionFail = (payload) => ({
  type: reduxConstants.GET_ALL_ORDERS_FAIL,
  payload,
});
// ------------------------------------------------------ //
