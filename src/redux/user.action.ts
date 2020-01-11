import UserTypes from "./user.types";

export const signInStart = () => ({
  type: UserTypes.SIGN_iN_START
});

export const signInSuccess = (user: {}) => ({
  type: UserTypes.SIGN_iN_SUCCESS,
  payload: user
});

export const signInFailure = (error: string) => ({
  type: UserTypes.SIGN_iN_FAILURE,
  payload: error
});

export const signOutStart = () => ({
  type: UserTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: UserTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = (error: string) => ({
  type: UserTypes.SIGN_OUT_FAILURE,
  payload: error
});

export const checkIsUserLoggedIn = () => ({
  type: UserTypes.CHECK_IS_USER_LOGGED_IN
});

export const userIsLoggedIn = (user: {}) => ({
  type: UserTypes.USER_IS_LOGGED_IN,
  payload: user
});

export const userIsNotLoggedIn = (user: {}) => ({
  type: UserTypes.USER_IS_NOT_LOGGED_IN,
  payload: user
});
