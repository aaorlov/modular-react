import {
  FETCH_ENTITIES_FOR_MODULE1,
  ERROR_ENTITIES_FOR_MODULE1,
  RECEIVE_ENTITIES_FOR_MODULE1
} from "./actions";

const initialState = {
  isLoading: false,
  error: null,
  data: []
};

export default function module1Reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ENTITIES_FOR_MODULE1:
      return {
        ...state,
        isLoading: true
      };
    case ERROR_ENTITIES_FOR_MODULE1:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case RECEIVE_ENTITIES_FOR_MODULE1:
      return {
        data: action.data,
        error: null,
        isLoading: false
      };
    default:
      return state;
  }
}
