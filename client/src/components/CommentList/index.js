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
// import CssBaseline from '@mui/material/CssBaseline';

const CommentList = ({ comments }) => {
  return (

    <Card>
  <CardContent>
    {comments &&
      comments.map(comment => (
        <p className="pill mb-3" key={comment._id}>
          {comment.commentBody} {'// '}
          <Link to={`/profile/${reaction.username}`}>
            {comment.username} on {comment.createdAt}
          </Link>
        </p>
      ))}
  </CardContent>
</Card>

  );
};

export default CommentList;