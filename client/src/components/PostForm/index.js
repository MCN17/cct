import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';

// import material ui
// import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
// import CssBaseline from '@mui/material/CssBaseline';

const PostForm = () => {
  const [postText, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {
      
        // could potentially not exist yet, so wrap in a try/catch
      try {
        // update me array's cache
        const { me } = cache.readQuery({ query: QUERY_ME });
        console.log(me);
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, posts: [...me.posts, addPost] } },
        });
      } catch (e) {
        console.warn("First post insertion by user!")
      }

      // update post array's cache
      const { posts } = cache.readQuery({ query: QUERY_POSTS });
      cache.writeQuery({
        query: QUERY_POSTS,
        data: { posts: [addPost, ...posts] },
      });
    }
  });

  // update state based on form input changes
  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addPost({
        variables: { postText },
      });

      // clear form value
      setText('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
            <Grid container sx={{ mb: 2 }}>
              <Card sx={{width: "50rem"}}>
                <CardContent>
                  <p
                    className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}
                  >
                    Character Count: {characterCount}/280
                    {error && <span className="ml-2"></span>}
                  </p>
                  <p>This site is experiencing difficulties. If you do not see the post you just created you can refresh this page or go to the home page to view it.</p>
                  <form
                      onSubmit={handleFormSubmit}
                    >
                    <TextField
                      fullWidth
                      placeholder="Here's a new post..."
                      value={postText}
                      onChange={handleChange}

                    />
                    <Button 
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2, bgcolor: "hsl(210,79%,46%)" }}
                      >
                        Post
                    </Button>

                  </form>
                </CardContent>
              </Card>
            </Grid>
           
  );
};

export default PostForm;