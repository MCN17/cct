import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../../utils/mutations';

// import material ui
// import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CssBaseline from '@mui/material/CssBaseline';

const CommentForm = ({ postId }) => {
  const [commentBody, setBody] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [addComment, { error }] = useMutation(ADD_COMMENT);

  // update state based on form input changes
  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setBody(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addComment({
        variables: { commentBody, postId },
      });

      // clear form value
      setBody('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Grid container className="collapsedSection-commentForm">   
        <Card sx={{width: "40rem"}}>
        <CardContent>
            <p className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}>
    
            {/* Character Count: {characterCount}/280
            {error && <span className="ml-2">Something went wrong...</span>} */}
            </p>
            <form
                onSubmit={handleFormSubmit}>
    
                <TextField
                    fullWidth
                    placeholder="Leave a comment..."
                    value={commentBody}
                    onChange={handleChange}
                />
                <Button 
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, bgcolor: "hsl(210,79%,46%)" }}
                >
                    Comment
                </Button>

            </form>
        </CardContent>
        </Card>
    </Grid>
  );
};

export default CommentForm;