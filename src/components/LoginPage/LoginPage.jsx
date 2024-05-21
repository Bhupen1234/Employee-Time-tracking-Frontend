import React, { useContext, useEffect, useState } from 'react'
import { Button, FormControl, FormLabel, Input, MenuItem, Paper, Select, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import TimeTrackingContext from '../../context/TimeTrackingContext';
import { login } from '../../utils/apiUtils';
import { useSnackbar } from 'notistack';

const LoginPage = () => {
    const navigate = useNavigate()
    const {enqueueSnackbar} = useSnackbar()
    const [formData,setFormData] = useState({
        email: '',
        password: ''
    })



    const handleChange = (e) => {
        setFormData({
           ...formData,
            [e.target.name]: e.target.value
        })
    }



    const handleSubmit = async(e) => {
       try {
           e.preventDefault()
        const response = await login(formData);

        if (response.status === 200) {
            localStorage.setItem('token',response.data.token);
            localStorage.setItem('role',response.data.role);
            localStorage.setItem('userId',response.data.userId);
        }

        navigate('/dashboard')
       enqueueSnackbar("Logged in successfully",{variant:"success"})


         
       } catch (error) {
        enqueueSnackbar(error.message,{variant:"error"});
       }
    }


    useEffect(()=>{
      if(localStorage.getItem('token')){
        navigate('/dashboard')
      }
    },[])
  return (
    <main>
     
     
    <Paper
      sx={{
        width: 300,
        mx: 'auto', 
        my: 4, 
        py: 3, 
        px: 2, 
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRadius: 'sm',
        boxShadow: 'md',
      }}
      variant="outlined"
    >
      <div>
        <Typography level="h4" component="h1">
          <b>Welcome!</b>
        </Typography>
        <Typography level="body-sm">Login to continue.</Typography>
      </div>
      
        <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          // html input attribute
          name="email"
          type="email"
          placeholder="johndoe@email.com"
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          // html input attribute
          name="password"
          type="password"
          placeholder="password"
          onChange={handleChange}
        />
      </FormControl>
     
      <Button sx={{ mt: 1 /* margin top */ }} onClick={handleSubmit}>Login</Button>
      <Typography
      
        fontSize="sm"
        sx={{ alignSelf: 'center' }}
      >
        Dont't have an account? <Link to="/">Register here</Link>
      </Typography>
    </Paper>
  </main>
  )
}

export default LoginPage
