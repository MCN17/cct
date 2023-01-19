import React from "react";

// import pictures
import cctlogo1 from "../assets/images/cctLogoLarge.jpg";
import rustyBridge from "../assets/images/rustyBridge.jpg";
import champlainLookout1 from "../assets/images/champlainLookout1.jpg";
import Farm from "../assets/images/Farm.jpg";
import parliamentLocks from "../assets/images/parliamentLocks.jpg";
import pinkLake from "../assets/images/pinkLake.jpg";
import ruinsWave from "../assets/images/ruinsWave.jpg";
import ruinsWave1 from "../assets/images/ruinsWave1.jpg";
import rustyBridge1 from "../assets/images/rustyBridge1.jpg";

import { useQuery } from '@apollo/client';
import PostList from '../components/PostList';
import { QUERY_POSTS, QUERY_ME_BASIC } from '../utils/queries';
import Auth from '../utils/auth';
// import FriendList from '../components/FriendList';
// import PostForm from '../components/PostForm';

// import .env file
// require('dotenv').config()

//import material ui
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
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

      // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_POSTS);

  // use object destructuring to extract `data` from the `useQuery` Hook's response and rename it `userData` to be more descriptive
  const { data: userData } = useQuery(QUERY_ME_BASIC);

  const posts = data?.posts || [];
  console.log(posts);

  const loggedIn = Auth.loggedIn();
    

    return (
        <Container className="main" component="main" maxWidth="fixed">
          <Box sx={{ mt: 2 }}>
            <Grid className="topGrid-container" container  sx={{ justifyContent: "center" }}>
              <Grid item lg={2.2} xs={12}>
                <Card>
                  <CardMedia className="cctLogoLarge"
                          sx={{ height: 310 }}
                          image={cctlogo1}
                          title="cctLogo"
                      />
                </Card>
              </Grid>
              <Grid item className="introParagraph" lg={6} xs={12} sx={{ ml: 2}}>
              <p>Welcome to Cap City Trotters! The CCT was created in 2019 by KMAC, Lynch, Bruster, and Damarts. Our Routes include several loops in both Ottawa and Gatineau.
                We are always looking for new members so if you want to join you can take a look at our Circuits page and signup if you like what you see!</p>
              </Grid>
            </Grid>
            <Grid className="middleGrid-container" container sx={{ justifyContent: "center"}}>
              <Grid item xs={12} lg={6} sx={{ bgcolor: "white", margin: 5, borderRadius: "0.3rem" }}>
                <PostList posts={posts}/>
              </Grid>
              <Grid className="pictures" item lg={2} xs={12} sx={{ mt: 5, bgcolor: "white", padding: 1 }}>
                <Stack spacing={1}>
                  <Card>
                    <CardMedia className="rustyBridgePic"
                            sx={{ height: 310 }}
                            image={rustyBridge}
                            title="rusty bridge"
                        />
                  </Card>
                  <Card>
                    <CardMedia className="ChamplainLookout1"
                            sx={{ height: 310 }}
                            image={champlainLookout1}
                            title="Champlain Lookout"
                        />
                  </Card>
                  <Card>
                    <CardMedia className="farm"
                            sx={{ height: 310 }}
                            image={Farm}
                            title="Farm"
                        />
                  </Card>
                  <Card>
                    <CardMedia className="parliamentLocks"
                            sx={{ height: 310 }}
                            image={parliamentLocks}
                            title="Parliament Locks"
                        />
                  </Card>
                  <Card>
                    <CardMedia className="pinkLake"
                            sx={{ height: 310 }}
                            image={pinkLake}
                            title="Pink Lake Lookout"
                        />
                  </Card>
                  <Card>
                    <CardMedia className="ruinsWave"
                            sx={{ height: 310 }}
                            image={ruinsWave}
                            title="Ruins Wave"
                        />
                  </Card>
                  <Card>
                    <CardMedia className="RuinsWave1"
                            sx={{ height: 310 }}
                            image={ruinsWave1}
                            title="Ruins Wave1"
                        />
                  </Card>
                  <Card>
                    <CardMedia className="rustyBridge1"
                            sx={{ height: 310 }}
                            image={rustyBridge1}
                            title="Rusty Bridge1"
                        />
                  </Card>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Container>
    )
}


{/* <div className="container">
       
<CssBaseline />
  {/* <Box sx={{ marginTop: 10, padding: 7, bgcolor: "#eeeeee", borderRadius: "0.3rem" }}> */}
    // <div className="homeContainer">
    //   <div className="topGrid">
    //     <div className="imageContainer">
    //     <img className="cctLogoLarge" src={cctlogo1} alt="outline of horse with parliament buildings in background"></img>
    //     </div>
    //     <div className="introContainer">
            // <p>Welcome to Cap City Trotters! The CCT was created in 2019 by KMAC, Lynch, Bruster, and Damarts. Our Routes include several loops in both Ottawa and Gatineau.
            // We are always looking for new members so if you want to join you can take a look at some of our main routes and signup if you like what you see!</p>
            {/* <a href="https://www.strava.com/oauth/authorize?client_id=97775&redirect_uri=http://localhost:3000/home&response_type=code&scope=read_all,activity:read_all">Test Connect to Strava</a> */}
        {/* </div>
      </div>
    
    <div>
      <Container className="postList-grid" maxWidth="fixed"> */}
        {/* {loggedIn && (
          <div className="col-12 mb-3">
            <PostForm />
          </div>
        )} */}
      {/* <Container className="recentPosts" maxWidth="fixed">
        
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PostList posts={posts}/>
          )} */}
      {/* </Container>
          {loggedIn && userData ? (
      <div> */}
          {/* <FriendList
          username={userData.me.username}
          friendCount={userData.me.friendCount}
          friends={userData.me.friends}
          /> */}
      {/* </div>
        ) : null} */}
      {/* </Container> */}
    // </div>
  {/* </Box> */}
  {/* </div> */}
// </div> */}

export default Home;
