import React from 'react';
import { Link } from 'react-router-dom';

//import material ui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';

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
          <h2 className="postList-title">Recent Posts</h2>
          {posts &&
          posts.map((post, _id) => (
            <Card className="post-list" key={post._id} sx={{ bgcolor: "rgb(255,255,255)", margin: 3, padding: 0.5, borderRadius: "0.3rem"}}>
              <CardContent className="cardContentTop">
                <p className="card-header">
                  <Link className="username"
                    to={`/profile/${post.username}`}
                    
                  >
                    posted by{" "}
                    {post.username}{" "}
                    on {post.createdAt}
                    </Link>
                </p>
                <p className="comment-count">{post.commentCount} Comments</p>
              </CardContent>
              <CardContent className="cardContent">
                <p className="post-text">{post.postText}</p>
              </CardContent>
                  
              <CardContent className="cardContentBottom" sx={{ padding: 0 }}>
              
                <Link
                  to={`/post/${post._id}`}>
                  <p className="comment-link"><FaRegComment className="comment-icon" /> Comment</p>
                </Link>
                  
              </CardContent>
            </Card>
          ))}
    </Grid>
  );
};

export default PostList;