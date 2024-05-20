import React, { useState, useEffect, useContext } from 'react';
import { getDepartments, getProjects, getModules, getTasks, getReports } from '../../utils/apiUtils';
import { Grid, Paper, Card, CardHeader, CardContent, CardActions, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Button } from '@mui/material';
import TimeTrackingContext from '../../context/TimeTrackingContext';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Style } from '@mui/icons-material';

const Dashboard = () => {
  const { state,setDepartments } = useContext(TimeTrackingContext);
  const [modalInstance,setModalInstance] = useState("")
  const token = localStorage.getItem('token')
  const [formData,setFormData] = useState({
    title:'',
    description:''
  })
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getDepartments(token)
      .then(response => {
        setDepartments(response.data);
      })
      .catch(error => {
        console.error('Error fetching departments:', error);
      });

   

   
  }, []);

  const handleCreateDepartment = async() => {
    // Implement logic to create a new department

    setModalInstance("Department")
    handleOpen();
    





       
  };

  const handleCreateProject = () => {
    // Implement logic to create a new project
  };

  const handleCreateModule = () => {
    // Implement logic to create a new module
  };

  const handleCreateTask = () => {
    // Implement logic to create a new task
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper elevation={3}>
          <Card>
            <CardHeader title="Dashboard" />
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
                                    <Button size="small" variant="contained" color="primary" onClick={()=>handleCreateProject(department._id)}>
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
                                    <Button size="small" variant="contained" color="primary" onClick={handleCreateProject}>
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
                    
                    <CardHeader title="Module" />
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
                                    <Button size="small" variant="contained" color="primary" onClick={handleCreateProject}>
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
                    
                    <CardHeader title="Task" />
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
                                    <Button size="small" variant="contained" color="primary" onClick={handleCreateProject}>
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
                <Button size="small" variant="contained" color="primary" onClick={handleCreateDepartment}>
                  Create Department
                </Button>
              )}
            </CardActions>
          </Card>
        </Paper>
      </Grid>

      <Modal setOpen={setOpen} open={open} handleCLose={handleClose} hansleOpen={handleOpen} modalInstance={modalInstance}  setFormData={setFormData}/>
    </Grid>
  );
};

export default Dashboard;