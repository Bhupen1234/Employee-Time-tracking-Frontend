import axios from "axios";


const API_BASE_URL = 'http://localhost:5000/api';



const register = (userData) => {
  return axios.post(`${API_BASE_URL}/auth/signup`, userData);
};

const login = (credentials) => {
  return axios.post(`${API_BASE_URL}/auth/login`, credentials);
};

const getDepartments = (token) => {
  return axios.get(`${API_BASE_URL}/departments`,{
    headers: { Authorization: `Bearer ${token}` }
  });
};

const getDepartmentById = (id,token) => {
  return axios.get(`${API_BASE_URL}/departments/${id}`,{
    headers: { Authorization: `Bearer ${token}` }
  });
};

const createDepartment = (token,departmentData) => {
  return axios.post(`${API_BASE_URL}/departments`, departmentData,{
    headers: { Authorization: `Bearer ${token}` }
  });
};

const updateDepartment = (id, updatedData,token) => {
  return axios.put(`${API_BASE_URL}/departments/${id}`, updatedData,{
    headers: { Authorization: `Bearer ${token}` }
  });
};

const deleteDepartment = (id,token) => {
  return axios.delete(`${API_BASE_URL}/departments/${id}`,{
    headers: { Authorization: `Bearer ${token}` }
  });
};

const getProjects = (token) => {
  return axios.get(`${API_BASE_URL}/projects`,{
    headers: { Authorization: `Bearer ${token}` }
  });
};

const getProjectById = (id,token) => {
  return axios.get(`${API_BASE_URL}/projects/${id}`,{
    headers: { Authorization: `Bearer ${token}` }
  });
};

const createProject = (token,projectData) => {
  return axios.post(`${API_BASE_URL}/projects`, projectData,{
    headers: { Authorization: `Bearer ${token}` }
  });
};

const updateProject = (id, updatedData,token) => {
  return axios.put(`${API_BASE_URL}/projects/${id}`, updatedData,{
    headers: { Authorization: `Bearer ${token}` }
  });
};

const deleteProject = (id,token) => {
  return axios.delete(`${API_BASE_URL}/projects/${id}`,{
    headers: { Authorization: `Bearer ${token}` }
  });
};

const getModules = (token) => {
  return axios.get(`${API_BASE_URL}/modules`,{
    headers: { Authorization: `Bearer ${token}` }
  });
};

const getModuleById = (id,token) => {
  return axios.get(`${API_BASE_URL}/modules/${id}`,{
    headers: { Authorization: `Bearer ${token}` }
  });
};

const createModule = (token,moduleData) => {
  return axios.post(`${API_BASE_URL}/modules`, moduleData,{
    headers: { Authorization: `Bearer ${token}` }
  });
};

const updateModule = (id, updatedData,token) => {
  return axios.put(`${API_BASE_URL}/modules/${id}`, updatedData,{
    headers: { Authorization: `Bearer ${token}` }
  });
};

const deleteModule = (id,token) => {
  return axios.delete(`${API_BASE_URL}/modules/${id}`,{
    headers: { Authorization: `Bearer ${token}` }
  });
};

const getTasks = (token) => {
  return axios.get(`${API_BASE_URL}/tasks`,{
    headers: { Authorization: `Bearer ${token}` }
  });
};

const getTaskById = (id,token) => {
  return axios.get(`${API_BASE_URL}/tasks/${id}`,{
    headers: { Authorization: `Bearer ${token}` }
  });
};

const createTask = (token,taskData) => {
  return axios.post(`${API_BASE_URL}/tasks`, taskData,{
    headers: { Authorization: `Bearer ${token}` }
  });
};

const updateTask = (id, updatedData,token) => {
  return axios.put(`${API_BASE_URL}/tasks/${id}`, updatedData,{
    headers: { Authorization: `Bearer ${token}` }
  });
};

const deleteTask = (id,token) => {
  return axios.delete(`${API_BASE_URL}/tasks/${id}`,{
    headers: { Authorization: `Bearer ${token}` }
  });
};

const createTimeLog = (token,timeLogData) => {
  return axios.post(`${API_BASE_URL}/time-logs`, timeLogData,{
    headers: { Authorization: `Bearer ${token}` }
  });
};

const getAllTimeLogs = (token) => {
  return axios.get(`${API_BASE_URL}/time-logs`,{
    headers: { Authorization: `Bearer ${token}` }
  });
};

const getTimeLogById = (id,token) => {
  return axios.get(`${API_BASE_URL}/time-logs/${id}`,{
    headers: { Authorization: `Bearer ${token}` }
  });
};

const updateTimeLog = (id, updatedData,token) => {
  return axios.put(`${API_BASE_URL}/time-logs/${id}`, updatedData,{
    headers: { Authorization: `Bearer ${token}` }
  });
};

const deleteTimeLog = (id,token) => {
  return axios.delete(`${API_BASE_URL}/time-logs/${id}`,{
    headers: { Authorization: `Bearer ${token}` }
  });
};


export {
  register,
  login,
  getDepartments,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartment,
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  getModules,
  getModuleById,
  createModule,
  updateModule,
  deleteModule,
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  createTimeLog,
  getAllTimeLogs,
  getTimeLogById,
  updateTimeLog,
  deleteTimeLog
};