import axios from "axios";

export const url = "https://liberty-cart-server.onrender.com/";

export const finalURL = `${url}api/v1`;
const APIKit = axios.create({
  baseURL: finalURL,
  timeout: 60000000,
});

APIKit.interceptor.request.use(async (config) => {
  let accessToken = localStorage.getItem("token");
  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});

export default APIKit;
