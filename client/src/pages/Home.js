import React from "react";
import cctlogo1 from "../assets/images/cctLogoLarge.jpg";

// import .env file
// require('dotenv').config()

//import material ui
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

// import css
import "./homeStyle.css";

//import MartyStats
// import MartyStats from "../components/MartyStats";

// *** FETCH STRAVA STATS START ***

// const clientID = process.env.REACT_APP_CLIENT_ID
// const clientSecret = process.env.REACT_APP_CLIENT_SECRET
// const refreshToken = process.env.REACT_APP_REFRESH_TOKEN

// const auth_link = "https://www.strava.com/oauth/token"

// const getActivites = (res) => {

//     const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`
//     fetch(activities_link)
//         .then((res) => console.log(res.json()))
// }



// function reAuthorize(){
//     fetch(auth_link,{
//         method: 'post',
//         headers: {
//             'Accept': 'application/json, text/plain, */*',
//             'Content-Type': 'application/json'

//         },

//         body: JSON.stringify({

//             client_id: clientID,
//             client_secret: clientSecret,
//             refresh_token: refreshToken,
//             grant_type: 'refresh_token'
//         })
//     }).then(res => res.json())
//         .then(res => getActivites(res)) 
// }

// reAuthorize()

// *** FETCH STRAVA STATS END ***


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
                    <a href="https://www.strava.com/oauth/authorize?client_id=97775&redirect_uri=http://localhost:3000/home&response_type=code&scope=read_all,activity:read_all">Test Connect to Strava</a>
                </Grid>
            </Grid>
        </Box>
       </Container>
    )
}

export default Home;
