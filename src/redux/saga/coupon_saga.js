import { call, put } from "redux-saga/effects";
import { createCoupon_API } from "../axios/axios_API";
import { Create_Coupon_Code_Fail, Create_Coupon_Code_Success } from "../action/coupon_action";
import toast from "react-hot-toast";
export function* CreateCouponSaga(action) {
  try {
    const response = yield call(createCoupon_API, action.payload);
    console.log("Coupon_Response", response);
    const { status, result } = response;
    if (status === 1) {
      console.log("Coupon_Created", result);
      yield put(Create_Coupon_Code_Success(result?.data));
      toast.success(result?.message);
    } else {
      yield put(Create_Coupon_Code_Fail(result?.message));
      toast.error(result?.message);
    }
  } catch (error) {
    console.log("Coupon_Error", error);
    yield put(Create_Coupon_Code_Fail(error));
    toast.error("Internal Server Error");
  }
}
