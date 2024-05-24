import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useNavigate, useParams } from 'react-router-dom';
import { getTaskById, updateTask, createTimeLog, getUploadedFiles } from '../../utils/apiUtils';
import { Grid, Paper, Card, CardHeader, CardContent, CardActions, Button, TextField, Input } from '@mui/material';

const TaskPage = () => {
  const [taskId, setTaskId] = useState('');
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskStatus, setTaskStatus] = useState('Todo');
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [duration, setDuration] = useState(0);
  const [filePaths, setFilePaths] = useState({})
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const token = localStorage.getItem('token');
  const navigate = useNavigate()
  const { id } = useParams();
  useEffect(() => {
    getTaskById(token, id)
      .then((response) => {
        setTaskId(response.data._id);
        setTaskName(response.data.name);
        setTaskDescription(response.data.description);
        setTaskStatus(response.data.status);
      })
      .catch((error) => {
        console.error('Error fetching task:', error);
      });
  }, [id]);

  const handleStartTask = () => {
    setStartTime(moment().format("MMMM Do YYYY, h:mm:ss a"));

    setIsTimerRunning(true);
  };

  const handleEndTask = () => {
    setEndTime(moment().format("MMMM Do YYYY, h:mm:ss a"));
    setIsTimerRunning(false);
   
    
  };

  useEffect(()=>{
    console.log(filePaths[0])
    const duration = moment.duration(moment(endTime).diff(moment(startTime)));
    const durationSeconds = duration.asSeconds();
    const timeLogData = {
      user: localStorage.getItem('userId'),
      task: taskId,
      startTime: startTime,
      endTime: endTime,
      duration: durationSeconds,
      username: localStorage.getItem('username'),
      userFilePaths : Object.values(filePaths).map(filePath => filePath.name),
      notes: 'Task completed',
    };

    console.log(timeLogData.userFilePaths)
    updateTaskStatus()
    createTimeLog(token, timeLogData)
      .then((response) => {
        console.log('Time log created:', response.data);
      })
      .then(()=>navigate('/dashboard'))
      .catch((error) => {
        console.error('Error creating time log:', error);
      });
    
  
  },[endTime])



  const handlefileChange = (e) =>{
    setStartTime(moment().format("MMMM Do YYYY, h:mm:ss a"));

    setIsTimerRunning(true);
   
    console.log(e.target.files)
    setFilePaths(e.target.files)
  }

  const updateTaskStatus = () => {
    if (isTimerRunning) {
      setTaskStatus('In Progress');
    } else {
      setTaskStatus('Completed');
    }
  };

 

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper elevation={3}>
          <Card>
            <CardHeader title="Task Details" />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField label="Task Name" value={taskName} readOnly />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Description" value={taskDescription} readOnly />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Status" value={taskStatus} readOnly />
                </Grid>
                <Grid item xs={12}>
                  {/* <TextField label="Notes" value={notes} onChange={(event) => setNotes(event.target.value)} /> */}
                  <form  enctype="multipart/form-data" >
                     <input type="file" name="files" multiple onChange={(e)=>handlefileChange(e)}/>
                    
                  </form>
                </Grid>
                <Grid item xs={12}>
                  {isTimerRunning ? (
                    <Button variant="contained" color="primary" onClick={handleEndTask}>
                      End Task
                    </Button>
                  ) : (
                    <Button variant="contained" color="primary" onClick={handleStartTask}>
                      Start Task
                    </Button>
                  )}
                </Grid>
                <Grid item xs={12}>
                  {duration > 0 && <p>Duration: {moment.utc(duration).format('HH:mm:ss')}</p>}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TaskPage;