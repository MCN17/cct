import React from 'react';
import lordsEye from "../assets/images/lordsEye.jpg";


// Import Post Form component
// import PostForm from '../components/PostForm';

//import material ui
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const Circuits = () => {
    return (
        <Container >
            <CssBaseline />
            <Grid sx={{margin: 1 }}>
                <Card sx={{ maxWidth: 700 }}>
                    <CardMedia
                        sx={{ height: 500 }}
                        image={lordsEye}
                        title="Lord's Eye"
                    />
                        <Typography sx={{pt: 1 }} gutterBottom variant="h5" component="div">
                        Lord's Eye
                        </Typography>
                        <Typography sx={{padding: 1 }}variant="body2" color="text.secondary">
                            This is the most popular CCT route. Depending on the weather and time of day you may come up the hill
                            to see the Lord's Eye shining his light upon you!
                        </Typography>
                </Card>
            </Grid>

        </Container>
    );
};

export default Circuits;