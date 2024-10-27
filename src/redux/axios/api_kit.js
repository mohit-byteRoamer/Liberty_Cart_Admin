import axios from "axios";
// import { DataManager } from "../../utils/dataManager";
export const url = "https://liberty-cart-server.onrender.com/"; // dell

export const finalURL = `${url}api/v1`;
const APIKit = axios.create({
  baseURL: finalURL,
  timeout: 60000000,
});

APIKit.interceptors.request.use(async (config) => {
  let accessToken = localStorage.getItem("token");
  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});

export default APIKit;