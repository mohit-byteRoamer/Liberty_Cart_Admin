import { call } from "redux-saga/effects";
import {
  createProduct_API,
  deleteProduct_API,
  getAllProducts_API,
  getProductDetail_API,
  updateProduct_API,
} from "../axios/axios_API";
import { put } from "redux-saga/effects";
import toast from "react-hot-toast";
import {
  createProductActionFail,
  createProductActionSuccess,
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
import { UploadImageActionSuccess } from "../action/uploadImage";

// ------------------- CREATE_PRODUCT_SAGA ------------------ //
export function* createProductSaga(action) {
  console.log("CREATE_PRODUCT_SAGA", action);

  try {
    const { apiPayload, navigate } = action.payload;
    const response = yield call(createProduct_API, apiPayload);
    console.log("RESPONSE", response);

    const { result, status } = response;
    console.log("Create_Product_Result", status);
    if (status === 1) {
      navigate("/product/admin-products");
      yield put(createProductActionSuccess(result?.data));
      toast.success(result?.message);
    } else {
      yield put(createProductActionFail(result?.message));
      console.error("Create Failed:", result?.message);
      toast(result?.message);
    }
  } catch (error) {
    yield put(createProductActionFail(error));
    console.log("CREATE_ERROR", error);
    toast("Internal Server Error");
  }
}
// ---------------------------------------------------------- //

// ------------------ UPDATE_PRODUCTS_SAGA ------------------ //
export function* updateProductSaga(action) {
  console.log("updateProductSaga", action);
  
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

// ------------------ DELETE_PRODUCTS_SAGA ------------------ //
export function* deleteProductSaga(action) {
  const { id, currentPage, pageSize } = action.payload;
  try {
    const response = yield call(deleteProduct_API, id);
    const { result, status } = response;
    if (status === 1) {
      yield put(deleteProductActionSuccess(result?.data));
      yield put(getAllProductsActionLoad({ currentPage, pageSize }));
      toast.success(result?.message);
    } else {
      yield put(deleteProductActionFail(result?.data));
      toast(result?.message);
    }
  } catch (error) {
    yield put(deleteProductActionFail(error));
    toast("Internal Server Error");
  }
}
// ---------------------------------------------------------- //

// ----------------- GET_PRODUCT_DETAIL_SAGA ---------------- //
export function* getProductDetailSaga(action) {
  try {
    const response = yield call(getProductDetail_API, action.payload);
    const { result, status } = response;
    if (status === 1) {
      yield put(getProductDetailActionSuccess(result?.data));
      yield put(UploadImageActionSuccess(result?.data?.photo));
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

// ------------------ GET_ALL_PRODUCTS_SAGA ----------------- //
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
