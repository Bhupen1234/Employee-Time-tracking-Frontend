import React, { useContext, useState, useEffect } from 'react';
import { getDepartments, getProjects, getModules, getTasks, createDepartment, createProject, createModule, createTask, createTimeLog, getAllTimeLogs } from '../../utils/apiUtils';
import { Grid, Paper, Card, CardHeader, CardContent, CardActions, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Button, TextField, FormControlLabel, Checkbox, InputLabel, Select, MenuItem, Modal, Box } from '@mui/material';
import TimeTrackingContext from '../../context/TimeTrackingContext';
import { useNavigate } from 'react-router-dom';
import TaskPage from '../TaskPage/TaskPage';

const Dashboard = () => {
  const { state, setDepartments, setProjects, setModules, setTasks } = useContext(TimeTrackingContext);
  const token = localStorage.getItem('token');
  

  const [openCreateDepartment, setOpenCreateDepartment] = useState(false);
  const [openCreateProject, setOpenCreateProject] = useState(false);
  const [openCreateModule, setOpenCreateModule] = useState(false);
  const [openCreateTask, setOpenCreateTask] = useState(false);

  const [departmentName, setDepartmentName] = useState('');
  const [departmentDescription, setDepartmentDescription] = useState('');

  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectId, setProjectId] = useState('');

  const [moduleName, setModuleName] = useState('');
  const [moduleDescription, setModuleDescription] = useState('');
  const [moduleProjectId, setModuleProjectId] = useState('');

  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskId, setTaskId] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [employeeReport, setEmployeeReport] = useState({
    taskname :"",
    username :"",
    starttime :"",
    endtime :"",
   
  })

  const [reports, setReports] = useState([])


  

  const navigate = useNavigate()
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    getDepartments(token)
      .then((response) => {
        setDepartments([...response.data]);
      })
      .catch((error) => {
        console.error('Error fetching departments:', error);
      });

    getProjects(token)
      .then((response) => {
        setProjects([...response.data]);
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
      });

    getModules(token)
      .then((response) => {
        setModules([...response.data]);
      })
      .catch((error) => {
        console.error('Error fetching modules:', error);
      });

    getTasks(token)
      .then((response) => {
        setTasks([...response.data]);
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
      });
  }, [token]); 

  const handleCreateDepartment = () => {
    createDepartment(token, { name: departmentName, description: departmentDescription })
      .then((response) => {
        setOpenCreateDepartment(false);
        setDepartmentName('');
        setDepartmentDescription('');
        getDepartments(token)
          .then((response) => {
            setDepartments(response.data);
          })
          .catch((error) => {
            console.error('Error fetching departments:', error);
          });
      })
      .catch((error) => {
        console.error('Error creating department:', error);
      });
  };

  const handleCreateProject = (departmentId) => {
    setProjectId(departmentId);
    setOpenCreateProject(true);
  };

  const handleCreateModule = (projectId) => {
    setModuleProjectId(projectId);
    setOpenCreateModule(true);
  };

  const handleCreateTask = (moduleId) => {
    setTaskId(moduleId);
    setOpenCreateTask(true);
  };

  const handleCloseCreateDepartment = () => {
    setOpenCreateDepartment(false);
  };

  const handleCloseCreateProject = () => {
    setOpenCreateProject(false);
  };

  const handleCloseCreateModule = () => {
    setOpenCreateModule(false);
  };

  const handleCloseCreateTask = () => {
    setOpenCreateTask(false);
  };

  const handleChangeDepartmentName = (event) => {
    setDepartmentName(event.target.value);
  };

  const handleChangeDepartmentDescription = (event) => {
    setDepartmentDescription(event.target.value);
  };

  const handleChangeProjectName = (event) => {
    setProjectName(event.target.value);
  };

  const handleChangeProjectDescription = (event) => {
    setProjectDescription(event.target.value);
  };

  const handleChangeModuleName = (event) => {
    setModuleName(event.target.value);
  };

  const handleChangeModuleDescription = (event) => {
    setModuleDescription(event.target.value);
  };

  const handleChangeTaskName = (event) => {
    setTaskName(event.target.value);
  };

  const handleChangeTaskDescription = (event) => {
    setTaskDescription(event.target.value);
  };

  const handleStartTask =(taskId) =>{
    // createTask(token, { name: taskName, description: taskDescription, projectId: projectId, moduleId: taskId })
    //  .then((response) => {
    //     setOpenCreateTask(false);
    //     setTaskName('');
    //     setTaskDescription('');
    //     getTasks(token)
    //      .then((response) => {
    //         setTasks(response.data);
    //       })
    //      .catch((error) => {
    //         console.error('Error fetching tasks:', error);
    //       });
    //   })
    //  .catch((error) => {
    //     console.error('Error creating task:', error);
    //   });

    setTaskId(taskId);
    setStartTime(new Date());
    navigate(`/task/${taskId}`)
    


  }


  



  const getAllreports =()=>{
    getAllTimeLogs(token)
     .then((response) => {
       
       setReports(response.data)
      })
     .catch((error) => {
        console.error('Error fetching reports:', error);
      });
  }


