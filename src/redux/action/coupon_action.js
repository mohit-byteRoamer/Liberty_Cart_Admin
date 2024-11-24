import reduxConstants from "../constants/reduxConstants";

// ------------------- CREATE_COUPON_CODE_ACTION ------------------- //
export const Create_Coupon_Code_Load = (payload) => ({
  type: reduxConstants.CREATE_COUPON_CODE_LOAD,
  payload,
});
export const Create_Coupon_Code_Success = (payload) => ({
  type: reduxConstants.CREATE_COUPON_CODE_SUCCESS,
  payload,
});
export const Create_Coupon_Code_Fail = (payload) => ({
  type: reduxConstants.CREATE_COUPON_CODE_FAIL,
  payload,
});
// ----------------------------------------------------------------- //

// ------------------- GET_ALL_COUPON_CODE_ACTION ------------------ //
export const Get_All_Coupon_Code_Load = () => ({
  type: reduxConstants.GET_ALL_COUPON_CODE_LOAD,
});
export const Get_All_Coupon_Code_Success = (payload) => ({
  type: reduxConstants.GET_ALL_COUPON_CODE_SUCCESS,
  payload,
});
export const Get_All_Coupon_Code_Fail = (payload) => ({
  type: reduxConstants.GET_ALL_COUPON_CODE_FAIL,
  payload,
});
// ----------------------------------------------------------------- //

// -------------------- DELETE_COUPON_CODE_ACTION ------------------ //
export const Delete_Coupon_Code_Load = (payload) => ({
  type: reduxConstants.DELETE_COUPON_CODE_LOAD,
  payload,
});
export const Delete_Coupon_Code_Success = (payload) => ({
  type: reduxConstants.DELETE_COUPON_CODE_SUCCESS,
  payload,
});
export const Delete_Coupon_Code_Fail = (payload) => ({
  type: reduxConstants.DELETE_COUPON_CODE_FAIL,
  payload,
});
// ----------------------------------------------------------------- //
