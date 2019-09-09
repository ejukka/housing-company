import { all, call, takeLatest } from "redux-saga/effects";
import UserTypes from "./user.types";

export function* signIn() {
  yield console.log("sign in using google....");
}

export function* onSignInStart() {
  yield takeLatest(UserTypes.SIGN_iN_START, signIn);
}

export function* onSignInSuccess() {
  yield takeLatest(UserTypes.SIGN_iN_SUCCESS, signIn);
}

export function* onSignInFailure() {
  yield takeLatest(UserTypes.SIGN_iN_FAILURE, signIn);
}

export function* userSages() {
  yield all([
    (call(onSignInStart), call(onSignInSuccess), call(onSignInFailure))
  ]);
}
