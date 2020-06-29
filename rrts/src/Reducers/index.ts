import { combineReducers } from "redux";
import { FetchReducers } from "./FetchReducer";
import { ToDo } from "../Actions";

export interface StoreState {
  todo: ToDo[];
}

export default combineReducers<StoreState>({
  todo: FetchReducers,
});
