import React from 'react';
import { Link } from 'react-router-dom';

//import material ui
// import Box from '@mui/material/Box';
import Grid from '@mui/material/Box';

const PostList = ({ posts, title }) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
      <Grid>
      <h3>{title}</h3>
      {posts &&
        posts.map(post => (
          <Grid maxWidth="md" key={post._id} sx={{ bgcolor: "#eeeeee", margin: 5, padding: 1}}>
            <p className="card-header">
              <Link
                to={`/profile/${post.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {post.username}
              </Link> {' '}
              post on {post.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/thought/${post._id}`}>
                <p>{post.postText}</p>
                <p className="mb-0">
                  Comments: {post.commentCount} || Click to{' '}
                  {post.commentCount ? 'see' : 'start'} the discussion!
                </p>
              </Link>
            </div>
          </Grid>
        ))}
        </Grid>
  );
};

export default PostList;