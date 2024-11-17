import { call, put } from "redux-saga/effects";
import { UploadImageActionFail, UploadImageActionSuccess } from "../action/uploadImage";
import { uploadFile_API } from "../axios/axios_API";
import toast from "react-hot-toast";

export function* UploadImageSaga(action) {
  const { formData } = action.payload;
  try {
    const response = yield call(uploadFile_API, formData);
    const { result, status } = response;
    if (status === 1) {
      yield put(UploadImageActionSuccess(result?.imageUrl));
      if (action.payload.onChange) {
        yield call(action.payload.onChange, result?.imageUrl);
      }
      toast.success(result?.message);
    } else {
      yield put(UploadImageActionFail(result?.message));
      toast.error(result?.message);
    }
  } catch (error) {
    yield put(UploadImageActionFail(error));
    toast.error("Internal Server Error");
  }
}
