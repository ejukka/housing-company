import { all, call, put, takeLatest } from "redux-saga/effects";
import UserTypes from "./user.types";
import {
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess
} from "./user.action";
import {
  auth,
  getCurrentUser,
  googleProvider
} from "../firebase/firebase.utils";
import isValidAdminEmail from "../utils/validationUtil";

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    console.log("Error occurred when signing user out: ", error);
    yield put(signOutFailure(error));
  }
}

export function* onSignOutStart() {
  yield takeLatest(UserTypes.SIGN_OUT_START, signOut);
}

export function* signIn() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);

    console.log("signIn user saga: ", user);
    console.log("email: ", user.email);
    if (user && user.email && isValidAdminEmail(user.email)) {
      yield put(signInSuccess(user));
    } else {
      yield put(signInFailure(user));
    }
  } catch (error) {
    console.log("Error occurred: ", error);
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
    if (userAuth && userAuth.email && isValidAdminEmail(userAuth.email)) {
      yield put(signInSuccess(userAuth));
    } else {
      console.log("not valid user", userAuth);
      return;
    }
  } catch (error) {
    console.log(error);
  }
}

export function* isLoggedIn() {
  yield takeLatest(UserTypes.CHECK_IS_USER_LOGGED_IN, isLogged);
}

export function* userSages() {
  yield all([call(onSignInStart), call(isLoggedIn), call(onSignOutStart)]);
}
