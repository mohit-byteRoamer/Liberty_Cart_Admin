import { message, Spin, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import { useDispatch, useSelector } from "react-redux";
import { UploadImageActionLoad } from "../../redux/action/uploadImage";

const UploadImage = ({ onChange }) => {
  const dispatch = useDispatch();
  const uploadImage = useSelector((data) => data?.UploadImageReducer);
  // Image validation before upload
  const validImage = (file) => {
    if (!file) {
      message.error("Image is required!");
      return false;
    }

    // Check if the file type is JPG or PNG
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    // Check if the file size is less than 2MB
    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
      return false; // Stops upload if file type is not JPG/PNG
    }

    if (!isLt2M) {
      message.error("Image must be smaller than 2MB!");
      return false; // Stops upload if file size is larger than 2MB
    }

    // If both conditions are met, allow the upload to proceed
    return true;
  };
  // FormData handler for file upload
  const fileUploadHandler = (file) => {
    const formData = new FormData();
    formData.append("image", file);
    dispatch(UploadImageActionLoad({ formData, onChange }));
  };

  return (
    <Spin spinning={uploadImage?.UploadImageLoader} className="border-2" style={{ width: "100px", height: "100px" }} >
      <div className="flex items-center gap-5">
        <ImgCrop
          aspect={6 / 9}
          shape="round"
          grid
          zoom
          rotate
          modalTitle="Crop Your Image"
          modalOk="Save"
          modalCancel="Discard">
          <Upload
            loading={uploadImage?.UploadImageLoader}
            listType="picture-card"
            showUploadList={false}
            beforeUpload={(file) => {
              if (validImage(file)) {
                fileUploadHandler(file);
                return false;
              }
              return false;
            }}
            maxCount={1}>
            {uploadImage?.UploadImageLoader ? "Uploading..." : "Upload"}
          </Upload>
        </ImgCrop>

        {uploadImage?.UploadImageData && (
          <div>
            <img src={uploadImage?.UploadImageData} alt="Uploaded" className="max-w-full max-h-[16vh] "/>
          </div>
        )}
      </div>
    </Spin>
  );
};

export default UploadImage;
