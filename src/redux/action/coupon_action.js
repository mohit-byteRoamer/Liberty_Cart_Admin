import reduxConstants from "../constants/reduxConstants";

// ------------------- CREATE_COUPON_CODE_ACTION ------------------- //
export const create_Coupon_Code_Load = (payload) => ({
  type: reduxConstants.CREATE_COUPON_CODE_LOAD,
  payload,
});
export const create_Coupon_Code_Success = (payload) => ({
  type: reduxConstants.CREATE_COUPON_CODE_SUCCESS,
  payload,
});
export const create_Coupon_Code_Fail = (payload) => ({
  type: reduxConstants.CREATE_COUPON_CODE_FAIL,
  payload,
});
// ----------------------------------------------------------------- //

// ------------------- GET_ALL_COUPON_CODE_ACTION ------------------ //
export const get_All_Coupon_Code_Load = (payload) => ({
  type: reduxConstants.GET_ALL_COUPON_CODE_LOAD,
  payload,
});
export const get_All_Coupon_Code_Success = (payload) => ({
  type: reduxConstants.GET_ALL_COUPON_CODE_SUCCESS,
  payload,
});
export const get_All_Coupon_Code_Fail = (payload) => ({
  type: reduxConstants.GET_ALL_COUPON_CODE_FAIL,
  payload,
});
// ----------------------------------------------------------------- //

// -------------------- DELETE_COUPON_CODE_ACTION ------------------ //
export const delete_Coupon_Code_Load = (payload) => ({
  type: reduxConstants.DELETE_COUPON_CODE_LOAD,
  payload,
});
export const delete_Coupon_Code_Success = (payload) => ({
  type: reduxConstants.DELETE_COUPON_CODE_SUCCESS,
  payload,
});
export const delete_Coupon_Code_Fail = (payload) => ({
  type: reduxConstants.DELETE_COUPON_CODE_FAIL,
  payload,
});
// ----------------------------------------------------------------- //
