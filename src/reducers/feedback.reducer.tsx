import { FEEDBACK } from "../actions";
import { Reducer, AnyAction } from "redux";

const feedbackReducer: Reducer = (state: any = {}, action: AnyAction) => {
  switch (action.type) {
    case FEEDBACK.SUCCESS:
      return {
        ...state,
        count: action.response.count,
        isFetching: false
      };
    case FEEDBACK.REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case FEEDBACK.ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default feedbackReducer;
