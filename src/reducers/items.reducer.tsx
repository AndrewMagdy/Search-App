import { ITEMS } from "../actions";
import { Reducer, AnyAction } from "redux";

const itemsReducer: Reducer = (state: any = {}, action: AnyAction) => {
  switch (action.type) {
    case ITEMS.SUCCESS:
      return {
        ...state,
        [action.response.itemType]: {
          items:
            action.query === state[action.response.itemType].query
              ? [
                  ...state[action.response.itemType].items,
                  ...action.response.items
                ]
              : action.response.items,
          isFetching: false,
          query: action.query,
          pageNum: action.response.pageNum
        }
      };
    case ITEMS.REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case ITEMS.ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default itemsReducer;
