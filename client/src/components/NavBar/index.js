import * as React from 'react';
import Auth from "../../utils/auth"

// import material ui components
import { Link } from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import cctlogo from "../../assets/images/cctlogo.png";
// {/* <img className="logo" src={cctlogo} alt="outline of horse with parliament buildings in background"></img> */}

// import NavBar css
import "./NavBar.css"



const NavBar = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const logout = event => {
      event.preventDefault();
      Auth.logout();
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="nav">

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}><Link to="/home" className="menu-links">Home</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to="/profile" className="menu-links">Profile</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to="/theteam" className="menu-links">The Team</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to="/circuits" className="menu-links">Circuits</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to="/toproutes" className="menu-links">Top Routes</Link></MenuItem>
          </Menu>
        
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
          <MenuIcon />
          </IconButton>
          <Typography className="title" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>


          {Auth.loggedIn() ? ( 
            <>
              <Button className="signup" color="inherit"><a href="/profile">Profile</a></Button>
              <Button className="signup" color="inherit"><a href="/home" onClick={logout}>Logout</a></Button>
            </>
          ) : (
            <>
              <Button className="signup" color="inherit"><a href="/signup">Signup</a></Button>
              <Button color="inherit"><a href="/login">Login</a></Button>
            </>
          )}
        
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;