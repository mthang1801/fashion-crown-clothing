import { shopActionTypes } from "./shop.types";

const INITIAL_STATE = {
  collections: {},
  isLoading: false,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.FETCH_COLLECTION_START:
      return {
        ...state,
        isLoading: true,
      };
    case shopActionTypes.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isLoading: false,
      };
    case shopActionTypes.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
