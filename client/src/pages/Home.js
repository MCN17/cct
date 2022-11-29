import React from "react";
import cctlogo1 from "../assets/images/cctLogoLarge.jpg";

//import material ui
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

// import css
import "./homeStyle.css";


const Home = () => {

    return (
       <Container maxWidth="xl">
        <CssBaseline />
        <Box sx={{ marginTop: 10, padding: 7, bgcolor: "#eeeeee", borderRadius: "1rem" }}>
            <Grid container spacing={3}>
                <Grid item xs={6} sx={{ }}>
                <img className="cctLogoLarge" src={cctlogo1} alt="outline of horse with parliament buildings in background"></img>
                </Grid>
                <Grid item xs={6}>
                    <p>Welcome to Cap City Trotters! The CCT was created in 2019 by KMAC, Lynch, Bruster, and Damarts. Our Routes include several loops in both Ottawa and Gatineau.
                    We are always looking for new members so if you want to join you can take a look at some of our main routes and signup if you like what you see!</p>
                </Grid>
            </Grid>
        </Box>
       </Container>
    )
}

export default Home;
