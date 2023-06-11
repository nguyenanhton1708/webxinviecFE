import actionTypes from "../actions/actionTypes";

const initialState = {
  isLoadingGender: false,
  genders: [],
  roles: [],
  positions: [],
  citys: [],
  users: [],
  topCompanys: [],
  allCompanys: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GENDER_START:
      let copyState = { ...state };
      copyState.isLoadingGender = true;
      return {
        ...copyState,
      };

    case actionTypes.FETCH_GENDER_SUCCESS:
      state.genders = action.data;
      state.isLoadingGender = false;
      return {
        ...state,
      };

    case actionTypes.FETCH_GENDER_FAILED:
      state.isLoadingGender = false;
      state.genders = [];
      return {
        ...state,
      };

    case actionTypes.FETCH_POSITION_SUCCESS:
      state.positions = action.data;
      return {
        ...state,
      };

    case actionTypes.FETCH_POSITION_FAILED:
      state.positions = [];
      return {
        ...state,
      };

    case actionTypes.FETCH_ROLE_SUCCESS:
      state.roles = action.data;
      return {
        ...state,
      };

    case actionTypes.FETCH_ROLE_FAILED:
      state.roles = [];
      return {
        ...state,
      };

    case actionTypes.FETCH_CITY_SUCCESS:
      state.citys = action.data;
      return {
        ...state,
      };
    case actionTypes.FETCH_CITY_FAILED:
      state.citys = [];
      return {
        ...state,
      };

    case actionTypes.FETCH_ALL_USERS_SUCCESS:
      state.users = action.users;
      return {
        ...state,
      };

    case actionTypes.FETCH_ALL_USERS_FAILED:
      state.users = [];
      return {
        ...state,
      };

    case actionTypes.FETCH_TOP_COMPANY_SUCCESS:
      state.topCompanys = action.dataCompanys;
      return {
        ...state,
      };

    case actionTypes.FETCH_TOP_COMPANY_FAILED:
      state.topCompanys = [];

      return {
        ...state,
      };

    case actionTypes.FETCH_ALL_COMPANYS_SUCCESS:
      state.allCompanys = action.dataAllCompanys;
      return {
        ...state,
      };

    case actionTypes.FETCH_ALL_COMPANYS_FAILED:
      state.allCompanys = [];

      return {
        ...state,
      };
    default:
      return state;
  }
};

export default adminReducer;
