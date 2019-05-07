import { useEffect } from "react";
import { cancel, fork, take } from "redux-saga/effects";
import { store } from "../index";
import { sagaMiddleware } from "./createStore";

const STOP_SAGA = "STOP_SAGA";

function startSaga(key, saga) {
  const runnableSaga = function* main() {
    const sagaTask = yield fork(saga);
    const { payload } = yield take(STOP_SAGA);

    if (payload === key) {
      yield cancel(sagaTask);
    }
  };

  sagaMiddleware.run(runnableSaga);
}

function stopSaga(key) {
  console.log("stoppiing", key);
  store.dispatch({
    payload: key,
    type: STOP_SAGA
  });
}

const useReduxModule = (key, reducer, saga, initialAction) => {
  useEffect(() => {
    store.injectReducer(key, reducer);
    startSaga(key, saga);
    initialAction();
    return () => {
      stopSaga(key);
      store.removeReducer(key);
    };
  }, []);
};

export default useReduxModule;
