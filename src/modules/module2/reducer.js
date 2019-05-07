import {
  FETCH_ENTITIES_FOR_MODULE2,
  ERROR_ENTITIES_FOR_MODULE2,
  RECEIVE_ENTITIES_FOR_MODULE2
} from "./actions";

const initialState = {
  isLoading: false,
  error: null,
  data: []
};

export default function module2Reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ENTITIES_FOR_MODULE2:
      return {
        ...state,
        isLoading: true
      };
    case ERROR_ENTITIES_FOR_MODULE2:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case RECEIVE_ENTITIES_FOR_MODULE2:
      return {
        data: action.data,
        error: null,
        isLoading: false
      };
    default:
      return state;
  }
}
