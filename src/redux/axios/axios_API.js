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
