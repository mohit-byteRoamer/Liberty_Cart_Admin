import { Method } from "./apiMethods";

let header = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

let header1 = {
  "Content-Type": "multipart/form-data",
};
// ----------------------------------------- AUTH API'S ------------------------------------------ //
export const login_Api = (data) => Method.POST("/users/login", data, header);
export const logout_Api = () => Method.POST("/users/logout", header);
// ----------------------------------------------------------------------------------------------- //

// -------------------------------------- COUPON_CODE API'S -------------------------------------- //
export const createCoupon_API = (data) => Method.POST("/payment/coupon-create", data, header);
export const getAllCoupons_API = () => Method.GET("/payment/all-coupons", header);
export const deleteCoupon_API = (id) => Method.DELETE(`/payment/delete-coupons/${id}`, header);
// ----------------------------------------------------------------------------------------------- //

// ----------------------------------------- IMAGE API'S ----------------------------------------- //
export const uploadFile_API = (data) => Method.POST("/common/uploadFile", data, header1);
// ----------------------------------------------------------------------------------------------- //

// ----------------------------------------- ORDER API'S ----------------------------------------- //
export const getAllOrders_API = () => Method.GET("/order/allOrder", header);
// ----------------------------------------------------------------------------------------------- //

// ----------------------------------------- PRODUCT API'S --------------------------------------- //
export const createProduct_API = (data) => Method.POST("/product/new", data, header);
export const getAllProducts_API = (data) =>
  Method.GET(`/product/admin-products?page=${data.currentPage}&limit=${data.pageSize}`, header);
export const getProductDetail_API = (id) => Method.GET(`/product/${id}`, header);
export const updateProduct_API = (data) => Method.PUT(`product/${data.id}`, data, header);
export const deleteProduct_API = (id) => Method.DELETE(`/product/${id}`, header);
// ----------------------------------------------------------------------------------------------- //
