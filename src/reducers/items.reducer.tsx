import { ITEMS } from "../actions";
import { Reducer, AnyAction } from "redux";

const itemsReducer: Reducer = (state: any = {}, action: AnyAction) => {
  console.log(action, state);

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
          isFetching: false
        }
      };
    default:
      return state;
  }
};

export default itemsReducer;
