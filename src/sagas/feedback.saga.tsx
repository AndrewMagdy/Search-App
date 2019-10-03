import { take, fork, call, put } from "redux-saga/effects";
import * as actions from "../actions";
import { getItems, normalizeResponse } from "../services/feedback.service";
const { feedback } = actions;

function* requestItems() {
  try {
    const response = yield call(getItems);
    const normalizedResponse = normalizeResponse(response);

    yield put(
      feedback.success({
        count: normalizedResponse
      })
    );
  } catch (error) {
    yield put(feedback.failure(error));
  }
}

export function* watchFeedbackRequest() {
  while (true) {
    yield take(actions.FEEDBACK.REQUEST);
    yield fork(requestItems);
  }
}
