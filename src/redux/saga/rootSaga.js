import { takeLatest } from "redux-saga/effects";
import reduxConstants from "../constants/reduxConstants";
import { loginSaga, logoutSaga } from "./auth_saga";

export function* rootSaga() {
  yield takeLatest(reduxConstants.LOGIN_LOAD, loginSaga);
  yield takeLatest(reduxConstants.LOGOUT_LOAD, logoutSaga);
}
