import { call, put } from "redux-saga/effects";
import { createCoupon_API, deleteCoupon_API, getAllCoupons_API } from "../axios/axios_API";
import {
  create_Coupon_Code_Fail,
  create_Coupon_Code_Success,
  delete_Coupon_Code_Fail,
  delete_Coupon_Code_Success,
  get_All_Coupon_Code_Fail,
  get_All_Coupon_Code_Success,
} from "../action/coupon_action";
import toast from "react-hot-toast";

// ------------------- CREATE_COUPON_SAGA ------------------- //
export function* createCouponSaga(action) {
  const { data, createCouponFunction } = action.payload;
  try {
    const response = yield call(createCoupon_API, data);
    console.log("Coupon_Response", response);
    const { status, result } = response;
    if (status === 1) {
      toast.success(result?.message);
      yield put(create_Coupon_Code_Success(result?.data));
      yield call(createCouponFunction);
    } else {
      yield put(create_Coupon_Code_Fail(result?.message));
      toast.error(result?.message);
    }
  } catch (error) {
    console.log("Coupon_Error", error);
    yield put(create_Coupon_Code_Fail(error));
    toast.error("Internal Server Error (CreateCouponSaga)");
  }
}
// ---------------------------------------------------------- //

// ------------------- GET_ALL_COUPON_SAGA ------------------ //
export function* getAllCouponSaga(action) {
  console.log("GET_Coupon_Action_saga", action.payload);
  try {
    const response = yield call(getAllCoupons_API, action.payload);
    const { status, result } = response;
    if (status === 1) {
      yield put(get_All_Coupon_Code_Success(result?.data));
    } else {
      yield put(get_All_Coupon_Code_Fail(result?.message));
      toast.error(result?.message);
    }
  } catch (error) {
    console.log("Coupon_Error", error);
    yield put(get_All_Coupon_Code_Fail(error));
    toast.error("Internal Server Error (GetAllCouponSaga)");
  }
}
// ---------------------------------------------------------- //

// ------------------- DELETE_COUPON_SAGA ------------------- //
export function* deleteCouponSaga(action) {
  const { id, deleteCouponFunction } = action.payload;
  try {
    const response = yield call(deleteCoupon_API, id);
    console.log("Coupon_Response", response);
    const { status, result } = response;
    if (status === 1) {
      console.log("Delete_Coupon", result);
      yield put(delete_Coupon_Code_Success(result?.data));
      yield call(deleteCouponFunction);
      toast.success(result?.message);
    } else {
      yield put(delete_Coupon_Code_Fail(result?.message));
      toast.error(result?.message);
    }
  } catch (error) {
    console.log("Delete_Coupon_Error", error);
    yield put(delete_Coupon_Code_Fail(error));
    toast.error("Internal Server Error (DeleteCouponSaga)");
  }
}
// ---------------------------------------------------------- //
