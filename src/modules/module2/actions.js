export const FETCH_ENTITIES_FOR_MODULE2 = "FETCH_MODULE2_DATA";
export const ERROR_ENTITIES_FOR_MODULE2 = "ERROR_MODULE2_DATA";
export const RECEIVE_ENTITIES_FOR_MODULE2 = "RECEIVE_MODULE2_DATA";

export const fetchDataForModule2 = () => ({
  type: FETCH_ENTITIES_FOR_MODULE2
});

export const errorDataForModule2 = error => ({
  error,
  type: ERROR_ENTITIES_FOR_MODULE2
});

export const receiveDataForModule2 = data => ({
  data,
  type: RECEIVE_ENTITIES_FOR_MODULE2
});
