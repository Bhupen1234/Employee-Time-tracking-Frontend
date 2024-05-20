import React, { createContext, useState, useEffect } from 'react';
import TimeTrackingContext from './TimeTrackingContext';

const initialState = {
  user: null,
  departments: [],
  selectedDepartment: null,
  projects: [],
  selectedProject: null,
  modules: [],
  selectedModule: null,
  tasks: [],
  selectedTask: null,
  timeLogs: []
};




const TimeTrackingState = ({ children }) => {
  const [state, setState] = useState(initialState);

  const loginUser = (user) => {
    setState((prevState) => ({ ...prevState, user }));
  };

  const setDepartments = (departments) => {
    setState((prevState) => ({ ...prevState, departments }));
  };

  const setSelectedDepartment = (departmentId) => {
    setState((prevState) => ({ ...prevState, selectedDepartment: departmentId }));
  };

  const setProjects = (projects) => {
    setState((prevState) => ({ ...prevState, projects }));
  };

  const setSelectedProject = (projectId) => {
    setState((prevState) => ({ ...prevState, selectedProject: projectId }));
  };

  const setModules = (modules) => {
    setState((prevState) => ({ ...prevState, modules }));
  };

  const setSelectedModule = (moduleId) => {
    setState((prevState) => ({ ...prevState, selectedModule: moduleId }));
  };

  const setTasks = (tasks) => {
    setState((prevState) => ({ ...prevState, tasks }));
  };

  const setSelectedTask = (taskId) => {
    setState((prevState) => ({ ...prevState, selectedTask: taskId }));
  };

  const setTimeLogs = (timeLogs) => {
    setState((prevState) => ({ ...prevState, timeLogs }));
  };

  useEffect(() => {
    
  }, []);

  return (
    <TimeTrackingContext.Provider value={{
      state,
      loginUser,
      setDepartments,
      setSelectedDepartment,
      setProjects,
      setSelectedProject,
      setModules,
      setSelectedModule,
      setTasks,
      setSelectedTask,
      setTimeLogs
    }}>
      {children}
    </TimeTrackingContext.Provider>
  );
};

export default TimeTrackingState