import React from 'react';

// import pictures
import cctLogoWhite from "../assets/images/cctLogoWhite.jpg";
import rustyBridge from "../assets/images/rustyBridge.jpg";
import champlainLookout1 from "../assets/images/champlainLookout1.jpg";
import Farm from "../assets/images/Farm.jpg";
import parliamentLocks from "../assets/images/parliamentLocks.jpg";
import ruinsWave from "../assets/images/ruinsWave.jpg";
import pinkLake from "../assets/images/pinkLake.jpg";

//import material ui
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import ImageList from '@mui/material/ImageList';
import Button from '@mui/material/Button';

import { FaAngleDown } from "react-icons/fa";

// import css
import "./homeStyle.css";


const LandingPage = () => {

    return (
        <Container className="landingPageMain" component="main" maxWidth="fixed">
            <CssBaseline/>
            <Box>
                <Grid container className="topGridLanding"  sx={{  }}>
                    <Grid item className="introParagraphLandingPage" lg={4} xs={12} sx={{ }}>
                        <p>Explore Ottawa and Gatineau while trotting with friends.</p>
                        <Button className="getStarted" color="inherit"><a href="/signup">Get Started</a></Button>
                </Grid>
                <Grid item lg={12}>
                    <a href="#down"><FaAngleDown className="angleDown" /></a>
                </Grid>
                </Grid>
                <Grid container id="down" className="middleContainerLandingPage">
                    <Grid item lg={3.5} xs={12} sx={{ mr: 5, mt: 10 }}>
                        <p className="textLeft">Enjoy the beautiful views our circuits have to offer.</p>
                        <Button className="viewCircuits" color="inherit"><a href="/circuits">View Circuits</a></Button>
                    </Grid>
                    <Grid item className="imageList" lg={4} xs={12} sx={{ ml: 5 }}>
                        <ImageList>
                            <Card>
                            <CardMedia
                             sx={{ height: 200 }}
                             image={rustyBridge}
                             title="Rusty Bridge by Parkway"
                            />
                        </Card>
                        <Card>
                            <CardMedia
                             sx={{ height: 200 }}
                             image={parliamentLocks}
                             title="Parliament Locks"
                            />
                        </Card>
                        <Card>
                            <CardMedia
                             sx={{ height: 200 }}
                             image={champlainLookout1}
                             title="Champlain Lookout"
                            />
                        </Card>
                        <Card>
                            <CardMedia
                             sx={{ height: 200 }}
                             image={Farm}
                             title="Experimental Farm"
                            />
                        </Card>
                        <Card>
                            <CardMedia
                             sx={{ height: 200 }}
                             image={ruinsWave}
                             title="Ruins Wave"
                            />
                        </Card>
                        <Card>
                            <CardMedia
                             sx={{ height: 200 }}
                             image={pinkLake}
                             title="Pink Lake Lookout"
                            />
                        </Card>
                        </ImageList>
                        </Grid>
                    </Grid>
            </Box>
        </Container>
    )
}

export default LandingPage;

                 
                 
