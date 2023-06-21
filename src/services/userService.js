import axios from "../axios";

const handleLoginApi = (email, password) => {
  return axios.post("/api/login", { email, password });
};

const getAllUsers = (inputId) => {
  return axios.get(`/api/get-all-users?id=${inputId}`);
};
const createNewUserService = (data) => {
  console.log("check data from service: ", data);
  return axios.post("/api/create-new-user", data);
};
const deleteUserService = (userId) => {
  return axios.delete("/api/Delete-user", {
    data: { id: userId },
  });
};
const editUserService = (inputData) => {
  return axios.put("/api/edit-user", inputData);
};
const getAllCodeService = (inputType) => {
  return axios.get(`/api/allcode?type=${inputType}`);
};
const getTopCompanyService = (limit) => {
  return axios.get(`/api/top-company-home?limit=${limit}`);
};

const getAllCompanys = () => {
  return axios.get(`/api/get-all-companys`);
};

const getAllSeeker = (inputId) => {
  return axios.get(`/api/get-all-seeker?id=${inputId}`);
};
const saveDetailCompanyService = (data) => {
  return axios.post(`/api/save-infor-companys`, data);
};

const getDetailInforCompany = (inputId) => {
  return axios.get(`/api/get-detail-company?id=${inputId}`);
};

const savePostRecruitService = (data) => {
  return axios.post(`/api/save-infor-post`, data);
};

const getAllPost = (inputId) => {
  return axios.get(`/api/get-all-post?id=${inputId}`);
};
export {
  handleLoginApi,
  getAllUsers,
  createNewUserService,
  deleteUserService,
  editUserService,
  getAllCodeService,
  getTopCompanyService,
  getAllCompanys,
  saveDetailCompanyService,
  getDetailInforCompany,
  savePostRecruitService,
  getAllSeeker,
  getAllPost,
};
