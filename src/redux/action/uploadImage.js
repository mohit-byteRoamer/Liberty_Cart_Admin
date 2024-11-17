import reduxConstants from "../constants/reduxConstants";

export const UploadImageActionLoad = (payload) => ({
  type: reduxConstants.UPLOAD_IMAGE_LOAD,
  payload,
});

export const UploadImageActionSuccess = (payload) => ({
  type: reduxConstants.UPLOAD_IMAGE_SUCCESS,
  payload,
});

export const UploadImageActionFail = (payload) => ({
  type: reduxConstants.UPLOAD_IMAGE_FAIL,
  payload,
});

// ---------------------------------------------------------- //
export const resetUploadImageState = () => ({
  type: reduxConstants.RESET_UPLOAD_IMAGE_STATE,
});
// ---------------------------------------------------------- //
