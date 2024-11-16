import { call, put } from "redux-saga/effects";
import { getAllOrders_API } from "../axios/axios_API";
import toast from "react-hot-toast";
import {
  getAllOrderActionFail,
  getAllOrderActionSuccess,
} from "../action/order_action";

export function* getAllOrdersSaga() {
  try {
    let response = yield call(getAllOrders_API);
    const { result, status } = response;
    if (status === 1) {
      yield put(getAllOrderActionSuccess(result?.data));
    } else {
      yield put(getAllOrderActionFail(result?.data));
      toast.error(result?.message);
    }
  } catch (error) {
    yield put(getAllOrderActionFail(error));
    toast.error("Internal Server Error");
  }
}
