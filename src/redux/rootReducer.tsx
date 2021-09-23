import { combineReducers } from "redux";
import { answerReducer } from "./answerReducer";

export const rootReducer = combineReducers({
  answer: answerReducer,
});
