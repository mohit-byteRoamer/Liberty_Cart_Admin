import { combineReducers } from "redux";
import { AuthReducer } from "./auth_reducer";
import { OrderReducer } from "./order_reducer.";
import { ProductReducer } from "./product_reducer.";

const rootReducers = combineReducers({
  AuthReducer,
  OrderReducer,
  ProductReducer,
});

export default rootReducers;
