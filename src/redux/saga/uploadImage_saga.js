import { call, put } from "redux-saga/effects";
import { UploadImageActionFail, UploadImageActionSuccess } from "../action/uploadImage";
import { uploadFile_API } from "../axios/axios_API";
import toast from "react-hot-toast";

export function* UploadImageSaga(action) {
  const { formData, onChange } = action.payload;
  try {
    const response = yield call(uploadFile_API, formData);
    const { result, status } = response;
    if (status === 1) {
      yield put(UploadImageActionSuccess(result?.imageUrl));
      yield put(onChange(result?.imageUrl));
      toast.success(result?.message);
    } else {
      yield put(UploadImageActionFail(result?.message));
    }
  } catch (error) {
    yield put(UploadImageActionFail(error));
    toast.error("Internal Server Error");
  }
}
