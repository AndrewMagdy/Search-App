import { fork, all } from "redux-saga/effects";

import { watchItemsRequest} from "./items.saga";
import { watchFeedbackRequest } from "./feedback.saga";

export default function* root() {
  yield all([fork(watchItemsRequest)]);
  yield all([fork(watchFeedbackRequest)]);
}
