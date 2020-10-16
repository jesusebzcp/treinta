import { combineReducers } from "redux";
import addressReducerJs from "./addressReducer.js";
import auhtReducer from "./auhtReducer";

export default combineReducers({
  auhtReducer: auhtReducer,
  addressReducer: addressReducerJs,
});
