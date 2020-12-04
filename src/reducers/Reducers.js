import { combineReducers } from "redux";
import AreaListReducer from "./AreaListReducer";

export const reducers = combineReducers({
  areaList: AreaListReducer,
});
