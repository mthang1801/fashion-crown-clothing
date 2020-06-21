import { userActionTypes } from "./user.types";
const INITIAL_STATE = {
  currentUser: null,
  loading: true,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case userActionTypes.USER_LOADED:
      return {
        ...state,
        loading: false,
      };
    case userActionTypes.SET_CURRENT_USER:
      return {
        currentUser: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
