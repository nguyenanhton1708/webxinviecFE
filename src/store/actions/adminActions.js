import actionTypes from "./actionTypes";
import {
  getAllCodeService,
  getAllUsers,
  createNewUserService,
  deleteUserService,
  editUserService,
  getTopCompanyService,
} from "../../services/userService";
import { toast } from "react-toastify";
export const fetchGenderStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService("GENDER");
      if (res && res.errCode === 0) {
        dispatch(fetchGenderSuccess(res.data));
      } else {
        dispatch(fetchGenderFailed());
      }
    } catch (e) {
      dispatch(fetchGenderFailed());
      console.log("fetchGenderStart error", e);
    }
  };
};

export const fetchGenderSuccess = (genderData) => ({
  type: actionTypes.FETCH_GENDER_SUCCESS,
  data: genderData,
});

export const fetchGenderFailed = () => ({
  type: actionTypes.FETCH_GENDER_FAILED,
});

export const fetchPositionStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService("POSITION");
      if (res && res.errCode === 0) {
        dispatch(fetchPositionSuccess(res.data));
      } else {
        dispatch(fetchPositionFailed());
      }
    } catch (e) {
      dispatch(fetchPositionFailed());
      console.log("fetchPositionFailed error", e);
    }
  };
};
export const fetchPositionSuccess = (positionData) => ({
  type: actionTypes.FETCH_POSITION_SUCCESS,
  data: positionData,
});

export const fetchPositionFailed = () => ({
  type: actionTypes.FETCH_POSITION_FAILED,
});

export const fetchRoleStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService("ROLE");
      if (res && res.errCode === 0) {
        dispatch(fetchRoleSuccess(res.data));
      } else {
        dispatch(fetchRoleFailed());
      }
    } catch (e) {
      dispatch(fetchRoleFailed());
      console.log("fetchRoleFailed error", e);
    }
  };
};

export const fetchRoleSuccess = (roleData) => ({
  type: actionTypes.FETCH_ROLE_SUCCESS,
  data: roleData,
});

export const fetchRoleFailed = () => ({
  type: actionTypes.FETCH_ROLE_FAILED,
});

export const fetchCityStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService("CITY");
      if (res && res.errCode === 0) {
        dispatch(fetchCitySuccess(res.data));
      } else {
        dispatch(fetchCityFailed());
      }
    } catch (e) {
      dispatch(fetchCityFailed());
      console.log("fetchCityFailed error", e);
    }
  };
};

export const fetchCitySuccess = (cityData) => ({
  type: actionTypes.FETCH_CITY_SUCCESS,
  data: cityData,
});

export const fetchCityFailed = () => ({
  type: actionTypes.FETCH_GENDER_FAILED,
});

export const createNewUsers = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await createNewUserService(data);
      console.log(" check create: ", res);
      if (res && res.errCode === 0) {
        toast.success("Tạo mới thành công");
        dispatch(saveUsersSuccess());
        dispatch(fetchAllUsersStart());
      } else {
        dispatch(saveUsersFailed());
      }
    } catch (e) {
      dispatch(saveUsersFailed());
      console.log("saveUsersFailed error", e);
    }
  };
};

export const saveUsersSuccess = () => ({
  type: actionTypes.CREATE_Users_SUCCESS,
});

export const saveUsersFailed = () => ({
  type: actionTypes.CREATE_Users_FAILED,
});

export const deleteUsers = (userId) => {
  return async (dispatch, getState) => {
    try {
      let res = await deleteUserService(userId);
      if (res && res.errCode === 0) {
        toast.success("Xóa thành công");
        dispatch(deleteUsersSuccess());
        dispatch(fetchAllUsersStart());
      } else {
        toast.success("Xóa thất bại");

        dispatch(saveUsersFailed());
      }
    } catch (e) {
      dispatch(deleteUsersFailed());
      console.log("deleteUsersFailed error", e);
    }
  };
};

export const deleteUsersSuccess = () => ({
  type: actionTypes.DELETE_Users_SUCCESS,
});

export const deleteUsersFailed = () => ({
  type: actionTypes.DELETE_Users_FAILED,
});

export const editUsers = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await editUserService(data);
      if (res && res.errCode === 0) {
        toast.success("Cập nhập thành công");
        dispatch(editUsersSuccess());
        dispatch(fetchAllUsersStart());
      } else {
        toast.success("Cập nhập thất bại");
        dispatch(editUsersFailed());
      }
    } catch (e) {
      dispatch(editUsersFailed());
      console.log("editUsersFailed error", e);
    }
  };
};

export const editUsersSuccess = () => ({
  type: actionTypes.EDIT_Users_SUCCESS,
});

export const editUsersFailed = () => ({
  type: actionTypes.EDIT_Users_FAILED,
});

export const fetchAllUsersStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllUsers("ALL");
      if (res && res.errCode === 0) {
        dispatch(fetchAllUsersSuccess(res.users.reverse()));
      } else {
        dispatch(fetchAllUsersFailed());
      }
    } catch (e) {
      dispatch(fetchAllUsersFailed());
      console.log("fetchAllUsersFailed error", e);
    }
  };
};

export const fetchAllUsersSuccess = (data) => ({
  type: actionTypes.FETCH_ALL_USERS_SUCCESS,
  users: data,
});

export const fetchAllUsersFailed = () => ({
  type: actionTypes.FETCH_ALL_USERS_FALIED,
});

export const fetchTopCompany = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getTopCompanyService("");
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_TOP_COMPANY_SUCCESS,
          dataCompanys: res.data,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_TOP_COMPANY_FAILED,
        });
      }
    } catch (e) {
      console.log("FETCH_TOP_COMPANY_FAILED: ", e);
      dispatch({
        type: actionTypes.FETCH_TOP_COMPANY_FAILED,
      });
    }
  };
};

// let res1 = await getTopCompanyService("");
//       console.log("check res get top company:", res1);
