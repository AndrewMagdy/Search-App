import { combineReducers } from "redux";
import itemsReducer from "./items.reducer";
import feedbackReducer from "./feedback.reducer";

const rootReducer = combineReducers({
  itemsByType: itemsReducer,
  feedback: feedbackReducer
});

export default rootReducer;
