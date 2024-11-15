import { call } from "redux-saga/effects";
import { deleteProduct_API, getAllProducts_API, getProductDetail_API, updateProduct_API } from "../axios/axios_API";
import { put } from "redux-saga/effects";
import toast from "react-hot-toast";
import {
  deleteProductActionFail,
  deleteProductActionSuccess,
  getAllProductsActionFail,
  getAllProductsActionLoad,
  getAllProductsActionSuccess,
  getProductDetailActionFail,
  getProductDetailActionSuccess,
  updateProductActionFail,
  updateProductActionSuccess,
} from "../action/product_action";

// ---------------- GET_ALL_PRODUCTS_REDUCER ---------------- //
export function* getAllProductsSaga(action) {
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
// ---------------------------------------------------------- //

// --------------- GET_PRODUCT_DETAIL_REDUCER --------------- //
export function* getProductDetailSaga(action) {
  console.log("GetProductDetailSaga", action);
  try {
    const response = yield call(getProductDetail_API, action.payload);
    console.log("Get_Product_Detail_Saga_Response", response);
    const { result, status } = response;
    if (status === 1) {
      yield put(getProductDetailActionSuccess(result?.data));
    } else {
      yield put(getProductDetailActionFail(result?.data));
      toast(result?.message);
    }
  } catch (error) {
    yield put(getProductDetailActionFail(error));
    toast("Internal Server Error");
  }
}
// ---------------------------------------------------------- //

// ----------------- UPDATE_PRODUCTS_REDUCER ---------------- //
export function* updateProductSaga(action) {
  const { updateData, navigate } = action.payload;
  try {
    const response = yield call(updateProduct_API, updateData);
    console.log("Edit_Product_Saga_Response", response);
    const { result, status } = response;
    if (status === 1) {
      console.log("UPDATE_RESULT", result);
      yield put(updateProductActionSuccess(result?.data));
      navigate("/product/admin-products");
      toast.success(result?.message);
    } else {
      yield put(updateProductActionFail(result?.data));
      console.error("Update Failed:", result?.message);
      toast(result?.message);
    }
  } catch (error) {
    yield put(updateProductActionFail(error));
    console.log("UPDATE_ERROR", error);
    toast("Internal Server Error");
  }
}
// ---------------------------------------------------------- //

// ----------------- DELETE_PRODUCTS_REDUCER ---------------- //
export function* deleteProductSaga(action) {
  console.log("Delete_Action", action);

  const { id, currentPage, pageSize } = action.payload;
  try {
    const response = yield call(deleteProduct_API, id);
    console.log("Delete_Product_Saga_Response", response);
    const { result, status } = response;
    if (status === 1) {
      console.log("DELETE_RESULT", result);
      yield put(deleteProductActionSuccess(result?.data));
      yield put(getAllProductsActionLoad({currentPage, pageSize}));
      toast.success(result?.message);
    } else {
      yield put(deleteProductActionFail(result?.data));
      console.error("Delete Failed:", result?.message);
      toast(result?.message);
    }
  } catch (error) {
    yield put(deleteProductActionFail(error));
    console.log("DELETE_ERROR", error);
    toast("Internal Server Error");
  }
}
// ---------------------------------------------------------- //