const handleLogout = () => {

localStorage.removeItem('token');

localStorage.removeItem('role');

localStorage.removeItem('userId');
 navigate('/')

}

  useEffect(()=>{
    getAllreports()
  },[])


 
 

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper elevation={3}>
          <Card>
            <CardHeader title="Dashboard" />
            <Button variant='contained' onClick={()=>handleLogout()}>Logout</Button>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Card>
                    <CardHeader title="Departments" />
                    <CardContent>
                      <TableContainer>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Department Name</TableCell>
                              <TableCell>Description</TableCell>
                              <TableCell>Actions</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {state.departments.map((department) => (
                              <TableRow key={department._id}>
                                <TableCell>{department.name}</TableCell>
                                <TableCell>{department.description}</TableCell>
                                <TableCell>
                                  {localStorage.getItem('role') === 'Admin' && (
                                    <Button size="small" variant="contained" color="primary" onClick={() => handleCreateProject(department._id)}>
                                      Create Project
                                    </Button>
                                  )}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card>
                    <CardHeader title="Projects" />
                    <CardContent>
                      <TableContainer>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Project Name</TableCell>
                              <TableCell>Description</TableCell>
                              <TableCell>Actions</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {state.projects.map((project) => (
                              <TableRow key={project._id}>
                                <TableCell>{project.name}</TableCell>
                                <TableCell>{project.description}</TableCell>
                                <TableCell>
                                  {localStorage.getItem('role') === 'Admin' && (
                                    <Button size="small" variant="contained" color="primary" onClick={() => handleCreateModule(project._id)}>
                                      Create Module
                                    </Button>
                                  )}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card>
                    <CardHeader title="Modules" />
                    <CardContent>
                      <TableContainer>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Module Name</TableCell>
                              <TableCell>Description</TableCell>
                              <TableCell>Actions</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {state.modules.map((module) => (
                              <TableRow key={module._id}>
                                <TableCell>{module.name}</TableCell>
                                <TableCell>{module.description}</TableCell>
                                <TableCell>
                                  {localStorage.getItem('role') === 'Admin' && (
                                    <Button size="small" variant="contained" color="primary" onClick={() => handleCreateTask(module._id)}>
                                      Create Task
                                    </Button>
                                  )}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card>
                    <CardHeader title="Tasks" />
                    <CardContent>
                      <TableContainer>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Task Name</TableCell>
                              <TableCell>Description</TableCell>
                              <TableCell>Actions</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {state.tasks.map((task) => (
                              <TableRow key={task._id}>
                                <TableCell>{task.name}</TableCell>
                                <TableCell>{task.description}</TableCell>
                                <TableCell>
                                  {localStorage.getItem('role') === 'Employee' && (
                                    <Button size="small" variant="contained" color="primary" onClick={() => handleStartTask(task._id)}>
                                      Start Task
                                    </Button>
                                  )}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              {localStorage.getItem('role') === 'Admin' && (
                <Button size="small" variant="contained" color="primary" onClick={() => setOpenCreateDepartment(true)}>
                  Create Department
                </Button>
              )}
            </CardActions>
          </Card>
        </Paper>
      </Grid>
      <Modal
        open={openCreateDepartment}
        onClose={handleCloseCreateDepartment}
        title="Create Department"
        submitText="Create"
       
      >
        <Box sx={style}>
          <TextField
            label="Department Name"
            value={departmentName}
            onChange={handleChangeDepartmentName}
          />
          <TextField
            label="Description"
            value={departmentDescription}
            onChange={handleChangeDepartmentDescription}
          />
          <Button type="submit" onClick={handleCreateDepartment}>Submit</Button>
        </Box>
      </Modal>
      <Modal
        open={openCreateProject}
        onClose={handleCloseCreateProject}
        title="Create Project"
        submitText="Create"
        
      >
        <Box sx={style}>
          <InputLabel>Department</InputLabel>
          <Select
            value={projectId}
            label="Department"
            onChange={(event) => setProjectId(event.target.value)}
          >
            {state.departments.map((department) => (
              <MenuItem value={department._id}>{department.name}</MenuItem>
            ))}
          </Select>
          <TextField
            label="Project Name"
            value={projectName}
            onChange={handleChangeProjectName}
          />
          <TextField
            label="Description"
            value={projectDescription}
            onChange={handleChangeProjectDescription}
          />
          <Button type="submit" onClick={() => {
          createProject(token, { name: projectName, description: projectDescription, department: projectId })
            .then((response) => {
              setOpenCreateProject(false);
              setProjectName('');
              setProjectDescription('');
              getProjects(token)
                .then((response) => {
                  setProjects(response.data);
                })
                .catch((error) => {
                  console.error('Error fetching projects:', error);
                });
            })
            .catch((error) => {
              console.error('Error creating project:', error);
            });
        }}>Submit</Button>
        </Box>
      </Modal>
      <Modal
        open={openCreateModule}
        onClose={handleCloseCreateModule}
        title="Create Module"
        submitText="Create"
       
      >
        <Box sx={style}>
          <InputLabel>Project</InputLabel>
          <Select
            value={moduleProjectId}
            label="Project"
            onChange={(event) => setModuleProjectId(event.target.value)}
          >
            {state.projects.map((project) => (
              <MenuItem value={project._id}>{project.name}</MenuItem>
            ))}
          </Select>
          <TextField
            label="Module Name"
            value={moduleName}
            onChange={handleChangeModuleName}
          />
          <TextField
            label="Description"
            value={moduleDescription}
            onChange={handleChangeModuleDescription}
          />
          <Button type="submit" onClick={() => {
          createModule(token, { name: moduleName, description: moduleDescription, project: moduleProjectId })
            .then((response) => {
              setOpenCreateModule(false);
              setModuleName('');
              setModuleDescription('');
              getModules(token)
                .then((response) => {
                  setModules(response.data);
                })
                .catch((error) => {
                  console.error('Error fetching modules:', error);
                });
            })
            .catch((error) => {
              console.error('Error creating module:', error);
            });
        }}>Submit</Button>
        </Box>
      </Modal>
      <Modal
        open={openCreateTask}
        onClose={handleCloseCreateTask}
        title="Create Task"
        submitText="Create"
        
      >
        <Box sx={style}>
          <InputLabel>Module</InputLabel>
          <Select
            value={taskId}
            label="Module"
            onChange={(event) => setTaskId(event.target.value)}
          >
            {state.modules.map((module) => (
              <MenuItem value={module._id}>{module.name}</MenuItem>
            ))}
          </Select>
          <TextField
            label="Task Name"
            value={taskName}
            onChange={handleChangeTaskName}
          />
          <TextField
            label="Description"
            value={taskDescription}
            onChange={handleChangeTaskDescription}
          />
          <Button type="submit" onClick={() => {
          createTask(token, { name: taskName, description: taskDescription, module: taskId })
            .then((response) => {
              setOpenCreateTask(false);
              setTaskName('');
              setTaskDescription('');
              getTasks(token)
                .then((response) => {
                  setTasks(response.data);
                })
                .catch((error) => {
                  console.error('Error fetching tasks:', error);
                });
            })
            .catch((error) => {
              console.error('Error creating task:', error);
            });
        }}>Submit</Button>
        </Box>
      </Modal>
      {/* <TaskPage startTime={startTime} endTime={endTime} onEndTask={handleEndTask} /> */}
       {
        localStorage.getItem('role')==='Admin' && (
          <>
          <h4>Report</h4>
          <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Task Id</TableCell>
                              <TableCell>User Id</TableCell>
                              <TableCell>Start Time</TableCell>
                              <TableCell>End Time</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {reports.map((report) => (
                              <TableRow key={report._id}>
                                <TableCell>{report.task}</TableCell>
                                <TableCell>{report.user}</TableCell>
                                <TableCell>
                                  {report.startTime}
                                </TableCell>
                                <TableCell>{report.endTime}</TableCell>
                               
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
          
          </>
        )
       }
    </Grid>
  );
};

export default Dashboard;