import { combineReducers } from "redux";
import itemsReducer from "./items.reducer";

const rootReducer = combineReducers({ itemsByType: itemsReducer });

export default rootReducer;
