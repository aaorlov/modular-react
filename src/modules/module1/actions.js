export const FETCH_ENTITIES_FOR_MODULE1 = "FETCH_MODULE1_DATA";
export const ERROR_ENTITIES_FOR_MODULE1 = "ERROR_MODULE1_DATA";
export const RECEIVE_ENTITIES_FOR_MODULE1 = "RECEIVE_MODULE1_DATA";

export const fetchDataForModule1 = () => ({
  type: FETCH_ENTITIES_FOR_MODULE1
});

export const errorDataForModule1 = error => ({
  error,
  type: ERROR_ENTITIES_FOR_MODULE1
});

export const receiveDataForModule1 = data => ({
  data,
  type: RECEIVE_ENTITIES_FOR_MODULE1
});
