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
          <p className="usernameSinglePost">{post.username}</p>
          <p className="dateSinglePost">{post.createdAt}</p>
          <p className="textSinglePost">{post.postText}</p>
        </Grid>
        <Grid className="bottomDivSignlePost" container>
        <Grid item sx={{ mb: 2 }}>
            {Auth.loggedIn() && <CommentForm postId={post._id} />}
        </Grid>
        <Grid item lg={6.7} sx={{}}>
            {post.commentCount > 0 && (
            <CommentList comments={post.comments} />
            )}
        </Grid>
        </Grid>
    </Container>
  );
};

export default SinglePost;