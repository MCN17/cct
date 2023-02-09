import React, { useEffect } from 'react';
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



const NavBar = (props) => {

  const {
    navLinks = [], 
    setCurrentPage, 
    currentPage
  } = props



    const logout = event => {
      event.preventDefault();
      Auth.logout();
    }

  return (
        <div className="nav">
          <ul>
            <li><p>Cap City Trotters</p></li>
            <li className="secondDiv">
              {navLinks.map((page) => (
                <Button>
                <a 
                className={`${
                  currentPage.name === page.name && "navActive"
                }`}
                key={page.name}
                href={page.href}
                >
                <span
                onClick={() => {
                  setCurrentPage(page)
                }}
                >
                  {page.name}
                </span>
                </a>
                </Button>
              ))}
            </li>
            
            <li className="thirdDiv">
          {Auth.loggedIn() ? ( 
            <>
              <Button className="signup" color="inherit"><a href="/profile">Profile</a></Button>
              <Button className="signup" color="inherit"><a href="/home" onClick={logout}>Logout</a></Button>
            </>
          ) : (
            <>
              <Button className="signup" color="inherit"><a href="/signup">Signup</a></Button>
              <Button className="signup" color="inherit"><a href="/login">Login</a></Button>
            </>
          )}
          </li>
        </ul>
        </div>
  );
}

export default NavBar;