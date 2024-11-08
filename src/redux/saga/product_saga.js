import { call } from "redux-saga/effects";
import { getAllProducts_API } from "../axios/axios_API";
import { put } from "redux-saga/effects";
import toast from "react-hot-toast";
import {
  getAllProductsActionFail,
  getAllProductsActionSuccess,
} from "../action/product_action";

export function* getAllProductsSaga(action) {
  console.log("GetAllProductsSaga", action.payload);
  
  try {
    const response = yield call(getAllProducts_API, action.payload);
    console.log("Get_All_Product_Saga_Response", response);
    const { result, status } = response;
    if (status === 1) {
      yield put(getAllProductsActionSuccess(result?.data));
    } else {
      yield put(getAllProductsActionFail(result?.data));
      toast(result?.message);
    }
  } catch (error) {
    yield put(getAllProductsActionFail(error));
    toast("Internal Server Error");
  }
}
