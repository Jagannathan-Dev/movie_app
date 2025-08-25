import { createStore, applyMiddleware } from "redux";
import rootSaga from "./rootSaga";
import rootReducer from "./rootReducer";
const createSagaMiddleware = require("redux-saga").default;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
