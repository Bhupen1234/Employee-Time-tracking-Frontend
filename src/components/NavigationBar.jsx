import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AppBar, Toolbar, Button, IconButton, Typography, Menu, MenuItem, Avatar, Drawer, Hidden } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ExitToApp from '@mui/icons-material/ExitToApp';
import TimeTrackingContext from '../context/TimeTrackingContext';

const NavigationBar = () => {
    const navigate = useNavigate();
    const { state, loginUser,  } = useContext(TimeTrackingContext);
  
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const handleLogout = () => {
    
      navigate('/login'); 
    };
  
    const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleDrawerClose = () => {
      setMobileMenuOpen(false);
    };
  
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setMobileMenuOpen(true)}
          >
            <AccountCircle />
          </IconButton>
          <Typography variant="h6">
            Employee Time Tracking System
          </Typography>
          <Hidden mdUp>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerClose}
            >
              <Menu />
            </IconButton>
          </Hidden>
          <Drawer
            anchor="left"
            open={mobileMenuOpen}
            onClose={handleDrawerClose}
          >
            <div className="mobile-menu">
              <Button onClick={handleClose}>Close</Button>
              <Link to="/dashboard">
                <Button color="inherit">Dashboard</Button>
              </Link>
              <Link to="/projects" >
                <Button color="inherit">Projects</Button>
              </Link>
              <Link to="/modules">
                <Button color="inherit">Modules</Button>
              </Link>
              <Link to="/tasks" >
                <Button color="inherit">Tasks</Button>
              </Link>
              <Link to="/reports">
                <Button color="inherit">Reports</Button>
              </Link>
            </div>
          </Drawer>
          <Hidden smDown>
            <div className="nav-links">
              <Link to="/dashboard">
                <Button color="inherit">Dashboard</Button>
              </Link>
              <Link to="/projects">
                <Button color="inherit">Projects</Button>
              </Link>
              <Link to="/modules">
                <Button color="inherit">Modules</Button>
              </Link>
              <Link to="/tasks">
                <Button color="inherit">Tasks</Button>
              </Link>
              <Link to="/reports">
                <Button color="inherit">Reports</Button>
              </Link>
            </div>
          </Hidden>
          {state.user ? (
            <div className="user-menu">
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenuClick}
                color="inherit"
              >
                <Avatar alt={state.user.username} src="/path/to/avatar.jpg" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLogout}>
                  <ExitToApp /> Logout
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <Button onClick={() => loginUser({ username: 'john', password: 'password' })}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    );
};

export default NavigationBar;