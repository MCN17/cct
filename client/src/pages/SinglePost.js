import React from 'react';
import { useParams } from 'react-router-dom';

// import components
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

//import material ui
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid'

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../utils/queries';

const SinglePost = (props) => {
  const { id: postId } = useParams();

  const { loading, data } = useQuery(QUERY_POST, {
    variables: { id: postId },
  });

  const post = data?.post || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
        <Grid>
            {post.postText} from {post.username}
            
            <p>post on {post.createdAt}</p>
        </Grid>
        <Grid sx={{ mb: 2 }}>
            {Auth.loggedIn() && <CommentForm postId={post._id} />}
        </Grid>
        <Grid sx={{}}>
            {post.commentCount > 0 && (
            <CommentList comments={post.comments} />
            )}
        </Grid>
    </Container>
  );
};

export default SinglePost;