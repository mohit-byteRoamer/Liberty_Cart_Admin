import reduxConstants from "../constants/reduxConstants";

const initialState = {
  UploadImageLoader: false,
  UploadImageData: null,
};

export const UploadImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case reduxConstants.UPLOAD_IMAGE_LOAD:
      return { ...state, UploadImageLoader: true };

    case reduxConstants.UPLOAD_IMAGE_SUCCESS:
      return { ...state, UploadImageLoader: false, UploadImageData: action.payload };

    case reduxConstants.UPLOAD_IMAGE_FAIL:
      return { ...state, UploadImageLoader: false };

    default:
      return { ...state };
  }
};
