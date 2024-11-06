import { combineReducers } from "redux";
import AuthReducer from "./auth_reducer";
import { OrderReducer } from "./order_reducer.";

const rootReducers = combineReducers({ AuthReducer, OrderReducer });

export default rootReducers;
