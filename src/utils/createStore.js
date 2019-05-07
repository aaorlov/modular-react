import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import staticReducers from "../reducers/index";

function createReducer(asyncReducers) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers
  });
}

export const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const store = createStore(createReducer(), applyMiddleware(sagaMiddleware));
  store.asyncReducers = {};
  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  };
  store.removeReducer = key => {
    delete store.asyncReducers[key];
    delete store.getState()[key];
  };
  return store;
}
