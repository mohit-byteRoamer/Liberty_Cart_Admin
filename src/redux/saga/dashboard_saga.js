import { call } from "redux-saga/effects";
import { put } from "redux-saga/effects";
import {
  getDashboardBar_API,
  getDashboardLine_API,
  getDashboardPie_API,
  getDashboardStats_API,
} from "../axios/axios_API";
import {
  getDashboardBarActionFail,
  getDashboardBarActionSuccess,
  getDashboardLineActionFail,
  getDashboardLineActionSuccess,
  getDashboardPieActionFail,
  getDashboardPieActionSuccess,
  getDashboardStatsActionFail,
  getDashboardStatsActionSuccess,
} from "../action/dashboard_action";
import toast from "react-hot-toast";

// ------------------- GET_DASHBOARD_STATS_ACTION ------------------- //
export function* getDashboardStatsSaga() {
  try {
    const response = yield call(getDashboardStats_API);
    const { result, status } = response;
    if (status === 1) {
      yield put(getDashboardStatsActionSuccess(result?.data));
    } else {
      yield put(getDashboardStatsActionFail(result?.message));
    }
  } catch (error) {
    console.log("DashboardStats_Error", error);
    toast.error("Internal Server Error");
    yield put(getDashboardStatsActionFail(error));
  }
}
// ------------------------------------------------------------------ //

// -------------------- GET_DASHBOARD_PIE_ACTION -------------------- //
export function* getDashboardPieSaga() {
  try {
    const response = yield call(getDashboardPie_API);
    const { result, status } = response;
    if (status === 1) {
      yield put(getDashboardPieActionSuccess(result?.data));
    } else {
      yield put(getDashboardPieActionFail(result?.message));
    }
  } catch (error) {
    console.log("DashboardPie_Error", error);
    toast.error("Internal Server Error");
    yield put(getDashboardPieActionFail(error));
  }
}
// ------------------------------------------------------------------ //

// -------------------- GET_DASHBOARD_BAR_ACTION -------------------- //
export function* getDashboardBarSaga() {
  try {
    const response = yield call(getDashboardBar_API);
    const { result, status } = response;
    if (status === 1) {
      yield put(getDashboardBarActionSuccess(result?.data));
    } else {
      yield put(getDashboardBarActionFail(result?.message));
    }
  } catch (error) {
    console.log("DashboardBar_Error", error);
    toast.error("Internal Server Error");
    yield put(getDashboardBarActionFail(error));
  }
}
// ------------------------------------------------------------------ //

// ------------------- GET_DASHBOARD_LINE_ACTION -------------------- //
export function* getDashboardLineSaga() {
  try {
    const response = yield call(getDashboardLine_API);
    const { result, status } = response;
    if (status === 1) {
      yield put(getDashboardLineActionSuccess(result?.data));
    } else {
      yield put(getDashboardLineActionFail(result?.message));
    }
  } catch (error) {
    console.log("DashboardLine_Error", error);
    toast.error("Internal Server Error");
    yield put(getDashboardLineActionFail(error));
  }
}
// ------------------------------------------------------------------ //
