import { userActionTypes } from "./user.types";
export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const loadingUser = () => ({
  type: userActionTypes.USER_LOADING,
});

export const loadedUser = () => ({
  type: userActionTypes.USER_LOADED,
});
