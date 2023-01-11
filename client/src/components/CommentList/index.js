import React from 'react';
import { Link } from 'react-router-dom';

// import material ui
// import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';

// import CommentList css
import "./CommentList.css"

const CommentList = ({ comments }) => {
  return (
<Grid>
<CssBaseline/>  
    {comments &&
      comments.map(comment => (
        <Card sx={{mb: 2}}>
          <CardContent>
            <p>
            <Link className="username" to={`/profile/${comment.username}`}>
              {comment.username} on {comment.createdAt}
            </Link>
          </p>
          <p key={comment._id}>
            {comment.commentBody} 
          </p>
        </CardContent>
      </Card>
      ))}
     </Grid>
  );
};

export default CommentList;