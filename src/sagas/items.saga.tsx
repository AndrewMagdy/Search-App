import { take, fork, call, put } from "redux-saga/effects";
import * as actions from "../actions";
import { getItems, normalizeResponse } from "../services/items.service";
const { items } = actions;

function* requestItems(
  query: string,
  itemType: string,
  pageNum: number,
  limit: number
) {
  try {
    const response = yield call(getItems, query, itemType, pageNum, limit);
    const normalizedResponse = normalizeResponse(response, itemType);
    yield put(
      items.success(query, {
        items: normalizedResponse,
        itemType
      })
    );
  } catch (error) {
    yield put(items.failure(query, error));
  }
}

export function* watchLoadPeoplePage() {
  while (true) {
    const { query, itemType, pageNum, limit } = yield take(
      actions.ITEMS.REQUEST
    );
    yield fork(requestItems, query, itemType, pageNum, limit);
  }
}
