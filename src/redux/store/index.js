import { applyMiddleware, createStore } from "redux";
import { rootSaga } from "../saga/rootSaga";
import rootReducer from "../reducer/rootReducer";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

export default store
