import { all, call, put, takeLatest } from "redux-saga/effects";
import UserTypes from "./user.types";
import { signInFailure, signInSuccess } from "./user.action";
import { auth, googleProvider } from "../firebase/firebase.utils";

export function* signIn() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield console.log(user);
    yield put(signInSuccess(user));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onSignInStart() {
  yield takeLatest(UserTypes.SIGN_iN_START, signIn);
}

export function* userSages() {
  yield all([call(onSignInStart)]);
}
