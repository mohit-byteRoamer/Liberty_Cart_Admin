import reduxConstants from "../constants/reduxConstants";
import { takeLatest } from "redux-saga/effects";
import { loginSaga, logoutSaga } from "./auth_saga";
import { getAllOrdersSaga } from "./order_saga";

export function* rootSaga() {
  // ------------------- AUTHENTICATION_SAGA ------------------- //
  yield takeLatest(reduxConstants.LOGIN_LOAD, loginSaga);
  yield takeLatest(reduxConstants.LOGOUT_LOAD, logoutSaga);

  // ----------------------- ORDER_SAGA ------------------------ //
  yield takeLatest(reduxConstants.GET_ALL_ORDERS_LOAD, getAllOrdersSaga);
}
