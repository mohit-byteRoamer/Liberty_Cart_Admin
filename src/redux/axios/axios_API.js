import { Method } from "./apiMethods";

let header = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

// let header1 = {
//   "Content-Type": "multipart/form-data",
// };
// ---------------------------------------------------------------------------------- //

// AUTH API'S
export const login_Api = (data) => Method.POST("/users/login", data, header);
export const logout_Api = () => Method.POST("/users/logout", header);
// ---------------------------------------------------------------------------------- //

// ORDER API'S
export const getAllOrders_API = () => Method.GET("/order/allOrder", header);
// ---------------------------------------------------------------------------------- //

// PRODUCT API'S
export const getAllProducts_API = (data) =>
  Method.GET(`/product/admin-products?page=${data.currentPage}&limit=${data.pageSize}`, header);
export const editProduct_API = (id, data) =>
  Method.GET(`/product/${id}`, data, header);
// ---------------------------------------------------------------------------------- //
