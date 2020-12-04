import axios from "axios";
//HC imports
import {
  createPlatformURL,
  handleSecureAjaxError,
} from "../util/SecurePlatformAPIUtils";

/** Action Types */
export const GET_AREA_LIST = "get-area-list";
/**
 * Load Service List
 */
export const loadAreaList = (callback) => {
  let url = createPlatformURL("area");
  return (dispatch) => {
    axios
      .get(url)
      .then((res) => {
        callback && callback();
        dispatch(getAreaList(res.data));
      })
      .catch((error) => {
        handleSecureAjaxError(error, "ServiceActions loadService");
        callback && callback();
      });
  };
};

export const getAreaList = (areaList, value) => {
  return {
    type: GET_AREA_LIST,
    payload: areaList.data,
    value,
  };
};
