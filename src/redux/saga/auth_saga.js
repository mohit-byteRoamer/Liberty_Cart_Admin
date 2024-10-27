import { call, put } from "redux-saga/effects";
import { login_Api } from "../axios/axios_API";
import { logInActionsFail, logInActionSuccess } from "../action/auth_action";
import toast from "react-hot-toast";

export function* loginSaga(action) {
  try {
    const response = yield call(login_Api, action.payload);
    console.log("Login Response", response);
    const { result, status } = response;
    if (status === 200) {
      yield put(logInActionSuccess(result?.data));
      toast.success(result?.message || "Login Successfully");
    } else {
      yield put(logInActionsFail(result?.data));
      toast.error(result?.message);
    }
  } catch (error) {
    yield put(logInActionsFail(error));
    toast.error("Internal Server Error");
  }
}
