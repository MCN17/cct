import React from 'react';
import { Link } from 'react-router-dom';

//import material ui
// import Box from '@mui/material/Box';
import Grid from '@mui/material/Box';

// import PostList css
import "./PostList.css"

const PostList = ({ posts, title }) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
      <Grid>
      <h3>{title}</h3>
      {posts &&
        posts.map(post => (
          <Grid item key={post._id} sx={{ bgcolor: "#eeeeee", margin: 4, padding: 1, borderRadius: "1rem"}}>
            <p className="card-header">
              <Link
                to={`/profile/${post.username}`}
              >
                {post.username}
              </Link> {' '}
              post on {post.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/thought/${post._id}`}>
                <p className="post-text">{post.postText}</p>
                <p className="comment-link mb-0">
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