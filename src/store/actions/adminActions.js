import actionTypes from "./actionTypes";
import {
  getAllCodeService,
  getAllUsers,
  createNewUserService,
  deleteUserService,
  editUserService,
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
  type: actionTypes.FETCH_GENDER_FAIDED,
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
      console.log("fetchCityStart error", e);
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

export const createNewSeeker = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await createNewUserService(data);
      console.log(" check create: ", res);
      if (res && res.errCode === 0) {
        toast.success("Tạo mới thành công");
        dispatch(saveSeekerSuccess());
        dispatch(fetchAllUsersStart());
      } else {
        dispatch(saveSeekerFailed());
      }
    } catch (e) {
      dispatch(saveSeekerFailed());
      console.log("saveSeekerFailed error", e);
    }
  };
};

export const saveSeekerSuccess = () => ({
  type: actionTypes.CREATE_SEEKER_SUCCESS,
});

export const saveSeekerFailed = () => ({
  type: actionTypes.CREATE_SEEKER_FAILED,
});

export const deleteSeeker = (userId) => {
  return async (dispatch, getState) => {
    try {
      let res = await deleteUserService(userId);
      if (res && res.errCode === 0) {
        toast.success("Xóa thành công");
        dispatch(deleteSeekerSuccess());
        dispatch(fetchAllUsersStart());
      } else {
        toast.success("Xóa thất bại");

        dispatch(saveSeekerFailed());
      }
    } catch (e) {
      dispatch(deleteSeekerFailed());
      console.log("deleteSeekerFailed error", e);
    }
  };
};

export const deleteSeekerSuccess = () => ({
  type: actionTypes.DELETE_SEEKER_SUCCESS,
});

export const deleteSeekerFailed = () => ({
  type: actionTypes.DELETE_SEEKER_FAILED,
});

export const editSeeker = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await editUserService(data);
      if (res && res.errCode === 0) {
        toast.success("Cập nhập thành công");
        dispatch(editSeekerSuccess());
        dispatch(fetchAllUsersStart());
      } else {
        toast.success("Cập nhập thất bại");
        dispatch(editSeekerFailed());
      }
    } catch (e) {
      dispatch(editSeekerFailed());
      console.log("editSeekerFailed error", e);
    }
  };
};

export const editSeekerSuccess = () => ({
  type: actionTypes.EDIT_SEEKER_SUCCESS,
});

export const editSeekerFailed = () => ({
  type: actionTypes.EDIT_SEEKER_FAILED,
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
