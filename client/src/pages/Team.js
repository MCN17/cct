import React from 'react';

// import strava pics
import Bruster from "../assets/images/Bruster.jpg";
import Lynch from "../assets/images/Lynch.jpg";
import KMAC from "../assets/images/KMAC.jpg";
import Damarts from "../assets/images/damarts.jpg";



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

const Team = () => {
    return (
        <Container maxWidth="xl">
            <CssBaseline />
            <Grid className="page-title">
                <h1>The Team</h1>
            </Grid>
            <Grid container spacing={1} sx={{margin: 1 }}>
                <Grid item lg={4} xs={12} sx={{padding: 2 }}>
                <Card sx={{ maxWidth: 400 }}>
                    <CardMedia
                        sx={{ height: 500 }}
                        image={Bruster}
                        title="Bruster"
                    />
                    <CardContent sx={{ height: 200}}>
                        <Typography sx={{pt: 1 }} gutterBottom variant="h5" component="div">
                        Bruster
                        </Typography>
                        <Typography sx={{padding: 1 }}variant="body2" color="text.secondary">
                            Leader of the CCT. A noble rider who guides the way.
                        </Typography>
                    </CardContent>
                </Card>
                </Grid>
                <Grid item lg={4} xs={12} sx={{padding: 2 }}>
                <Card sx={{ maxWidth: 400 }}>
                    <CardMedia
                        sx={{ height: 500 }}
                        image={KMAC}
                        title="KMAC"
                    />
                    <CardContent sx={{ height: 200 }}>
                        <Typography sx={{pt: 1 }} gutterBottom variant="h5" component="div">
                        KMAC
                        </Typography>
                        <Typography sx={{padding: 1 }}variant="body2" color="text.secondary">
                            Organizer of all CCT trots. Bike was recently stolen so is currently without a bike.
                        </Typography>
                    </CardContent>
                </Card>
                </Grid>
                <Grid item lg={4} xs={12} sx={{padding: 2 }}>
                <Card sx={{ maxWidth: 400 }}>
                    <CardMedia
                        sx={{ height: 500 }}
                        image={Lynch}
                        title="Lynch"
                    />
                    <CardContent sx={{ height: 200 }}>
                        <Typography sx={{pt: 1 }} gutterBottom variant="h5" component="div">
                        Lnych
                        </Typography>
                        <Typography sx={{padding: 1 }}variant="body2" color="text.secondary">
                            Refuses to wear a helmet and trots at night without a light. Enjoys going full speed into sharp turns.
                        </Typography>
                    </CardContent>
                </Card>
                </Grid>
                <Grid item lg={6} xs={12} sx={{padding: 2 }}>
                <Card sx={{ maxWidth: 400 }}>
                    <CardMedia
                        sx={{ height: 500 }}
                        image={Damarts}
                        title="Damarts"
                    />
                    <CardContent sx={{ height: 200 }}>
                        <Typography sx={{pt: 1 }} gutterBottom variant="h5" component="div">
                        Damarts
                        </Typography>
                        <Typography sx={{padding: 1 }}variant="body2" color="text.secondary">
                            Always needs two large water bottles for every trot. Prefers straight line trots over loops.
                        </Typography>
                    </CardContent>
                </Card>
                </Grid>
            </Grid>

        </Container>
    );
};

export default Team;