import { combineReducers } from "redux";
import { AuthReducer } from "./auth_reducer";
import { CouponReducer } from "./coupon_reducer";
import { OrderReducer } from "./order_reducer.";
import { ProductReducer } from "./product_reducer.";
import { UploadImageReducer } from "./uploadImage_reducer";
import { DashboardReducer } from "./dashboard_reducer";

const rootReducers = combineReducers({
  AuthReducer,
  CouponReducer,
  DashboardReducer,
  OrderReducer,
  ProductReducer,
  UploadImageReducer,
});

export default rootReducers;
