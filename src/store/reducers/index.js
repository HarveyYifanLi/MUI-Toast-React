//index.js is responsible for bundling reducers into rootReducer
import { combineReducers } from "redux";
import currentForm from "./currentForm";

const rootReducer = combineReducers({
  currentForm,
});

export default rootReducer;