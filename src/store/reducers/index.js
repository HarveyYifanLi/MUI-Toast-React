//index.js is responsible for bundling reducers into rootReducer
import { combineReducers } from "redux";
import currentForm from "./currentForm";
import toastNotification from "./toastNotification";

const rootReducer = combineReducers({
  currentForm,
  toastNotification,
});

export default rootReducer;