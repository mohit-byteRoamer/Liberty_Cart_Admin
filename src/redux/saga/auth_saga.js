import { call, put } from "redux-saga/effects";
import { login_Api, logout_Api } from "../axios/axios_API";
import { logInActionsFail, logInActionSuccess, logoutActionsFail, logoutActionSuccess } from "../action/auth_action";
import toast from "react-hot-toast";
import { ConstantRoutes } from "../../components/Route/ConstantsRoutes";

// Login_Saga
export function* loginSaga(action) {
  console.log("Login Saga", action.payload);

  try {
    const { navigate, apiPayload } = action.payload;
    let response = yield call(login_Api, apiPayload);
    const { result, status } = response;
    if (status === 1) {
      yield put(logInActionSuccess(result?.data));
      localStorage.setItem("token", result?.data?.accessToken);
      localStorage.setItem("user", JSON.stringify(result?.data?.user));
      navigate("/");
      window.location.reload();
      toast.success(result?.message);
    } else {
      yield put(logInActionsFail(result?.data));
      toast.error(result?.message);
    }
  } catch (error) {
    yield put(logInActionsFail(error));
    toast.error("Internal Server Error");
  }
}
// -------------------------------------------------------- //

// Logout_Saga
export function* logoutSaga(action) {
  const { navigate } = action.payload;
  try {
    const response = yield call(logout_Api);
    const { result, status } = response;
    if (status === 1) {
      yield put(logoutActionSuccess(result?.data));
      localStorage.clear();
      window.location.reload();
      navigate(ConstantRoutes.LOGIN);
      toast.success(result?.message);
    } else {
      yield put(logoutActionsFail(result?.data));
      toast.error(result?.message);
    }
  } catch (error) {
    yield put(logoutActionsFail(error));
    toast.error("Internal Server Error");
  }
}
