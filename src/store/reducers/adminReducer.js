import actionTypes from "../actions/actionTypes";

const initialState = {
  genders: [],
  citys: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GENDER_START:
      return {
        ...state,
      };
    case actionTypes.FETCH_GENDER_SUCCESS:
      state.genders = action.data;
      return {
        ...state,
      };
    case actionTypes.FETCH_GENDER_FAIDED:
      state.genders = [];
      return {
        ...state,
      };

    case actionTypes.FETCH_CITY_START:
      return {
        ...state,
      };
    case actionTypes.FETCH_CITY_SUCCESS:
      state.citys = action.data;
      return {
        ...state,
      };
    case actionTypes.FETCH_CITY_FAIDED:
      state.citys = [];

      return {
        ...state,
      };

    default:
      return state;
  }
};

export default adminReducer;
