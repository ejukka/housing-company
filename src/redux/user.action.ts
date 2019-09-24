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

export const checkIsUserLoggedIn = () => ({
  type: UserTypes.CHECK_IS_USER_LOGGED_IN
});
