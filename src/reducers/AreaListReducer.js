import { GET_AREA_LIST } from "../actions/AreaListAction";

export const INITIAL_STATE = {
  loading: false,
  areaList: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_AREA_LIST:
      return {
        ...state,
        areaList: action.payload,
      };
    default:
      return state;
  }
};
