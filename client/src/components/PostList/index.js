import React from 'react';
import { Link } from 'react-router-dom';

//import material ui
// import Box from '@mui/material/Box';
import Grid from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';

//import Font Awesome icons
import { FaRegComment } from "react-icons/fa";

// import PostList css
import "./PostList.css"

const PostList = ({ posts, title }) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
      <Grid>
        <CssBaseline />
      <h3>{title}</h3>
      {posts &&
        posts.map(post => (
          <Card item key={post._id} sx={{ bgcolor: "#eeeeee", margin: 4, padding: 0.5, borderRadius: "0.3rem"}}>
            <CardContent className="cardContentTop">
            <p className="card-header">
              <Link className="username"
                to={`/profile/${post.username}`}
              >
                {post.username}
              </Link> {' '}
              posted on {post.createdAt}
            </p>
            <p className="comment-count">{post.commentCount} Comments</p>
            </CardContent>
            <CardContent className="cardContent">
                <p className="post-text">{post.postText}</p>
                </CardContent>
                <CardContent className="cardContentBottom" sx={{ padding: 0 }}>
                <Link to={`/thought/${post._id}`}>
                  <p className="comment-link"><FaRegComment className="comment-icon" /> Comment</p>
              </Link>
              </CardContent>
          </Card>
        ))}
        </Grid>
  );
};

export default PostList;