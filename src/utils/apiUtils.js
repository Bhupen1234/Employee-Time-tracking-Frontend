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

const getDepartmentById = (id) => {
  return axios.get(`${API_BASE_URL}/departments/${id}`);
};

const createDepartment = (departmentData) => {
  return axios.post(`${API_BASE_URL}/departments`, departmentData);
};

const updateDepartment = (id, updatedData) => {
  return axios.put(`${API_BASE_URL}/departments/${id}`, updatedData);
};

const deleteDepartment = (id) => {
  return axios.delete(`${API_BASE_URL}/departments/${id}`);
};

const getProjects = () => {
  return axios.get(`${API_BASE_URL}/projects`);
};

const getProjectById = (id) => {
  return axios.get(`${API_BASE_URL}/projects/${id}`);
};

const createProject = (projectData) => {
  return axios.post(`${API_BASE_URL}/projects`, projectData);
};

const updateProject = (id, updatedData) => {
  return axios.put(`${API_BASE_URL}/projects/${id}`, updatedData);
};

const deleteProject = (id) => {
  return axios.delete(`${API_BASE_URL}/projects/${id}`);
};

const getModules = () => {
  return axios.get(`${API_BASE_URL}/modules`);
};

const getModuleById = (id) => {
  return axios.get(`${API_BASE_URL}/modules/${id}`);
};

const createModule = (moduleData) => {
  return axios.post(`${API_BASE_URL}/modules`, moduleData);
};

const updateModule = (id, updatedData) => {
  return axios.put(`${API_BASE_URL}/modules/${id}`, updatedData);
};

const deleteModule = (id) => {
  return axios.delete(`${API_BASE_URL}/modules/${id}`);
};

const getTasks = () => {
  return axios.get(`${API_BASE_URL}/tasks`);
};

const getTaskById = (id) => {
  return axios.get(`${API_BASE_URL}/tasks/${id}`);
};

const createTask = (taskData) => {
  return axios.post(`${API_BASE_URL}/tasks`, taskData);
};

const updateTask = (id, updatedData) => {
  return axios.put(`${API_BASE_URL}/tasks/${id}`, updatedData);
};

const deleteTask = (id) => {
  return axios.delete(`${API_BASE_URL}/tasks/${id}`);
};

const createTimeLog = (timeLogData) => {
  return axios.post(`${API_BASE_URL}/time-logs`, timeLogData);
};

const getAllTimeLogs = () => {
  return axios.get(`${API_BASE_URL}/time-logs`);
};

const getTimeLogById = (id) => {
  return axios.get(`${API_BASE_URL}/time-logs/${id}`);
};

const updateTimeLog = (id, updatedData) => {
  return axios.put(`${API_BASE_URL}/time-logs/${id}`, updatedData);
};

const deleteTimeLog = (id) => {
  return axios.delete(`${API_BASE_URL}/time-logs/${id}`);
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