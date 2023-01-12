import React from 'react';

// import strava pics
import lordsEye from "../assets/images/lordsEye.jpg";
import endoz from "../assets/images/endoz.jpg";
import kennysLoop from "../assets/images/kennysLoop.jpg";
import champlainLookout from "../assets/images/champlainLookout.jpg";



// Import Post Form component
// import PostForm from '../components/PostForm';

//import material ui
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const Circuits = () => {
    return (
        <Container maxWidth="xl">
            <CssBaseline />
            <Grid className="page-title">
                <h1>Circuits</h1>
            </Grid>
            <Grid container spacing={1} sx={{margin: 1 }}>
                <Grid item lg={6} xs={12} sx={{padding: 2 }}>
                <Card sx={{ maxWidth: 600 }}>
                    <CardMedia
                        sx={{ height: 400 }}
                        image={lordsEye}
                        title="Lord's Eye"
                    />
                    <CardContent sx={{ height: 200}}>
                        <Typography sx={{pt: 1 }} gutterBottom variant="h5" component="div">
                        Lord's Eye
                        </Typography>
                        <Typography sx={{padding: 1 }}variant="body2" color="text.secondary">
                            This is the most popular CCT route. Depending on the weather and time of day you may come up the hill
                            to see the Lord's Eye shining his light upon you!
                        </Typography>
                    </CardContent>
                </Card>
                </Grid>
                <Grid item lg={6} xs={12} sx={{padding: 2 }}>
                <Card sx={{ maxWidth: 600 }}>
                    <CardMedia
                        sx={{ height: 400 }}
                        image={endoz}
                        title="Endoz"
                    />
                    <CardContent sx={{ height: 200 }}>
                        <Typography sx={{pt: 1 }} gutterBottom variant="h5" component="div">
                        Endoz
                        </Typography>
                        <Typography sx={{padding: 1 }}variant="body2" color="text.secondary">
                            This is Loop was founded by Bruster and takes you through the Experimental Farm before you make your way 
                            to the Endoz drop! The very first time the CCT trotted through this loop Lynch miscalculated his speed going into
                            a turn and almost bailed. Luckily he lived to tell the tale!
                        </Typography>
                    </CardContent>
                </Card>
                </Grid>
                <Grid item lg={6} xs={12} sx={{padding: 2 }}>
                <Card sx={{ maxWidth: 600 }}>
                    <CardMedia
                        sx={{ height: 400 }}
                        image={kennysLoop}
                        title="Kenny's Loop"
                    />
                    <CardContent sx={{ height: 200 }}>
                        <Typography sx={{pt: 1 }} gutterBottom variant="h5" component="div">
                        Kenny's Loop
                        </Typography>
                        <Typography sx={{padding: 1 }}variant="body2" color="text.secondary">
                            This Loop was founded by Lynch after stopping at our friend Kenny's place for some quick refreshments! It takes you past Ruins Wave where
                            you make your way around to Gatineau Park before you drop back down to the water fountain.  
                        </Typography>
                    </CardContent>
                </Card>
                </Grid>
                <Grid item lg={6} xs={12} sx={{padding: 2 }}>
                <Card sx={{ maxWidth: 600 }}>
                    <CardMedia
                        sx={{ height: 400 }}
                        image={champlainLookout}
                        title="Champlain Lookout"
                    />
                    <CardContent sx={{ height: 200 }}>
                        <Typography sx={{pt: 1 }} gutterBottom variant="h5" component="div">
                        Champlain Lookout
                        </Typography>
                        <Typography sx={{padding: 1 }}variant="body2" color="text.secondary">
                            This is the most intense ride that the CCT members have done. This climb is required by anyone who wants to join the CCT. Make sure have you lots 
                            of water and snacks becuase once you get past Pink Lake Lookout you are already too deep into the climb and there is no turning back!
                        </Typography>
                    </CardContent>
                </Card>
                </Grid>
            </Grid>

        </Container>
    );
};

export default Circuits;