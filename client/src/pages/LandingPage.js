import React from 'react';

// import pictures
import cctlogo1 from "../assets/images/cctLogoLarge.jpg";
import rustyBridge from "../assets/images/rustyBridge.jpg";
import champlainLookout1 from "../assets/images/champlainLookout1.jpg";
import Farm from "../assets/images/Farm.jpg";
import parliamentLocks from "../assets/images/parliamentLocks.jpg";


//import material ui
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import ImageList from '@mui/material/ImageList';
import Button from '@mui/material/Button';

// import css
import "./homeStyle.css";


const LandingPage = () => {

    return (
        <Container className="landingPageMain" component="main" maxWidth="fixed">
            <CssBaseline/>
            <Box>
                <Grid container className="topGridLanding"  sx={{ justifyContent: "space-around" }}>
                    <Grid item className="cctLogoGridItem" lg={2.5} xs={12} sx={{ mt: 4 }}>
                        <Card>
                            <CardMedia className="cctLogo"
                                sx={{ height: 350 }}
                                image={cctlogo1}
                                title="cctLogo"
                            />
                        </Card>
                    </Grid>
                    <Grid item className="introParagraphLandingPage" lg={6} xs={12} sx={{ ml: 2}}>
                        <h2>Welcome to Cap City Trotters!</h2>
                        <p>The CCT was created in 2019 by KMAC, Lynch, Bruster, and Damarts. Our Routes include several loops in both Ottawa and Gatineau.
                        We are always looking for new members so if you want to join you can take a look at our Circuits page and signup if you like what you see!</p>
              </Grid>
                </Grid>
                <Grid container sx={{ justifyContent: "space-around" }}>
                    <Grid item className="textLeft" lg={6} xs={12}>
                        <h2>Choose from one of our many Cicruits!</h2>
                        <p>Many of our circuits have great lookouts along the way where you can stop and enjoy the beautiful views.</p>
                    </Grid>
                    <Grid item lg={4} xs={12} sx={{ }}>
                        <ImageList>
                        <Card>
                            <CardMedia
                             sx={{ height: 300 }}
                             image={champlainLookout1}
                             title="Champlain Lookout"
                            />
                        </Card>
                        <Card>
                            <CardMedia
                             sx={{ height: 300 }}
                             image={rustyBridge}
                             title="Champlain Lookout"
                            />
                        </Card>
                        <Card>
                            <CardMedia
                             sx={{ height: 300 }}
                             image={parliamentLocks}
                             title="Champlain Lookout"
                            />
                        </Card>
                        <Card>
                            <CardMedia
                             sx={{ height: 300 }}
                             image={Farm}
                             title="Champlain Lookout"
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