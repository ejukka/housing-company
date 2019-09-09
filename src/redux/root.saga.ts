import { all, call } from "redux-saga/effects";

import { userSages } from "./user.sagas";

export default function* rootSaga() {
  yield all([call(userSages)]);
}
