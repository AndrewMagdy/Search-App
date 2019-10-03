import { fork, all } from "redux-saga/effects";

import { watchLoadPeoplePage } from "./items.saga";

export default function* root() {
  yield all([fork(watchLoadPeoplePage)]);
}
