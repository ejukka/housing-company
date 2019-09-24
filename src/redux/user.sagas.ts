import { all, call, put, takeLatest } from "redux-saga/effects";
import UserTypes from "./user.types";
import { signInFailure, signInSuccess } from "./user.action";
import {
  auth,
  getCurrentUser,
  googleProvider
} from "../firebase/firebase.utils";

export function* signIn() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    console.log(user);
    yield put(signInSuccess(user));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onSignInStart() {
  yield takeLatest(UserTypes.SIGN_iN_START, signIn);
}

export function* isLogged() {
  try {
    const userAuth = yield getCurrentUser();
    console.log("is user logged in...", userAuth);
    if (!userAuth) return;
  } catch (error) {
    console.log(error);
  }
}

export function* isLoggedIn() {
  yield takeLatest(UserTypes.CHECK_IS_USER_LOGGED_IN, isLogged);
}

export function* userSages() {
  yield all([call(onSignInStart), call(isLoggedIn)]);
}
