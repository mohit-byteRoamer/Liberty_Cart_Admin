import reduxConstants from "../constants/reduxConstants";
import { takeLatest } from "redux-saga/effects";
import { loginSaga, logoutSaga } from "./auth_saga";
import { getAllOrdersSaga } from "./order_saga";
import {
  createProductSaga,
  deleteProductSaga,
  getAllProductsSaga,
  getProductDetailSaga,
  updateProductSaga,
} from "./product_saga";
import { UploadImageSaga } from "./uploadImage_saga";
import { createCouponSaga, deleteCouponSaga, getAllCouponSaga } from "./coupon_saga";

export function* rootSaga() {
  // --------------------------- AUTHENTICATION_SAGA --------------------------- //
  yield takeLatest(reduxConstants.LOGIN_LOAD, loginSaga);
  yield takeLatest(reduxConstants.LOGOUT_LOAD, logoutSaga);
  // --------------------------------------------------------------------------- //

  // ------------------------------- ORDER_SAGA -------------------------------- //
  yield takeLatest(reduxConstants.UPLOAD_IMAGE_LOAD, UploadImageSaga);
  // --------------------------------------------------------------------------- //

  // ------------------------------- ORDER_SAGA -------------------------------- //
  yield takeLatest(reduxConstants.GET_ALL_ORDERS_LOAD, getAllOrdersSaga);
  // --------------------------------------------------------------------------- //

  // ------------------------------ PRODUCT_SAGA ------------------------------- //
  yield takeLatest(reduxConstants.CREATE_PRODUCT_LOAD, createProductSaga);
  yield takeLatest(reduxConstants.UPDATE_PRODUCT_LOAD, updateProductSaga);
  yield takeLatest(reduxConstants.DELETE_PRODUCT_LOAD, deleteProductSaga);
  yield takeLatest(reduxConstants.GET_PRODUCT_DETAIL_LOAD, getProductDetailSaga);
  yield takeLatest(reduxConstants.GET_ALL_PRODUCTS_LOAD, getAllProductsSaga);
  // --------------------------------------------------------------------------- //

  // ---------------------------- COUPON_CODE_SAGA ----------------------------- //
  yield takeLatest(reduxConstants.CREATE_COUPON_CODE_LOAD, createCouponSaga);
  yield takeLatest(reduxConstants.GET_ALL_COUPON_CODE_LOAD, getAllCouponSaga);
  yield takeLatest(reduxConstants.DELETE_COUPON_CODE_LOAD, deleteCouponSaga);
  // --------------------------------------------------------------------------- //
}
