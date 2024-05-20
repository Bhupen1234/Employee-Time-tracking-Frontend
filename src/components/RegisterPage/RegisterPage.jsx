
import { Button, FormControl, FormLabel, Input, MenuItem, Paper, Select, Typography } from '@mui/material';
import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../utils/apiUtils';
import { useSnackbar } from 'notistack';




export default function RegisterPage() {

    const [formData,setFormData] = React.useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
     
    })

    const {enqueueSnackbar} = useSnackbar();
    const navigate= useNavigate()

    


    const handleChange = (e) => {
        setFormData({
           ...formData,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = async(e) => {
        try {
            e.preventDefault();
            const response = await register(formData);
            console.log(response.data);
            enqueueSnackbar("Registration Successful",{variant:"success"})
            setFormData({
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
            })
            navigate("/login")
        } catch (error) {

            console.log(error)
            enqueueSnackbar(error.message,{variant:"error"})
        }
       
    }


    React.useEffect(()=>{
        if(localStorage.getItem("token")){
            navigate("/dashboard")
        }
    })
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
          <Typography level="body-sm">Register to continue.</Typography>
        </div>
        <FormControl>
        <FormLabel>Username</FormLabel>
          <Input
            // html input attribute
            name="username"
            type="username"
            placeholder="johndoe@email.com"
            onChange={handleChange}
          />
          </FormControl>
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
        <FormControl>
          <FormLabel>Role</FormLabel>
          <Select name='role' onChange={handleChange}>
           <MenuItem value="Employee">Employee</MenuItem>
           <MenuItem value="Admin">Admin</MenuItem>
          </Select>
        </FormControl>
        <Button sx={{ mt: 1 /* margin top */ }} onClick={handleSubmit}>Register</Button>
        <Typography
        
          fontSize="sm"
          sx={{ alignSelf: 'center' }}
        >
          Already have an account? <Link to="/login">Log in</Link>
        </Typography>
      </Paper>
    </main>
  );
}
