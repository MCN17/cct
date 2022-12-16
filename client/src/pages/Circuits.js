import React from 'react';

// Import Post Form component
import PostForm from '../components/PostForm';

//import material ui
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

const Circuits = () => {
    return (
        <Container >
            <CssBaseline />
            <PostForm />
        </Container>
    );
};

export default Circuits;