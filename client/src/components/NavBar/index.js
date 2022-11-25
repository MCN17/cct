import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import cctlogo from "../../assets/images/cctlogo.png";

// import NavBar css
import "./NavBar.css"

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="nav">
        <img className="logo" src={cctlogo} alt="outline of horse with parliament buildings in background"></img>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography className="title" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cap City Trotters
          </Typography>
          <Button color="inherit">Signup</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;