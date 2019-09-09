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
